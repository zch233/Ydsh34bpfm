<template>
    <section class="standard">
        <div>
            <h1>学习技巧</h1>
            <ul>
                <li
                    >学习新语言、编程技巧的顺序应该自上而下，例如：webSocket、webRTC 之类的，应该先去学 socket、RTC，再去看
                    webXXX，就可直接上手并会发现他只是一种实践，</li
                >
                <li
                    >比一般人更深入一点，一点就够，例如大家都是 vue composition-api 好，不只是用就完事了，而是了解一点为什么好，和
                    react hooks 什么区别之类的。</li
                >
                <li>定期让自己难受，难受说明你在进步，跳出舒适圈。</li>
            </ul>
        </div>
        <div>
            <h1>工具</h1>
            <ul>
                <li>
                    <p>使用<b>yarn</b>，杜绝使用 npm（除了老项目），使用 yarn 或者 pnpm，但 pnpm 太新。</p>
                    <ul>
                        <li>一、因为 npm 比其他的慢太多。</li>
                        <li>二、目前众多的开源项目都在使用 yarn</li>
                        <li>三、团队内需要统一，如果不一致可能会出现依赖问题(npm 和 yarn 的 lock 文件不同)。</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div>
            <h1>代码</h1>
            <ul>
                <li></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Standard',
}
</script>

<style scoped lang="less">
.standard {
    padding: 0 24px;
}
</style>
