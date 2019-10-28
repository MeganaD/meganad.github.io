---
layout: post
title: Spring Boot 2.2.0 with JUnit4
tag: [Java,Spring Boot]
published: true
---


[스프링부트 퀵스타트](https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=195446636){:target="_blank"}를 보고 실습해 보고 있는데 스프링부트 2.2로 새 프로젝트를 만들면 테스트 소스에서 오류가 발생한다.  
![junit error](../img/2019-10-26-Spring%20Boot%202.2.0%20with%20JUnit4/2019-10-29-08-18-17.png)  
~~import가 안된건가? 스프링부트는 관련 의존성을 가져와서 신경 안쓰게 해주는거 아니었나? 라는 생각이 잠깐...~~  
최근 [스프링부트 2.2](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.2-Release-Notes){:target="_blank"}가 릴리즈 되면서 JUnit5를 기본으로 지원한단다.   



>Unlike previous versions of JUnit, JUnit 5 is composed of several different modules from three different sub-projects.
>
>**JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage**  
> .....  
>**JUnit Vintage** provides a TestEngine for running JUnit 3 and JUnit 4 based tests on the platform.

[JUnit5](https://junit.org/junit5/docs/current/user-guide/#overview-what-is-junit-5){:target="_blank"}에서 찾아보면 vintage가 하위 호환용 엔진인데 2.2에선 기본으로 제외 시켜 버렸다...

pom.xml을 보면 제외된 vintage 라는게 보인다.  
![pom.xml](../img/2019-10-26-Spring%20Boot%202.2.0%20with%20JUnit4/2019-10-29-08-23-53.png)  
위에 표시한 `<exclusions>`항목을 삭제하거나 주석처리하면 잘 된다.  
  
  