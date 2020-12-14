---
layout: post
title: Laravel on Windows
tag: [Laravel, PHP, WSL]
published: true
---


php를 제대로 배워보거나 써본적이 없는데 기회가 되서 라라벨 책을 보게 되었다.  
그런데... 책에는 처음 접해보는사람이 개발환경을 구성하는 부분에 설명이 거의 없었다...  
그리고 , 책이 불친절한건지, 원래 라라벨이 그런건지 윈도우에서는 실행하는것이 썩 내키지 않게 설명되어있었다.  
[발렛](https://laravel.com/docs/8.x/valet){:target="_blank"} 이나 [홈스테드](https://laravel.com/docs/8.x/homestead){:target="_blank"}를 쓰라고 되어있는데, 발렛은 기본적으로 맥전용이고, 홈스테드는  설명만 봐도 별로 하고 싶지 않았다.  
Vagrant를 기반으로 된것같은데 제약조건도 있고 설명도 부실...  
Vagrant와 가상머신을 사용한다면 도커도 되지 않을까 해서 알아보니... 이미 공식적으로 도커기반으로 변경된것 같다.  
<br/>
윈도우에서 WSL2와 Docker Desktop을 쓰고 있다면 매우 편하게 개발환경을 구성할 수 있다.  

<details>
  <summary>
    참고. Docker Desktop에서 WSL2 백엔드를 사용해야한다.
  </summary>
  <p>
    <img src="../img/2020-12-14-laravel%20on%20windows/2020-12-14-14-26-27.png">
  </p>  
</details>

Windows Teminal에서 WSL에 접속하고 ```curl -s https://laravel.build/example-app | bash ```를 실행하면 샘플프로젝트가 생성된다.  

이제 vscode만 있다면 개발 준비 완료... ```code .```으로 확인할수 있다.  
*참고. [vscode 와 Remote Development 확장팩이 필요하다.](https://code.visualstudio.com/docs/remote/wsl){:target="_blank"}* 


실제 실행하는것을 보려면 ```./vendor/bin/sail up``` 을 실행하면 된다.  
최초 실행할때 위에서 준비한 이미지에 설치,업데이트가 되는데 이게 꽤 오래 걸린다.  
![](../img/2020-12-14-laravel%20on%20windows/2020-12-14-14-09-01.png)  
한참기다리면 "Starting Laravel development server: http://0.0.0.0:80" 이란 메세지가 나온다.  
이제 [localhost](http://localhost/){:target="_blank"} 로 확인해보자.  
![](../img/2020-12-14-laravel%20on%20windows/2020-12-14-14-07-47.png)  

<br/>
laravel.build/example-app 스크립트를 보면  

```sh
docker run --rm \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    laravel new example-app
```

laravelsail/php80-composer 이미지를 받아서 연결까지 해준것 같다.  

![](../img/2020-12-14-laravel%20on%20windows/2020-12-14-14-19-01.png)  
~~세상편하구만...~~  