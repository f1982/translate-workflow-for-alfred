import Translate from '@liqiqiang/youdao-translate';
import alfy from 'alfy';

const translate = new Translate('525100d8f9304067', 'MsLWIHzModLvvgJyeXVFa5WoqgASoOR4');

// auto en to zh
const res = await translate.t(alfy.input);

// this means it running outside of the alfred
if (!process.env.alfred_version) {
  console.log(process.env);
  console.log('res', res);
}

// auto zh to en
// res = await translate.t('你好，世界');
// specified translate action
// res = await translate.t('hello world', { from: 'EN', to: 'zh-CHS' })

if (res) {
  const title = res.translation.join(', ');
  let subtitle = '';
  if (res.basic.explains) {
    subtitle = res.basic.explains.join(';\n --- ');
  }

  alfy.output([{
    title,
    subtitle,
  }]);
} else {
  alfy.output([{
    title: 'Cannot find any result',
    subtitle: alfy.input,
  }]);
}
