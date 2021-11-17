import alfy from 'alfy';
import * as https from 'https';
import * as fs from 'fs';
import { exec } from 'child_process';

function playSound(path) {
  exec(`afplay ${path}`, () => { console.log('play over'); });
}

const keyword = alfy.input;
const filename = alfy.input.split(' ').join('_');

const path = `./tmp/${filename}.mp3`;

if (fs.existsSync(path)) {
  console.log('play local file');
  playSound(path);
} else {
  const file = fs.createWriteStream(path);
  https.get(`https://dict.youdao.com/dictvoice?audio=${keyword}&type=1`, (response) => {
    response.pipe(file);
    console.log('play downloaded file');
    playSound(path);
  });
}
