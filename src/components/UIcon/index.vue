<script lang="ts" setup>
interface Props {
    iconClass: string
    className?: string
    color?: string
}
const props = withDefaults(defineProps<Props>(), {
    iconClass: '',
    className: '',
    color: 'currentColor',
})
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
    if (props.className) {
        return `svg-icon ${props.className}`;
    }
    return "svg-icon";
})
</script>

<style scope>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
}
</style>

<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" :fill="color" />
    </svg>
</template>

