(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhoubiantuijian/add-or-update"],{"143b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,i,r,u,a){try{var o=n[u](a),c=o.value}catch(s){return void e(s)}o.done?t(c):Promise.resolve(c).then(i,r)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var a=n.apply(t,e);function o(n){u(a,i,r,o,c,"next",n)}function c(n){u(a,i,r,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("aa81"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{ruleForm:{jingdianmingcheng:"",jingdiandizhi:"",zhoubianmingcheng:"",tupian:"",tuijianliyou:"",thumbsupnum:"",crazilynum:""},user:{},ro:{jingdianmingcheng:!1,jingdiandizhi:!1,zhoubianmingcheng:!1,tupian:!1,tuijianliyou:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=a(i.default.mark((function t(e){var r,u,a,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(u=t.sent,this.user=u.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=13;break}return this.ruleForm.id=e.id,t.next=11,this.$api.info("zhoubiantuijian",this.ruleForm.id);case 11:u=t.sent,this.ruleForm=u.data;case 13:if(!e.cross){t.next=48;break}a=n.getStorageSync("crossObj"),t.t0=i.default.keys(a);case 16:if((t.t1=t.t0()).done){t.next=48;break}if(o=t.t1.value,"jingdianmingcheng"!=o){t.next=22;break}return this.ruleForm.jingdianmingcheng=a[o],this.ro.jingdianmingcheng=!0,t.abrupt("continue",16);case 22:if("jingdiandizhi"!=o){t.next=26;break}return this.ruleForm.jingdiandizhi=a[o],this.ro.jingdiandizhi=!0,t.abrupt("continue",16);case 26:if("zhoubianmingcheng"!=o){t.next=30;break}return this.ruleForm.zhoubianmingcheng=a[o],this.ro.zhoubianmingcheng=!0,t.abrupt("continue",16);case 30:if("tupian"!=o){t.next=34;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,t.abrupt("continue",16);case 34:if("tuijianliyou"!=o){t.next=38;break}return this.ruleForm.tuijianliyou=a[o],this.ro.tuijianliyou=!0,t.abrupt("continue",16);case 38:if("thumbsupnum"!=o){t.next=42;break}return this.ruleForm.thumbsupnum=a[o],this.ro.thumbsupnum=!0,t.abrupt("continue",16);case 42:if("crazilynum"!=o){t.next=46;break}return this.ruleForm.crazilynum=a[o],this.ro.crazilynum=!0,t.abrupt("continue",16);case 46:t.next=16;break;case 48:this.styleChange();case 49:case"end":return t.stop()}}),t,this)})));function e(n){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var n=this;this.$api.upload((function(t){n.ruleForm.tupian=n.$base.url+"upload/"+t.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=a(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){n.next=3;break}return this.$utils.msg("赞应输入整数"),n.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){n.next=6;break}return this.$utils.msg("踩应输入整数"),n.abrupt("return");case 6:if(!this.ruleForm.id){n.next=11;break}return n.next=9,this.$api.update("zhoubiantuijian",this.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,this.$api.add("zhoubiantuijian",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(e,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};t.default=c}).call(this,e("543d")["default"])},"254f":function(n,t,e){"use strict";var i=e("46fc"),r=e.n(i);r.a},"45d1":function(n,t,e){"use strict";(function(n){e("95d7"),e("921b");i(e("66fd"));var t=i(e("e1dd"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"46fc":function(n,t,e){},"4bb3":function(n,t,e){"use strict";e.r(t);var i=e("143b"),r=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=r.a},"70ba":function(n,t,e){"use strict";var i,r=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}))},e1dd:function(n,t,e){"use strict";e.r(t);var i=e("70ba"),r=e("4bb3");for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);e("254f");var a,o=e("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"2836750f",null,!1,i["a"],a);t["default"]=c.exports}},[["45d1","common/runtime","common/vendor"]]]);