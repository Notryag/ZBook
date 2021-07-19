<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="/home/article">文章</el-menu-item>
    <el-menu-item index="/home/aboute">关于我</el-menu-item>
    <el-menu-item index="/home/commont">留言中心</el-menu-item>
    <el-menu-item style="float:right">
      <el-dropdown>
          登录
        <i class="el-icon-setting" style=""></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
  <div class="line"></div>
</template>

<script setup>
import { ref } from 'vue'

let activeIndex = ref('1')
let activeIndex2 = ref('1')

function handleSelect(key, keyPath) {
  console.log(key, keyPath, activeIndex)
}
</script>
