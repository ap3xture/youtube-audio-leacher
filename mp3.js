const express = require('express');
const router = express.Router();
const getAudio = require('./getAudio.js');
const fs = require('fs');

router.get('/', async (x, y) => {
  try {
    let g;
    let p = await getAudio(x.query.url, '', (k) => {
      fs.rename(k.oldPath, k.newPath, (e) => {
        g = k.newPath;
        if (e) {
          console.log(e);
        }
      })
    })
    await g;
    
    y.download(g);
  } catch (e) {
    console.log(e);
  }
})

module.exports = router;