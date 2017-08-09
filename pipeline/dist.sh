#!/bin/sh
echo "Building dist"
cd sources
yarn install
npm run lint
npm run deploy:prod
cp ./dist/* ../dist
