pipeline{

    agent any

    stages{
        stage("Clone Code"){
            steps {
                echo "Cloning the code"
                git url:"https://github.com/inam101001/Calculator.git" , branch: "main"
                }
            }
        stage("Build"){
            steps { 
                echo "Building the Image"
                sh "docker build -t my-cal-app ."
                }  
            }
        stage("Push to Docker Hub"){
            steps {
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId:"DockerHub",usernameVariable:"dHubusername",passwordVariable:"dHubpassword")]){
                sh "docker tag my-cal-app ${env.dHubusername}/my-cal-app:latest"
                sh "docker login -u ${env.dHubusername} -p ${env.dHubpassword}"
                sh "docker push ${env.dHubusername}/my-cal-app:latest"
                }
              }
            }
        stage("Deploy"){
            steps {
                echo "Deploying the Container"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}