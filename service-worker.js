if(!self.define){let i,t={};const r=(r,s)=>(r=new URL(r+".js",s).href,t[r]||new Promise((t=>{if("document"in self){const i=document.createElement("script");i.src=r,i.onload=t,document.head.appendChild(i)}else i=r,importScripts(r),t()})).then((()=>{let i=t[r];if(!i)throw new Error(`Module ${r} didn’t register its module`);return i})));self.define=(s,e)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let l={};const n=i=>r(i,o),u={module:{uri:o},exports:l,require:n};t[o]=Promise.all(s.map((i=>u[i]||n(i)))).then((i=>(e(...i),l)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"this-or-that"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/this-or-that/css/app.f0a4d60c.css",revision:null},{url:"/this-or-that/img/1.04da553a.jpg",revision:null},{url:"/this-or-that/img/10.02140ddd.jpg",revision:null},{url:"/this-or-that/img/11.5d9d86f5.jpg",revision:null},{url:"/this-or-that/img/12.fc4e6eeb.jpg",revision:null},{url:"/this-or-that/img/13.567a4abb.jpg",revision:null},{url:"/this-or-that/img/14.c7626c85.jpg",revision:null},{url:"/this-or-that/img/15.8d179fe7.jpg",revision:null},{url:"/this-or-that/img/16.4990767c.jpg",revision:null},{url:"/this-or-that/img/2.4c2c4eba.jpg",revision:null},{url:"/this-or-that/img/3.a9e16b19.jpg",revision:null},{url:"/this-or-that/img/4.87f6c62d.jpg",revision:null},{url:"/this-or-that/img/5.bf0dc038.jpg",revision:null},{url:"/this-or-that/img/6.79a04b37.jpg",revision:null},{url:"/this-or-that/img/7.4c68f45b.jpg",revision:null},{url:"/this-or-that/img/8.5fbc3616.jpg",revision:null},{url:"/this-or-that/img/9.9abd054e.jpg",revision:null},{url:"/this-or-that/index.html",revision:"bfd3fd1fd57233d0f094e349d92147c2"},{url:"/this-or-that/js/app.747837a4.js",revision:null},{url:"/this-or-that/js/chunk-vendors.f3a7138b.js",revision:null},{url:"/this-or-that/manifest.json",revision:"3642f060246a4fd4cd52dacee07a39c8"},{url:"/this-or-that/models/group1-shard25of25.bin",revision:"c86cde79ae2ad464a573313b22480266"},{url:"/this-or-that/models/labels.txt",revision:"2e088f9d1e11971035e36ba3db21f4dc"},{url:"/this-or-that/models/model.json",revision:"0b9aa46eccff63c8b7c1d6b5bbcfab9f"},{url:"/this-or-that/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"/this-or-that/web.config",revision:"60562b69129aed89be7c0ff2311ed465"}],{})}));
//# sourceMappingURL=service-worker.js.map
