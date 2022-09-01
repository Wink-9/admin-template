<script lang="ts" setup>
import { queryConfigData, tableConfigData } from './tool.js';
const tableConfig = ref(tableConfigData)
const tableLoading = ref(false);
getList()
const listQuery = ref({
    currentPage: 1,
    pageSize: 10
})
const tableData = ref<Array<object>>([])
function getList() {
    tableLoading.value = true
    setTimeout(() => {
        tableData.value = [
            {
                creatDate: '2016-05-03',
                name: 'Tom',
                phone: '1888888888',
                userType: 0
            },
            {
                creatDate: '2016-05-02',
                name: 'Tom',
                phone: '1888888888',
                userType: 1
            },
            {
                creatDate: '2016-05-04',
                name: 'Tom',
                phone: '1888888888',
                userType: 1
            },
            {
                creatDate: '2016-05-01',
                name: 'Tom',
                phone: '1888888888',
                userType: 1
            },
        ]
        tableLoading.value = false
    }, 500)
}

function search(val: object) {
    getList()
}

function handleSelectionChange(val: object) {
    console.log(val)
}

function handleCurrentChange() { }
</script>


<template>
    <div class="app-container">
        <UQuery :toolConfig="queryConfigData" @search="search" />
        <UActionbar :toolConfig="tableConfig">
            <el-button type="primary">新增</el-button>
        </UActionbar>
        <UTable :toolConfig="tableConfig" :data="tableData" v-loading="tableLoading" selection
            @selection-change="handleSelectionChange">
            <template #operate="{ row }">
                <el-button-group>
                    <el-button type="success" text>编辑</el-button>
                    <el-button type="warning" text>删除</el-button>
                </el-button-group>
            </template>
        </UTable>
        <UPagination v-model:currentPage="listQuery.currentPage" v-model:page-size="listQuery.pageSize" :total="100"
            @current-change="handleCurrentChange" />
    </div>
</template>