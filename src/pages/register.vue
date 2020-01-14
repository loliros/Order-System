<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>订单管理</template>
            <el-menu-item index="1-1">订单创建</el-menu-item>
            <el-menu-item index="1-2">订单查询</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>座位管理</template>
            <el-menu-item index="2-1">座位创建</el-menu-item>
            <el-menu-item index="2-2">座位查询</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>菜谱管理</template>
            <el-menu-item index="3-1">菜品创建</el-menu-item>
          <el-submenu index="3-2">
            <template slot="title">菜品查询</template>
            <el-menu-item index="3-2-1">粤菜</el-menu-item>
            <el-menu-item index="3-2-2">湘菜</el-menu-item>
            <el-menu-item index="3-2-3">鲁菜</el-menu-item>
            <el-menu-item index="3-2-4">川菜</el-menu-item>
            <el-menu-item index="3-2-5">闽菜</el-menu-item>
            <el-menu-item index="3-2-6">徽菜</el-menu-item>
            <el-menu-item index="3-2-7">浙菜</el-menu-item>
            <el-menu-item index="3-2-8">京菜</el-menu-item>
            <el-menu-item index="3-2-8">苏菜</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "register",
        data() {
          const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          };
          return {
            tableData: Array(20).fill(item)
          }
        }
      };
</script>

<style scoped>
  el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  el-aside {
    color: #333;
  }
</style>
