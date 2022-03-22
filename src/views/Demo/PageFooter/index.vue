<template>
    <div>
        <PageFooter>
            <Button block round>上一步</Button>
            <Button block type="primary" round>下一步</Button>
        </PageFooter>
    </div>
</template>

<script>
import PageFooter from '@/../packages/PageFooter'
import { Button } from 'vant'

export default {
    name: 'DemoMenu',
    components: { PageFooter, Button },
}
</script>

<style lang="less">
.pageFooter-main {
    display: flex;
    justify-content: space-between;

    button {
        margin: 0 7px;
    }
}
</style>
