# Docker Learning

Puts a ExpressJS server into a Docker Container

Following the guides from https://docs.docker.com/get-started/ .

## How to run the server locally with pm2 support
`$ yarn serve`

## How to run the container locally
`$ docker run -d -p <port_you_want_to_use>:<port_at_Dockerfile> docker-express-server`

This will run the `yarn serve` command, giving pm2 support to your docker container.


### Things to take into account

#### Port setup

In the command from above, `4000` is the port defined as a `ENV` variable at the `Dockerfile`. The port defined by the machine running the docker will take precedence so be aware of that.
Also, the ExpressJS server is using the port defined at the `Dockerfile` to open the server connection.
To put it in other words:
* The `Dockerfile` exposes a port number so the world outside the container can access what's inside of it.
* The `Dockerfile` has `PORT` variable that will be used by the ExpressJS server to open the connection
    * if that variable is not present, the ExpressJS will use the one declared at `index.js`.
* When executing the `docker` command, you could a `port remapping`, meaning that the container will think you're using its exposed port as the published port but actually you're using another one.


#### Logs are not where you think they are

If you use docker, logs will be generated *INSIDE* the container instance, not in your local machine (or host).
If you want to share those logs with your machine, you need to share the volume:
```
 $ docker run -p <port_you_want_to_use>:<port_at_Dockerfile> -v $(PWD):/server docker-express-server
```
(`/server` is the folder name you put at the Dockerfile).


#### PM2 is running in the container, not in "your machine"

If you want to see the list of processes running you'll have to go to the container and execute a `pm2 list`.
Another way of doing it is by using `docker exec`.
```
docker exec <CONTAINER_ID> "./node_modules/.bin/pm2 list" // OR
docker exec <CONTAINER_ID> yarn pm2 list // this is more of a hack to make the container's bash to look for pm2 inside the `.bin` folder
```

