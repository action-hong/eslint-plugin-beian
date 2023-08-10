// console.log的第一个参数必须显示指出 已备案

/** @type {import('eslint/lib/shared/types').Rule} */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce developer to add [已备案] info in console.xx',
    },
    fixable: 'code',
    messages: {
      firstArgMustBeBeianId: '方法的第一个参数必须以 [已备案]为开头',
    },
    schema: [
      {
        type: "object",
        properties: {
          allow: {
            type: "array",
            items: {
              type: "string"
            },
            minItems: 1,
            uniqueItems: true
          }
        },
        additionalProperties: false
      }
    ]
  },
  create(context) {
    const options = context.options[0] || {};
    const allowed = options.allow || [];
    return {
      CallExpression(node) {
        const { callee, arguments: args } = node
        if (callee.type === 'MemberExpression' && callee.object.name === 'console') {
          const name = callee.property.name
          if (allowed.includes(name)) return

          const range = [callee.range[0], callee.range[1] + 1]
          if (args.length === 0) {
            context.report({
              node,
              messageId: 'firstArgMustBeBeianId',
              loc: node.loc,
              fix(fixer) {
                return fixer.insertTextAfterRange(range, "'[已备案]'")
              },
            })
          } else {
            const firstArg = args[0]
            if (firstArg.type !== 'Literal' || !firstArg.value.startsWith('[已备案]')) {
              context.report({
                node,
                messageId: 'firstArgMustBeBeianId',
                loc: node.loc,
                fix(fixer) {
                  return fixer.insertTextAfterRange(range, "'[已备案]', ")
                },
              })
            }
          }
        }
      }
    }
  }
}