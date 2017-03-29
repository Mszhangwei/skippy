<template>
  <div>
    <div style="background-size: cover;position: relative;">
      <img src="../assets/images/choujiang.jpg" style="width:100%;max-width:100%;height:100%;max-height:100%;">
      <div style="position:fixed;top:100px;left:0px;display:flex;flex-direction:column;right:0;">
        
        <div class="luck"><img src="../assets/images/smallhuasheng.png" style="width: 150px;">
            <div class="pan">
              <img src="../assets/images/dazhuanpan.png" style="width:80%" id="lotteryBtn">
            </div>
            <div class="shuoming">
              <img src="../assets/images/shuoming.png" style="width:50%;" @click="open()">
            </div>
            <div class="jiantou">
              <img src="../assets/images/jiantou.png" style="width:60px;" @click="choose()">
            </div>
            
        </div>
      </div>
    </div>
     <!--huodong-->
    <div class="showhide" v-show="title">
         <div style="position: relative"><img src="../assets/images/wenzi.png" class="huodong"></div>
         <img src="../assets/images/sure.png" class="againnext" @click="close()">
    </div>
    <!--zhongjiang-->
    <div class="showhide" v-show="word">
         <div style="position: relative"><img src="../assets/images/zhongjiang.png" class="huodong"></div>
         <!--条件选择-->
         <img src="../assets/images/jd.png" class="haier" v-if="status===0">
         <img src="../assets/images/movios.png" class="haier" v-if="status===1">
         <img src="../assets/images/kaoxiang.png" class="haier" v-if="status===2">
         <img src="../assets/images/dishini.png" class="haier" v-if="status===3">
         <img src="../assets/images/liaoli.png" class="haier" v-if="status===4">
         <img src="../assets/images/xiecheng.png" class="haier" v-if="status===5">
         <!--条件选择结束-->
         <img src="../assets/images/ready.png" class="againnext" @click="exchange()">
    </div>
  </div>
 
</template>


<script type="es6">
  import {api} from '../assets/js/common';
  import $ from 'jquery'
  // import jQueryRotate from "../assets/js/jQueryRotate.2.2.js";
  export default{
    data(){
      return {
        title:false,
        word:false,
        status:5,
      }
    },
    methods:{
      // 打开和关闭活动说明
      open:function(){
         this.title=true;
      },
       choose:function(){
         this.word=true;
      },
        exchange:function(){
         location.href="#/exchange";
         this.word=false;
      },
      close:function(){
        
        this.title=false;
      },

      // 转盘
 

    },
  
  }
</script>
<style scoped>
  .luck{
     position: relative;
     text-align: center;
     height:470px;
  }
.showhide{
  background: rgba(0, 0, 0, 0.6);position:fixed;top:0;left:0;bottom:0;right:0;
}

.shishi{
   color:#ffffff;
   background-color: #4472c4;width:200px;    
   height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 8px;
    font-size: 22px;
    margin-top: 80px;
    margin-left: 40px;
}

 .pan{
     position: absolute; 
     top:75px;
 }
 .shuoming{
    position: absolute;
     bottom:0;  
 }
 .jiantou{
   position: absolute; top:200px;left:50%;margin-left: -30px;
 }

.huodong{
    width:80%;margin-left: 10%;margin-top: 30%;
}

.againnext{
  width:50%;left:25%;bottom: 25%;position: absolute;
}

.haier{
   width:50%;left:25%;bottom: 40%;position: absolute;
}
@media only screen and (max-width:320px){
  .shishi{
    margin-top: 50px;
    margin-left: 15px;
}
}

@media only screen and (max-width:320px){
   .jiantou{
    top:150px;left:50%;margin-left: -30px;
 }
  .luck{
    
     height:420px;
  }
}

 @media only screen and ( min-width: 350px) and (max-width: 375px) {
    .jiantou{
    top:170px;left:50%;margin-left: -30px;
 }
 }

@media only screen and (min-width:414px){
   .luck{
     height:520px;
  }
  .shishi{
    margin-top: 110px;
    margin-left: 50px;
}
.jiantou{
   top:190px;
 }
}

</style>

