---
layout: post
title: PowerShell에서 telnet 설치
tag: [Powershell, Windows Terminal]
published: True
---

Windows Terminal에서 telnet을 사용하려면, 관리자 권한으로 Powershell을 실행하고 다음처럼 입력한다.  

```powershell
dism /online /Enable-Feature /FeatureName:TelnetClient
```

![](../../img/2021-08-12-PowerShell에서%20telnet%20설치/2021-08-12-15-09-27.png)