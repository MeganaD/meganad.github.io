---
layout: post
title: Windows Terminal에서 탐색기로 폴더 열기
tag: [Windows Terminal, WSL]
published: True
---

Windows Terminal에서 현재 폴더를 탐색기로 열려면 `explorer.exe .`를 실행하면 된다.  
중요한 점은 **WSL에서도 동작한다!!**  
mac 터미널 에서 `open .`한것과 유사하다.  
이걸 활용하면 파일 관리를 조금 더 쉽게 할수있다.  

explorer.exe는 좀 기니 짧게 alias해서 써보자.  

```powershell
# powershell
sal exp explorer.exe
```
```bash
# bash
alias exp="explorer.exe"
```

*linux에서는 `alias exp="explorer.exe ."` 처럼 ' .'까지 줄일수 있지만, powershell에서는 bat나 ps1 파일을 만들어 써야한다.*



