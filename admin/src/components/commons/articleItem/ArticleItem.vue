<template>
   <div class="article-item-wrap">
    <div class="row">
      <div class="left">
        <div class="title" @click="pushArticle">{{title}}</div>
      </div>
      <div class="right">
        <div class="date">
          <div class="icon calandar"></div>
          {{date}}
        </div>
      </div>
    </div>
    <div class="row footer">
      <div class="left"></div>
      <div class="right">
        <div class="inline-block">
          <div class="icon tag"></div>
          <tag
            v-for="(item,index1) in tags"
            v-on:tagclick="handleTagClick(item.text)"
            :type="item.color"
            :isCate="false"
            v-bind:key="index1"
          >{{item.text}}</tag>
        </div>
        <div class="inline-block">
          <div class="icon book"></div>
          <tag
            v-on:tagclick="handleCateClick(item.text)"
            v-for="(item,index2) in categories"
            :type="item.color"
            :isCate="true"
            v-bind:key="index2"
          >{{item.text}}</tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";



ref: title = ''
ref: date = ''
ref:tags = []
ref:categories = []
console.log(123);
function pushArticle() {

}
function handleTagClick() {

}
function handleCateClick() {

}
</script>