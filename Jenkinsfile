
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code is available in the workspace'
            }
        }

        stage('Test') {
            steps {
                echo 'Running ShipIt tests'
                bat 'node --test'
            }
        }

        stage('Build') {
            steps {
                echo 'Preparing application build'
                bat 'node --check app.js'
            }
        }
        
        
stage('Docker Build') {
    steps {
        bat 'if not defined DOCKER_BIN exit /b 1'
        bat '"%DOCKER_BIN%" --version'
        bat '"%DOCKER_BIN%" build -t shipit:1.0 .'
    }
}



stage('Push to Docker Hub') {
    steps {
        withCredentials([
            usernamePassword(
                credentialsId: 'dockerhub-credentials',
                usernameVariable: 'DOCKERHUB_USER',
                passwordVariable: 'DOCKERHUB_TOKEN'
            )
        ]) {
            bat 'powershell -NoProfile -NonInteractive -Command "$env:DOCKERHUB_TOKEN | & $env:DOCKER_BIN login --username $env:DOCKERHUB_USER --password-stdin"'

            bat '"%DOCKER_BIN%" tag shipit:1.0 maya1827/shipit-cicd-platform:latest'

            bat '"%DOCKER_BIN%" push maya1827/shipit-cicd-platform:latest'
        }
    }
}

    }
}
