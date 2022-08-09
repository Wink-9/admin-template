<template>
    <div class="navbar-container__left">
        <UIcon icon-class="shrink" class="shrink-icon" :class="{ active: opend }" @click="toggleNavbar" />
        {{ pageTitle }}
    </div>
    <div class="navbar-container__right">
        <img class="avatar" src="@/assets/avatar.png" />
    </div>
</template>

<script lang="ts" setup>
import { initSiderBarShrink, opend, toggleNavbar } from '../sidebarShrink.js'
initSiderBarShrink()
const route = useRoute();
const pageTitle = computed<string>(() => route.meta.title as string);
</script>

<style lang="scss" scoped>
.navbar-container__left {
    display: flex;
    align-items: center;

    .shrink-icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        cursor: pointer;
    }

    .active {
        transform: rotate(180deg);
    }

}

.navbar-container__right {
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>