<script lang="ts" setup>
/**
 * selection                        // 表格是否多选
 * 
 * Note: toolConfig 表格列（column）配置项
 * columnkey: {                     // 对应表格数据中key
    label: ''                       // 表头文字
    width: ''                       // 对应列的宽度
    minWidth: ''                    // 对应列的最小宽度
    visible: true                   // 列显示状态，true 显示，false 隐藏
 */
const props = defineProps({
    toolConfig: {
        type: Object,
        default: () => ({}),
    },
    selection: {
        type: Boolean,
        dufault: false
    },
    tableLoading: {
        type: Boolean,
        dufault: true
    }
})
</script>
<template>
    <el-table stripe v-bind="$attrs" border>
        <el-table-column v-if="selection" type="selection" width="55" />
        <template v-for="(row, key) in toolConfig" :key="key">
            <el-table-column v-if="row.visible" :prop="key" :label="row.label" align="center" :width="row.width"
                :min-width="row.minWidth">
                <template #header class=".header-template">
                    <slot :name="key + '-header'">
                        {{ row.label }}
                    </slot>
                </template>
                <template #default="scope">
                    <slot :name="key" v-bind="scope">
                        {{ scope.row[key] }}
                    </slot>
                </template>
            </el-table-column>
        </template>

    </el-table>
</template>

