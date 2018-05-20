#!/bin/bash
# this is standalong (you kill off the web server)
sudo certbot certonly --standalone -d solc.io -d api.solc.io
# you can run something like this if you have a webserver that needs to stay up:
# sudo certbot certonly --webroot -w /var/www/example -d example.com -d www.example.com -w /var/www/thing -d thing.is -d m.thing.is
# see all the details here:
# https://certbot.eff.org/lets-encrypt/ubuntutyakkety-other
sudo cp /etc/letsencrypt/live/solc.io/fullchain.pem ../src/fullchain.pem
sudo cp /etc/letsencrypt/live/solc.io/privkey.pem ../src/privkey.pem
