<template>
  <div>
    <div style="position:relative">
      <img src="../assets/images/bg1.jpg" alt="" class="imstyle">
    <!--开始翻页-->
     <mt-swipe :auto="2000" :continuous="false" :showIndicators="false" class="imgstyle" v-show="show">
      <mt-swipe-item> 
        <div style="background-color:#000000;height:100%;width:100%;opacity:0.5;">1111</div>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/banner4.jpg" alt="" @click="hide()">
      </mt-swipe-item>
    </mt-swipe>
     <div class="box">
          <div class="wai">
            <img src="../assets/images/input.png" style="height:40px;">
          <input placeholder="请输入你的名字" v-model="name" class="inputstyle">
          </div>
        <!--选择框-->
          <div class="inputbox" style="position:relative"><img src="../assets/images/boy.jpg" class="boy">
             <label class="demo--label">
                <input class="demo--radio" type="radio" name="demo-radio" value="1" @click="change()" v-show="ok">
                <span class="demo--radioInput"></span>
             </label>
             <!--<div  v-bind:class="[ niu?'icon2':'icon' ]" type="button" name="demo-radio" value="boy" @click="change()"></div>-->
          </div>
        <div class="sex">
          <img src="../assets/images/girl.jpg" class="boy">
           <label class="demo--label">
                <input class="demo--radio" type="radio" name="demo-radio" value="2" @click="change()" v-show="ok">
                <span class="demo--radioInput"></span>
             </label>
          <!--<div  v-bind:class="[ niu?'icon2':'icon' ]" type="button" name="demo-radio" value="boy" @click="change()"></div>-->
        </div>
        <!--选择框结束-->
        <img src="../assets/images/sure.jpg" style="width:50%;" @click="sure(name,radioValue)">
        
     </div>
    </div>
  </div>
</template>

<script type="es6">
  import { Swipe, SwipeItem,Indicator,Cell,Radio,Toast  } from 'mint-ui';
  import {api} from '../assets/js/common';
  export default{
    data(){
      return {
       show:true,
       value:"",
       name:"",
       radioValue:"",
       niu:false,
       ok:false,
       
      }
    },
    // components: { Radio },
    methods:{
      hide:function(){
        this.show=false;
      },
     //选择性别的代码   
     change:function(){
       var radio =document.getElementsByName("demo-radio");
       var  varradioLength = radio.length;
        for(var i =0;i < varradioLength;i++)
              {
              if(radio[i].checked)
                {
                  this.radioValue = radio[i].value;
                }
            }  
      this.niu=true;
      // console.log(this)
     },

    // 点击完成传递参数
      sure:function(name,radioValue){
          // url=this.url;
          name=this.name;
          radioValue=this.radioValue;
          if(1>this.name.length ){
             Toast('请填写姓名');
         }else if(this.radioValue===""){
            Toast('请选择性别');
         }
         else{
           
            this.$http.post('http://skippy.dmapp.cn/2017story/api_mock/create_photo.html?token=24000ed6fe1927014c0e381b203d6a7b',{name:name,gender:radioValue}).then(function(response){
    
                    if(response.body.code==200){
                      console.log(response.body.data.photo)
                     var  url=response.body.data.photo.slice(45);
                      // location.href="#/result/"+url;
                      location.href="#/result/"+url;
                      console.log(location.href)
                      // console.log(location.href)
                    }else{}
              }, function(response){
                  // 响应错误回调
              });
           
          }

      }
    },
  
  }
</script>
<style scoped>
.demo--label{
      margin: 11px 20px 0 10px;
  display:inline-block;
  position: relative;
  }
.demo--radio{
   opacity: 0;
   position: absolute;
    left: 1px;
    top: 0;
    z-index: 9;
    display: block!important;
  }
.demo--radioInput{
  background-color:#fff;
  border:2px solid #000000;
  border-radius:100%;
  display:inline-block;
  height:16px;
  margin-right:10px;
  margin-top:-1px;
  vertical-align:middle;
  width:17px;
  line-height:1;
  position: absolute;
    left: 0;
    top: 0;
  }
.demo--radio:checked + .demo--radioInput:after{
  background-color:#1fc2de;
  border-radius:100%;
  content:"";
  display:inline-block;
  height:12px;
  /*margin:1px;*/
  width:12px
  }
.demo--checkbox.demo--radioInput,.demo--radio:checked + .demo--checkbox.demo--radioInput:after{border-radius:0}
.mint-swipe {
    width:100%;
  }

.wai{
  width: 45%;
    position: relative;
    height: 40px;
    margin-bottom: 25px;
}

.sex{
  width:50%;text-align: center;margin-bottom:50px;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */ 
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
   display: -ms-flexbox; /* TWEENER - IE 10 */ 
   display: -webkit-flex; /* NEW - Chrome */ 
   display: flex;
}

 @media screen and (max-width: 320px) {
    .demo--label{margin:11px 20px 0 10px;display:inline-block}
    .sex{margin-bottom: 40px;}
}

 .inputstyle{
   position: absolute;
    /*right: 2px;*/
    left:15px;
    height: 34px;
    top: 3px;
   width: 80%;
    /*border: none;*/
    /*margin-bottom: 25px;*/
    margin-left: -5%;
 }
 .imstyle{
   width:100%;
   height:100%;
   max-width:100%;
   height:auto; 
 }
 .imgstyle{
   position: absolute;
   top:0;
   left:0;
   bottom:0;
   z-index: 999;
   width:100%;
 }
 .box{
   position: absolute;
   bottom:0;
   left:0;
   width:100%;
   height:48%;
   display:flex;
   flex-direction:column;
   /*justify-content:center;*/
   align-items:center;
 }
 .inputbox{
   width:50%;
   text-align: center;
   display: flex;
 }
 /*.icon{
      width:20px;
      height:15px;
      background: url('../assets/niu1.jpg') no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    margin-left: 10px;
 }
  .icon2{
      width:20px;
      height:15px;
      background: url('../assets/niu2.jpg') no-repeat;
      background-size: 100% 100%;
      margin-top: 10px;
    margin-left: 10px;
 }*/
 .boy{
   width:60%;height:32px;margin-left:15px;
 }
  /*@media screen and (mix-width: 374px) {
    .boy{
   width:60%;height:30px;margin-left:20px;
 }
}*/
</style>

