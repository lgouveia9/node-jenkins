pipeline {
    agent any

    stages {
        stage('Checkout Source') {
           steps{
            git url:'https://github.com/lgouveia9/node-jenkins.git', branch:'main'
           }
        }

        stage('Build and Push Image') {
            steps {
                script {
                    // Construa e envie a imagem Docker
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        def customImage = docker.build("lgouveia/node-jenkins:latest")
                        customImage.push()
                    }
                }
            }
        }

        stage('Deploy to Swarm') {
            steps {
                script {
                    // Implante no Docker Swarm
                    sh 'docker stack deploy -c docker-compose.yml node-jenkins'
                }
            }
        }
    }
}
