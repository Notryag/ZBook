<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input clearable v-model="formInline.user" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select clearable v-model="formInline.region" placeholder="文章状态">
          <el-option label="已发布" value="shanghai"></el-option>
          <el-option label="已删除" value="beijing"></el-option>
          <el-option label="草稿" value="caogao"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="date" label="创建时间">
        <template #default="scope">
          <i v-if="format(scope.row.moment)" class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ format(scope.row.moment) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="修改时间">
        <template #default="scope">
          <i v-if="format(scope.row.moment)" class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ format(scope.row.moment) }}</span>
        </template>

      </el-table-column>
      <el-table-column prop="tags" label="标签"></el-table-column>
      <el-table-column label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { getList } from '../../../api/article'
import { ref } from 'vue'
import dayjs from 'dayjs'
export default {
  setup() {
    let tableData = ref([])

    let formInline = reactive({
      user: '',
      region: '',
    })

    async function getTableData() {
      let res = await getList()
      tableData.value = res.data
    }

    getTableData()
    function onSubmit() {
      console.log('submit!')
    }

    function format(time) {
      if(time.length >= 13) {
        console.log(dayjs(time).format('YYYY-MM-DD HH:mm'),dayjs('132').isValid())
        return dayjs(+time).format('YYYY-MM-DD HH:mm:ss')
      }else {
        return ''
      }
    }

    return {
      tableData,
      onSubmit,
      formInline,
      format
    }
  },
}
</script>
