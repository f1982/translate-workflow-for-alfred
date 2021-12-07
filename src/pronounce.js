import alfy from 'alfy';
import { exec } from 'child_process';
import fs from 'fs';
import https from 'https';
import { log } from './utils.js'

//download audio file here
const TMP_FOLDER = './tmp'
const VOICE_API = 'https://dict.youdao.com/dictvoice?audio=$WORDS&type=1'

function playAudioFile(path, callback) {
  exec(`afplay ${path}`, () => {
    log('play over: ', path);
    callback && callback(path);
  });
}

const ACTOR_DANIEL = 'Daniel'
export function speak(words, actor = ACTOR_DANIEL, callback = null) {
  exec(`say ${words} -v ${actor}`, () => {
    callback && callback()
  })
}

function getAudio(words, callback) {
  const filename = words.split(' ').join('_').toLowerCase();
  log('filename', filename);
  const path = `${TMP_FOLDER}/${filename}.mp3`;

  if (fs.existsSync(path)) {
    callback(path);
  } else {
    const file = fs.createWriteStream(path);
    const url = VOICE_API.replace('$WORDS', words)
    // TODO: add error handling
    https.get(url, (response) => {
      response.pipe(file);
      callback(path);
    });
  }
}

if (alfy.input && alfy.input.length > 2) {
  getAudio(alfy.input, (audioFile) => {
    playAudioFile(audioFile, () => {
      //remove tmp file?
    });

  })
}
