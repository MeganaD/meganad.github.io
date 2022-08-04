---
layout: post
title: Powershell, Cmd 에서 Vi 사용
description: Vim install for Powershell and Cmd with Tips
tag: [Powershell, Windows Terminal]
published: True
last_modified_at: 2021-05-26
---

요즘 윈도우즈 터미널을 써보고 있는데, 여러가지 면에서 꽤 편리하다.  
WSL도 그렇고 점점 개발을 위해 맥을 사야할 이유가 줄어드는것 같다.  

그런데, Powershell이나 cmd 를 사용하다보면 가끔 vi 가 아쉬울때가 있다.  
[chocolatey](https://chocolatey.org/){:target="_blank"}를 사용하면 쉽게 vi를 설치할수 있다.

*chocolatey가 없거나 사용하지 않을 경우 [vim을 다운받아서 설치하는 경우](#download-vim)를 참고*  

chocolatey를 사용하여 설치하는 경우
----

관리자 모드로 터미널을 실행한후에 `choco install vim-console` 로 설치할수 있다.  
*(`choco install vim` 은 GUI버전도 함께 설치된다.)*   


설치 후 터미널에서 "vim"을 입력하면 끝~  
![](../img/2020-07-10-powershell%20cmd%20vi/2020-07-11-01-37-43.png)

그런데... "vi"로 실행하면... 안된다...  
m하나 더 누르는게 귀찮으니 vi 로 실행하려면 Powershell alias 를 등록하면 된다.  
```powershell
New-Alias vi vim 
```

다만, alias를 사용하면 cmd에서는 "vi"로 실행할 수 없다.  
cmd와 Powershell 양쪽에서 쓰려면 bat파일을 만들면 된다.   

*Powershell:*  
`"vim %1" | New-Item C:\ProgramData\chocolatey\bin\vi.bat`

*cmd:*  
`echo vim %1 > C:\ProgramData\chocolatey\bin\vi.bat`

*둘중 한가지만 사용하면 된다.(관리자 권한이 필요하다.)*  
  

vim을 다운받아서 설치하는 경우<a id="download-vim"></a>
----

[vim.org](https://www.vim.org/download.php#pc){:target="_blank"}에서 [gvim90.exe](https://ftp.nluug.nl/pub/vim/pc/gvim90.exe){:target="_blank"}를 다운받아서 실행한다.

![](../../img/2020-07-10-powershell%20cmd%20vi/2021-03-21-23-27-00.png)

<!-- ![](../img/2020-07-10-powershell%20cmd%20vi/2021-03-21-23-27-43.png) -->

아래 빨간색 부분을 체크하면 console에서 vim을 사용할 수 있다.  
![](../img/2020-07-10-powershell%20cmd%20vi/2021-03-21-23-30-27.png)

이렇게 설치하면 C:\WINDOWS 에 vim.bat 파일을 생성해 준다.  
m하나 더 누르는게 귀찮으니, vi.bat로 복사본을 만들자.

*Powershell, cmd: (관리자 권한 필요)*  
`copy C:\WINDOWS\vim.bat  C:\WINDOWS\vi.bat`  

다운받아 설치 할 경우 아래처럼 한글로 출력된다.  
![](../img/2020-07-10-powershell%20cmd%20vi/2021-03-22-00-07-16.png){: width="600px"}

영어로 변경하고 싶다면 C:\Program Files (x86)\Vim\vim90\lang 폴더를 삭제하자.😑  

삭제하지 않고 변경하려면 관리자 권한으로
`vi "C:\Program Files (x86)\Vim\_vimrc"`를 실행하고 첫 줄에 `language messages en`를 추가하자.  
*vi 실행후 :`e $VIM/_vimrc`로 열어도 된다.*
