$wslip = wsl -d Ubuntu-20.04 -e /bin/bash -c "ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'"
sudo netsh interface portproxy add v4tov4 listenport=4000 listenaddress='0.0.0.0' connectport=4000 connectaddress=$wslip  
