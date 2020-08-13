import { resolve } from 'path';
import { testAssistant } from '@sketch-hq/sketch-assistant-utils';
import Assistant from '../index';

describe('测试 Assistant', function () {
  it('测试 Assistant', async () => {
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './empty.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(0);
    expect(ruleErrors).toHaveLength(0);
  });
  it('two-copy.sketch 文件包含两条错误', async () => {
    const { violations, ruleErrors } = await testAssistant(
      resolve(__dirname, './two-copy.sketch'),
      Assistant,
    );
    expect(violations).toHaveLength(2);
    expect(violations[0].message).toBe('图层矩形备份包含"备份"文本');
    expect(violations[1].message).toBe('图层矩形备份 2包含"备份"文本');
    expect(ruleErrors).toHaveLength(0);
  });
});
