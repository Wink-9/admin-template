import { defineStore } from 'pinia'
import { userStateType } from './types'

export const userStore = defineStore('userStore', {
    state:():userStateType => {
        return {
            user: 1,
        }
    },
    actions: {
        setUserValue() {
            this.user ++
        },
    },
})