/**
 *
 * 给定一个只包括 '(', ')', '[', ']', '{', '}'的字符串，判断字符串是否有效？
 *
 * 有效字符串满足：
 * 1. 左括号必须用相同类型的右括号闭合
 * 2. 左括号必须以正确的顺序闭合
 * 注意：空字符串可被认为有效字符串
 */

const isValid = (s) => {
  const items = [];
  const str = s.replace(/\s/g, '');
  const len = str.length;
  if (len % 2 !== 0) {
    return false;
  }
  for (let index = 0; index < len; index++) {
    const letter = items[items.length - 1];
    switch (str[index]) {
      case '(':
        items.push('(');
        break;
      case '[':
        items.push('[');
        break;
      case '{':
        items.push('{');
        break;
      case ')':
        letter === '(' && items.pop();
        break;
      case ']':
        letter === '[' && items.pop();
        break;
      case '}':
        letter === '{' && items.pop();
        break;
      default:
        break;
    }
  }
  return items.length === 0;
};

console.log(isValid('{[] }'));
