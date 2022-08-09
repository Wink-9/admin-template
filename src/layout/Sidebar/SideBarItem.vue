<template>
    <template v-if="item.children && item.children.length > 0">
        <el-sub-menu :index="item.path" v-if="item.children.length !== 1">
            <template #title>
                <el-icon>
                    <UIcon :icon-class="item.meta.icon" />
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <side-bar-item v-for="childrenItem in item.children" :key="item.path" :item="childrenItem" />
        </el-sub-menu>
        <template v-else>
            <side-bar-item :item="item.children[0]" />
        </template>
    </template>
    <template v-else>
        <el-menu-item :index="item.path">
            <el-icon>
                <UIcon :icon-class="item.meta.icon" />
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
    </template>
</template>

<script lang="ts" setup name="SideBarItem">
import SideBarItem from './SideBarItem.vue'
const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
})
</script>