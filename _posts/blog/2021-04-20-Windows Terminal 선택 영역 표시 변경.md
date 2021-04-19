---
layout: post
title: Windows Terminal 선택 영역 표시 변경
subtitle:Windows Terminal Profiles
tag: [Windows Terminal]
published: True
---

WSL에서 버전을 확실하게 알아보려고 테마를 다르게 해서 쓰고있다.  
18버전의 경우 ligth테마를 적용해서 잘 쓰고 있는데... ligth테마의 경우 선택된 텍스트를 알아보기가 힘들다...  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-11-50.png)  
바꿔보자.  

Windows Terminal에서는 프로파일 별로 테마를 설정할수 있다.  
Windows Terminal을 실행하고 [Ctrl+,]를 눌러 설정파일을 연다.  
변경을 원하는 프로파일에 `"selectionBackground": "#rrggbb",` 형식으로 원하는 색을 지정한다.  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-17-44.png)  
  
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-28-43.png)  

모든 프로파일에서 변경하고 싶다면 "defaults"에 추가하면 된다.
![](../../img/2021-04-20-Windows%20Terminal%20선택%20영역%20표시%20변경/2021-04-20-00-30-15.png)  