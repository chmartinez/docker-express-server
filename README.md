# Docker Learning

Puts a ExpressJS server into a Docker Container

Following the guides from https://docs.docker.com/get-started/ .

## How to run the container locally

`docker run -d -p 3000:4000 docker-learning-hello`

### Things to take into account

#### Port setup

In the command from above, `4000` is the port defined as a `ENV` variable at the `Dockerfile`. The port defined by the machine running the docker will take precedence so be aware of that.
Also, the ExpressJS server is using the port defined at the `Dockerfile` to open the server connection.
To put it in other words:
* The `Dockerfile` exposes a port number so the world outside the container can access what's inside of it.
* The `Dockerfile` has `PORT` variable that will be used by the ExpressJS server to open the connection
    * if that variable is not present, the ExpressJS will use the one declared at `index.js`.
* When executing the `docker` command, you could a `port remapping`, meaning that the container will think you're using its exposed port as the published port but actually you're using another one.
