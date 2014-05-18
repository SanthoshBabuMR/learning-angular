Exploring angularJS Framework

**Dependencies**
* grunt-contrib-connect

**Launching server from grunt**
* Default/App Server ( [http://localhost:6234/](http://localhost:6234/) )
```bash
grunt appServer
```
* Non-"Cross-Orgin Resource Sharing" server  ( [http://localhost:5234/](http://localhost:5234/) )
```bash
grunt nonCorsServer
```
* "Cross-Orgin Resource Sharing" enabled server  ( [http://localhost:4234/](http://localhost:4234/) )
```bash
grunt corsServer
```
* run a server using ip address  ( [http://127.1.1.1:6111/](http://127.1.1.1:6111/) )
```bash
grunt serverIp
```