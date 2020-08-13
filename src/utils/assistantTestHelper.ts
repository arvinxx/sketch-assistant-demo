import { AssistantPackage } from '@sketch-hq/sketch-assistant-types';
import { identifier, Rule } from '../utils';

interface Config {
  [key: string]: any;
}

export const assistantFactory = (testRule: Rule, config?: Config): AssistantPackage => async () => {
  return {
    name: identifier,
    rules: [testRule.rule],
    config: {
      rules: {
        [testRule.name]: { active: true, ...config },
      },
    },
  };
};
