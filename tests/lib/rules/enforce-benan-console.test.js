const { RuleTester } = require('eslint')
const enforceBeianConsole = require('../../../lib/rules/enforce-beian-console')

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
  }
})

ruleTester.run(
  'enforce-beian-console',
  enforceBeianConsole,
  {
    valid: [
      {
        code: "console.log('[已备案]')",
      },
      {
        code: "console.log('[已备案]: 123')",
      },
      {
        code: "console.error('[已备案]')",
      },
      {
        code: "console.error('debug!')",
        options: [
          { allow: ['error', 'warn'] }
        ]
      },
      {
        code: "Console.error('custom debug!')",
      }
    ],
    invalid: [
      {
        code: "console.log('hello world')",
        output: "console.log('[已备案]', 'hello world')",
        errors: [
          {
            messageId: 'firstArgMustBeBeianId',
            type: 'CallExpression'
          }
        ]
      },
      {
        code: "console.log()",
        output: "console.log('[已备案]')",
        errors: [
          {
            messageId: 'firstArgMustBeBeianId',
            type: 'CallExpression'
          }
        ]
      },
      {
        code: "console.error()",
        output: "console.error('[已备案]')",
        errors: [
          {
            messageId: 'firstArgMustBeBeianId',
            type: 'CallExpression'
          }
        ]
      },
      {
        code: "console.error()",
        output: "console.error('[已备案]')",
        options: [ { allow: ['log', 'warn'] } ],
        errors: [
          {
            messageId: 'firstArgMustBeBeianId',
            type: 'CallExpression'
          }
        ]
      }
    ]
  }
)

console.log('[已备案]', 'All tests passed!');