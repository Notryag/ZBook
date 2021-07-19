<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="标题">
      <el-input v-model="sizeForm.title"></el-input>
    </el-form-item>

    <el-form-item label="标签">
      <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
        {{ tag }}
      </el-tag>
      <el-input style="width: 70px; margin-left: 10px" class="input-new-tag" v-if="inputVisible" v-model="inputValue" :ref="saveTagInput" size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm"> </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-form-item>

    <el-form-item label="内容">
      <MarkdownIt v-model="sizeForm.content" />
    </el-form-item>

    <el-form-item size="large">
      <el-button type="primary" @click="submit">立即新增</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { nextTick, reactive, ref } from 'vue'
import MarkdownIt from '../../../home/MarkdownIt.vue'
import { create } from '../../../../api/article'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default {
  components: { MarkdownIt },
  setup() {
    let sizeForm = reactive({
      title: '',
      content: '',
      tags: [],
    })

    let dynamicTags = ref([])
    let inputVisible = ref(false)
    let inputValue = ref('')
    let source = ref('')
    const saveTagInput = ref(null)

    function handleClose(tag) {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
    }

    async function showInput() {
      inputVisible.value = true
    }

    function handleInputConfirm() {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
      }
      inputVisible.value = false
      inputValue.value = ''
    }

    const router = useRouter()
    async function submit() {
      let params = {
        title: sizeForm.title,
        content: sizeForm.content,
        tags: dynamicTags.value.join(','),
      }
      let res = await create(params)
      if (res && res.code === 1) {
        reset()
        ElMessage.success({
          message: '提交成功',
          type: 'success',
        })
        router.push({name:'articleList'})
      }
    }

    function reset() {
      dynamicTags.value = []
      sizeForm.title = ''
      sizeForm.content = ''
      sizeForm.tags = []
    }

    return {
      sizeForm,
      handleInputConfirm,
      handleClose,
      showInput,
      dynamicTags,
      inputVisible,
      inputValue,
      saveTagInput,
      source,
      submit,
    }
  },
}
</script>
<style>
.el-tag:not(:first-child) {
  margin-left: 10px;
}
.el-tag + .el-button {
  margin-left: 10px;
}
</style>
