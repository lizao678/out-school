import{j as e,a as i,r as d,u as g,F as v}from"./index.dc8c754c.js";function w(a){const{outDay:r,outDate:o,inDay:u,inDate:l}=JSON.parse(a.timeData);return e("div",{className:"Header",children:i("ul",{className:"outTime",children:[e("li",{children:r}),i("li",{children:[o,"-",u]}),e("li",{children:l})]})})}function f(){let[a,r]=d.exports.useState({month:0,today:0,hours:0,minutes:0,seconds:0});const o=()=>{const t=new Date,n={month:t.getMonth()+1,today:t.getDate(),hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()};for(let s in n)n[s]=n[s]>=10?n[s]:"0"+n[s];return n};d.exports.useEffect(()=>{r(o());const t=setInterval(()=>{r(o())},1e3);return()=>{clearInterval(t)}},[]);const{month:u,today:l,hours:c,minutes:m,seconds:h}=a;return i("div",{className:"MainDate clearfix",children:[e("div",{className:"leftDate",children:`${u}-${l}`}),e("div",{className:"rightDate",children:`${c}:${m}:${h}`})]})}var D="./assets/green@2x.cfd113aa.webp";function p(){return i("div",{className:"GreenCode",children:[e("div",{className:"midWord",children:"\u901A\u5927\u8FDB\u51FA\u6821\u7801"}),e("div",{className:"imgGreen",children:e("img",{src:D,alt:"LV"})})]})}function F(){return i("ul",{className:"Footer",children:[e("li",{children:"\u9EC4\u7801\uFF1A\u60A8\u5F53\u524D\u5904\u4E8E\u8FDB\u51FA\u6821\u9884\u8B66\u72B6\u6001\u3002"}),e("li",{children:"\u7EFF\u7801\uFF1A\u60A8\u7B26\u5408\u8FDB\u6821\u6761\u4EF6\u3002"})]})}function b(){const[a]=g();return i(v,{children:[e(w,{timeData:a.get("value")}),e(f,{}),e(p,{}),e(F,{})]})}export{b as default};
