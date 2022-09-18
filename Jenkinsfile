pipeline {
	agent any
        triggers {
            githubPush()
        }
	stages {
		stage('build') {
			steps {
				echo 'building the test app...'
			}
		}
		stage('test') {
			steps {
				echo 'testing the test app...'
			}
		}
		stage('deploy') {
			steps {
				echo 'deploying the test app...'
			}
		}
	}
}
