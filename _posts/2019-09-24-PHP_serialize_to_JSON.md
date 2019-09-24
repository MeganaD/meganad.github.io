---
layout: post
title: PHP serialize to JSON on Mysql (with Regex)
subtitle: 정규식으로 PHP serialized 문자열을 JSON 형태로 변환
tag: [MYSQL,MARIADB,REGEX,PHP]
published: true
---


WordPress로 개발된 사이트의 데이터를 가져와야 하는데  
```a:13:{s:12:"cfdb7_status";s:4:"read";s:10:"first ~~~```  
형태로 저장이 되어있었다.  
처음엔 JSON인줄 알았으나 잘 보니 다른 형태 였다.  
확인해보니 PHP에서 serialize()로 만들어낸 데이터였다.  
이걸 파싱해서 써야하는데 PHP serialized array 는 ;로 구분된 문자열들이라 JSON으로 만드려면 프로그램에서 루프를 돌아야 할판이었다.  
목적이 WP에서 등록된 데이터를 MSSSQL로 인터페이스 하는 것이었기때문에 DB 레벨에서 해결하고자 했다.  
다행히 mysql은 정규식을 지원하여 이를 활용하여 바꿀수 있었다.  

```sql
SELECT 
REGEXP_REPLACE(
	REGEXP_REPLACE(
		REGEXP_REPLACE(form_value, '\\D:\\d{1,}:','')
	,'(;)([^;]*)(;)', ':\\2,' )
,',}$','}')
FROM db.wp_db7_forms 
```
<br/>