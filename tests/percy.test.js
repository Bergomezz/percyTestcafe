import { Selector } from 'testcafe';
import percySnapshot from '@percy/testcafe';

//prettier-ignore
fixture `Visual regression test with Percy`
  .page `http://example.com`

test('Percy Demo - Example Page', async t => {
  await t.wait(1000);
  await percySnapshot(t, 'Example Page');
});
