<template>
  <div>
    <div style="position:relative">
      <img :src="load" alt="" class="imstyle">
      <div class="footimg">
        <div>
        <img src="../assets/images/again.png" alt="" @click="again()">
        </div>
        <div>
        <img src="../assets/images/choujiang.png" alt="" @click="luck()">
        </div>
      </div>
      
    
    </div>
  </div>
</template>

<script type="es6">
  import {api} from '../assets/js/common';
  export default{
    data(){
      return {
        load:"",
      }
    },
   mounted() {
   	  this.get();
   },

    methods:{
       get:function(){ 
        this.load = 'http://skippy.dmapp.cn/2017story/data/images/'+this.$route.params.url;
        console.log(this.load);
      },
      again:function(){
        location.href="#/index";
      },
      luck:function(){
        location.href="#/luck";
      },
     
  
    },
  
  }
</script>
<style scoped>
 .imstyle{
   width:100%;
   height:100%;
   max-width:100%;
   height:auto; 
 }
.footimg{
   position: absolute;
   bottom: 0;
   left:0;
   display: -webkit-box;  
   display: -moz-box;  
   display: -ms-flexbox;  
   display: -webkit-flex;
   display: flex; 
   height:65px;
   justify-content: center;  
} 
.footimg > div{
  flex:1;
 text-align: center;
}
.footimg > div >img{
  width:75%;
  height:45px; 
}
</style>

