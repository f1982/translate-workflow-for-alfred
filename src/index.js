import Translate from '@liqiqiang/youdao-translate';
import alfy from 'alfy';

async function start() {
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

  // $workflow->result()
  //          ->uid('bob-belcher')   唯一编号 : STRING (可选)，用于排序
  //          ->title('Bob')         标题： STRING， 显示结果
  //          ->subtitle('Head Burger Chef')  副标题： STRING ,显示额外的信息
  //          ->quicklookurl('http://www.bobsburgers.com')  快速预览地址 : STRING (optional)
  //          ->type('default')   类型，可选择文件类型: "default" | "file"
  //          ->arg('bob')    输出参数 : STRING (recommended)，传递值到下一个模块
  //          ->valid(true)       回车是否可用 : true | false (optional, default = true)
  //          ->icon('bob.png')   图标
  //          ->mod('cmd', 'Search for Bob', 'search')   修饰键 : OBJECT (可选)
  //          ->text('copy', 'Bob is the best!')   按cmd+c 复制出来的文本: OBJECT (optional)
  //          ->autocomplete('Bob Belcher');    自动补全 : STRING (recommended)

  if (res) {
    const output = [];

    if (res.basic.explains) {
      output.push(...res.basic.explains.map(
        (item) => ({
          title: item,
          subtitle: alfy.input,
          text: alfy.input,
        }),
      ));
    }

    if (res.basic['us-phonetic']) {
      output.push({
        title: `[US :${res.basic['us-phonetic']}]`,
        subtitle: '美音',
        text: res.basic['us-phonetic'],

      });
    }
    if (res.basic['uk-phonetic']) {
      output.push({
        title: `[UK : ${res.basic['uk-phonetic']}]`,
        subtitle: '英音',
        text: res.basic['us-phonetic'],
      });
    }

    alfy.output(output);
  } else {
    alfy.output([{
      title: 'Cannot find any result',
      subtitle: alfy.input,
    }]);
  }
}

start();
