pipeline {

    agent any

    tools {
        nodejs 'node24'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
        buildDiscarder(logRotator(numToKeepStr: '20'))
        timeout(time: 20, unit: 'MINUTES')
    }

    environment {
        APP_NAME = 'landing-page'
        NODE_OPTIONS = '--max-old-space-size=2048'
        DEPLOY_DIR = '/opt/LogicQ1-Landing-Page'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'docker --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'master'
            }

            steps {
                echo 'Deploying master branch...'

                sh '''
                    mkdir -p ${DEPLOY_DIR}

                    rsync -av --delete \
                    --exclude node_modules \
                    --exclude .git \
                    ./ ${DEPLOY_DIR}/

                    cd ${DEPLOY_DIR}

                    docker compose up -d --build
                '''
            }
        }

        stage('Health Check') {
            when {
                branch 'master'
            }

            steps {
                sh '''
                    echo "Waiting for application startup..."
                    sleep 20

                    echo "Checking https://logiq1.com"

                    curl --fail --silent --show-error \
                        https://logiq1.com > /dev/null

                    echo "Health check passed."
                '''
            }
        }
    }

    post {

        success {
            echo 'Pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }

        always {
            cleanWs()
        }
    }
}