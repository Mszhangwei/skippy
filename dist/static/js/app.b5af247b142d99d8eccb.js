webpackJsonp([1,0],[function(A,t,e){"use strict";function i(A){return A&&A.__esModule?A:{default:A}}var n=e(3),s=i(n),a=e(96),o=i(a),r=e(21),c=i(r),d=e(22),u=(i(d),e(2)),l=i(u),g=e(13),f=i(g),p=e(61),m=i(p);e(53),e(60),e(59);e(1);s.default.use(l.default),s.default.use(f.default),s.default.config.debug=!0,"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){m.default.attach(document.body)},!1),new s.default({el:"#app",router:c.default,render:function(A){return A(o.default)}})},function(A,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.api=""},,,,,,,,,,,,,,function(A,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e(2),e(1);t.default={data:function(){return{}},methods:{}}},function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(e(1),e(2));t.default={data:function(){return{username:"",tel:"",addres:"",over:!1}},methods:{submit:function(A,t,e){this.username=A,this.tel=t,this.addres=e;var n=/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;1>this.username.length||""===this.addres||""==this.tel?(0,i.Toast)("请填写完整"):n.test(t)?(console.log(A,t,e),this.over=!0):(0,i.Toast)("请输入正确的手机号！")}}}},function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(2);e(1);t.default={data:function(){return{show:!0,value:"",name:"",radioValue:"",niu:!1,ok:!1}},methods:{hide:function(){this.show=!1},change:function(){for(var A=document.getElementsByName("demo-radio"),t=A.length,e=0;e<t;e++)A[e].checked&&(this.radioValue=A[e].value);this.niu=!0},sure:function(A,t){A=this.name,t=this.radioValue,1>this.name.length||""===this.radioValue?(0,i.Toast)("请填写完整"):(console.log(A,t),location.href="#/result")}}}},function(A,t,e){"use strict";function i(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var n=(e(1),e(62));i(n);t.default={data:function(){return{title:!1,word:!1,status:5}},methods:{open:function(){this.title=!0},choose:function(){this.word=!0},exchange:function(){location.href="#/exchange",this.word=!1},close:function(){this.title=!1}}}},function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e(1);t.default={data:function(){return{}},methods:{again:function(){location.href="#/index"},luck:function(){location.href="#/luck"}}}},function(A,t,e){"use strict";function i(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var n=e(3),s=i(n),a=e(108),o=i(a);s.default.use(o.default);var r=new o.default({routes:[{path:"/index",component:e(99)},{path:"/result",component:e(101)},{path:"/luck",component:e(100)},{path:"/address",component:e(97)},{path:"/exchange",component:e(98)},{path:"*",redirect:"/index"}]});t.default=r},function(A,t,e){"use strict";function i(A){return A&&A.__esModule?A:{default:A}}Object.defineProperty(t,"__esModule",{value:!0});var n=e(24),s=i(n),a=e(3),o=i(a),r=e(109),c=i(r),d=e(13),u=i(d);o.default.use(c.default),o.default.use(u.default);var l=new c.default.Store({state:{audio:{songUrl:"",imgUrl:"http://m.kugou.com/v3/static/images/index/logo_kugou.png",title:"",singer:"",currentLength:0,songLength:0,currentFlag:!1},head:{toggle:!1,title:"",style:{background:"rgba(43,162,251,0)"}},headNav:"head-nav1",audioLoadding:!1,detailPlayerFlag:!1,showPlayer:!1,listenCount:0,isPlay:!0,listInfo:{songList:[],songIndex:0}},getters:{audio:function(A){return A.audio},head:function(A){return A.head},audioLoadding:function(A){return A.audioLoadding},detailPlayerFlag:function(A){return A.detailPlayerFlag},showPlayer:function(A){return A.showPlayer},isPlay:function(A){return A.isPlay}},mutations:{setAudio:function(A,t){A.listenCount||(A.showPlayer=!0),A.listenCount++,A.audio=(0,s.default)({},A.audio,t)},setAudioTime:function(A,t){A.audio.currentLength=t},setCurrent:function(A,t){A.audio.currentFlag=t},showHead:function(A,t){A.head.toggle=t},setHeadTitle:function(A,t){A.head.title=t},setHeadStyle:function(A,t){A.head.style=t},resetHeadStyle:function(A){A.head.style={background:"rgba(43,162,251,0)"}},toggleAudioLoadding:function(A,t){A.audioLoadding=t},setHeadNav:function(A,t){A.headNav="head-nav"+t},showDetailPlayer:function(A,t){A.detailPlayerFlag=t},showPlayer:function(A,t){A.showPlayer=t},isPlay:function(A,t){A.isPlay=t},setLrc:function(A,t){A.audio=(0,s.default)({},A.audio,{lrc:t})},setListInfo:function(A,t){var e=t.list,i=t.index;A.listInfo.songList=e,A.listInfo.songIndex=i}},actions:{getSong:function(A,t){var e=A.commit;A.state;e("toggleAudioLoadding",!0),o.default.http.get("http://cs003.m2828.com/apis/getKugouSong.php?hash="+t).then(function(A){var t=JSON.parse(A.data),i=t.url,n=t.imgUrl.split("{size}").join("100"),s=t.songName,a=t.choricSinger,o=t.timeLength,r=0,c={songUrl:i,imgUrl:n,title:s,singer:a,songLength:o,currentLength:r};e("setAudio",c),e("toggleAudioLoadding",!1)})},getLrc:function(A,t){var e=A.commit;A.state;o.default.http.get("http://cs003.m2828.com/apis/getLrc.php?hash="+t).then(function(A){e("setLrc",A.data)})},prev:function(A){var t=A.dispatch,e=A.state,i=e.listInfo.songList;0==e.listInfo.songIndex?e.listInfo.songIndex=i.length:e.listInfo.songIndex--;var n=i[e.listInfo.songIndex].hash;t("getSong",n),t("getLrc",n)},next:function(A){var t=A.dispatch,e=A.state,i=e.listInfo.songList;e.listInfo.songIndex==i.length-1?e.listInfo.songIndex=0:++e.listInfo.songIndex;var n=i[e.listInfo.songIndex].hash;t("getSong",n),t("getLrc",n)}}});t.default=l},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},function(A,t){},,,,,function(A,t,e){A.exports=e.p+"static/img/ad.3183424.png"},function(A,t,e){A.exports=e.p+"static/img/address.2936964.jpg"},function(A,t,e){A.exports=e.p+"static/img/again.d47ed84.png"},function(A,t,e){A.exports=e.p+"static/img/banner4.6e7dbed.jpg"},function(A,t,e){A.exports=e.p+"static/img/bg1.8feb1a5.jpg"},function(A,t,e){A.exports=e.p+"static/img/boy.6780724.jpg"},function(A,t,e){A.exports=e.p+"static/img/choujiang.a63a7e1.jpg"},function(A,t,e){A.exports=e.p+"static/img/choujiang.f9c219b.png"},function(A,t,e){A.exports=e.p+"static/img/dazhuanpan.6b1a515.png"},function(A,t,e){A.exports=e.p+"static/img/dishini.834ae57.png"},function(A,t,e){A.exports=e.p+"static/img/finall.e63ca1c.jpg"},function(A,t,e){A.exports=e.p+"static/img/girl.8890e66.jpg"},function(A,t){A.exports="data:image/png;base64,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"},function(A,t,e){A.exports=e.p+"static/img/jd.5564903.png"},function(A,t,e){A.exports=e.p+"static/img/jiantou.f7b23e2.png"},function(A,t,e){A.exports=e.p+"static/img/kaoxiang.4a11f61.png"},function(A,t,e){A.exports=e.p+"static/img/liaoli.44fd3d6.png"},function(A,t,e){A.exports=e.p+"static/img/movios.ccaed6b.png"},function(A,t,e){A.exports=e.p+"static/img/phone.ecc8af6.png"},function(A,t,e){A.exports=e.p+"static/img/ready.082cd28.png"},function(A,t,e){A.exports=e.p+"static/img/result.802b002.jpg"},function(A,t,e){A.exports=e.p+"static/img/shuoming.5e8200e.png"},function(A,t,e){A.exports=e.p+"static/img/smallhuasheng.0241428.png"},function(A,t,e){A.exports=e.p+"static/img/submit.1f60396.png"},function(A,t,e){A.exports=e.p+"static/img/sure.8971a8c.jpg"},function(A,t,e){A.exports=e.p+"static/img/sure.68df896.png"},function(A,t,e){A.exports=e.p+"static/img/wenzi.8d8fe28.png"},function(A,t,e){A.exports=e.p+"static/img/xiecheng.c136318.png"},function(A,t,e){A.exports=e.p+"static/img/xingming.4e64450.png"},function(A,t,e){A.exports=e.p+"static/img/zhongjiang.b5b824b.png"},,function(A,t,e){var i,n;i=e(15);var s=e(105);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,A.exports=i},function(A,t,e){var i,n;e(58),i=e(16);var s=e(107);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-a323d466",A.exports=i},function(A,t,e){var i,n;e(57),i=e(17);var s=e(106);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-676bbe1a",A.exports=i},function(A,t,e){var i,n;e(54),i=e(18);var s=e(102);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-0905402a",A.exports=i},function(A,t,e){var i,n;e(55),i=e(19);var s=e(103);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-13a3dc28",A.exports=i},function(A,t,e){var i,n;e(56),i=e(20);var s=e(104);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-283096d4",A.exports=i},function(A,t,e){A.exports={render:function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",[i("div",{staticStyle:{position:"relative"}},[i("img",{staticClass:"imstyle",attrs:{src:e(69),alt:""}}),A._v(" "),i("mt-swipe",{directives:[{name:"show",rawName:"v-show",value:A.show,expression:"show"}],staticClass:"imgstyle",attrs:{auto:2e3,continuous:!1,showIndicators:!1}},[i("mt-swipe-item",[i("div",{staticStyle:{"background-color":"#000000",height:"100%",width:"100%",opacity:"0.5"}},[A._v("1111")])]),A._v(" "),i("mt-swipe-item",[i("img",{attrs:{src:e(68),alt:""},on:{click:function(t){A.hide()}}})])],1),A._v(" "),i("div",{staticClass:"box"},[i("div",{staticClass:"wai"},[i("img",{staticStyle:{height:"40px"},attrs:{src:e(77)}}),A._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:A.name,expression:"name"}],staticClass:"inputstyle",attrs:{placeholder:"请输入你的名字"},domProps:{value:A.name},on:{input:function(t){t.target.composing||(A.name=t.target.value)}}})]),A._v(" "),i("div",{staticClass:"inputbox",staticStyle:{position:"relative"}},[i("img",{staticClass:"boy",attrs:{src:e(70)}}),A._v(" "),i("label",{staticClass:"demo--label"},[i("input",{directives:[{name:"show",rawName:"v-show",value:A.ok,expression:"ok"}],staticClass:"demo--radio",attrs:{type:"radio",name:"demo-radio",value:"boy"},on:{click:function(t){A.change()}}}),A._v(" "),i("span",{staticClass:"demo--radioInput"})])]),A._v(" "),i("div",{staticClass:"sex"},[i("img",{staticClass:"boy",attrs:{src:e(76)}}),A._v(" "),i("label",{staticClass:"demo--label"},[i("input",{directives:[{name:"show",rawName:"v-show",value:A.ok,expression:"ok"}],staticClass:"demo--radio",attrs:{type:"radio",name:"demo-radio",value:"girl"},on:{click:function(t){A.change()}}}),A._v(" "),i("span",{staticClass:"demo--radioInput"})])]),A._v(" "),i("img",{staticStyle:{width:"50%"},attrs:{src:e(89)},on:{click:function(t){A.sure(A.name,A.radioValue)}}})])],1)])},staticRenderFns:[]}},function(A,t,e){A.exports={render:function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",[i("div",{staticStyle:{"background-size":"cover",position:"relative"}},[i("img",{staticStyle:{width:"100%","max-width":"100%",height:"100%","max-height":"100%"},attrs:{src:e(71)}}),A._v(" "),i("div",{staticStyle:{position:"fixed",top:"100px",left:"0px",display:"flex","flex-direction":"column",right:"0"}},[i("div",{staticClass:"luck"},[i("img",{staticStyle:{width:"150px"},attrs:{src:e(87)}}),A._v(" "),A._m(0),A._v(" "),i("div",{staticClass:"shuoming"},[i("img",{staticStyle:{width:"50%"},attrs:{src:e(86)},on:{click:function(t){A.open()}}})]),A._v(" "),i("div",{staticClass:"jiantou"},[i("img",{staticStyle:{width:"60px"},attrs:{src:e(79)},on:{click:function(t){A.choose()}}})])])])]),A._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:A.title,expression:"title"}],staticClass:"showhide"},[A._m(1),A._v(" "),i("img",{staticClass:"againnext",attrs:{src:e(90)},on:{click:function(t){A.close()}}})]),A._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:A.word,expression:"word"}],staticClass:"showhide"},[A._m(2),A._v(" "),0===A.status?i("img",{staticClass:"haier",attrs:{src:e(78)}}):A._e(),A._v(" "),1===A.status?i("img",{staticClass:"haier",attrs:{src:e(82)}}):A._e(),A._v(" "),2===A.status?i("img",{staticClass:"haier",attrs:{src:e(80)}}):A._e(),A._v(" "),3===A.status?i("img",{staticClass:"haier",attrs:{src:e(74)}}):A._e(),A._v(" "),4===A.status?i("img",{staticClass:"haier",attrs:{src:e(81)}}):A._e(),A._v(" "),5===A.status?i("img",{staticClass:"haier",attrs:{src:e(92)}}):A._e(),A._v(" "),i("img",{staticClass:"againnext",attrs:{src:e(84)},on:{click:function(t){A.exchange()}}})])])},staticRenderFns:[function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticClass:"pan"},[i("img",{staticStyle:{width:"80%"},attrs:{src:e(73)}})])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticStyle:{position:"relative"}},[i("img",{staticClass:"huodong",attrs:{src:e(91)}})])},function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",{staticStyle:{position:"relative"}},[i("img",{staticClass:"huodong",attrs:{src:e(94)}})])}]}},function(A,t,e){A.exports={render:function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",[i("div",{staticStyle:{position:"relative"}},[i("img",{staticClass:"imstyle",attrs:{src:e(85),alt:""}}),A._v(" "),i("div",{staticClass:"footimg"},[i("div",[i("img",{attrs:{src:e(67),alt:""},on:{click:function(t){A.again()}}})]),A._v(" "),i("div",[i("img",{attrs:{src:e(72),alt:""},on:{click:function(t){A.luck()}}})])])])])},staticRenderFns:[]}},function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"main"},[e("router-view")],1)])},staticRenderFns:[]}},function(A,t,e){A.exports={render:function(){var A=this,t=A.$createElement,i=A._self._c||t;return i("div",[i("img",{staticClass:"addresssty",attrs:{src:e(66)}}),A._v(" "),i("div",{staticStyle:{position:"fixed",top:"40%",left:"0"}},[i("div",{staticClass:"bigbox"},[i("img",{staticStyle:{width:"100%",height:"40px"},attrs:{src:e(93)}}),A._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:A.username,expression:"username"}],staticClass:"namesty",attrs:{placeholder:"请填写您的名字"},domProps:{value:A.username},on:{input:function(t){t.target.composing||(A.username=t.target.value)}}})]),A._v(" "),i("div",{staticClass:"bigbox"},[i("img",{staticStyle:{width:"100%",height:"40px"},attrs:{src:e(83)}}),A._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:A.tel,expression:"tel"}],staticClass:"namesty",attrs:{placeholder:"请填写您的电话",type:"tel",required:"",pattern:"^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}"},domProps:{value:A.tel},on:{input:function(t){t.target.composing||(A.tel=t.target.value)}}})]),A._v(" "),i("div",{staticClass:"dizhisty"},[i("img",{staticStyle:{width:"100%",height:"80px"},attrs:{src:e(65)}}),A._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:A.addres,expression:"addres"}],staticClass:"namesty2",attrs:{placeholder:"请输入地址"},domProps:{value:A.addres},on:{input:function(t){t.target.composing||(A.addres=t.target.value)}}})]),A._v(" "),i("div",{staticClass:"over"},[i("img",{staticStyle:{width:"100%"},attrs:{src:e(88)},on:{click:function(t){A.submit(A.username,A.tel,A.addres)}}})])]),A._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:A.over,expression:"over"}],staticClass:"finall"},[i("img",{staticClass:"wan",attrs:{src:e(75)}})])])},staticRenderFns:[]}},function(A,t){A.exports={render:function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"address"},[e("mt-field",{attrs:{placeholder:"请输入用户名"}})],1)},staticRenderFns:[]}},,,function(A,t){}]);
//# sourceMappingURL=app.b5af247b142d99d8eccb.js.map