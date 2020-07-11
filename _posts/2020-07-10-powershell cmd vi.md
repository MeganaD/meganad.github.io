---
layout: post
title: Powershell, Cmd 에서 Vi 사용
tag: [Powershell, Windows Terminal]
published: True
---

기존 Win+R, cmd 방식을 버리고 윈도우즈 터미널을 쓰고 있다.  
여러가지 면에서 꽤 편리하다.  
WSL도 그렇고 점점 개발을 위해 맥을 사야할 이유가 줄어드는것 같다.  

Powershell이나 cmd 를 사용하다보면 가끔 vi 가 아쉬울때가 있다.  
[chocolatey](https://chocolatey.org/){:target="_blank"}를 사용하면 쉽게 vi를 설치할수 있다.  
*(chocolatey가 없거나 사용하지 않을 경우 [vim.org](https://www.vim.org/download.php#pcgit){:target="_blank"}에서 다운받아서 설치하면 된다.)*  
관리자 모드로 터미널을 실행한후에 `choco install vim-console` 로 설치할수 있다.  
*(`choco install vim` 은 GUI버전도 함께 설치된다.)*   

설치 후 터미널에서 `vim` 을 입력하면 끝~  
![](../img/2020-07-10-powershell%20cmd%20vi/2020-07-11-01-37-43.png)

그런데... `vi`로 실행하면... 안된다...  
m하나 더 누르는게 귀찮으니 vi 로 실행하려면 Powershell alias 를 등록하면 된다.  
```ps 
New-Alias vi vim 
```

하지만, 이렇게 하면 cmd에서는 `vi`로 실행할 수 없다.  
cmd와 Powershell 양쪽에서 쓰려면 bat파일을 만들어야 된다.   
둘중 한가지 사용하면 된다.*(관리자 권한이 필요하다.)*

*Powershell:*
```ps 
"vim %1" | New-Item C:\ProgramData\chocolatey\bin\vi.bat
```

*cmd:*
```dos
echo vim %1 > C:\ProgramData\chocolatey\bin\vi.bat
```

