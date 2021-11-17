<template>
    <div class="el-empty">
        <div class="el-empty-image">
            <svg-icon name="empty" :size="180" />
        </div>
        <div class="el-empty-description">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        description: String,
    },
}
</script>

<style lang="less" scoped>
.el-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .el-empty-description {
        margin-top: 20px;

        p {
            margin: 0;
            font-size: 14px;
            color: #909399;
        }
    }
}
</style>
