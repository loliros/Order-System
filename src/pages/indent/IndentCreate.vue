<template>
  <el-container style="border: 1px solid #e6e6e6;">
    <div class="box">
      <el-header style="text-align: center; height: 20px"><h2>订单创建</h2></el-header>
      <el-main>
        <div class="box-left">
          <p>订单编号</p>
          <p>订单时间</p>
          <p>菜品名称</p>
          <p>座位类型</p>
          <p>座位名称</p>
          <p>数量</p>
          <p>单价</p>
          <p><el-button @click="IndentInput" type="primary" round>提交按钮</el-button></p>
        </div>

        <div class="box-right">
          <p>{{ Indentindex }}</p>
          <!--时间显示-->
          <p>{{ Indenttime | formatDate}}</p>
          <p>
            <el-select v-model="Indentvalue1" clearable placeholder="请选择菜品名称" aria-required="true">
              <el-option v-for="item in menuname" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </p>
          <!--座位类型-->
          <p>
            <el-select v-model="Mottovalue1" clearable placeholder="请选择座位类型" aria-required="true">
              <el-option v-for="item in Mottotype" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </p>
          <!--座位名称-->
          <p>
            <el-select v-model="Mottovalue2" clearable placeholder="请选择座位名字" aria-required="true">
              <el-option v-for="item in Mottoname" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </p>
          <!--计数器，用来计算点了几份菜-->
          <p>
            <el-input-number v-model="menunum" @change="handleChange" :min="0" :max="99" label="描述文字"></el-input-number>
          </p>
          <p>{{ menumoney }}</p>
          <p><el-button @click="Indentempty" type="primary" round>清空按钮</el-button></p>
        </div>
      </el-main>
    </div>
  </el-container>
</template>

<script>
  //export抛出
  export default {
    name: 'IndentCreate',
    data() {
      return {
        Indentinput: false,//订单提交的状态false订单未提交或者订单提交失败 反之则订单提交成功
        Indentindex: 10000,//订单编号
        menuname: [],//菜名
        menunum: 0,//菜品数量
        menumoney: 0,//菜品单价
        Indentvalue1: '',//菜品名称选择的序号
        Indenttime:Date.parse(new Date()),//时间的获取
        Mottovalue1:'',//座位类型选择的序号
        Mottovalue2:'',//座位名称选择的序号
        Motto:[],//获取座位的信息
        Mottotype:[
          {id:1,name:'大桌'},
          {id:2,name:'中桌'},
          {id:3,name:'小桌'}
        ],//获取座位的类型
        Mottoname:[
          {id:1,name:'1A'}
        ],//获取座位的名字
        Mottostates:0,//获取座位是否状态，是空闲还是占用 0为空闲 1为占用
        Mottoloding:false,
      }
    },
    created() {
      this.MenuName();
      this.MottoMessage();
    },
    mounted() {
      this.IndentTime();
    },
    beforeDestroy:function(){
      //实例销毁前青出于定时器
      if(this.timeId){
        clearInterval(this.timeId);
      }
    },
    methods: {
      //时间更新
      IndentTime(){
        //创建定时器更新时间
        let _this = this;
        this.timeId= setInterval(function(){
          _this.Indenttime = new Date();
        },1000);
      },
      //获取订单需要的菜品数量
      handleChange(value) {
        if (this.Indentvalue1 !== "") {
          this.menunum = value;
        } else {
          this.menunum = 0;
        }
      },

      //清空input输入框
      Indentempty() {
        this.Indentvalue1 = null;
        this.Mottovalue1 = null;
        this.Mottovalue2 = null;
        this.menunum = 0;
        this.menumoney = 0;
      },

      //提交数据
      IndentInput() {
        if (this.Indentvalue1 !== "" && this.menumoney !== 0 && this.menunum >= 1) {
          let data = {index: this.Indentindex};
          console.log(data);
          //测试axios的put功能
          this.axios.put('http://mock-api.com/dno436KX.mock/test', data).then((response) => {
            console.log(response);
          }).catch((error) => {
            console.log(error);
          })
        } else {
          this.$alert('请点餐', '提示', {
            confirmButtonText: '确定',
          });
        }
      },

      //获取菜名数据
      MenuName() {
        let data = {id:1};
        this.axios.post('http://mock-api.com/dno436KX.mock/OrderDish_1', data).then((response) => {
          console.log(response);
          if (response.status === 200 && response.statusText === 'OK') {
            this.menuname = response.data.data;
            console.log(this.menuname);
          }
        }).catch((error) => {
          console.log(error)
        })
      },

      //获取座位信息
      MottoMessage(){
        this.axios.get('http://mock-api.com/dno436KX.mock/MottoName').then((response)=>{
          console.log(response.data.data);
          this.Motto = response.data.data;
          console.log(this.Motto);
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    watch: {
      //监听菜品的选择
      'Indentvalue1': function () {
        if (this.Indentvalue1 >= 1) {
          this.menunum = 1;
          this.menumoney = this.menuname[this.Indentvalue1 - 1].money * this.menunum;
          console.log(this.menumoney);
        }
      },
      //监听菜品数量的变化
      'menunum': function (val) {
        if (this.menunum >= 1)
          this.menumoney = this.menuname[this.Indentvalue1 - 1].money * val;
      },
      //监听座位类型 从而得出座位类型相对应的座位名字 且只显示当前空闲的座位
      //从Motto数组中获取座位的类型跟选择的座位类型进行比较
      'Mottovalue1':function (val) {
        let index = 0;
        console.log(this.Mottoname);
        this.Mottoname.splice(0,this.Mottoname.length);//修改座位的时候可以先清空之前的存进去的座位名称
        console.log(this.Mottoname);
        if (this.Mottoname.length === 0){
          for (let i = 0;i<this.Motto.length;i++){
            if (this.Motto[i].type === val){
              if (this.Mottostates === this.Motto[i].states){
/*              this.Mottoname[index].name = this.Motto[i].name;
                this.Mottoname[index].id = index+1;*/
                this.Mottoname[index].id = 0;
                this.Mottoname[index] = this.Motto[i].name;
                console.log(this.Motto[i].name);
                console.log(this.Mottoname[index].name);
                console.log(this.Mottoname);
                index += 1;
              }
            }
          }
        }
        console.log(this.Mottoname);
      },
      'Mottovalue2':function (val) {
        console.log(val);

      }
    },
    //使用过滤器获取当前时间
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
  .box{
    border: 1px solid #e6e6e6;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 6px;
  }

  .box-left{
    float: left;
    text-align: center;
  }

  .box-right{
    float: left;
    margin-left: 50px;
    text-align: center;
  }

  .box-left p,.box-right p{
    height: 40px;
    margin: 10px 10px 0 10px;
    font-size: 20px;
    font-weight: 500;
  }
</style>
