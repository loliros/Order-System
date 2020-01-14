<template>
  <el-table
    :data="this.data"
    border
    style="width: 100%">
    <el-table-column
      label="座位创建时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="座位编号"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="座位类型"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="座位容纳人数"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="座位名称"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="座位名称"
      width="150">
      <template slot-scope="scope">
        <span>{{ scope.row.states }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="MottoEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="MottoDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    name: "MottoSelect",
    data() {
      return {
        data: [],
        time:'',//桌子的创建时间
        id:'',//桌子的编号
        type:'',//桌子的类型
        num:'',//桌子可容纳人数
        name:'',//桌子的名字
        states:''//桌子的状态
      }
    },
    methods: {
      //点击座位页面的时候获取信息
      MottoSelectData(){
        this.axios.get('http://mock-api.com/dno436KX.mock/MottoName').then((response)=>{
          if (response.status === 200 && response.statusText === 'OK'){
            console.log(response);
            //将获取的json对象转换成数组
            let o = Array();
            for (let i = 0;i<response.data.data.length;i++){
              o[i] = response.data.data[i];
              console.log(o);
            }
            console.log(o);
            this.data = this.data.concat(o);
            console.log(this.data);
          }
        }).catch((error)=>{
          console.log(error);
        })
      },
      //删除座位信息
      MottoDelete(index,row){
          console.log(index,row)
      },
      MottoEdit(index,row){
        console.log(index,row);
      }
    },
    created() {
      this.MottoSelectData();
    }
  }
</script>

<style scoped>

</style>
