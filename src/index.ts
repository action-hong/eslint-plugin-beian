import enforceBeianConsole from './rules/enforce-beian-console'

export default {
  rules: {
    'enforce-beian-console': enforceBeianConsole
  },
  configs: {
    recommended: {
      plugins: ['beian'],
      rules: {
        'beian/enforce-beian-console': 'error',
      },
    }
  }
}