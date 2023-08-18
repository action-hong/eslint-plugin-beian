import rule, { RULE_NAME, Options } from './enforce-beian-console'
import { RuleTester } from '@typescript-eslint/rule-tester'

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
})

const invalid = [
  ['console.log("hello world")', 'console.log(\'[已备案]\', "hello world")'],
  ['console.log()', 'console.log(\'[已备案]\')'],
  ['console.error()', 'console.error(\'[已备案]\')'],
  ['console.error()', 'console.error(\'[已备案]\')', [{ allow: [] }]],
  ['console.log("hello world")', 'console.log(\'[自定义]\', "hello world")', [{ label: '[自定义]'}]],
] satisfies ([string, string, Options] | [string, string])[]

ruleTester.run(RULE_NAME, rule, {
  valid: [
    {
      code: 'console.log(\'[已备案]\')',
    },
    {
      code: 'console.log(\'[已备案]: 123\')',
    },
    {
      code: 'console.error(\'[已备案]\')',
    },
    {
      code: 'console.error(\'debug!\')',
      options: [
        { allow: ['error', 'warn'] }
      ]
    },
    {
      code: 'Console.error(\'custom debug!\')',
    }
  ],
  invalid: invalid.map(item => {
    const res = {
      code: item[0],
      output: item[1],
      errors: [
        {
          messageId: 'firstArgMustBeBeianId',
        }
      ]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
    if (item[2]) {
      res.options = item[2]
    }
    return res
  })
})