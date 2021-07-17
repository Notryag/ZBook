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
      <el-table-column prop="date" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="tags" label="标签"></el-table-column>
      <el-table-column label="操作">
        <el-button>新增</el-button>
        <el-button>修改</el-button>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
import {reactive} from "@vue/reactivity";
import {getList} from '@/api/article'
export default {
  setup() {
    let tableData = reactive([
      {
        date: '2016-05-02',
        title: '王小虎',
        tags: '上海市普陀区金沙江路 1518 弄',
      },
      {
        date: '2016-05-04',
        title: '王小虎',
        tags: '上海市普陀区金沙江路 1517 弄',
      },
      {
        date: '2016-05-01',
        title: '王小虎',
        tags: '上海市普陀区金沙江路 1519 弄',
      },
      {
        date: '2016-05-03',
        title: '王小虎',
        tags: '上海市普陀区金沙江路 1516 弄',
      },
    ])


    let formInline = reactive({
      user: '',
      region: ''
    })

    async function getTableData() {
      let res = await getList()
      console.log(res)
    }
    console.log(res)
    function onSubmit() {
      console.log('submit!');
    }

    return {
      tableData,
      onSubmit,
      formInline
    }
  }


}
</script>
