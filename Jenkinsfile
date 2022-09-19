pipeline {
	agent any
        triggers {
            githubPush()
        }
        environment {
            RELEASE='20.04'
        }
	stages {
		stage('Build') {
			steps {
				echo 'Building the test app...'
			}
		}
		stage('Test') {
			steps {
				echo "Testing the test app with the release version ${RELEASE}.."
			}
		}
		stage('Deploy') {
			input {
                                message 'Deploy?'
                                ok 'Do it!'
                                parameters {
                                    string(name: 'TARGET_ENVIRONMENT', defaultValue: 'PROD', description: 'Target deployment environment.')
                                }
			}
                        steps {
				echo 'Deploying the test app...'
                        }
		}
	}
        post {
            always {
                echo 'Prints whether deploy happened or not, success or failure.'
            }
        }
}
