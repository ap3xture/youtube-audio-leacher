const fs = require('fs');

const cleanUp = () => {
  fs.readdir('./files', (err, files) => {
    if (err) throw err;

    for (const file of files) {
      console.log(file + ' : File Deleted Successfully.');
      fs.unlinkSync('./files/' + file);
    }
  });
}

module.exports = cleanUp;