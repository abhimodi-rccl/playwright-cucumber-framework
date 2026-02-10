pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        TEST_EMAIL = credentials('TEST_EMAIL')
        TEST_PASSWORD = credentials('TEST_PASSWORD')
        TEST_USERNAME = credentials('TEST_USERNAME')
        APP_URL = 'https://automationexercise.com'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/abhimodi-rccl/playwright-cucumber-framework.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx cucumber-js'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean'
            }
        }
    }

    post {
        always {
            allure includeProperties: false,
                   jdk: '',
                   results: [[path: 'allure-results']]
        }
    }
}
