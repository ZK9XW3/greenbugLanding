## Requirements
- Docker-compose `docker-compose --version`
- Docker `docker --version`
- Git (and acces to git with ssh keys) `git --verions` check ssh keys `ls -al ~/.ssh`
- Make `make --version` or install make `sudo apt-get install make`

## Start in production
- git clone `git clone git@github.com:ZK9XW3/greenbugLanding.git` (makes a directory helloNuxt so no need to mkdir one)
- pull the image from dockerhub `docker pull node:21.7.2`
- launch docker `docker-compose up -d --build`
- verify that your container is running `docker ps` `docker ps -a`
- your app is on port 3000 that you exposed and set in your docker-compose 192.168.1.20:3000

## Start in dev
- git clone `git clone git@github.com:ZK9XW3/greenbugLanding.git`
- pull the image from dockerhub `docker pull node:21.7.2`
- launch docker-compose of your dev env `docker-compose -f docker-compose.dev.yml up --build` OR simply use the maker `make build`
- you should not have to lauch node server but in case you have to `npm run dev` OR `make serve`

## Usefull commands
- see all the containers `docker ps -a`, only running container `docker ps`
- If the port is already taken : kill the containers `docker stop container-id` && `docker rm container-id`

## Documentation
- this stack is based on : https://markus.oberlehner.net/blog/running-nuxt-3-in-a-docker-container/