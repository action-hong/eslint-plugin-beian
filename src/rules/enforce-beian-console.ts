import { createESLintRule } from "../utils";

export const RULE_NAME = "enforce-beian-console";

export default createESLintRule({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce beian console',
    }
  }
})