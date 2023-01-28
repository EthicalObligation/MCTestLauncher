let child_process = require('child_process');

// check if new release is available
if (newReleaseAvailable()) {
    // if new release is available, download it
    downloadNewRelease();
} else {
    // if new release is not available, run the program
    runProgram();
}

// check if user has java
if (javaCheck()) {
    // if user has java, run the program
    runProgram();
} else {
    // if user does not have java, install it
    installJava();
}

function javaCheck() {
    // check if user has java
    child_process.exec('java -version', (error, stdout, stderr) => {
        if (error) {
            console.log('Java not found');
            return false;
        } else {
            console.log('Java found');
            return true;
        }
    }
    );

}

function installJava() {

}