module.exports = {
  // 每行最大字符数
  printWidth: 100,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用制表符，而使用空格
  useTabs: false,
  // 语句末尾不使用分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 对象属性只在必要时加引号
  quoteProps: 'as-needed',
  // JSX 中使用单引号
  jsxSingleQuote: true,
  // 在多行时尽可能添加尾随逗号
  trailingComma: 'es5',
  // 在对象字面量中的括号间使用空格
  bracketSpacing: true,
  // 将 > 放在多行 JSX 元素的最后一行
  bracketSameLine: false,
  // 箭头函数的参数使用括号
  arrowParens: 'avoid',
  // 不对 range 内的代码进行格式化
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要在文件开头插入 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 HTML 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // Vue 文件中的 script 和 style 标签缩进
  vueIndentScriptAndStyle: false,
  // 换行符使用 lf
  endOfLine: 'lf',
  // 嵌入式语言的格式化
  embeddedLanguageFormatting: 'auto',
  // 单个属性在一行
  singleAttributePerLine: false,
}
