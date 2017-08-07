#!/usr/bin/env bash
echo deploy
gcloud auth activate-service-account --key-file /tmp/service-account.json
gcloud config set project smartworkx-173909
gcloud container clusters get-credentials --zone europe-west1-c smartworkx-cluster
kubectl apply -f sources/kubernetes/admin-web.yml
