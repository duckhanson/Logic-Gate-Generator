const fs = require('fs');

export function writeFile(resultFilePath) {
    fs.writeFile('diagram.svg', resultFilePath, (err) => {
        if (err) 
            console.log(err)
        else
            return 'diagram.svg'; 
    });
}
