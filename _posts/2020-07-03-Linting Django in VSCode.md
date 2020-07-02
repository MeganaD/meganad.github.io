---
layout: post
title: Linting Django in VSCode
subtitle: VSCode에서 장고 린트 설정
tag: [VSCode,Python,Django]
published: True
---

장고 웹프로그래밍 리뷰를 하면서 실습은 VSCode로 진행했다.  
책에서는 파이참을 추천하고 있지만, 요즘은 가급적이면 VSCode를 쓰려고 한다.  
(스프링,그레이들,코틀린 조합이라면 그냥 IntelliJ...)  
VSCode에 Python Extention 만 으로도 별 문제없이 실습을 진행할 수 있었다.  

VSCode로 실습하다보니 거슬리는 점이 있었다.  
![red line](../img/2020-07-03-Linting%20Django%20in%20VSCode/2020-07-03-00-58-10.png)  
파이썬 린트를 설정했더니 저런 빨간줄이 나타난다.... ~~심리적 압박~~  
  
problems창을 보면 pylint가 장고 기본 객체의 상속을 처리하지 못하고 있는 것을 알 수 있다.  
프로젝트 셋팅에 다음 내용을 추가하면 잘 빨간줄이 사라진다.  
  
```json
"python.linting.pylintArgs": ["--load-plugins pylint_django"]
```
*(Pylint 기준, VSCode default python linter)*
  
![no problems](../img/2020-07-03-Linting%20Django%20in%20VSCode/2020-07-03-01-17-57.png)
  

  