---
layout: post
title: WSL Ubuntu Git 업데이트
tag: [WSL, GIT]
published: True
---

wsl의 git 버전이 낮아서 `sudo apt-get update && sudo apt-get upgrade`를 시도해 보았으나 git은 업데이트 되지 않는다.    

아래 방법으로 업데이트 하면 된다.  

```bash
sudo add-apt-repository ppa:git-core/ppa -y
sudo apt-get update -y
sudo apt-get install git -y

```

Ubuntu의 Git 최신 버전은 [“Ubuntu Git Maintainers” team](https://launchpad.net/~git-core/+archive/ubuntu/ppa){:target="_blank"} 에서 확인할 수 있다.
