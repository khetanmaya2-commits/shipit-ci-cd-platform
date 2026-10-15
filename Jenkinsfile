
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
        
        stage('Docker Diagnostic') {
        steps {
        bat 'echo Checking Docker from Jenkins...'
        bat 'where.exe docker || echo Docker executable not found on Jenkins PATH'
        bat 'echo Checking the Jenkins PATH...'
        bat 'echo %PATH%'
    }
}

    }
}
