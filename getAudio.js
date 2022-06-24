const fs = require('fs');
const ytdl = require('ytdl-core');

const COOKIE = 'SID=LQj_0MuiSIogHJeZ2VBvq9b_QDjykCUWugHBG8MeDXEGvt3bfPosyRYXNWQpVEwDzUA8oQ.; __Secure-1PSID=LQj_0MuiSIogHJeZ2VBvq9b_QDjykCUWugHBG8MeDXEGvt3bsY6C_iojeM5Bt4qMNDwoSQ.; __Secure-3PSID=LQj_0MuiSIogHJeZ2VBvq9b_QDjykCUWugHBG8MeDXEGvt3bPigc7GcNze8TRBaix5NZPA.; HSID=A18ndbbtvI-OC6Wuv; SSID=Ao4AZuJ-sO4GC3qDk; APISID=cPbc8p4coWNUGuKh/AIeygR3aZOWhAMwZg; SAPISID=MSh3eu62Q2Zg5dJp/A8xJH6uHBxq4-bEsF; __Secure-1PAPISID=MSh3eu62Q2Zg5dJp/A8xJH6uHBxq4-bEsF; __Secure-3PAPISID=MSh3eu62Q2Zg5dJp/A8xJH6uHBxq4-bEsF; YSC=g4oqn21xtrU; LOGIN_INFO=AFmmF2swRgIhAMOLtpcdUcEODZIUDce0qFndqMjGQ37wCSyOkUbE4Bg-AiEAqxzKSfX03vgVt2DoUouo9PSmFZ8ScnSdhOTxe7lpnKI:QUQ3MjNmenBKVHpTLWlvbG52MnNGUXFPdWJkN0JPZGVDQ1hMaWZ4bGVYSHZNR0lmRUtzVG9JcUtwZEVtOGVlNWFBeDl3LXNoV1EyNmVLT2ZkMExudjRpb0t6U0NDTkM3MmpzZ3dMbHZzeTdRenNaUU1wazY4c2lvajQ1ZlU5X0xYVVFaSjA3OE9HeTRkYlZwZUdTRTlwdmx4WmREYm9VQXFB; VISITOR_INFO1_LIVE=s3RhzFRTRBY; wide=1; PREF=f4=4000000&tz=Asia.Karachi&f5=20000; SIDCC=AJi4QfHprnlZouRhn5NATPRhWfSbNQI7oufku5vaGnFF-JCD56o2w6a9dpBwJZ-vPzbajka6O2E; __Secure-1PSIDCC=AJi4QfFMEVcLrw-wO9nzZlx0MGN4FOvz5Du2-ETU87DG_vgtHLr2Rt-iGEOu786kGS-ekVT8UQ; __Secure-3PSIDCC=AJi4QfE4kMRNjPp5t28oio-z7kQx7AjCo7OWuMPBCckPlrplYSd_uvYgKVkMp93Of3eGl9EM07A';

const getAudio = (x, y, k) => {
  return new Promise((resolve, reject) => {
    let newPath;
    let uKey = Date.now();
    if (ytdl.validateURL(x)) {
      ytdl(x, {
        filter: 'audioonly',
        quality: 'highest',
        requestOptions: {
          headers: {
            cookie: COOKIE,
          },
        }
      })
        .on('info', (z) => {
          newPath = `./files/${z.videoDetails.title}-${y}.mp3`
          k({
            'oldPath': `./files/${uKey}.mp3`,
            'newPath': newPath
          })
        })
        .pipe(fs.createWriteStream(`./files/${uKey}.mp3`))
        .on('finish', () => {
          resolve('SUCCESS')
        });
    } else {
      reject('INVALID URL')
    }
  })
};

module.exports = getAudio