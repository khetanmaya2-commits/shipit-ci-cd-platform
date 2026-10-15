
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



stage('Docker Hub Authentication Check') {
    steps {
        withCredentials([
            usernamePassword(
                credentialsId: 'dockerhub-credentials',
                usernameVariable: 'DOCKERHUB_USER',
                passwordVariable: 'DOCKERHUB_TOKEN'
            )
        ]) {
            bat '''
                if not defined DOCKERHUB_USER exit /b 1
                if not defined DOCKERHUB_TOKEN exit /b 1
                echo Docker Hub credentials were loaded.
            '''
        }
    }
}

    }
}
