#!/bin/bash
cp sources/Dockerfile build/
mkdir build/dist
cp dist/* build/dist
date +"%Y%M%d%H%M" > build/tag
