---
layout: post
title: Powershell에서 tab 자동완성 
tag: [Powershell, Windows Terminal]
published: True
last_modified_at: 2021-12-16
---

간단한 파이썬 실습을 위해 윈도우즈 터미널을 쓰고 있다.  
기본 환경이 파워쉘이라 그냥 쓰고 있었는데...tab 키가 영 불편하다.

tab을 누르면 조건에 맞는 첫번째 항목으로 채워준다.  
다시 tab을 누르면 다음 항목으로 변경된다.  
어떤 항목이 얼마나 있는지 알수가 없는데 나올때까지 계속 tab을 누르라는건가?  

bash처럼 항목을 일단 다 보여주던가,
아니면 zsh 처럼 메뉴로 해주면 편할텐데...  

**그런데! 몰랐을 뿐이지... 파워쉘에 해당 기능이 있었다.**  
[PSReadLine](https://docs.microsoft.com/en-us/powershell/module/psreadline/?view=powershell-7){:target="_blank"}이라는 이란 이름으로 구현되어있었다.  
tab 이 아닌 &lt;Ctrl+Space&gt;를 누르면 메뉴 형태로 나타난다!  
전체목록 확인은 [여기](https://docs.microsoft.com/en-us/powershell/module/psreadline/about/about_psreadline?view=powershell-7){:target="_blank"}를 참고하자.  
위의 목록을 확인해보면 Zsh의 ⇧,⇩ 키 기능도 &lt;F8&gt; 에 배정되어 있음을 알수 있다.

파워쉘 PROFILE에서 [키 바인딩 변경](https://docs.microsoft.com/en-us/powershell/module/psreadline/set-psreadlinekeyhandler?view=powershell-7){:target="_blank"}을 통해 Tab,⇧,⇩ 키가 Zsh처럼 동작하게 수정할 수 있다.  

아래 코드를 파워쉘에서 실행하면 된다.

```powershell
(Invoke-WebRequest
 https://gist.githubusercontent.com/MeganaD/fe3894b39697da767b8b19b3e0bc047b/raw).Content | Add-Content $PROFILE
. $PROFILE

```

*위 코드는 다음 네줄을 파워쉘 PROFILE에 추가한다.*
```powershell
Set-PSReadlineKeyHandler -Key Tab -Function MenuComplete
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadLineOption -HistorySearchCursorMovesToEnd
```

*히스토리 탐색시 커서가 젤 뒤로 가지 않아 해당 내용 추가했다.(위 코드 네번째 줄)*



