<template>
  <div class="demo-input-suffix">
    <div class="boxborder"> 创建日期：
      {{time | formatDate}}
    </div>
    <!--οnkeyup="value=this.value.replace(/\D+/g,'')" 只允许输入数字-->
    <div class="boxborder"> 菜品编号：
      <el-input style="width: 200px"
                onkeyup="value=value.replace(/\D+/g,'')"
                placeholder="请输入菜品编号"
                prefix-icon="el-icon-search"
                v-model="Menuinput2">
      </el-input>
    </div>
    <!--onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 只允许输入汉字-->
    <div class="boxborder"> 菜品名称：
      <el-input style="width: 200px"
                onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
                placeholder="请输入菜品名称"
                prefix-icon="el-icon-search"
                v-model="Menuinput3">
      </el-input>
    </div>

    <div class="boxborder">
      <el-button @click="dataInput(Menuinput2,Menuinput3)" type="primary" round style="margin-right: 80px;margin-left: 20px">提交按钮</el-button>
      <el-button @click="dataempty" type="primary" round>清空按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MenuCreate",
    data(){
      return{
        time:Date.parse(new Date()),//时间
        Menuinput2:'',//编号
        Menuinput3:'',//名字
        error_no:'false'//状态
      }
    },
    methods:{
      //提交按钮
      dataInput(number,name){
          if (number!==''&&name!==''){
            this.error_no = true;
            let id = Number.parseInt(number);
            console.log(typeof id);
            let data = {number:id};
            let menudata = {error_no:this.error_no,data};
            this.axios.post('http://mock-api.com/dno436KX.mock/menuCreate',menudata).then((response)=>{
              if (this.error_no===true&&response.data!==''){
                console.log(response.data.name);
              }else if (response.data===''){
                console.log('数据接收失败!');
              }
            }).catch((error)=>{
              console.log(error);
            })
          }else if (number===''||name===''){
            this.$alert('请输入编号和菜名', '提示', {
              confirmButtonText: '确定',
            });
          }

      },

      //清空按钮
      dataempty(){
        this.Menuinput2='';
        this.Menuinput3='';
      },
    },
    mounted:function(){
      //创建定时器更新时间
      var _this = this;
      this.timeId= setInterval(function(){
        _this.time = new Date();
      },1000);
    },
    beforeDestroy:function(){
      //实例销毁前青出于定时器
      if(this.timeId){
        clearInterval(this.timeId);
      }
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
