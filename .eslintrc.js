/**
 * ESlint 配置
 * @type {{root: boolean, env: {node: boolean}, extends: string[], rules: {"no-console": string, "no-debugger": string}, parserOptions: {parser: string}}}
 */
module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    //此项指定环境的全局变量，下面的配置指定为node环境
    env: {
      //browser: true,
      node: true
    },
    // 此项是用来配置标准的js风格
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
        parser: 'babel-eslint'
    }
}