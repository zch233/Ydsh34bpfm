## 安装

[官网](https://pinia.vuejs.org/)

```
yarn add pinia
# or with npm
npm install pinia
```

## 初始化 Pinia

```
import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(SomePiniaPlugin) // 给 pinia 装插件

const app = createApp(App)
app.use(pinia)
```

> [这里需要注意时间顺序：只有在调用 app.use(pinia) 之后才能调用 useXxxStore()](https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications)

## 使用 Store

### 注意

1. defineStore 接受一个 id，不同数据源的 id 必须是不同的
1. 不能将 useCounter() 的返回值解构，这会导致数据响应式的丢失

### 写法一：

更像原先的 vuex

```
// src/stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
  state: ()=> {
    return {j: 0, k: 0}
  }
})

// Counter.vue
import { useCounterStore } from 'path/to/src/stores/counterStore'

export default {
  setup() {
    const counterStore = useCounterStore()
    // TODO 默认情况下可以直接这么更改，但是不推荐 // https://pinia.vuejs.org/core-concepts/state.html#accessing-the-state
    counterStore.j ++

    // 这里在视图里使用 counterStore.j 和 counterStore.k
    // 但你不能解构 counterStore，只能像下面这样解构：
    const { j, k } = storeToRefs(counterStore)
    return {
      counterStore, j, k,
    }
  },
}
```

##### Store Getters

getters 其实就是 store 的计算属性集合，而且 getter 不能是异步函数

```
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount(state) {
      return state.counter * 2
    },
    doublePlusOne() {
      return this.doubleCount + 1 // getter 访问另一个 getter 或者 state 可以用 this
    },
    getUserById: (state) => { // getter 可以返回一个函数，不过这会导致缓存失效
      return (userId) => state.users.find((user) => user.id === userId)
    },
    otherGetter(state) { // 你还可以调用其他的 store
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
// store.doubleCount 和 store.doublePlusOne 就可以直接当做属性使用了
// store.getUserById(userId) 可以当做函数使用
```

##### Store Actions

action 其实就是 store 的 methods，而且可以是异步函数

```
export const useUserStore = defineStore('users', {
  state: () => ({
    userData: null,
  }),
  actions: {
    async getUser(token) {
      this.userData = await api.post({ token })
    },
  },
})
// 然后你就可以使用 userStore.getUser(token) 了
```

### 写法二：

推荐这种，符合 Vue3 setup 的编程模式，让结构更加扁平化

```
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', () => {
  const userData= ref({});
  const getUser = async () => {
    userData.value = await api.post({ token })
  }

  const userName = computed(() => userData.value.name)

  return { userData, userName, getUser };
});
```

## store.$patch(object | fn)

批量更新

```
counterStore.$patch(
   { name: 'pinia', age: counterStore.age + 1 }
)

cartStore.$patch((state) => {
  state.items.push({ name: 'vuex', age: 18 })
  state.hasChanged = true
})
```

## store.$subscribe(fn)

用于监听 state 的整体变化。

```
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  mutation.storeId
  mutation.payload // 获取 $patch 接收到的参数

  localStorage.setItem('cart', JSON.stringify(state))
})
```

> 它有一个很方便的特性是会自动在组件卸载时注销，如果你不想要，可以在 $subscribe 第二个参数处传入 `{detached: true}` 选项。

你也可以使用 watch 达到类似的效果：

```
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```

## store.$onAction()

用于监控所有 action 的执行情况。

```
const unsubscribe = someStore.$onAction(
  ({
    name, // action 的名字
    store, // store === someStore
    args, // action 的实际参数
    after, // action 成功之后执行 after
    onError, // action 失败之后执行 onError
  }) => {
    const startTime = Date.now()
    console.log(`开始执行 "${name}" 参数为 [${args.join(', ')}].`)
    after((result) => {
      console.log(
        `执行成功 "${name}" 用时 ${Date.now() - startTime}毫秒\n结果为：${result}`
      )
    })
    onError((error) => {
      console.warn(
        `执行失败 "${name}" 用时 ${Date.now() - startTime}毫秒\n报错为：${error}.`
      )
    })
  }
)
// $onAction 会在它所在组件卸载时自动销毁
// 如果你将 $onAction 的第二个参数设置为 true，那么你需要自己调用 unsubscribe 来取消监听。
```

## store.$reset()

你可以使用 counterStore.$reset() 重置 state

## store.$state

```
// 下面两句代码都能覆盖原有 state
store.$state = { counter: 666, name: 'Paimon' }
pinia.state.value = {} // 这句常用在 SSR
```
