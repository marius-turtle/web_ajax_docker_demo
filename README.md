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

## Pitfalls
---
### *Using umlauts in paths*

That might lead to an error like this:

```
C:/HashiCorp/Vagrant/embedded/mingw64/lib/ruby/2.6.0/json/common.rb:156:in `initialize': negative string size (or size too big) (ArgumentError)
```
##### Resources
* https://github.com/hashicorp/vagrant/issues/10657

---

### *Not matching guest-additions*
On the host respectively the VirtualBox-installation does have another guest-addition installation than the VM that is started with `vagrant up`, following message might occur:

```
The guest additions on this VM do not match the installed version of
    default: VirtualBox! In most cases this is fine, but in rare cases it can
    default: prevent things such as shared folders from working properly. If you see
    default: shared folder errors, please make sure the guest additions within the
    default: virtual machine match the version of VirtualBox you have installed on
    default: your host and reload your VM.

```

Which might help, updating the guest-additions with the following command:

#### **`vagrant plugin install vagrant-vbguest`**

### Reference
* https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/