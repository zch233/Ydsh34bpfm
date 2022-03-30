<template>
    <section class="mobileDemo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" src="/mobile.html/#/menu"></iframe>
        </div>
    </section>
</template>

<script>
import CodeBar from '@/components/CodeBar'

export default {
    name: 'DemoMenu',
    components: { CodeBar },
    data() {
        return {
            code: `
<p>正常</p>
<Menu :menus="[
    {icon: 'setting', label: '设置'},
    {icon: 'fire', label: '着火'},
    {icon: 'coupon', label: '优惠券'},
]" />

<p>可滑动</p>
<Menu :menus="[
    {icon: 'setting', label: '设置'},
    {icon: 'fire', label: '着火'},
    {icon: 'coupon', label: '优惠券'},
    {icon: 'cart', label: '购物车'},
    {icon: 'gem', label: '钻石'},
    {icon: 'friends', label: '通讯录'},
    {icon: 'bag', label: '袋子'},
    {icon: 'comment', label: '消息'},
    {icon: 'service', label: '客服'},
]" />

<p>自定义数量</p>
<Menu col="5" row="1" :menus="[
    {icon: 'setting', label: '设置'},
    {icon: 'fire', label: '着火'},
    {icon: 'coupon', label: '优惠券'},
    {icon: 'cart', label: '购物车'},
    {icon: require('@/assets/logo.png'), label: '钻石'},
    {icon: 'friends', label: '通讯录'},
    {icon: 'bag', label: '袋子'},
    {icon: 'comment', label: '消息'},
    {icon: 'service', label: '客服'},
]" />

<p>自定义渲染</p>
<Menu :menus="[
    {icon: 'setting', customTitle: '设置'},
    {icon: 'fire', customTitle: '着火'},
    {icon: 'coupon', customTitle: '优惠券'},
    {icon: 'cart', customTitle: '购物车'},
    {icon: 'gem', customTitle: '钻石'},
    {icon: 'friends', customTitle: '通讯录'},
    {icon: 'bag', customTitle: '袋子'},
    {icon: 'comment', customTitle: '消息'},
    {icon: 'service', customTitle: '客服'},
]">
    <template #default="{ item }">
        <h2>{{ item.customTitle }}</h2>
    </template>
</Menu>

`,
        }
    },
}
</script>

<style scoped lang="less">
.iframeWrapper {
    padding: 24px;
}
</style>
