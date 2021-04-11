<template>
    <div class="main">
        <div class="header">
            <Header />
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>

</template>

<script setup>
import  Header from '../../components/header/index.vue'
import {reactive,ref} from 'vue'
ref: a = '123'

</script>
<style lang="scss">
.main {
  display: flex;
  flex-direction: column;

}
</style>