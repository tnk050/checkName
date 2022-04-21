import charTable from './charTable';

export default function convertRomanToKana(original: string): string {
  const str = original.toLowerCase();
  let result = '';
  let tmp = '';
  let index = 0;
  const len = str.length;
  let node: object = charTable;
  const push = (char: string, toRoot = true) => {
    result += char;
    tmp = '';
    node = toRoot ? charTable : node;
  };
  while (index < len) {
    const char = str.charAt(index);
    if (char.match(/[a-z]/)) {
      // 英数字以外は考慮しない
      if (node.hasOwnProperty(char)) {
        const next: object | string = node[char];
        if (typeof next === 'string') {
          push(next);
        } else {
          tmp += original.charAt(index);
          node = next;
        }
        index++;
        continue;
      }
      const prev = str.charAt(index - 1);
      if (prev && (prev === 'n' || prev === char)) {
        // 促音やnへの対応
        push(prev === 'n' ? 'ン' : 'ッ', false);
      }
      if (node !== charTable && char in charTable) {
        // 今のノードがルート以外だった場合、仕切り直してチェックする
        push(tmp);
        continue;
      }
    }
    push(tmp + char);
    index++;
  }
  tmp = tmp.replace(/n$/, 'ン'); // 末尾のnは変換する
  push(tmp);
  return result;
}
