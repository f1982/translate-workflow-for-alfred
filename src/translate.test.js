import test from 'ava'
import { parseTranslation, EN_TO_ZHCHS } from './translate.utils.js'

test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

test('parse translation to alfy output', t => {
  t.deepEqual(parseTranslation(["test result1", "test result 2"], EN_TO_ZHCHS, 'test'), [{
    arg: 'test',
    subtitle: 'test',
    text: 'test',
    title: 'test result1',
  }, {
    arg: 'test',
    subtitle: 'test',
    text: 'test',
    title: 'test result 2',
  }]);
})