// ts声明变量的类型，必须备案才能使用

/**
 * @type {import('eslint/lib/shared/types').Rule}
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce developer to record type of variable',
    },
    messages: {
      shouldRecordType: '变量 {{name}} 的类型必须备案',
    }
  },
  create(context) {
    const options = context.options[0] || {};
    const allowed = options.allow || ['string', 'number', 'boolean', 'object'];

    return {
      VariableDeclaration(node) {
        // 获取声明类型
        const { declarations } = node;
        const { typeAnnotation } = declarations[0];
        console.log(typeAnnotation);
        
      }
    }
  }
}