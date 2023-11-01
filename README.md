# naive-toFixed

To fix the error of the toFixed method not preserving decimal places

修正toFixed方法保留小数位的错误

## install

```
npm install naive-toFixed
```

### import and use

```javascript

import naiveToFixed from 'naive-toFixed'

const a = 1.345

console.log(a.toFixed(2)) // '1.34'

console.log(naiveToFixed(a, 2)) // '1.35' got it!

```

