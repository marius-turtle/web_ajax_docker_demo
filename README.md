# Setup for Node.js Server in Docker Container

## Prerequisites
* Vagrant (2.2.7)
https://www.vagrantup.com/downloads.html
* VirtualBox (6.0.x)
https://www.virtualbox.org/wiki/Downloads
* disable Hyper-V Manager for Windows
https://ugetfix.com/ask/how-to-disable-hyper-v-in-windows-10/

## Build VM
* in `/vm` > `vagrant up`
* `vagrant ssh`
* `sudo apt update`
* `sudo apt upgrade`
* `docker -v` should show docker version

## Build Image for Server-Container

* in VM `cd /opt/projects/`
* `docker build -t <your username>/node-web-app .`

## Start Container
* `docker run -p 49160:8080 -d <your username>/node-web-app`

# Serve Client-App
On the host machine you can use e.g. VS-Code and the Live-Server-Plugin (Link) to serve the `index.html` locally.

### Reference
* https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/