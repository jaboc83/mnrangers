#!/bin/bash

# Create a new docker image based on the code in public/
docker build -t unsignedbytes/mn-rangerswebsite-express .

# Kill running container
for container_id in $(docker ps  --filter="name=mnrangerswebsite" -q);do docker stop $container_id && docker rm $container_id;done

# Start the container
docker run -e VIRTUAL_HOST=mnrangers.unsignedbytes.com --name mnrangerswebsite -P -d unsignedbytes/mn-rangerswebsite-express 

# list runnning containers
docker ps
