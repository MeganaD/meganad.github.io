---
layout: post
title: jekyll install on mac
subtitle: mac에 jekyll 설치 삽질 기록
tag: [jekyll, ruby]
published: true
---
아무 설치 없이 블로그를 운영하고자 하였으나...  
한번에 글을 쓰지 못할뿐더러, 코드나 이미지를 미리보기하고 싶을때 local에서 확인 할수없다보니 꼭 github에 푸시를 해야했다.  
큰 문제는 아니지만 초안을 볼수없고, 무의미한 커밋 숫자만 늘어난다.  
**가장 귀찮은점은 즉시 확인이 안된다는 점이다.**  

결국 [공식페이지](https://jekyllrb.com/)를 참고하여 local에 jekyll을 설치하기로 하였다.  

![](../img/2019-04-02-install_%20jekyll_on_mac/2019-04-02-12-23-26.png)  
~~우와 이렇게 간단한거야?...~~  

실행해보니 에러가 난다. ~~역시 한방에 되는게 없네...~~   
에러기록을 안남겼는데 nokogiri gem installation error 였던걸로 기억한다.  
구글링해서 이것저것 해봤는데... 다 안된다.  
결국 루비부터 다시 설치해보기로 했는데 이때 원인을 찾았다...   결론적으로 gem 설치시 권한이 없어서 생긴 문제이고 mac과 루비의 문제 였다.  
`which ruby`를 확인했을때 `usr/local/~~~~` 의 형태로 확인되지 않으면 gem설치시 권한에러가 발생한다. mac에서 차단하는거라 `sudo`로 해도 안된다.

맥에는 기본적으로 루비가 설치되어있어서 신경쓰지 않았는데  설치해보면 이런 메세지가 나온다.  

```bash
brew install ruby
```
![](../img/2019-04-02-install_%20jekyll_on_mac/2019-04-02-13-21-55.png)

문제가 생길수 있으니 아래와같이 설정해야한단다.
```bash
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
```
설정후 터미널을 다시 다시 열어 `which ruby`를 확인해보면  `/usr/local/opt/ruby/bin/ruby` 가 표시된다.  


```bash
gem install jekyll bundler
bundle exec jekyll serve
```
이후 jekyll bundler 를 설치하고 블로그를 확인해보니 잘 동작한다.


