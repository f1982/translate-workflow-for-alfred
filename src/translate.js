import Translate from '@liqiqiang/youdao-translate';
import alfy from 'alfy';
import { log } from './utils.js'
import { DEBUG_MODE } from './settings.js'
import { speak } from './pronounce.js'

export const EN_TO_ZHCHS = 'en2zh-CHS'

export function parseTranslation(translation, lt, searchWorld) {
  return translation.map(
    (item) => ({
      title: DEBUG_MODE ? 'translation:' + item : item,
      subtitle: searchWorld,
      arg: lt === EN_TO_ZHCHS ? searchWorld : item,
      text: searchWorld,
    }),
  )
}

async function search(words) {
  const translate = new Translate(
    process.env.YOUDAO_API_KEY,
    process.env.YOUDAO_API_SECRET
  );

  // auto en to zh or zh to en
  const res = await translate.t(words);

  log('res', res);

  if (!res || res.errorCode !== '0') {
    alfy.output([{
      title: `Cannot find any result for ${words}`,
      subtitle: 'Sorry please try other words',
    }]);
    return;
  }

  const lt = res.l; //zh-CHS2en, en2zh-CHS
  log('language translate mark: ', lt);

  const output = [];

  if (res.translation) {
    output.push(...res.translation.map(
      (item) => ({
        title: DEBUG_MODE ? 'translation:' + item : item,
        subtitle: words,
        arg: lt === EN_TO_ZHCHS ? words : item,
        text: words,
      }),
    ));
  }

  if (res.basic && res.basic.explains) {
    output.push(...res.basic.explains.map(
      (item) => ({
        title: DEBUG_MODE ? 'explain: ' + item : item,
        subtitle: words,
        arg: lt === EN_TO_ZHCHS ? words : item,
        text: words,
      }),
    ));
  }

  if (res.basic && res.basic['us-phonetic']) {
    const phonetic = res.basic['us-phonetic'];
    output.push({
      title: `[US :${phonetic}]`,
      subtitle: '美音',
      arg: words,
      text: phonetic,

    });
  }
  if (res.basic && res.basic['uk-phonetic']) {
    const phonetic = res.basic['uk-phonetic'];
    output.push({
      title: `[UK : ${phonetic}]`,
      subtitle: '英音',
      arg: words,
      text: phonetic,
    });
  }

  // from web
  if (res.web) {
    output.push(...res.web.map((item) => ({
      title: DEBUG_MODE ? 'web: ' + item.key : item.key,
      subtitle: item.value.join('; '),
      // if alfy.input is Chinese pounce item.value if input is english, pounce alfy.input
      arg: lt === EN_TO_ZHCHS ? item.key : item.value.join(' '),
    })));
  }

  alfy.output(output);
}

if (!process.env.YOUDAO_API_KEY || !process.env.YOUDAO_API_SECRET) {
  alfy.output([{
    title: 'Error',
    subtitle: 'please update your settings for the workflow',
  }]);
}

log('YOUDAO_APP_KEY: ', process.env.YOUDAO_API_KEY);
log('YOUDAO_APP_SECRET: ', process.env.YOUDAO_API_SECRET);

if (!alfy.input || alfy.input.length < 2) {
  alfy.output([{
    title: 'Input the word you want to translate',
    subtitle: 'At least two characters',
  }]);
}

log('searching: ', alfy.input);

search(alfy.input);
if (process.env.READ_AFTER_SEARCH === 'true') {
  speak(alfy.input);
}