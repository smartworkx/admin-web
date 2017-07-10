#!/bin/sh
cd sources
npm install
npm run deploy:prod
cp ./dist/* ../dist
