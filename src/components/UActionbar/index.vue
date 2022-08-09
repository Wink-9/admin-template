<script lang="ts" setup>
const props = defineProps({
    toolConfig: {
        type: Object,
        default: () => ({})
    }
})
</script>

<template>
    <div class="action-bar">
        <div class="action-bar__left">
            <slot></slot>
        </div>
        <div class="action-bar__right">
            <el-dropdown :hide-on-click="false" trigger="click" popper-class="action-bar__popper">
                <el-button>
                    <UIcon iconClass="control" />
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, key) in toolConfig" :key="key">
                            <el-checkbox v-model="item.visible" :label="item.label" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<style lang="scss">
.action-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.action-bar__popper {
    max-height: 800px;
    overflow: auto;
}
</style>