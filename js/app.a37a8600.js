(function(e){function t(t){for(var o,d,c=t[0],r=t[1],s=t[2],p=0,f=[];p<c.length;p++)d=c[p],Object.prototype.hasOwnProperty.call(n,d)&&n[d]&&f.push(n[d][0]),n[d]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(o=!1)}o&&(i.splice(t--,1),e=d(d.s=a[0]))}return e}var o={},n={app:0},i=[];function d(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=o,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(a,o,function(t){return e[t]}.bind(null,o));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/projects/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=r;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"103d":function(e,t){e.exports="data:image/png;base64,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"},1169:function(e,t,a){var o=a("24fb"),n=a("1de5"),i=a("103d");t=o(!1);var d=n(i);t.push([e.i,".divider[data-v-56019d80]{background-image:url("+d+");height:8px;width:100vw}#foot[data-v-56019d80]{text-align:center;font-size:17px}",""]),e.exports=t},"14d2":function(e,t,a){e.exports=a.p+"img/icon8.a538c387.png"},1771:function(e,t,a){var o={"./Capture16.png":"93ab","./Capture18.png":"51f9","./Capture19.png":"7ed6","./icon02.jpg":"571f","./icon1.png":"b45a","./icon2.png":"50d3","./icon3.png":"b5c1","./icon6.png":"84ce","./icon7.png":"d029","./icon8.png":"14d2","./iconK.png":"fd58","./image1.png":"7081","./image2.png":"289c","./nasa1.jpg":"34d4","./reset.css":"b059","./rgb1.jpg":"bda2","./rgbLine.png":"103d","./style.css":"7d05"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id="1771"},"289c":function(e,t,a){e.exports=a.p+"img/image2.59e94e5b.png"},"34d4":function(e,t,a){e.exports=a.p+"img/nasa1.7f3eb7b6.jpg"},"3d3a":function(e,t,a){var o=a("6bd9");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("4377dc58",o,!0,{sourceMap:!1,shadowMode:!1})},"50d3":function(e,t,a){e.exports=a.p+"img/icon2.dfb93e9d.png"},"51f9":function(e,t,a){e.exports=a.p+"img/Capture18.11174002.png"},"54b8":function(e,t,a){"use strict";a("fc01")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function n(e,t,a,n,i,d){var c=Object(o["l"])("NavBar"),r=Object(o["l"])("Home"),s=Object(o["l"])("Footer");return Object(o["h"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(c),Object(o["g"])(r),Object(o["g"])(s)],64)}var i=Object(o["n"])("data-v-56019d80");Object(o["j"])("data-v-56019d80");var d={id:"foot"},c=Object(o["g"])("p",null,"© amanda jones 2021",-1),r=Object(o["g"])("div",{class:"divider"},null,-1);Object(o["i"])();var s=i((function(e,t,a,n,i,s){return Object(o["h"])(),Object(o["d"])("div",d,[c,r])})),l={name:"Footer"};a("6df2");l.render=s,l.__scopeId="data-v-56019d80";var p=l,f=Object(o["n"])("data-v-7b9df838");Object(o["j"])("data-v-7b9df838");var u={class:"nav-bar"},b=Object(o["g"])("h1",{class:"aj"},"/-|| ._||` :",-1),g={class:"nuNav"},v=Object(o["g"])("div",{class:"divider"},null,-1);Object(o["i"])();var A=f((function(e,t,a,n,i,d){return Object(o["h"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",u,[b,Object(o["g"])("div",g,[Object(o["g"])("button",{onClick:t[1]||(t[1]=function(e){return d.goTo("portfolioS")})},"Projects"),Object(o["g"])("button",{onClick:t[2]||(t[2]=function(e){return d.goTo("aboutS")})},"About")])]),v],64)})),m={name:"NavBar",data:function(){return{}},methods:{goTo:function(e){console.log(document.querySelector("#portfolioS"));var t=document.querySelector("#"+e),a=t.offsetTop;window.scrollTo(0,a)}}};a("9a95");m.render=A,m.__scopeId="data-v-7b9df838";var h=m,j=Object(o["n"])("data-v-4ef628f8");Object(o["j"])("data-v-4ef628f8");var y={class:"content"};Object(o["i"])();var x=j((function(e,t,a,n,i,d){var c=Object(o["l"])("Intro"),r=Object(o["l"])("Portfolio"),s=Object(o["l"])("About");return Object(o["h"])(),Object(o["d"])("div",y,[Object(o["g"])(c),Object(o["g"])(r),Object(o["g"])(s)])})),O=Object(o["n"])("data-v-c6b81e74");Object(o["j"])("data-v-c6b81e74");var w={id:"bg"},k=Object(o["f"])("AJ is a "),S=Object(o["e"])('<div id="iconBox" data-v-c6b81e74><i class="devicon-git-plain" data-v-c6b81e74></i><i class="devicon-html5-plain" data-v-c6b81e74></i><i class="devicon-css3-plain" data-v-c6b81e74></i><i class="devicon-cplusplus-plain" data-v-c6b81e74></i><i class="devicon-javascript-plain" data-v-c6b81e74></i><i class="devicon-nodejs-plain" data-v-c6b81e74></i><i class="devicon-mysql-plain" data-v-c6b81e74></i><i class="devicon-react-original" data-v-c6b81e74></i><i class="devicon-vuejs-plain" data-v-c6b81e74></i><i class="devicon-php-plain" data-v-c6b81e74></i></div>',1);Object(o["i"])();var I=O((function(e,t,a,n,i,d){return Object(o["h"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",w,[Object(o["g"])("h1",null,[k,Object(o["g"])(o["b"],{name:"slide",mode:"out-in"},{default:O((function(){return[(Object(o["h"])(),Object(o["d"])("span",{key:i.word},Object(o["m"])(i.word?"DEVELOPER":"DESIGNER"),1))]})),_:1})])]),S],64)})),N={name:"Intro",data:function(){return{word:!0}},mounted:function(){var e=this;setInterval((function(){e.word=!e.word}),4e3)}};a("8061");N.render=I,N.__scopeId="data-v-c6b81e74";var B=N,z=Object(o["n"])("data-v-f846d2cc");Object(o["j"])("data-v-f846d2cc");var T=Object(o["e"])('<div class="divider" data-v-f846d2cc></div><div id="aboutS" class="about content" data-v-f846d2cc><h1 data-v-f846d2cc>About Me:</h1><div class="zero" data-v-f846d2cc><h2 data-v-f846d2cc>Amanda Jones: Student of the world. I love to learn. ♡</h2></div><div class="bg" data-v-f846d2cc></div><p data-v-f846d2cc> I&#39;ve always been interested in both computers and creation, and I love being able to combine my two passions. </p><p data-v-f846d2cc> At my core I simply love making things. To my brain, coding feels like a puzzle game I can&#39;t put down. Though I am familliar with a handful of CSS and javascript libraries and frameworks(SASS, jQuery, React, Vue, Svelte), I greatly prefer to build up my personal projects with basic HTML, CSS and vanilla javascript. I love building clean, quick, and responsive. Nowadays I&#39;m focusing on learning more about backend development with PHP. </p><p data-v-f846d2cc> I&#39;m a quick study who likes to pick up all sorts of things. Strengths include keeping it calm and cool under pressure and being very difficult to discourage. I am friends with several artists and like to spend my downtime creating custom layouts and coming up with various ways of sharing their work. </p><div class="links" data-v-f846d2cc><a class="gitHub" href="https://github.com/americajones" data-v-f846d2cc>GitHub</a><a class="deployed" href="https://www.linkedin.com/in/amandajones/" data-v-f846d2cc>LinkedIn</a></div></div>',2);Object(o["i"])();var C=z((function(e,t,a,o,n,i){return T})),q={name:"About",components:{}};a("5faf");q.render=C,q.__scopeId="data-v-f846d2cc";var H=q,P=(a("a4d3"),a("e01a"),Object(o["n"])("data-v-2bd6f92e"));Object(o["j"])("data-v-2bd6f92e");var R={id:"portfolioS"},V=Object(o["g"])("h1",null,"Projects:",-1),K={id:"projectsContainer",class:"content"};Object(o["i"])();var M=P((function(e,t,a,n,i,d){var c=Object(o["l"])("PortfolioItem");return Object(o["h"])(),Object(o["d"])("div",R,[V,Object(o["g"])("div",K,[(Object(o["h"])(!0),Object(o["d"])(o["a"],null,Object(o["k"])(i.portfolioArray,(function(e){return Object(o["h"])(),Object(o["d"])(c,{key:e.id,title:e.title,description:e.description,imgName:e.imgName,gitHubRepo:e.gitHubRepo,deployedSite:e.deployedSite},null,8,["title","description","imgName","gitHubRepo","deployedSite"])})),128))])])})),E=Object(o["n"])("data-v-73652a97");Object(o["j"])("data-v-73652a97");var L={class:"projectBox"},G={class:"project-info"},Q={class:"links"};Object(o["i"])();var U=E((function(e,t,n,i,d,c){return Object(o["h"])(),Object(o["d"])("div",L,[Object(o["g"])("a",{href:n.deployedSite},[Object(o["g"])("img",{src:a("1771")("./"+n.imgName)},null,8,["src"])],8,["href"]),Object(o["g"])("div",G,[Object(o["g"])("h1",null,Object(o["m"])(n.title),1),Object(o["g"])("p",null,Object(o["m"])(n.description),1),Object(o["g"])("div",Q,[Object(o["g"])("a",{class:"gitHub",href:n.gitHubRepo},"GitHub Repo",8,["href"]),Object(o["g"])("a",{class:"deployed",href:n.deployedSite},"Deployed Site",8,["href"])])])])})),Z={name:"PortfolioItem",props:{title:String,description:String,imgName:String,gitHubRepo:String,deployedSite:String}};a("75c2");Z.render=U,Z.__scopeId="data-v-73652a97";var D=Z,Y={name:"Portfolio",components:{PortfolioItem:D},data:function(){return{portfolioArray:[{id:"hanziApp",title:"Chinese Study",description:"A Chinese study app made with vanilla javascript, done Taiwan style with a dataset of Zhuyin and traditional Hanzi I am currently compiling.",imgName:"Capture19.png",gitHubRepo:"https://github.com/americajones/chinese-study",deployedSite:"https://americajones.github.io/chinese-study/"},{id:"kanjiApp",title:"Kanji Study",description:"A kanji quiz app made with vanilla javascript and some modified wanakani data.",imgName:"Capture18.png",gitHubRepo:"https://github.com/americajones/kanji-study",deployedSite:"https://americajones.github.io/kanji-study/"},{id:"rgbtype",title:"RGBtype",description:"A simple javascript page to easily test a type of pixel art, using only red, green, and blue colors.",imgName:"icon8.png",deployedSite:"https://americajones.github.io/RGBtype/",gitHubRepo:"https://github.com/americajones/RGBtype"},{id:"example-gallery-elaine",title:"Simple art gallery",description:"A responsive, minimally styled art portfolio with a dark and light mode.",imgName:"icon2.png",gitHubRepo:"https://github.com/americajones/elainecollins",deployedSite:"https://americajones.github.io/elainecollins/"},{id:"kinsey",title:"The Kinsey House",description:"A webcomic home and art gallery.",imgName:"iconK.png",gitHubRepo:"#",deployedSite:"http://kinseycomic.com/"},{id:"pro-con",title:"Pro/Con visualizer",description:"A Vue app created to visualize the pros and cons of a situation",imgName:"icon3.png",deployedSite:"https://americajones.github.io/pro-con/",gitHubRepo:"https://github.com/americajones/pro-con"}]}}};a("54b8");Y.render=M,Y.__scopeId="data-v-2bd6f92e";var X=Y,F={name:"Home",components:{Intro:B,Portfolio:X,About:H}};F.render=x,F.__scopeId="data-v-4ef628f8";var J=F,W={name:"App",data:function(){return{navActivate:!1}},components:{Footer:p,NavBar:h,Home:J}};a("f5fc");W.render=n;var _=W,$=(a("b059"),a("7d05"),Object(o["c"])(_));$.mount("#app")},"571f":function(e,t,a){e.exports=a.p+"img/icon02.7939bbb3.jpg"},"5faf":function(e,t,a){"use strict";a("3d3a")},"6bd9":function(e,t,a){var o=a("24fb"),n=a("1de5"),i=a("103d"),d=a("289c");t=o(!1);var c=n(i),r=n(d);t.push([e.i,".divider[data-v-f846d2cc]{background-image:url("+c+");height:8px;width:100vw}h1[data-v-f846d2cc]{padding:10px 1em;margin-top:2rem;font-size:1.5em;color:#fff;font-family:Helvetica,Arial,sans-serif}.about[data-v-f846d2cc]{margin:1em 0;padding:1em 0}.bg[data-v-f846d2cc]{background-image:url("+r+");background-position-y:center;background-position-x:center;width:100%;height:40vh;min-height:30vh;background-size:770px;display:flex;flex-direction:column;background-repeat:no-repeat;justify-content:center;z-index:1;filter:brightness(70%);margin-bottom:3em}p[data-v-f846d2cc]{padding:1em;line-height:1.5em;font-size:1.08em;color:#a7da98}.zero[data-v-f846d2cc]{height:0}h2[data-v-f846d2cc]{color:#fff;position:relative;z-index:3;top:10vh;padding:1em}.links[data-v-f846d2cc]{display:flex;flex-direction:row;justify-content:space-around;font-size:1em;padding:3em;text-decoration:overline}@media only screen and (min-width:770px){.about[data-v-f846d2cc]{max-width:60vw;margin-top:5em;margin:auto;padding:1rem}.bg[data-v-f846d2cc]{background-size:100% auto}}",""]),e.exports=t},"6df2":function(e,t,a){"use strict";a("b743")},7081:function(e,t,a){e.exports=a.p+"img/image1.96a58918.png"},"75c2":function(e,t,a){"use strict";a("bd29")},"79c7":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"h1{font-size:2em;font-family:Open Sans,sans-serif}body{min-width:300px;font-family:PT Sans,sans-serif}.content{flex:1}h2{font-size:1.4em}a,h2{font-family:Open Sans,sans-serif}a{color:red}a:hover{color:#d0ff00}",""]),e.exports=t},"7d05":function(e,t,a){var o=a("79c7");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("89ee9d6c",o,!0,{sourceMap:!1,shadowMode:!1})},"7e80":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}',""]),e.exports=t},"7ed6":function(e,t,a){e.exports=a.p+"img/Capture19.37a9db3a.png"},8012:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"h1[data-v-2bd6f92e]{color:#fff;padding:10px 1em;font-size:1.5em;font-family:Helvetica,Arial,sans-serif;margin-top:1rem}@media only screen and (min-width:700px){h1[data-v-2bd6f92e]{margin-left:19vw}#projectsContainer[data-v-2bd6f92e]{-moz-columns:2 auto;columns:2 auto;margin:auto;width:100vw}}@media only screen and (min-width:1070px){#projectsContainer[data-v-2bd6f92e]{-moz-columns:3 auto;columns:3 auto;width:85vw;margin:auto}}",""]),e.exports=t},8061:function(e,t,a){"use strict";a("e580")},"84ce":function(e,t,a){e.exports=a.p+"img/icon6.3a8fbcae.png"},"8ab6":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".projectBox[data-v-73652a97]{background-color:#fff;width:100%;height:440px auto;border:1rem solid #111013;border-left:none;display:inline-block}.links[data-v-73652a97]{display:flex;flex-direction:row;justify-content:space-between;font-size:1em;padding:.5em;text-decoration:overline;font-family:Helvetica,Arial,sans-serif}h1[data-v-73652a97]{color:#000;text-align:center;font-size:1.5em;font-weight:600;padding:.7em}p[data-v-73652a97]{padding:1em;font-size:1.1em}img[data-v-73652a97]{width:100%;height:auto;margin:auto;outline:5px solid #fff;outline-offset:-5px}.gitHub[data-v-73652a97]{text-align:center}.project-info[data-v-73652a97]{height:auto;background-color:#fff}a[data-v-73652a97]:hover{color:#0059ff}@media only screen and (max-width:1070px){img[data-v-73652a97]{outline:none}}",""]),e.exports=t},"93ab":function(e,t,a){e.exports=a.p+"img/Capture16.854e8ef0.png"},"9a95":function(e,t,a){"use strict";a("a32d")},a32d:function(e,t,a){var o=a("cceb");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("39ff58cb",o,!0,{sourceMap:!1,shadowMode:!1})},b059:function(e,t,a){var o=a("7e80");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("684b3e8a",o,!0,{sourceMap:!1,shadowMode:!1})},b45a:function(e,t,a){e.exports=a.p+"img/icon1.6f795fd7.png"},b5c1:function(e,t,a){e.exports=a.p+"img/icon3.ff5119b3.png"},b743:function(e,t,a){var o=a("1169");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("04b45349",o,!0,{sourceMap:!1,shadowMode:!1})},bd29:function(e,t,a){var o=a("8ab6");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("1b2b54be",o,!0,{sourceMap:!1,shadowMode:!1})},bda2:function(e,t,a){e.exports=a.p+"img/rgb1.63572414.jpg"},cc4f:function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"#app,body{background-color:#111013}#app{line-height:1.3em;text-align:left;color:#45725d;display:flex;flex-direction:column;min-height:100vh}",""]),e.exports=t},cceb:function(e,t,a){var o=a("24fb"),n=a("1de5"),i=a("103d");t=o(!1);var d=n(i);t.push([e.i,".divider[data-v-7b9df838]{background-image:url("+d+");height:8px;width:100vw}.dots[data-v-7b9df838]:hover{cursor:pointer}.nav-bar a[data-v-7b9df838]:hover{background-color:#000;color:#fff}.nav-bar a[data-v-7b9df838]{text-align:center;padding:2em;font-size:17px;text-decoration:none;color:#000}.aj[data-v-7b9df838]{font-size:1.6em;padding:15px;flex:none}.dots[data-v-7b9df838]{padding:10px 1em}.nav-bar[data-v-7b9df838]{background-color:#111013;color:#fff;display:flex;flex-direction:row;min-height:20px;justify-content:space-between;width:100vw;height:6vh;z-index:4;flex:none}.nuNav[data-v-7b9df838]{display:flex;flex-direction:row}button[data-v-7b9df838]:hover{background-color:#fff;color:#000;border:none}button[data-v-7b9df838]{background-color:#111013;font-size:17px;border:none;color:#fff;padding:1em}@media only screen and (max-width:320px){.aj[data-v-7b9df838]{display:none}}@media only screen and (min-width:700px){.aj[data-v-7b9df838]{margin-left:1em}.nav-bar[data-v-7b9df838]{position:relative}.nuNav[data-v-7b9df838]{padding-right:2em}}",""]),e.exports=t},d029:function(e,t,a){e.exports=a.p+"img/icon7.4bb4ce63.png"},e580:function(e,t,a){var o=a("ff8b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("0e6056f0",o,!0,{sourceMap:!1,shadowMode:!1})},f048:function(e,t,a){var o=a("cc4f");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("1df6c0fc",o,!0,{sourceMap:!1,shadowMode:!1})},f5fc:function(e,t,a){"use strict";a("f048")},fc01:function(e,t,a){var o=a("8012");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("499e").default;n("5aae7abe",o,!0,{sourceMap:!1,shadowMode:!1})},fd58:function(e,t,a){e.exports=a.p+"img/iconK.011f5d53.png"},ff8b:function(e,t,a){var o=a("24fb"),n=a("1de5"),i=a("bda2");t=o(!1);var d=n(i);t.push([e.i,"#bg[data-v-c6b81e74]{background-image:url("+d+");background-position-y:center;background-position-x:left;width:99vw;height:55vh;min-height:25vh;background-size:auto 100%;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:center}#iconBox i[data-v-c6b81e74]{font-size:200%;color:#fff}#iconBox[data-v-c6b81e74],#iconBox i[data-v-c6b81e74]{display:flex;flex-direction:row}#iconBox[data-v-c6b81e74]{align-content:center;align-items:center;justify-content:space-evenly;width:100vw;margin:auto;padding:1rem}h1[data-v-c6b81e74]{color:#fff;position:absolute;padding:1em;top:18vh;font-family:Helvetica,Arial,sans-serif;font-weight:500;margin-left:2em;line-height:1em}span[data-v-c6b81e74]{font-weight:600}.slide-enter-active[data-v-c6b81e74],.slide-leave-active[data-v-c6b81e74]{transition:all 1s ease}.slide-enter-from[data-v-c6b81e74],.slide-leave-to[data-v-c6b81e74]{opacity:0}",""]),e.exports=t}});
//# sourceMappingURL=app.a37a8600.js.map