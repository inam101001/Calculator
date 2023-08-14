pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/inam101001/Calculator.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("calculator-app")
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                ansiblePlaybook(
                    playbook: '/path/to/deploy.yml',
                    inventory: '/path/to/inventory.ini'
                )
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
    }
}
