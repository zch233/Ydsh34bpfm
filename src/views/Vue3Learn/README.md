<img src="https://user-images.githubusercontent.com/499550/93624428-53932780-f9ae-11ea-8d16-af949e16a09f.png" style="width:200px" />

### 新的特性

1. Composition API（组合 API）

    - setup 配置
    - ref 与 reactive
    - watch 与 watchEffect
    - provide 与 inject
    - ......

2. 新的内置组件
    - Fragment
    - Teleport
    - Suspense
3. 其他改变

    - 新的生命周期钩子
    - data 选项应始终被声明为一个函数
    - 移除 keyCode 支持作为 v-on 的修饰符
    - ......

# 一、常用 Composition API

官方文档: https://v3.cn.vuejs.org/guide/composition-api-introduction.html

## 1.拉开序幕的 setup

1. 注意点：
    1. 尽量不要与 Vue2.x 配置混用
        - Vue2.x 配置（data、methos、computed...）中<strong style="color:#DD5145">可以访问到</strong>setup 中的属性、方法。
        - 但在 setup 中<strong style="color:#DD5145">不能访问到</strong>Vue2.x 配置（data、methos、computed...）。
        - 如果有重名, setup 优先。
    2. setup 不能是一个 async 函数，因为返回值不再是 return 的对象, 而是 promise, 模板看不到 return 对象中的属性。（后期也可以返回一个 Promise 实例，但需要 Suspense 和异步组件的配合）

## 2.ref 函数

-   备注：
    -   接收的数据可以是：基本类型、也可以是对象类型。
    -   基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
    -   对象类型的数据：内部 <i style="color:gray;font-weight:bold">“ 求助 ”</i> 了 Vue3.0 中的一个新函数—— `reactive`函数。

### 2.watch 函数

-   两个小“坑”：

    -   监视 reactive 定义的响应式数据时：**oldValue 无法正确获取、且强制开启了深度监视（deep 配置失效）**。
    -   监视 reactive 定义的响应式数据中**某个属性时：deep 配置有效。**

    ```js
    /* 情况三：监视reactive定义的响应式数据
    			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
    			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
    */
    watch(
        person,
        (newValue, oldValue) => {
            console.log('person变化了', newValue, oldValue)
        },
        { immediate: true, deep: false }
    ) //此处的deep配置不再奏效
    ```

### 生命周期

-   Vue3.0 中可以继续使用 Vue2.x 中的生命周期钩子，但有有两个被更名：
    -   `beforeDestroy`改名为 `beforeUnmount`
    -   `destroyed`改名为 `unmounted`
-   Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：
    -   `beforeCreate`===>`setup()`
    -   `created`=======>`setup()`
    -   `beforeMount` ===>`onBeforeMount`
    -   `mounted`=======>`onMounted`
    -   `beforeUpdate`===>`onBeforeUpdate`
    -   `updated` =======>`onUpdated`
    -   `beforeUnmount` ==>`onBeforeUnmount`
    -   `unmounted` =====>`onUnmounted`

## 10.toRef

注意：当下面再往 perosn 里再加属性，toRefs 是解析不到的，解决方案：直接 return{ person} 使用新增的属性通过使用 person.新增属性 去使用；

# 二、其它 Composition API

## 1.shallowReactive 与 shallowRef

-   shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
-   shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。

-   什么时候使用?
    -   如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===> shallowReactive。
    -   如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

## 4.customRef

-   作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。

-   实现防抖效果：

    ```vue
    <template>
        <input type="text" v-model="keyword" />
        <h3>{{ keyword }}</h3>
    </template>

    <script>
    import { ref, customRef } from 'vue'
    export default {
        name: 'Demo',
        setup() {
            // let keyword = ref('hello') //使用Vue准备好的内置ref
            //自定义一个myRef
            function myRef(value, delay) {
                let timer
                //通过customRef去实现自定义
                return customRef((track, trigger) => {
                    return {
                        get() {
                            track() //告诉Vue这个value值是需要被“追踪”的
                            return value
                        },
                        set(newValue) {
                            clearTimeout(timer)
                            timer = setTimeout(() => {
                                value = newValue
                                trigger() //告诉Vue去更新界面
                            }, delay)
                        },
                    }
                })
            }
            let keyword = myRef('hello', 500) //使用程序员自定义的ref
            return {
                keyword,
            }
        },
    }
    </script>
    ```

## 6.响应式数据的判断

-   isRef: 检查一个值是否为一个 ref 对象
-   isReactive: 检查一个对象是否是由 `reactive` 创建的响应式代理
-   isReadonly: 检查一个对象是否是由 `readonly` 创建的只读代理
-   isProxy: 检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理

# 三、新的组件

## 1.Fragment

-   在 Vue2 中: 组件必须有一个根标签
-   在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
-   好处: 减少标签层级, 减小内存占用

## 2.Teleport

-   什么是 Teleport（传送）？—— `Teleport` 是一种能够将我们的<strong style="color:#DD5145">组件 html 结构</strong>移动到指定位置的技术。

    ```vue
    <teleport to="移动位置">
    	<div v-if="isShow" class="mask">
    		<div class="dialog">
    			<h3>我是一个弹窗</h3>
    			<button @click="isShow = false">关闭弹窗</button>
    		</div>
    	</div>
    </teleport>
    ```

## 3.Suspense

-   等待异步组件时渲染一些额外内容，让应用有更好的用户体验

-   使用步骤：

    -   异步引入组件

        ```js
        import { defineAsyncComponent } from 'vue'
        const Child = defineAsyncComponent(() => import('./components/Child.vue'))
        ```

    -   使用`Suspense`包裹组件，并配置好`default` 与 `fallback`

        ```vue
        <template>
            <div class="app">
                <h3>我是App组件</h3>
                <Suspense>
                    <template v-slot:default>
                        <Child />
                    </template>
                    <template v-slot:fallback>
                        <h3>加载中.....</h3>
                    </template>
                </Suspense>
            </div>
        </template>
        ```

# 四、其他

-   <strong style="color:#DD5145">移除</strong>keyCode 作为 v-on 的修饰符，同时也不再支持`config.keyCodes`

-   <strong style="color:#DD5145">移除</strong>`v-on.native`修饰符

    -   父组件中绑定事件

        ```vue
        <my-component v-on:close="handleComponentEvent" v-on:click="handleNativeClickEvent" />
        ```

    -   子组件中声明自定义事件

        ```vue
        <script>
        export default {
            emits: ['close'],
        }
        </script>
        ```

-   [v-for 中的 Ref 数组](https://v3.cn.vuejs.org/guide/migration/array-refs.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5)

    -   在 Vue 2 中，在 v-for 里使用的 ref attribute 会用 ref 数组填充相应的 $refs property，如下所示，会得到一个数组

        ```vue
        <div v-for="item in list" ref="itemRefs"></div>
        ```

    -   在 Vue 3 中，这样的用法将不再在 $ref 中自动创建数组，需要使用更为灵活的方式

        ```vue
        <div v-for="item in list" :ref="setItemRef"></div>

        export default { data() { return { itemRefs: [] } }, methods: { setItemRef(el) { if (el) { this.itemRefs.push(el) } } } }
        ```

-   [router-link 的 tag 属性问题](https://router.vuejs.org/zh/api/#router-link-%E7%9A%84-v-slot)

    -   在 vue-router4 中再使用 tag 属性的话会报警告，这是因为在 vue-routerv3.1.x 以上版本，新增 v-slot，推荐使用 custom、v-slot 代替 tag 属性，官方文档中的介绍是：

        ```
        <router-link> 是否应该将其内容包裹在 <a> 元素中，在使用 v-slot 创建自定义 RouterLink 时很有用。
        默认情况下，<router-link> 会将其内容包裹在 <a> 元素中，即使使用 v-slot 也是如此，传递自定义的 prop，可以去除这种行为。
        ```

    -   例如：

        ```
        <router-link to="/home" custom v-slot="{ navigate, href, route }">
          <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link>

        将会渲染成 <a href="/home">/home</a>

        <router-link to="/home" v-slot="{ route }">
          <span>{{ route.fullPath }}</span>
        </router-link>

        渲染成 <a href="/home"><span>/home</span></a>

        参数：
        · href：解析后的 URL。将会作为一个 `<a>` 元素的 href 属性。如果什么都没提供，则它会包含 base。
        · route：解析后的规范化的地址。
        · navigate：触发导航的函数。 会在必要时自动阻止事件，和 router-link 一样。例如：ctrl 或者 cmd + 点击仍然会被 navigate 忽略。
          也就是说，例如 <a :href="href" @click="navigate"></a> 这样的情况，href 会失效。
        · isActive：如果需要应用 active class，则为 true。允许应用一个任意的 class。
        · isExactActive：如果需要应用 exact active class，则为 true。允许应用一个任意的 class。
        ```

    ​
