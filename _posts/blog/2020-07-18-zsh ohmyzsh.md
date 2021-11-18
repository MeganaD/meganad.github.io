---
layout: post
title: ZSH, Oh My ZSH with WSL2 Ubuntu
subtitle: Apply Powerlevel10k on Windows Terminal
tag: [ZSH, Windows Terminal, WSL]
published: true
last_modified_at: 2021-11-18
---

Windows Terminal을 쓰게되면서 CMD 대신 파워쉘이 기본이 되버렸다.  
사실, 설정에서 바꾸면되는데 쓰다보니 파워쉘이 편한 부분도 있어서 그냥 쓰고있다.  
CMD 대비 가장 눈에 띄는 점은 리눅스 스타일의 명령어와 프롬프트 였다.  
특히, 파워라인을 설치한뒤에 더욱 쓸만하다고 느끼고 있다.  

>지금은 파워쉘과 리눅스 콘솔 모두 Powerlevel10k을 적용해서 쓰고 있다.  
파워쉘에 Powerlevel10k 적용하는 법은 [Powerlevel10k with Git prompt theme for Powershell](../2021-11-02-oh-my-posh-with-posh-git){:target="_blank"}을 참고.


우선 ZSH을 설치한다.
```shell
sudo apt install zsh
```
설치가 완료되면 `zsh`을 입력해서 zsh을 실행한다. 
![](../../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-00-38-37.png)  
처음 실행시 위와 같이 설정파일을 작성하라고 하는데 [Oh My Zsh](https://ohmyz.sh/){:target="_blank"}이 덮어 써버리니 그냥 종료(q or ENTER)하자.  

[Oh My Zsh](https://ohmyz.sh/){:target="_blank"}을 설치한다.  
```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

![](../../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-00-47-57.png)  
설치하면 기본쉘을 변경하겠냐고 확인한다.  
선택을 하고 나면 Oh My Zsh이 설치되었다는 화면이 나타난다.
![](.././img/2020-07-18-zsh%20ohmyzsh/2020-07-19-00-50-25.png)  

----
[Powerlevel10k](https://github.com/romkatv/powerlevel10k){:target="_blank"}를 설치해보자.  
공식페이지의 [Manual](https://github.com/romkatv/powerlevel10k)방식으로 설치하는걸 추천한다.  
```sh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

터미널을 닫고 다시 접속해보자.
처음 powerlevel10k가 실행되면 설정화면이 나온다.  
![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-11-47-57.png)

![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-11-48-26.png)

![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-11-48-45.png)

![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-11-56-04.png)

이때 글자나 아이콘이 잘 표시가 안된다면 Nerd Font가 없거나 설정이 안된 것이다.  
powerlevel10k에서 추천하는 [Meslo Nerd](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k){:target="_blank"}를 받아 사용하거나, [Nerd Fonts](https://www.nerdfonts.com/font-downloads){:target="_blank"}에서 원하는 폰트를 내려받아 설치하자.  
Windows Terminal이라면 [Ctrl+,]를 눌러 프로필에 설치된 폰트를 설정할 수 있다.  
![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-13-05-28.png)  

_모든 프로필에서 폰트를 적용하려면 Json파일을 열어 직접 수정하면 된다._  
![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-13-24-27.png)

모든 글자가 잘 표시되면 프롬프트 스타일을 선택한다.  
![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-13-25-44.png)  

원하는 스타일을 선택하면 상세 설정을 통해 선호하는 형태로 맞춰 준다.👍

![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-13-28-28.png)  
마지막으로 설정을 저장하면 끝~  

![](../../img/2020-07-18-zsh%20ohmyzsh/2021-11-18-13-31-08.png)

<br>

------

<br>

![](../../img/2020-07-18-zsh%20ohmyzsh/2020-07-18-14-53-31.png)  
*([파워라인 설치가이드](https://docs.microsoft.com/en-us/windows/terminal/tutorials/powerline-setup){:target="_blank"})*

파워라인을 설치하고나니 Windows Terminal 의 주 사용 목적인 WSL Ubuntu의 bash가 허전해 보인다.  
![](../../img/2020-07-18-zsh%20ohmyzsh/2020-07-18-14-55-48.png)  

위에 소개한 파워라인 설치가이드 하단에 ubuntu bash용 설치가이드가 있다.  
바로 설치!... 그런데, 파워쉘과 달리 테마를 변경할수가 없다. 뭔가 좀 아쉽다...  
![](../../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-00-22-59.png)


그래서!! ZSH로 갈아 타보기로 했다.  
~~(아직 linux도 bash도 미숙하지만...그래서 더더욱 ZSH로 ㅎㅎ)~~  

기본 프롬프트가 멋있지만... 지금 원하는건 파워라인이다.  
ohmyzsh의 테마를 확인해보자.  
[https://github.com/ohmyzsh/ohmyzsh/wiki/Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes){:target="_blank"}  

`vi ~/.zshrc` 를 실행하고 ZSH_THEME="robbyrussell"라인을 `ZSH_THEME="agnoster"`로 변경한다.  
(vi 대신 `code ~/.zshrc`를 사용해보자! 정말 편하다...~~이것때문에 WSL 쓴다..ㅋ~~)


터미널을 닫고 다시 접속해보자.
![](../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-01-11-37.png)  


사실 여기까지 해도 충분한데 뭔가 조금 아쉬운 부분이 있어서 바꿔보기로 하자.  

우선 파워쉘의 테마에서는 줄끝에 시간이 표시되고 다음줄에 커서가 나타난다.  
agnoster 테마를 변경해 보자.  
```shell
curl https://gist.githubusercontent.com/MeganaD/9b503b99ea2cb4f87ef841fed530eb1f/raw > ~/.oh-my-zsh/themes/agnoster.zsh-theme
```
기본 agnoster.zsh-theme파일에서 prompt_end()에 줄바꿈과 ❯ 를 추가하고 RPROMPT를 사용하여 시간을 표시했다.  
![](../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-01-30-00.png)  

또한가지, 초록색 배경의 폴더는 너무 안보인다...  
![](../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-01-33-46.png)  
이를 위해 [dircolors-solarized](https://github.com/seebi/dircolors-solarized){:target="_blank"}를 사용해보자.  
```shell
curl https://raw.githubusercontent.com/seebi/dircolors-solarized/master/dircolors.ansi-dark >> ~/.dircolors

echo "\neval \`dircolors ~/.dircolors\`\n"  >> ~/.zshrc
```
이렇게 나타난다.  
![](../img/2020-07-18-zsh%20ohmyzsh/2020-07-19-01-49-54.png)  




