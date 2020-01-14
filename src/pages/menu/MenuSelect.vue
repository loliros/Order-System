<template>
  <el-row>
    <div v-show="b" class="hint">{{ msg }}</div>
    <el-col class="box" :span="8" v-for="(item, index) in Menudata" :key="item.id" :offset="index > 0 ? 2 : 2" v-show="Menusence">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../../components/image/img_1.jpg" class="image">
        <div style="padding: 14px;">
          <span>{{ item.name }}</span>
          <span style="float: right; margin-right: 10px">菜品价格:{{ item.money }}</span>
          <div class="bottom clearfix">
            <el-button class="button" @click="Menurevise" round>编辑</el-button>
            <el-button type="danger" class="button" @click="MenuDelete" round>删除</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name:'Engineer',
    data() {
      return {
        Menudata:[],//存储从api接口获取到的数据
        msg:'排骨',
        Menuletter:'菜品的介绍',
        b: false,
        Menusence:true//状态显示
      };
    },
    methods:{
      //删除功能
      MenuDelete(){
        console.log('删除');
      },
      //编辑功能
      Menurevise(){
        console.log('编辑');
      },
      //获取菜品的信息
      MenuData(){
        let data = {id:1};
        this.axios.post('http://mock-api.com/dno436KX.mock/OrderDish_1',data).then((response)=>{
          console.log(response);
          console.log(response.data);
          this.Menudata = response.data.data;
          console.log(this.Menudata);
          if (this.Menudata===undefined){
            this.Menusence = !this.Menusence;
            this.b = (!this.b);
            this.msg = '暂无数据';
            console.log(this.Menusence);
            console.log(this.b);
          }
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created() {
      this.MenuData();
    }
  };
</script>

<style scoped>
  .box{
    margin: 10px auto;
    padding: 10px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 25px;
    text-align: center;
  }

  .button {
    padding: 0;
    position: relative;
    width: 30%;
    height: 30px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .hint{
    text-align: center;
    font-weight: 500;
    font-size: 22px;
  }
</style>
