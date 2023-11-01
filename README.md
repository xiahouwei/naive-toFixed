# naive-tofixed

To fix the error of the toFixed method not preserving decimal places

修正toFixed方法保留小数位的错误

## install

```
npm install naive-tofixed
```

### import and use

```javascript

import NaToFixed from 'naive-tofixed'

const a = 1.345

console.log(a.toFixed(2)) // '1.34'

console.log(NaToFixed(a, 2)) // '1.35' got it!

```

