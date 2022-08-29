

<script setup lang="ts">
import Sidebar from './Sidebar/index.vue'
import Navbar from './Navbar/index.vue'
import AppMian from './AppMian.vue';
</script>

<template>
    <el-container>
        <el-aside>
            <Sidebar />
        </el-aside>
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <AppMian/>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped>
.el-container {
    height: 100%;
}

.el-aside {
    height: 100%;
    width: auto;
}

.el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>