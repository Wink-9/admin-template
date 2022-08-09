<script lang="ts" setup>
import { dynamicRoutes } from '@/router/index.js'
import SideBarItem from './SideBarItem.vue'
import { opend } from '../sidebarShrink.js'
const route = useRoute();
const activeRoute = computed(() => route.path);
const sidbarOptions = computed(() => dynamicRoutes);
</script>

<template>
    <el-menu class="el-menu-container" :default-active="activeRoute" active-text-color="#ffd04b"
        background-color="#131822" text-color="#fff" router :collapse="!opend">
        <div class="el-menu-container__head-logo">
            <!-- <img src="@/assets/logo/vite.svg" class="logo vite" /> -->
            <!-- <img src="@/assets/logo/vue.svg" class="logo vue" /> -->
            <img src="@/assets/logo/pinia.svg" class="logo pinia" />
            <!-- <img src="@/assets/logo/ts.svg" class="logo ts" /> -->
        </div>
        <side-bar-item v-for="item in sidbarOptions" :item="item" :key="item.path" />
    </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-container {
    height: 100%;

    &:not(.el-menu--collapse) {
        width: 200px;
    }

    &__head-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;

        .logo {
            height: 40px;
            width: 40px;
            will-change: filter;
            padding: 5px;

            &.vite {
                &:hover {
                    filter: drop-shadow(0 0 10px #d76a74);
                }
            }

            &.vue {
                &:hover {
                    filter: drop-shadow(0 0 10px #20ae7c);
                }
            }

            &.pinia {
                &:hover {
                    filter: drop-shadow(0 0 10px #fdc958);
                }
            }

            &.ts {
                &:hover {
                    filter: drop-shadow(0 0 10px #1a80c5);
                }
            }
        }
    }
}
</style>