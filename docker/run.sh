#!/bin/bash
docker rm -f solcapi
docker run --name="solcapi" \
 -v ${PWD}/../src:/src \
 -p 8080:80 \
 -d solcapi
