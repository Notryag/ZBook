<template>
  <div class="home-layout">
    <div class="left">12</div>
    <div class="right">
      <div class="article-list">
        <ArticleItem v-for="item in articleList" @tagclick="handleTagClick" v-bind:key="item.id" :row="item"></ArticleItem>
      </div>
    </div>
  </div>
</template>
<script setup>
import ArticleItem from "../../../components/commons/articleItem/ArticleItem.vue";

import { reactive } from 'vue'
import { getList } from '../../../api/article'
let articleList = reactive([
  {
    id:'1',
    title: '浏览器同源策略导致的跨域问题分析',
    date: '1618140986156',
    tags: '支付,公众号,踩坑',
  },
])
function handleTagClick() {
}

// getList({})
</script>
<style lang="scss" scoped>
.home-layout {
  display: flex;
  background-color: #e9ecef;
  height: calc(100vh - 61px);
  .left {
    flex: 1;
  }
  .right {
    flex: 2;
    .list-item {
      padding: 10px;
      border: 1px solid red;
    }
  }
}
</style>
