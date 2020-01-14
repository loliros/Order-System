<template>
  <div class="demo-input-suffix">
    <div class="boxborder"> 创建日期：
      {{time | formatDate}}
    </div>
    <!--οnkeyup="value=this.value.replace(/\D+/g,'')" 只允许输入数字-->
    <div class="boxborder"> 座位编号：
      <el-input style="width: 200px"
                onkeyup="value=value.replace(/\D+/g,'')"
                placeholder="请输入菜品编号"
                prefix-icon="el-icon-search"
                v-model="Mottoinput1">
      </el-input>
    </div>
    <!--onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 只允许输入汉字-->
    <div class="boxborder"> 座位类型：
      <el-select v-model="Mottovalue1" clearable placeholder="请选择座位类型" aria-required="true">
        <el-option v-for="item in Mottotype" :key="item.id" :label="item.name" :value="item.id" >
        </el-option>
      </el-select>
    </div>
    <!--onkeyup="value=value.replace(/[^\w\.\/]/ig,'')" 只允许输入数字和字母-->
    <div class="boxborder"> 座位名称：
      <el-input style="width: 200px"
                onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"
                placeholder="请输入菜品编号"
                prefix-icon="el-icon-search"
                v-model="Mottoinput2">
      </el-input>
    </div>

    <div class="boxborder">
      <el-button @click="MottoInput" type="primary" round style="margin-right: 80px;margin-left: 20px">提交按钮</el-button>
      <el-button @click="MottoClear" type="primary" round>清空按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MottoCreate",
    data(){
      return{
        time:Date.parse(new Date()),//时间
        Mottoinput1:'',//座位编号
        Mottotype:[],//座位类型
        Mottoinput2:'',//座位名字
        error_no:'false',//状态
        Mottovalue1:'',
      }
    },
    methods: {
        //获取座位类型  http://mock-api.com/dno436KX.mock/MottoType
        MottoType(){
            this.axios.get('http://mock-api.com/dno436KX.mock/MottoType').then((response)=>{
              console.log(response);
              this.Mottotype = response.data.data;
              console.log(this.Mottotype);
            }).catch((error)=>{
              console.log(error);
            })
        },
        //清空按钮
        MottoClear(){
            this.Mottovalue1 = null;
            this.Mottoinput1 = null;
            this.Mottoinput2 = null;
        },
        //提交按钮
        MottoInput(){
            if (this.Mottoinput1 === ''){
              this.$alert('请输入座位编号', '提示', {
                confirmButtonText: '确定',
              });
            }else if (this.Mottovalue1 === ''){
              this.$alert('请输入座位类型', '提示', {
                confirmButtonText: '确定',
              });
            }else if (this.Mottoinput2 === ''){
              this.$alert('请输入座位名字', '提示', {
                confirmButtonText: '确定',
              });
            }else{
              let data = {value1:this.Mottotype[this.Mottovalue1].name,input1:this.Mottoinput1,input2:this.Mottoinput2};
              console.log(data);
            }
        }
    },
    //在实例完成后创建
    created() {
        this.MottoType();
    },
    //过滤器
    filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    }
  }
</script>

<style scoped>
  .demo-input-suffix{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #e6e6e6;
    padding: 40px;
  }
  .boxborder{
    margin: 20px;
  }
  div{
    font-size: 20px;
    font-weight: 500;
  }
</style>
