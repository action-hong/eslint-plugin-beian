# eslint-plugin-beian

remind developers that the code needs to put on record

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
        "beian/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


