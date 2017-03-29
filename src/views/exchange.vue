<template>
  <div>
    <img src="../assets/images/address.jpg" class="addresssty" >
    
     <div style="position: fixed;top:40%;left:0">
       <!--姓名-->
      <div class="bigbox">
       <img src="../assets/images/xingming.png" style="width:100%;height:40px;">
       <input placeholder="请填写您的名字" class="namesty" v-model="username">
       </div>
       <!--手机-->
       <div class="bigbox">
       <img src="../assets/images/phone.png" style="width:100%;height:40px;">
       <input placeholder="请填写您的电话" class="namesty" v-model="tel" type="tel" required pattern="^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}">
       </div>
       <!--地址-->
       <div class="dizhisty">
       <img src="../assets/images/ad.png" style="width:100%;height:80px;">
       <textarea placeholder="请输入地址" class="namesty2" v-model="addres"></textarea>
       </div>
       <!--提交-->
       <div class="over">
       <img src="../assets/images/submit.png" style="width:100%;" @click="submit(username,tel,addres)">
       </div>
     </div>
     <!--结束的弹框-->
     <div class="finall" v-show="over">
       <img src="../assets/images/finall.jpg" class="wan">
     </div>
  </div>
 
</template>


<script type="es6">
  import {api} from '../assets/js/common';
  import { Toast  } from 'mint-ui';
  export default{
    data(){
      return {
        username:"",
        tel:"",
        addres:"",
        over:false,
      }
    },
    methods:{
      submit:function(username,tel,addres){
          this.username=username;
          this.tel=tel;
          this.addres=addres;
          var mobilevalid = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
           if(1>this.username.length){ Toast('请填写姓名'); }
           else if(this.tel==""){Toast('请填写电话'); }
           else if(this.addres==""){Toast('请填写地址'); }
           else if (!mobilevalid.test(tel)){Toast('请输入正确的手机号！')} 
           else{
             this.$http.post('http://skippy.dmapp.cn/2017story/api_mock/save_info.html?token=24000ed6fe1927014c0e381b203d6a7b',{name:username,mobile:tel,address:addres}).then(function(response){
    
                    if(response.body.code==200){
                      this.over=true;
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
  .addresssty{
    width:100%;
    height:100%;
    max-width: 100%;
    max-height: 100%;
    background-size: 100% 100%;
  }
  .bigbox{
    position: relative;width:60%;margin-left: 20%;margin-bottom: 12px;
  }
  .namesty{
    position: absolute;
    right: 2px;
    /* top: 10px; */
    border: none;
    height: 34px;
    top: 3px;
    font-size: 16px;
    width: 70%;
  }
  .dizhisty{position: relative;width:60%;margin-left: 20%;}
 .namesty2{
    position: absolute;
    right: 2px;
    /* top: 10px; */
    border: none;
    height: 64px;
    top: 8px;
    font-size: 16px;
    width: 70%;
  }
  .over{
     width:50%;margin-left: 25%;
     margin-top: 100px;
  }
  .finall{
    position: fixed;top:0;left:0;bottom:0;background: rgba(0, 0, 0, 0.6);
  }

  .wan{
    width:80%;margin-top: 40%;margin-left: 10%;
  }
  @media only screen and  (max-width: 325px) {
	.over{
     
     margin-top: 70px;
  }
  }
  @media only screen and  (min-width: 414px) {
	.over{
     
     margin-top: 120px;
  }
  .bigbox{
    margin-bottom: 25px;
  }
  }
</style>

