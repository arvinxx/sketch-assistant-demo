import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier } from './utils';
import { noCopyRule, noTextRule } from './rules';

const assistant: AssistantPackage = async () => {
  return {
    name: identifier,
    rules: [noCopyRule.rule, noTextRule.rule],
    config: {
      rules: {
        [noCopyRule.name]: { active: true },
        [noTextRule.name]: { active: true, text: '假' },
      },
    },
  };
};

export default assistant;
