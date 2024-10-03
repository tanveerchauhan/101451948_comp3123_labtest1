const fs = require('fs');
const path = require('path');

// Function to create log files
function createLogs() {
    const logsDir = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir); // Create the directory
        console.log("Logs directory created.");
    }

    process.chdir(logsDir);

    // Create log files from log1.txt to log9.txt
    for (let i = 1; i <= 9; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file ${i}`);
        console.log(`Added: ${fileName}`);
    }
}

//Test to create logs 1to9
createLogs();
