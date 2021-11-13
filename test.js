import test from 'ava';
import alfyTest from 'alfy-test';

test.beforeEach(t => {
  t.context.alfy = alfyTest();
});

test('foo', t => {
  console.log('foo test start...');
  const result = [{
    title: 'foo',
    subtitle: 'bar',
  }];
  console.log('result', result);
  t.deepEqual(result, [{
    title: 'foo',
    subtitle: 'bar',
  }]);
});

// test('main', async t => {
//   console.log('main test start...');
//   const alfy = alfyTest();
//   const result = await alfy('opt');
//   console.log('result', result);
//   t.true(Array.isArray(result));
// });
