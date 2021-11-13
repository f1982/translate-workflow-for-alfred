import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'ava';
import {alfy as createAlfy} from './_utils.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('read user config', t => {
  const alfy = createAlfy({
    data: path.join(__dirname, 'fixtures/config'),
  });
  console.log(alfy.userConfig);
  t.pass();
});
