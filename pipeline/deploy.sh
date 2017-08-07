#!/usr/bin/env bash
echo deploy
gcloud auth activate-service-account --key-file /tmp/service-account.json
gcloud config set project smartworkx-173909
kubectl apply -f sources/kubernetes/admin-web.yml
