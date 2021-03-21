pipeline {
  agent any
    
  tools {nodejs "Node 14"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/dcblack77/scrapping-googleplaystore.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }  
    
            
    stage('Running') {
      steps {
        sh 'node app'
      }
    }
  }
}