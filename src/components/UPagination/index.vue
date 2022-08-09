<template>
    <el-affix position="bottom" :offset="20">
        <el-pagination v-bind="$attrs" :page-sizes="[5, 10, 20, 50]" layout="total, prev, pager, next" />
    </el-affix>
</template>

<style scoped lang="scss">
.el-pagination {
    margin-top: 10px;
}
</style>