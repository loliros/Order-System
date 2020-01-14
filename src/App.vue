<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>订单管理</template>
          <el-menu-item index="1-1"><router-link :to="{name:'IndentCreate'}"><div>订单创建</div></router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link :to="{name:'IndentSelect'}"><div>订单查询</div></router-link></el-menu-item>
        </el-submenu>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>座位管理</template>
          <el-menu-item index="1-1"><router-link :to="{name:'MottoCreate'}"><div>座位创建</div></router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link :to="{name:'MottoSelect'}"><div>座位查询</div></router-link></el-menu-item>
        </el-submenu>

        <el-submenu index="1">
          <template slot="title"><i class="el-icon-setting"></i>菜谱管理</template>
          <el-menu-item index="1-1"><router-link :to="{name:'MenuCreate'}"><div>菜品创建</div></router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link :to="{name:'MenuSelect'}"><div>菜品查询</div></router-link></el-menu-item>
<!--          <el-submenu index="3-2">
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
            <el-menu-item index="3-2-8"><router-link :to="{name:'Test'}">测试</router-link></el-menu-item>
          </el-submenu>-->
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px;height: 0px;z-index: 9999">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      <router-view>
      </router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data() {return {}}
}

</script>
<!--scoped的意思是只对当前模板有效-->
<style scoped>
</style>
