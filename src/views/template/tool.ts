export const queryConfigData = (() => {
    return {
        name: {
            label: '名称',
            type: 'input',
            queryValue: null,
        },
        userType: {
            label: '类型',
            type: 'select',
            queryValue: null,
            options: [
                {label: '正常', value: 1},
                {label: '禁用', value: 0}
            ]
        },
        creatDate: {
            label: '创建日期',
            type: 'date',
            queryValue: null,
        },
    }
})();

export const tableConfigData = (() => {
    return {
        name: {
            label: '用户名称',
            visible: true
        },
        phone: {
            label: '手机号',
            visible: true
        },
        userType: {
            label: '用户类型',
            visible: true
        },
        creatDate: {
            label: '创建日期',
            visible: true
        },
        operate: {
            label: '操作',
            visible: true
        }
    }
})();

