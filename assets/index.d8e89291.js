import{j as a,a as e,r as m,u as v,F as g}from"./index.a8fea649.js";function w(i){const{stuName:r,stuNum:s,outDay:u,outDate:l,inDay:d,inDate:c}=JSON.parse(i.timeData);return a("div",{className:"Header",children:[e("span",{className:"stuName",children:r}),e("span",{className:"stuNum",children:s}),a("ul",{className:"outTime",children:[e("li",{children:u}),a("li",{children:[l,"-",d]}),e("li",{children:c})]})]})}function f(){let[i,r]=m.exports.useState({month:0,today:0,hours:0,minutes:0,seconds:0});const s=()=>{const t=new Date,n={month:t.getMonth()+1,today:t.getDate(),hours:t.getHours(),minutes:t.getMinutes(),seconds:t.getSeconds()};for(let o in n)n[o]=n[o]>=10?n[o]:"0"+n[o];return n};m.exports.useEffect(()=>{r(s());const t=setInterval(()=>{r(s())},1e3);return()=>{clearInterval(t)}},[]);const{month:u,today:l,hours:d,minutes:c,seconds:h}=i;return a("div",{className:"MainDate clearfix",children:[e("div",{className:"leftDate",children:`${u}-${l}`}),e("div",{className:"rightDate",children:`${d}:${c}:${h}`})]})}var p="./assets/green@2x.cfd113aa.webp";function D(){return a("div",{className:"GreenCode",children:[e("div",{className:"midWord",children:"\u901A\u5927\u8FDB\u51FA\u6821\u7801"}),e("div",{className:"imgGreen",children:e("img",{src:p,alt:"LV"})})]})}function F(){return a("ul",{className:"Footer",children:[e("li",{children:"\u9EC4\u7801\uFF1A\u60A8\u5F53\u524D\u5904\u4E8E\u8FDB\u51FA\u6821\u9884\u8B66\u72B6\u6001\u3002"}),e("li",{children:"\u7EFF\u7801\uFF1A\u60A8\u7B26\u5408\u8FDB\u6821\u6761\u4EF6\u3002"})]})}function b(){const[i]=v();return a(g,{children:[e(w,{timeData:i.get("value")}),e(f,{}),e(D,{}),e(F,{})]})}export{b as default};