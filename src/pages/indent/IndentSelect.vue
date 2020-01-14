<template>
  <el-table
    :data="this.tableData"
    border
    style="width: 100%">
    <el-table-column
      label="订单时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="订单编号"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="菜品名称"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.dish }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="数量"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="价格"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.money }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
  export default {
    name: "IndentSelect",
    data() {
      return {
        tableData: [{
          time:'2019-12-16-15:51',
          id:0,
          dish:'菜',
          num: 1,
          money:18,
        }],
        datanum:0,
        testdata:[],
      }
    },
    methods: {
      //编辑订单数据
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        //删除订单数据
        console.log(index,row);
        let deleteData = {index};
        this.axios.delete('http://mock-api.com/dno436KX.mock/IndentDelete',deleteData).then((response)=>{
          console.log(response);
          this.$alert('订单编号'+index+'删除成功', '提示', {
            confirmButtonText: '确定',
          });
        }).catch((error)=>{
          console.log(error);
          this.$alert('订单编号'+index+'删除失败', '提示', {
            confirmButtonText: '确定',
          });
        });

      },
      IndentData(){
        //查询订单数据
        let indentData = {error_no: this.datanum};
        this.axios.post('http://mock-api.com/dno436KX.mock/IndentSelect',indentData
        ).then((response)=>{
          console.log(response);
          if (response.status === 200 && response.statusText === 'OK'){
            console.log(response.data.data);
            //将获取的json对象转换成数组
            let o =  new Array();
            for (let i = 0;i<response.data.data.length;i++){
              o[i] = response.data.data[i];
              console.log(o);
            }
            console.log(o);
            this.tableData = this.tableData.concat(o);
            console.log(this.tableData);
          }
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created() {
      this.IndentData();
    }
  }
</script>

<style scoped>

</style>
