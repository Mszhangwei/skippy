import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


const router = new VueRouter({
	routes:[{
    path:'/index',component:require('../views/index')
  },{
    path:'/result/:url',component:require('../views/result')
  },{
    path:'/luck',component:require('../views/luck')
  },{
    path:'/address',component:require('../views/address')
  },{
    path:'/exchange',component:require('../views/exchange')
  },{
    path:'*',redirect:'/index'
  }]
});


export default router;
