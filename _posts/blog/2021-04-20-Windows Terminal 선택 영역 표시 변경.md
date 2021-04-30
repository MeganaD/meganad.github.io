---
layout: post
title: Windows Terminal 선택 영역 표시 변경
subtitle: Windows Terminal Profiles
tag: [Windows Terminal]
last_modified_at: 2021-05-01
published: True
---

WSL에서 버전을 확실하게 알아보려고 테마를 다르게 해서 쓰고있다.  
18버전의 경우 light테마를 적용해서 잘 쓰고 있는데... light테마의 경우 선택된 텍스트를 알아보기가 힘들다...  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-11-50.png)  
바꿔보자.  

Windows Terminal에서는 프로파일 별로 테마를 설정할수 있다.  
Windows Terminal을 실행하고 [Ctrl+,]를 눌러 설정파일을 연다.  
변경을 원하는 프로파일에 `"selectionBackground": "#rrggbb",` 형식으로 원하는 색을 지정한다.  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-17-44.png)  
  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-28-43.png)  

모든 프로파일에서 변경하고 싶다면 "defaults"에 추가하면 된다.
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-30-15.png)  


----
Windows Terminal이 업데이트 되어서 [Ctrl+,]를 누르면 설정 창이 나타난다.  
이를 통해 선택 영역 배경색 변경이 가능해 졌다.   
"색 구성표"를 누르고 해당 테마의 색을 변경할수 있다.  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-05-01-01-31-53.png)
다만, 테마를 수정하면 셋팅파일에 모든 테마를 저장한다.  

테마를 수정하지 않고 색을 적용하려면 json을 수정해야 한다.  
아래쪽 "json 파일 열기"를 누르면 예전처럼 설정파일이 열린다.
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-05-01-01-22-37.png)