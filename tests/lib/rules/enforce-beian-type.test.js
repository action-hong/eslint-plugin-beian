const { RuleTester } = require('@typescript-eslint/rule-tester')
const enforceBeianType = require('../../../lib/rules/enforce-beian-type')
const test = require('mocha')

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',

})


ruleTester.run(
  'enforce-beian-type',
  enforceBeianType,
  {
    valid: [
      {
        code: 'const a: string = "hello world"',
      }
    ],
    invalid: [
      // {
      //   code: 'const a: Test = "hello world"',
      // }
    ]
  }
)

ruleTester.afterAll = test.after