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
			steps {
				echo 'deploying the test app...'
			}
		}
	}
}
