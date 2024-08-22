## Requirements
- Docker-compose `docker-compose --version`
- Docker `docker --version`
- Git (and acces to git with ssh keys) `git --verions` check ssh keys `ls -al ~/.ssh`
- Make `make --version` or install make `sudo apt-get install make`

## Install in production
- git clone `git clone git@github.com:ZK9XW3/greenbugLanding.git`
- add a .env file and specify the port you want to use `PORT=3000` && a project name `PROJECT_NAME=myprojectname`
- launch docker `docker-compose -f docker-compose.yml up --build -d`
- verify that your container is running `docker ps` `docker ps -a`
- your app is on port 3000 that you exposed and set in your docker-compose 192.168.1.20:3000

## Install in dev
- git clone `git clone git@github.com:ZK9XW3/greenbugLanding.git`
- add a .env file and specify the port you want to use `PORT=3000` && a project name `PROJECT_NAME=myprojectname`
- launch docker-compose of your dev env `docker-compose -f docker-compose.dev.yml up --build` OR simply use the maker `make build`
- you should not have to lauch node server but in case you have to `npm run dev` OR `make serve`

## Start in dev
- when launching the project use `make start`
- go on `localhost:3000` to see your app

## Usefull commands
- see all the containers `docker ps -a`, only running container `docker ps`

## Documentation
- this stack is based on : https://markus.oberlehner.net/blog/running-nuxt-3-in-a-docker-container/