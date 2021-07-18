
<template xmlns="">
    <el-container style="height: 100%;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']" :router="true">
                <el-submenu index="1">
                    <template #title><i class="el-icon-message"></i>用户管理</template>
                    <el-menu-item-group>
                        <template #title>用户管理</template>
                        <el-menu-item index="/manage/article">用户</el-menu-item>
                        <el-menu-item index="/manage/article">日志</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="文章管理">
                        <el-menu-item index="/manage/article">文章列表</el-menu-item>
                        <el-menu-item index="/manage/article/add">新增</el-menu-item>

                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(10).fill(item)
            }
        }
    };
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
