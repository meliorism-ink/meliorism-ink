# Running Ubuntu via Docker Image

## Some Info

- I am using Ubuntu 22.04 LTS

Running Ubuntu via docker

- `docker run -ti ubuntu:22.04`

Adding a new user

- `adduser kumar`
- `usermod -aG sudo kumar`
- `getent group sudo`

List all the users

- `compgen -u` OR
- `awk -F: '{ print $1 }' /etc/passwd`
