## setup 执行时机？

created 实例被完全初始化之前执行（相当于 beforeCreated 和 created）

```js
setup(props, context) {
  return {
    //
  }
}
```

setup return的值可以在template里直接使用

setup 里不能用 this

context

## ref

原理：通过proxy对数据进行封装，当数据变化时，触发模版等内容的更新

## reactive

用于处理复杂类型 -> 变成响应式引用

##  readonly 类似 const

## toRefs 对象里的 基本类型 转换为响应式数据

## toRef

对象里的值 哪怕转响应式了 proxy({})， 如果一开始未定义 是undefined
那么不会是响应式数据，所以需要 toRef 对未定义的对象里的值初始化

## watch

具备一定的惰性 lazy 参数可以拿到原始和当前值
还可以侦听多个数据的变化，用一个侦听器承载

```js
watch(() => obj.foo, (newVal, oldVal) => {
  //
})

watch([() => obj.foo, () => obj.bar], ([newFoo, newBar], [oldFoo, oldBar]) => {
  //
})
```

## watchEffect

侦听器，偏向于effect
不需要传递要侦听的内容，自动感知代码依赖，不需要依赖参数，只要传递一个销毁钩子。但也不能获取旧值

```js
const foo = ref('')
const stop = watchEffect(() => {
  console.log(foo);
  setTimeout(() => {
    stop()
  }, 5000)
})

```

## 生命周期函数

因为 setup 钩子是 beforeCreate created 前执行完毕

里面可用的生命周期函数~ 从vue2 => vue3

beforeMount => onBeforeMount
mounted => onMounted
beforeUpdate => onBeforeUpdate
beforeUnmount => onBeforeUnmount
                   onUnmounted

onRenderTracked 每次渲染后重新收集响应式依赖
onRenderTriggered  每次触发页面重新渲染时自动执行

## compositionAPI 语法，获取真实DOM节点

```html
const app = Vue.createApp({
  setup() {
    const hello = ref(null)

    onMounted(() => {
      console.log(hello)
    })
    return { hello }
  },
  template: `
    <div ref="hello">hello world</div>
  `
})
```
