import test from 'ava';
import alfyTest from 'alfy-test';

test('test translate tomorrow by using this workflow', async (t) => {
  const alfy = alfyTest();
  // it's the same as input fy tomorrow in Alfred
  const result = await alfy('tomorrow');
  t.true(Array.isArray(result));
  t.true(result.length === 4, 'should get 4 result');
});
