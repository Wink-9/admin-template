<script lang="ts" setup>
import { dynamicRoutes } from '@/router/index.js'
import SideBarItem from './SideBarItem.vue'
import { opend } from '../sidebarShrink.js'
import dancelogo from './logo.js'
const route = useRoute();
const activeRoute = computed(() => route.path);
const sidbarOptions = computed(() => dynamicRoutes);
const { currentlogo, logoToggle }  = dancelogo()
</script>

<template>
    <el-menu class="el-menu-container" :default-active="activeRoute" :active-text-color="currentlogo.color"
        background-color="#131822" text-color="#fff" router :collapse="!opend">
        <div class="el-menu-container__head-logo">
            <img :src="`/${currentlogo.name}.svg`" :class="['logo', currentlogo.name]" @click="logoToggle" />
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