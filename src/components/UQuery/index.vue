<script lang="ts" setup>
/**
 * Note: toolConfig 查询配置项
 *
 * key: {
    abel: '关键词',              // 表单标签文本
    type: 'input',              // 表单元素类型，不配置默认为input (input/select/日期选择器类型同el-date-picker一致)
    queryValue: null,           // 表单元素绑定值
    options:[]                  // type 为 select 时对应下拉数据
    },
 */
import type { FormInstance } from 'element-plus'
const props = defineProps({
    toolConfig: {
        type: Object,
        default: () => ({})
    }
})
const emit = defineEmits(['search'])
const queryModel = ref(props.toolConfig);
const queryFormEl = ref<FormInstance>()
interface QueryValueInterface {
    [key: string]: any
}
function onSearch() {
    let queryValueData: QueryValueInterface = {};
    Object.keys(queryModel.value).forEach((key: string) => {
        queryValueData[key] = queryModel.value[key].queryValue;
    });
    emit('search', queryValueData)
}

function onReset(formEl: FormInstance | undefined) {
    formEl?.resetFields()
    onSearch()
}

const dataPickType: QueryValueInterface = {
    year: {
        valueFormat: 'YYYY'
    },
    month: {
        valueFormat: 'MM'
    },
    date: {
        valueFormat: 'YYYY-MM-DD'
    },
    dates: {
        valueFormat: 'YYYY-MM-DD'
    },
    datetime: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    week: {
        format: "[Week] ww"
    },
    datetimerange: {
        valueFormat: 'YYYY-MM-DD HH:mm:ss',
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期"
    },
    daterange: {
        valueFormat: 'YYYY-MM-DD',
        startPlaceholder: "开始日期",
        endPlaceholder: "结束日期"
    },
    monthrange: {
        valueFormat: 'MM',
        startPlaceholder: "开始月份",
        endPlaceholder: "结束月份"
    }
}
</script>

<template>
    <el-form class="query-form" ref="queryFormEl" label-position="right" inline :model="queryModel">
        <template v-for="(row, key) in queryModel" :key="key">
            <el-form-item :label="row.label" :prop="key">
                <el-input v-if="row.type === 'input' || !row.type" v-model="row.queryValue" placeholder="请输入" />
                <el-select v-else-if="row.type === 'select'" v-model="row.queryValue" placeholder="请选择">
                    <el-option v-for="item in (row.options || [])" :key="item.value" :label="item.label"
                        :value="item.value" :disabled="item.disabled" />
                </el-select>
                <el-date-picker v-else-if="Object.keys(dataPickType).includes(row.type)" v-model="row.queryValue"
                    v-bind="dataPickType[row.type]" :type="row.type" placeholder="选择日期" clearable />
            </el-form-item>
        </template>
        <el-form-item>
            <el-button type="primary" @click="onSearch">Search</el-button>
            <el-button @click="onReset(queryFormEl)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>