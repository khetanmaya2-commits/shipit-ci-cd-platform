
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
        stage('Docker Build'){
            steps{
                bat '"C:\Users\kheta\AppData\Local\Programs\DockerDesktop\resources\bin\docker.exe" --version'
                bat '"C:\Users\kheta\AppData\Local\Programs\DockerDesktop\resources\bin\docker.exe" build -t shiptit:1.0 .'
            }
        }
    }
}
