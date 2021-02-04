mock函数作用：
1. 捕获函数调用
a. 捕获函数的调用
b. 捕获函数调用的返回结果
c. 捕获函数调用后的 this 指向
d. 捕获函数调用顺序

2. 可让我们自由的设置返回结果

```js
test('测试 runCallback', async () => {
  const fn = jest.fn(() => `回调返字符串`)
  // 等价于下面的写法
  const fn1 = jest.fn()
  fn1.mockImplementation(() => {
    return `回调返字符串`
  })
})

```


3. 改变函数的内部实现

```js
jest.mock('axios')

test('测试 getData', async () => {
  axios.get.mockResolveValue({ code: 0, data: [] })
  let res = await getData()
  expect(res.code).toBe(0)
})

```

```js
// 该路径下要创建 __mocks__ 文件夹
// 这里实际用的 __mocks__/demo.js
jest.mock('./demo.js')
import {fetchData} from './demo.js'
// 异步方法用 jest.mock 一般方法就用文件里的func
const {func} = jest.requireActurl('./demo.js')
```

`export default function demoFunc() {
  // 非常复杂
}`

```js
// 有jest.mock语法的会默认放到第一行
jest.mock('./util')

import demoFunc from './demo'
```
