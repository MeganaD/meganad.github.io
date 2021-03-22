---
layout: post
title: Spring Boot JUnit test error
subtitle: no tests found with test runner 'JUnit 5' on Eclipse
tag: [Eclipse,Java,Spring Boot]
published: False
---

스프링부트로 기본 웹 프로젝트를 하나 생성하고 테스트를 실행하니  
`No tests found with test runner 'JUnit 5'`라는 에러를 내고 실행되지 않았다.  

![error msg](../img/2019-10-25-junit%20error%20on%20eclipse/2019-10-25-15-57-18.png)

VSCode에선 잘 되는데 이상하게 이클립스에서만 안된다.   
구글링을 해보면  build path에 폴더가 빠졌다거나 그런류의 답이 많이 있다.  

내 경우에는 이클립스의 버전 문제라고 생각된다.   
![version](../img/2019-10-25-junit%20error%20on%20eclipse/2019-10-25-16-13-02.png)  
주로 쓰던 버전이 oxygen이었는데 STS를 새로 받아서 돌려보니 문제가 없다.  
이클립스 설정등을 변경하면 고칠수 있을것 같지만 스프링부트는 STS를  쓰는게 더 나을것 같다. -_-;  

*참고...  
![STS](../img/2019-10-25-junit%20error%20on%20eclipse/2019-10-25-16-16-53.png)  
![ver](../img/2019-10-25-junit%20error%20on%20eclipse/2019-10-25-16-28-08.png)  
설치한 STS 정보를 보면 이클립스 버전이 현재기준 최신인 4.13(2019‑09)으로 나온다*


