const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/images');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        if (file.endsWith('.png')) {
            const inputFile = path.join(directoryPath, file);
            const outputFile = path.join(directoryPath, path.parse(file).name + '.webp');

            sharp(inputFile)
                .toFile(outputFile)
                .then(info => {
                    console.log('Converted:', file);
                    // fs.unlinkSync(inputFile); // Optional: delete original
                })
                .catch(err => console.error('Error converting:', file, err));
        }
    });
});
