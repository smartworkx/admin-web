#!/bin/bash
cp sources/Dockerfile build/
mkdir build/docker
cp docker/* build/docker

mkdir build/dist
cp dist/* build/dist

date +"%Y%m%d%H%M%S" > build/tag
