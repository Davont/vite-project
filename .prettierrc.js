
module.exports = {
  printWidth: 120,                   // 超过最大值换行
  tabWidth: 2,                       // 缩进字节数
  useTabs: false,                    // 缩进不使用 tab, 使用空格
  semi: true,                        // 句尾添加分号
  singleQuote: true,                 // 使用单引号代替双引号
  quoteProps: 'as-needed',           // 对象的 key 在必要时使用引号
  jsxSingleQuote: true,              // 在 jsx 中使用单引号
  trailingComma: 'all',              // 在对象和数组最后一个元素后面是否加逗号
  bracketSpacing: true,              // 在对象、数组括号与文字之间添加空格
  arrowParens: 'always',             // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0,                     // 每个文件格式化的范围是文件的全部内容
  rangeEnd: null,
  requirePragma: false,              // 不需要写文件开头的 @prettier
  insertPragma: false,               // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve',             // 代码超出是否要换行，preserve 保留
  htmlWhitespaceSensitivity: 'css',  //  html 里面的空格遵守CSS显示属性的默认值
  endOfLine: 'lf',                   // 设置统一的行结尾样式
};