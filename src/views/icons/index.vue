<script lang="ts" setup>
import svgIcons from './svg-icons.js'
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'

function generateIconCode(key: string): string {
  return `<UIcon icon-class="${key}" />`
}

function copyIconCode(key: string) {
  const { toClipboard } = useClipboard();
  toClipboard(generateIconCode(key)).then(() => {
    ElMessage.success('已复制！！')
  }).catch(() => {
    ElMessage.error('复制失败！！')
  })

}
</script>
<template>
  <div class="icons-grid">
    <el-tooltip v-for="key in svgIcons" :key="key" :content="generateIconCode(key)" placement="top">
      <div class="icon" @click="copyIconCode(key)">
        <UIcon :icon-class="key" />
        <span>{{ key }}</span>
      </div>
    </el-tooltip>
  </div>
</template>
<style lang="scss" scoped>
.icons-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

  .icon {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>

