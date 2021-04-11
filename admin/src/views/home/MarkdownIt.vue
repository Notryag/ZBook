<template>
    <div>
        <textarea name="" id="" cols="30" rows="10" v-model="source"></textarea>
        <vue3-markdown-it class="markdown-body" :source='source' />
    </div>
</template>

<script>

    export default {
        data() {
            return {
                source: '# Hello World!'
            }
        }
    }
</script>
<style lang="scss">
</style>