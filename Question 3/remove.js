// Question3/remove.js

const fs = require('fs');
const path = require('path');

// Function to remove log files
function removeLogs() {
    const logsDir = path.join(__dirname, 'Logs');

    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath); // Delete the file
            console.log(`Deleted: ${file}`); // Display removal message
        });
        fs.rmdirSync(logsDir); // Delete the directory
        console.log("Logs directory removed successfully.");
    } else {
        console.log("Logs directory does not exist.");
    }
}

// Test to remove all logs
removeLogs();
