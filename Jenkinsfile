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
        SLACK_CHANNEL = '#logic-q1-development'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm

                script {
                    env.GIT_COMMIT_MSG = sh(
                        script: "git log -1 --pretty=%B",
                        returnStdout: true
                    ).trim()

                    env.GIT_AUTHOR = sh(
                        script: "git log -1 --pretty=%an",
                        returnStdout: true
                    ).trim()
                }
            }
        }

        stage('Notify Build Started') {
            steps {
                script {

                    slackSend(
                        channel: env.SLACK_CHANNEL,
                        color: '#439FE0',
                        message: """
🚀 LANDING PAGE BUILD STARTED

Branch: ${env.BRANCH_NAME}

Author:
${env.GIT_AUTHOR}

Commit:
${env.GIT_COMMIT_MSG}

${env.BUILD_URL}
"""
                    )
                }
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
                    sleep 20

                    curl --fail --silent --show-error \
                    https://logiq1.com > /dev/null
                '''
            }
        }
    }

    post {

        success {

            slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'good',
                message: """
✅ LANDING PAGE DEPLOY SUCCESS

🌐 https://logiq1.com

Branch: ${env.BRANCH_NAME}

${env.BUILD_URL}
"""
            )
        }

        failure {

            slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'danger',
                message: """
❌ LANDING PAGE DEPLOY FAILED

Branch: ${env.BRANCH_NAME}

${env.BUILD_URL}
"""
            )
        }

        unstable {

            slackSend(
                channel: env.SLACK_CHANNEL,
                color: 'warning',
                message: """
⚠️ LANDING PAGE BUILD UNSTABLE

${env.BUILD_URL}
"""
            )
        }

        aborted {

            slackSend(
                channel: env.SLACK_CHANNEL,
                color: '#808080',
                message: """
🛑 LANDING PAGE BUILD ABORTED

${env.BUILD_URL}
"""
            )
        }

        always {
            cleanWs()
        }
    }
}