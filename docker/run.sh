#!/bin/bash
docker rm -f solcapi
docker run --name="solcapi" \
 -v ${PWD}/../src:/src \
 -p 80:8080 \
 -p 443:8443 \
 -d solcapi
