pipeline {
	agent any
        triggers {
            githubPush()
        }
        environment {
            RELEASE='20.04'
        }
	stages {
		stage('build') {
			steps {
				echo 'building the test app...'
			}
		}
		stage('test') {
			steps {
				echo "testing the test app with the release version ${RELEASE}.."
			}
		}
		stage('deploy') {
			input {
                                message 'Deploy?'
                                ok 'Do it!'
                                parameters {
                                    string(name: 'TARGET_ENVIRONMENT', defaultValue: 'PROD', description: 'Target deployment environment.')
                                }
				echo 'deploying the test app...'
			}
                        steps {
				echo 'deploying the test app...'
                        }
		}
	}
        post {
            always {
                echo 'Prints whether deploy happened or not, success or failure.'
            }
        }
}
