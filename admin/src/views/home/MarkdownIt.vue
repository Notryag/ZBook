<template>
  <div class="markdown-wrap">
    <el-button @click="toggle">展示</el-button>
    <div v-show="!show" style="margin-top:10px">
      <el-input name="" type="textarea" cols="30" rows="30" :model-value='modelValue' @update:model-value="emitInput"> </el-input>
    </div>
    <div class="show-mark" v-show="show">
      <vue3-markdown-it class="markdown-body" :source="modelValue" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'markDown',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      value:'',
      show:false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
    emitInput(e) {
      this.$emit('update:modelValue', e)
      console.log(e);
    }
  }
}
</script>
<style lang="scss">
.markdown-wrap {
  .show-mark {
    margin-top: 10px;
    border: 1px solid lightblue;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>
