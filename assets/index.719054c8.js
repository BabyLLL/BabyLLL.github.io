import{d as e,r as n,c as o,o as r,F as l,a as s,b as t,e as a,f as u}from"./vendor.c8b23b25.js";var p=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:n(0)})});const c=s("h1",null,"hello ~~",-1),m=s("h1",null,"哈哈哈哈哈",-1);p.render=function(e,n,s,t,a,u){return r(),o(l,null,[c,m],64)};var d=e({name:"App",components:{HelloWorld:p},setup:(e,o)=>({num:n(0)})});const i=t(" 11 ");d.render=function(e,n,t,u,p,c){const m=a("HelloWorld");return r(),o(l,null,[s(m,{msg:"Hello Vue 3 + TypeScript + Vite"}),i],64)},u(d).mount("#app");
