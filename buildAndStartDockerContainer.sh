#!/bin/bash

# Get rid of old container if it's running
docker rm mnrangerswebsite

# Create a new docker image based on the code in public/
docker build -t unsignedbytes/mn-rangerswebsite-express .

# Kill running container
for container_id in $(docker ps  --filter="name=mnrangerswebsite" -q);do docker stop $container_id && docker rm $container_id;done

# Start the container
docker run -d \
    --name mnrangerswebsite \
    -e VIRTUAL_HOST=mnrangers.com,www.mnrangers.com \
    -e LETSENCRYPT_HOST=mnrangers.com,www.mnrangers.com \
    -e LETSENCRYPT_EMAIL=jmoening@unsignedbytes.com \
    unsignedbytes/mn-rangerswebsite-express 

# list runnning containers
docker ps
