---
layout: post
title: MSSQL 에서 pivot 과 rollup 사용
tag: [MSSQL, SQL]
published: true
---


아래 장황한 쿼리는 최근 탈퇴한 회원들을 가입기간별로 집계하여 보기위한 쿼리이다.  
월별로 볼수있도록 pivot을 사용했다.

회원정보의 가입일이 아니라 회원의 이력테이블에서 해당 정보를 가지고 와야해서 서브쿼리로 작성했다.  
pivot만으로 집계를 실행할수 있으나 집계를 위한 기준을 서브쿼리를 case로 처리하려다보니 pivot 결과에 group by 를 적용했다. 기왕 group by를 썻으니 rollup으로 합계까지 구해보았다.  

처음에는 tbl 에서 case를 사용하여 레이블링을 하였는데, 정렬문제가 있고, 합계열에서 null 이나와서
with 절을 중첩사용했다.  
with 절을 중첩하기 위해서는 [,]를 사용하여 여러번 cte를 지정할수 있다.





```sql
WITH tbl AS (
    SELECT right(left(mdhDate,7),2) AS m
        , isnull(DATEDIFF(month,(SELECT max(mshTimeStamp) 
                                    FROM memberSubjectHistory s 
                                    WHERE s.mshMemberKey = b.mID AND s.mshSubjectNameCode = a.mdhSubjectNameCode 
                                        AND s.mshTimeStamp < a.mdhTimeStamp
                                        AND s.mshType in ('REGISTER') )
                                , a.mdhDate),0) AS Period
    FROM memberDropHistory a
    JOIN members b on a.mdhMemberKey = b.mID
    JOIN centers d ON a.mdhCenterKey = d.cID
    WHERE mdhDate LIKE '2019%'
        AND mdhMemberDropReasonKey > 0
        AND d.cIsActive = 1
        AND d.cParentCenterID != 0
        AND d.cIsTraining = 0 )
, tbl2 AS ( 
    SELECT CASE WHEN Period <= 6 THEN 1
                WHEN Period BETWEEN 7 AND 12 THEN 2
                WHEN Period BETWEEN 13 AND 24 THEN 3
                ELSE 4 END AS Period
        , sum([01]+[02]+[03]+[04]+[05]+[06]+[07]+[08]+[09]+[10]+[11]+[12]) AS tot
        , sum([01]) m01,sum([02]) m02,sum([03]) m03,sum([04]) m04,sum([05]) m05,sum([06]) m06
        , sum([07]) m07,sum([08]) m08,sum([09]) m09,sum([10]) m10,sum([11]) m11,sum([12]) m12
    FROM tbl
    PIVOT( count(m) FOR m IN ([01],[02],[03],[04],[05],[06],[07],[08],[09],[10],[11],[12]) ) AS pvt
    GROUP BY ROLLUP(CASE WHEN Period <= 6 THEN 1
                WHEN Period BETWEEN 7 AND 12 THEN 2
                WHEN Period BETWEEN 13 AND 24 THEN 3
                ELSE 4 END )
)
SELECT CASE isnull(Period,9) WHEN 9 THEN 'total' WHEN 1 THEN '< 6 months' WHEN 2 THEN '7 ~ 12 months' WHEN 3 THEN '13 ~ 24 months' ELSE '> 25 months' END AS PeriodTitle
    ,tot,m01,m02,m03,m04,m05,m06,m07,m08,m09,m10,m11,m12
FROM tbl2
ORDER BY isnull(Period,9)
```
*참고*  
*[MSSQL PIVOT 문서](https://docs.microsoft.com/ko-kr/sql/t-sql/queries/from-using-pivot-and-unpivot)*  
*[MSSQL ROLLUP 문서](https://docs.microsoft.com/ko-kr/sql/t-sql/queries/select-group-by-transact-sql?view=sql-server-2017#group-by-rollup)*  
*[MSSQL WITH CTE 문서](https://docs.microsoft.com/ko-kr/sql/t-sql/queries/with-common-table-expression-transact-sql?view=sql-server-2017#c-using-multiple-cte-definitions-in-a-single-query)*



