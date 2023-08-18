# Enforce developer to add [已备案] info in console.xx (`beian/enforce-beian-console`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

💼 This rule is enabled in the ✅ recommended config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

This ESLint rule enforces that the console.xx statements include [已备案] (meaning "[Recorded]") as their first argument to ensure proper content validation before output.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/* eslint beian/enforce-beian-console: "error" */
console.log('This is a log message')
console.warn('This is a log message')
console.error('This is a log message')
```

Example of **correct** code for this rule:

```js
/* eslint beian/enforce-beian-console: "error" */
console.log('[已备案]', 'This is a log message')
console.warn('[已备案]','This is a log message')
```

## Options

This rule has an object option for exceptions:

- `"allow"` has an array of strings which are allowed methods of the `console` object

Examples of additional **correct** code for this rule with a sample `{ "allow": ["warn", "error"] }` option:

```js
/* eslint beian/enforce-beian-console: ["error", { allow: ["error", "warn"] }] */
console.warn('This is a log message')
console.error('This is a log message')
```

## When Not To Use It

If you don't mind, you may not want to enable this rule.
