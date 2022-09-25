pipeline {
	agent {
		docker {
			image node:latest
		}
	}
	// triggers {
	//     githubPush()
	// }
	environment {
		RELEASE='20.04'
	}
	stages {
		stage('Build') {
			environment {
				LOG_LEVEL='INFO'
			}
			steps {
				echo "Building release ${RELEASE} with log level ${LOG_LEVEL}"
			}
		}
		stage('Test') {
			steps {
				echo "Testing the release version ${RELEASE}.."
				writeFile file: 'test-results.txt', text: 'The test has passed SUCCESSFULLY!'
			}
		}
	}
	// post {
	// 	always {
	// 		archiveArtifacts 'test-results.txt'
	// 	}
	// }
}
