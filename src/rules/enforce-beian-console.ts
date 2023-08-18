import { createESLintRule } from '../utils'

export const RULE_NAME = 'enforce-beian-console'
export type MessageIds = 'firstArgMustBeBeianId'
export type Options = [
  {
    allow?: string[],
    label?: string
  }
]

export default createESLintRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce developer to add [已备案] info in console.xx',
      recommended: 'recommended'
    },
    fixable: 'code',
    messages: {
      firstArgMustBeBeianId: '方法的第一个参数必须以 [已备案]为开头',
    },
    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: {
              type: 'string'
            },
            uniqueItems: true
          },
          label: {
            type: 'string',
          }
        },
        additionalProperties: false
      }
    ],
  },
  defaultOptions: [{ allow: [], label: '[已备案]' }],
  create(context, [options]) {
    const { allow, label } = options
    return {
      CallExpression(node) {
        const {
          callee,
          arguments: args
        } = node

        if (callee.type === 'MemberExpression' && callee.object.type === 'Identifier' && callee.object.name === 'console') {
          if (callee.property.type === 'Identifier') {
            const name = callee.property.name
            if (allow.includes(name)) {
              return
            }

            const range = [callee.range[0], callee.range[1] + 1] as const
            if (args.length === 0) {
              context.report({
                node,
                messageId: 'firstArgMustBeBeianId',
                loc: node.loc,
                fix: fixer => fixer.insertTextAfterRange(range, `'${label}'`)
              })
            } else {
              const firstArg = args[0]
              if (firstArg.type !== 'Literal' || !firstArg.value.toString().startsWith(label)) {
                context.report({
                  node,
                  messageId: 'firstArgMustBeBeianId',
                  loc: node.loc,
                  fix: fixer => fixer.insertTextAfterRange(range, `'${label}', `)
                })
              }
            }
          }
        }
      }
    }
  }
})