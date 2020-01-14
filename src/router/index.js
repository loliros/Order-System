import Vue from 'vue'
import Router from 'vue-router'
import IndentCreate from '../pages/indent/IndentCreate'
import IndentSelect from '../pages/indent/IndentSelect'
import Register from '../pages/register'
import Engineer from '../pages/Engineer'
import MenuCreate from '../pages/menu/MenuCreate'
import MenuSelect from '../pages/menu/MenuSelect'
import MottoCreate from "../pages/motto/MottoCreate";
import MottoSelect from "../pages/motto/MottoSelect";
//@相当于一个到src下的绝对路径
Vue.use(Router);

export default new Router({
  //history模式 可以去除url中的#号
  mode:'history',
  //base:'/SystemOrder/',
  routes: [
    {
      path:'/',
      redirect:'/pages/indent/indentcreate'
    },
    {
      path:'/pages/indent/indentcreate',
      name:'IndentCreate',
      component:IndentCreate
    },
    {
      path:'/pages/indent/indentselect',
      name:'IndentSelect',
      component:IndentSelect
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/pages/engineer',
      name:'Engineer',
      component:Engineer
    },
    {
      path:'/pages/menu/menucreate',
      name:'MenuCreate',
      component:MenuCreate
    },
    {
      path:'/pages/menu/menuselect',
      name:'MenuSelect',
      component:MenuSelect
    },
    {
      path:'/pages/motto/mottocreate',
      name:'MottoCreate',
      component:MottoCreate
    },
    {
      path:'/pages/motto/mottoselect',
      name:'MottoSelect',
      component:MottoSelect
    }
  ]
})
