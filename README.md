# eslint-plugin-beian

remind developers that the code needs to put on record

提醒开发者打印输出的结果记得备案！

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-beian`:

```sh
npm install eslint-plugin-beian --save-dev
```

## Usage

Add `beian` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
      "beian"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "beian/enforce-beian-console": "error"
    }
}
```

or start with the recommended rule set:

```json
{
  "extends": ["plugin:beian/recommended"]
}
```

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                         | Description                                       | 💼 | 🔧 |
| :----------------------------------------------------------- | :------------------------------------------------ | :- | :- |
| [enforce-beian-console](docs/rules/enforce-beian-console.md) | Enforce developer to add [已备案] info in console.xx | ✅  | 🔧 |

<!-- end auto-generated rules list -->


