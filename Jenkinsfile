#!groovy

node {
  // Mark the code checkout 'stage'....
  stage 'Stage Checkout'

  // Checkout code from repository and update any submodules
  checkout scm


  stage 'Stage Build'
  sh 'npm install'
  sh 'npm test'
  sh 'npm run package'


}

stage 'Deploy test'
timeout(time: 1, unit: 'DAYS') {
  input 'Do you want to install on test?'
}

node {
  sh 'echo deploying on test'
  ansiblePlaybook(
    playbook: 'provisioning/playbook.yml',
    inventory: 'provisioning/test.inventory ',
    extras: '-u admin',
    credentialsId: 'bec43108-1819-465a-bf56-91324f852fc1'
  )
}

stage 'Deploy prod'
timeout(time: 1, unit: 'DAYS') {
  input 'Do you want to install on prod?'
}

node {
  sh 'echo deploying on prod'
  ansiblePlaybook(
    playbook: 'provisioning/playbook.yml',
    inventory: 'provisioning/prod.inventory ',
    extras: '-u admin',
    credentialsId: 'bec43108-1819-465a-bf56-91324f852fc1'
  )
}
