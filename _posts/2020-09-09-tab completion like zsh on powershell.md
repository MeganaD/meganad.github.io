---
layout: post
title: Ppowershell에서 tab 자동완성 
tag: [Powershell, Windows Terminal]
published: True
---

간단한 파이썬 실습을 위해 윈도우즈 터미널을 쓰고 있다.  
기본 환경이 파워쉘이다보니(바꿀수있다) 그냥 파워쉘을 쓰고있는데... 

tab을 누르면 조건에 맞는 첫번째 항목으로 채워준다.  
다시 tab을 누르면 다음 항목으로 변경된다.  
이게 아주 불편하다.  
어떤 항목이 얼마나 있는지 알수가 없는데 나올때까지 계속 tab을 누르라는건가?  
bash처럼 항목을 일단 다 보여주던가,  
아니면 zsh 처럼 메뉴로 해주면 편할텐데...  

그런데! 몰랐을 뿐이지... 파워쉘에 해당 기능이 다 있었다.  
[PSReadLine](https://docs.microsoft.com/en-us/powershell/module/psreadline/?view=powershell-7){:target="_blank"}이라는 이란 이름으로 구현되어있었다.
tab 이 아닌 <Ctrl+Space>를 누르면 메뉴 형태로 나타난다!
전체목록 확인은 [여기](https://docs.microsoft.com/en-us/powershell/module/psreadline/get-psreadlinekeyhandler?view=powershell-7#example-1--get-all-key-mappings){:target="_blank"}를 참고하자.  
위의 목록을 확인해보면 Zsh의 ⇧,⇩ 키 기능도 <F8>에 배정되어 있음을 알수 있다.

파워쉘 PROFILE에서 [키 바인딩 변경](https://docs.microsoft.com/en-us/powershell/module/psreadline/set-psreadlinekeyhandler?view=powershell-7){:target="_blank"}을 통해 Tab,⇧,⇩ 키가 Zsh처럼 동작하게 수정할 수 있다.  

아래 코드를 파워쉘에서 실행하고 파워쉘을 다시 시작하면 된다.

```powershell
(curl https://gist.githubusercontent.com/MeganaD/fe3894b39697da767b8b19b3e0bc047b/raw).Content | Add-Content $PROFILE
```
*위 코드는 다음 세줄을 파워쉘 PROFILE에 추가한다.*
<script src="https://gist.github.com/MeganaD/fe3894b39697da767b8b19b3e0bc047b.js"></script>


