```js
import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(/**/)
app.mount('#app')
```

全局配置

Vue.config -> app.config

- config.productionTip 删除
- config.ignoreElements 改为 config.isCustomElement
- config.keyCodes 删除

全局注册类API

Vue.component -> app.component
Vue.directive -> app.directive

行为扩展类API

Vue.mixin -> app.mixin
Vue.use -> app.use

全局API Treeshaking

```js
import {nextTick, observable} from 'vue
```

## teleport 传送门

<teleport to="body">
  <div>传送门</div>
</teleport>

ref 用来定义基本类型数据
reactive 用来定义 复杂类型数据 {} [] Set Map等

setup里面 改变ref定义的对象的值  记得到加 ref.value

如果是将 reactive里的值拿来解构，再return，如

```js
setup() {
  const person = reactive({
    name: 'fri',
    age: 28
  })
  // 这样用 name 和 age 都只是基本类型的引用
  // 如果后续作了修改 watch onMounted钩子里，模版里不会变
  const {name, age} = person

  return {
    name,
    age
  }
}


```
