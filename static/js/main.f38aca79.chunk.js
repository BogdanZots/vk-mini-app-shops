(this["webpackJsonptest-vk-mini"]=this["webpackJsonptest-vk-mini"]||[]).push([[0],{151:function(e,t,c){},174:function(e,t,c){},176:function(e,t,c){},177:function(e,t,c){},178:function(e,t,c){},179:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(26),s=c.n(a),r=c(24),i=c.n(r),o=c(14),l=c.n(o),d=c(25),j=c(22),u=c(4),b=(c(150),c(151),c(19)),h=c(57),p=c(23),m=c(33),O=c(34),x=c(35),v=c(27),f=c.n(v),g=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"getAllShops",value:function(e){return f.a.get(e)}},{key:"getCurrentShopMenu",value:function(e){return f.a.get(e)}},{key:"getCurrentShopCategories",value:function(e){return f.a.get(e)}}]),e}(),_="GET_ALL_SHOPS",C="CHECK_PANEL",y="CHECK_VIEW",w="SET_CURRENT_SHOP_MENU",A="SET_USER_GEO_DATA",k="https://nostresso-back.herokuapp.com/",N=k+"shop/",S="home",E={SEARCH_PANELS:["home","map","current-shop","current-shop-product"],MAIN_PANEL:"main",CURRENT_CAFFE_PANEL:"current-caffe-panel",MAP_PANEL:"map-panel"},L={shops:[],activePanels:Object(m.a)({},S,E.MAIN_PANEL),activeView:S,currentShop:{id:0,caption:"",img:"",name:"",menu:[],catigories:[]}},M=function(e){return console.log("ID",e),function(){var t=Object(d.a)(l.a.mark((function t(c){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getCurrentShopMenu(N+e);case 3:return n=t.sent,t.next=6,g.getCurrentShopCategories("".concat(N).concat(e,"/").concat("categories"));case 6:a=t.sent,c((s={menu:n.data,categories:a.data,shopId:e},{type:w,payload:s})),console.log(n,a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}var s}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,c=Object(p.a)({},e);switch(t.type){case _:return c.shops=Object(h.a)(t.payload.sort((function(e,t){return e.middleRate-t.middleRate}))),Object(p.a)({},c);case C:return c.activePanels=t.payload,Object(p.a)({},c);case y:return c.activeView=t.payload,Object(p.a)({},c);case w:var n=+t.payload.shopId;return c.currentShop.catigories=t.payload.categories,c.currentShop.menu=t.payload.menu,c.currentShop.name=c.shops[n-1].name,c.currentShop.img=c.shops[n-1].img,Object(p.a)({},c);default:return e}},P=(c(174),c(1));function Z(){return Object(P.jsxs)("div",{class:"header__block",children:[Object(P.jsx)(u.o,{size:16}),Object(P.jsx)(u.s,{className:"header__block-title",children:"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 \u0435\u0434\u0443 \u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(P.jsx)(u.o,{size:16}),Object(P.jsxs)(u.g,{className:"header__block-options",children:[Object(P.jsx)(u.m,{className:"header__block-search"}),Object(P.jsx)(u.g,{className:"geo",children:Object(P.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 43 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(P.jsx)("path",{d:"M21.0096 0C9.4186 0 0 9.4186 0 21.0096C0 24.92 1.07921 28.7463 3.13953 32.0541L19.8183 58.9363C20.1407 59.4549 20.7013 59.7632 21.304 59.7632H21.318C21.9347 59.7632 22.4953 59.4409 22.8037 58.9083L39.062 31.7738C40.9961 28.5361 42.0193 24.8079 42.0193 21.0096C42.0193 9.4186 32.6007 0 21.0096 0ZM36.0486 29.9797L21.2759 54.6475L6.11088 30.218C4.40095 27.4569 3.47591 24.2753 3.47591 21.0096C3.47591 11.3528 11.3528 3.47591 21.0096 3.47591C30.6665 3.47591 38.5294 11.3528 38.5294 21.0096C38.5294 24.1772 37.6604 27.2747 36.0486 29.9797Z",fill:"black"}),Object(P.jsx)("path",{d:"M21.0101 10.5119C15.2216 10.5119 10.4983 15.2212 10.4983 21.0097C10.4983 26.7701 15.1375 31.5215 21.0101 31.5215C26.9528 31.5215 31.5219 26.7141 31.5219 21.0097C31.5219 15.2212 26.7986 10.5119 21.0101 10.5119ZM21.0101 28.0316C17.1277 28.0316 13.9882 24.878 13.9882 21.0097C13.9882 17.1413 17.1558 13.9878 21.0101 13.9878C24.8644 13.9878 28.018 17.1553 28.018 21.0097C28.032 24.822 24.9485 28.0316 21.0101 28.0316Z",fill:"black"})]})})]}),Object(P.jsx)(u.o,{size:16})]})}var z=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.shops),a=Object(b.c)((function(e){return e.user})),s=a.userAdress,r=Object(b.b)(),i=n;return console.log(i),Object(P.jsxs)(u.l,{id:t,children:[Object(P.jsx)(Z,{}),Object(P.jsxs)(u.h,{children:[Object(P.jsxs)(u.q,{className:"select__tabs",children:[Object(P.jsx)(u.r,{children:"C\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"}),Object(P.jsx)(u.r,{"data-to":"map",onClick:function(e){return c(e)},children:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"})]}),"Adress : ",s]}),Object(P.jsx)(u.g,{children:Object(P.jsx)(u.d,{className:"cards__container","data-to":"current-shop",size:"l",children:i&&i.map((function(e){var t=e.id;return Object(P.jsx)(u.f,{onClick:function(e){r(M(t)),c(e.target.closest(".cards__container"))},className:"item__card",image:e.img,src:e.img,subtitle:"\u041a\u041e\u0424\u0415\u0419\u041d\u042f "+e.name,header:e.description,caption:e.addressText},e.id)}))})})]})},I=(c(176),function(e){var t=Object(b.b)(),c=[{name:"name1",cord:[51.5171833,31.2746446],id:1},{name:"name2",cord:[56.751574,38.573856],id:2},{name:"name3",cord:[57.751574,39.573856],id:3},{name:"name4",cord:[58.751574,40.573856],id:4}],a=Object(n.useState)(""),s=Object(j.a)(a,2),r=s[0],i=s[1];return Object(n.useEffect)((function(){window.ymaps.ready((function(){i(new ymaps.Map("map-2",{center:[55.751574,37.573856],zoom:9},{searchControlProvider:"yandex#search"}))}))}),[]),c.forEach((function(n,a){var s,i,o='<div id="map_point" class="map_point" data-to="current-shop"   data-id='.concat(c[a].id,' class="text">\n    ').concat(c[a].name,'\n    <div class="place_title">\n    <div>test</div>\n    <div>\n    <img src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/star-interface-256.png" style="width:12px;heigth:12px">\n    <span class="text_small">\n    4,5 \u041a\u0430\u043f\u0443\u0447\u0438\u043d\u043e \u043e\u0442 190 \u0440\n    </span>\n    </div>\n    </div>\n    </div>'),l=null===(s=ymaps)||void 0===s||null===(i=s.templateLayoutFactory)||void 0===i?void 0:i.createClass(o);if(window.ymaps.GeoObject){var d=new ymaps.Placemark(c[a].cord,{hintContent:c[a].name},{iconLayout:l,iconShape:{type:"Rectangle",coordinates:[[-95,-88],[85,78]]}});r.geoObjects&&(r.geoObjects.add(d),d.events.add("click",(function(c){var n=document.getElementsByClassName("map_point");t(M(n[a].dataset.id)),e.go(n[a])})))}})),Object(P.jsxs)(u.l,{id:e.id,children:[Object(P.jsx)(Z,{className:"header__block-map"}),Object(P.jsx)(u.h,{children:Object(P.jsxs)(u.q,{className:"select__tabs-map",children:[Object(P.jsx)(u.r,{"data-to":"home",onClick:function(t){return e.go(t)},children:"C\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"}),Object(P.jsx)(u.r,{"data-to":"map",onClick:function(t){return e.go(t)},className:"shop",children:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"})]})}),Object(P.jsx)("div",{id:"map-2"})]})}),R=c(180),G=c(181),T=c(182),U=(c(177),function(e){var t=e.activePanel,c=e.go;return console.log("acive panel",t),Object(P.jsx)(u.p,{className:"nav__tabbar",children:Object(P.jsx)(u.h,{className:"footer__group",children:Object(P.jsxs)(u.k,{className:"nav__list",children:[Object(P.jsx)(u.e,{className:"nav__item",expandable:!0,children:E.SEARCH_PANELS.some((function(e){return e===t}))?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(u.g,{children:Object(P.jsx)(R.a,{fill:"orange","data-to":"home",onClick:function(e){return c(e)}})}),Object(P.jsx)("span",{class:"active",children:"\u041f\u043e\u0438\u0441\u043a"})]}):""}),Object(P.jsxs)(u.e,{className:"nav__item",expandable:!0,children:[Object(P.jsx)(u.g,{children:Object(P.jsx)(G.a,{fill:"#99A2AD"})}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(P.jsxs)(u.e,{className:"nav__item",expandable:!0,children:[Object(P.jsx)(u.g,{children:Object(P.jsx)(T.a,{fill:"#99A2AD"})}),"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"]})]})})})});c(178);function V(e){var t=e.go,c=e.id,a=Object(b.c)((function(e){return e.shops})),s=a.currentShop,r=Object(n.useState)("\u041d\u0430\u043f\u0438\u0442\u043a\u0438"),i=Object(j.a)(r,2);i[0],i[1];return Object(P.jsxs)(u.l,{id:c,children:[Object(P.jsx)(u.d,{className:"cards__container current__shop-card",size:"l",children:Object(P.jsx)(u.f,{onClick:function(e){},className:"current__shop-card item__card",image:s.img,src:s.img,subtitle:"\u041a\u041e\u0424\u0415\u0419\u041d\u042f "+s.name},s.id)}),Object(P.jsx)(u.q,{children:Object(P.jsxs)(u.j,{children:[Object(P.jsx)(u.r,{children:"\u041d\u0430\u043f\u0438\u0442\u043a\u0438"}),Object(P.jsx)(u.r,{children:"\u0428\u0430\u0432\u0435\u0440\u043c\u0430"}),Object(P.jsx)(u.r,{children:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b"}),Object(P.jsx)(u.r,{children:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438"}),Object(P.jsx)(u.r,{children:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b"}),Object(P.jsx)(u.r,{children:"\u0417\u0430\u043a\u0443\u0441\u043a\u0438"})]})}),Object(P.jsx)(u.h,{class:"",children:Object(P.jsxs)(u.d,{className:"menu__container",size:"m",children:[s.menu.map((function(e){return Object(P.jsxs)(u.c,{className:"menu__item",mode:"outline",children:[Object(P.jsx)("img",{src:e.img,class:"menu__item-img"}),Object(P.jsx)(u.o,{size:16}),Object(P.jsx)("div",{children:Object(P.jsx)(u.i,{children:e.name})}),Object(P.jsx)(u.o,{size:16}),Object(P.jsxs)("div",{class:"menu__item-buy",children:[Object(P.jsxs)(u.s,{class:"menu__item-but-text",level:"2",weight:"semibold",children:["\u20bd ",e.cost]}),Object(P.jsx)("div",{class:"menu__item-buy-cirle","data-to":"current-shop-product",onClick:function(e){return t(e)},children:Object(P.jsxs)("svg",{height:"26",width:"26",fill:"white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(P.jsx)("title",{}),Object(P.jsxs)("g",{"data-name":"1",id:"_1",children:[Object(P.jsx)("path",{d:"M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"}),Object(P.jsx)("path",{d:"M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"}),Object(P.jsx)("path",{d:"M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"}),Object(P.jsx)("path",{d:"M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"})]})]})})]})]})})),s.menu.map((function(e){return Object(P.jsxs)(u.c,{className:"menu__item",mode:"outline",children:[Object(P.jsx)("img",{src:e.img,class:"menu__item-img"}),Object(P.jsx)(u.o,{size:16}),Object(P.jsx)("div",{class:"menu__item-text",children:Object(P.jsx)(u.i,{children:e.name})}),Object(P.jsx)(u.o,{size:16}),Object(P.jsxs)("div",{class:"menu__item-buy",children:[Object(P.jsxs)(u.s,{class:"menu__item-but-text",level:"2",weight:"semibold",children:["\u20bd ",e.cost]}),Object(P.jsx)("div",{class:"menu__item-buy-cirle",onClick:function(e){return t(e)},children:Object(P.jsxs)("svg",{height:"26",width:"26",fill:"white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(P.jsx)("title",{}),Object(P.jsxs)("g",{"data-name":"1",id:"_1",children:[Object(P.jsx)("path",{d:"M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"}),Object(P.jsx)("path",{d:"M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"}),Object(P.jsx)("path",{d:"M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"}),Object(P.jsx)("path",{d:"M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"})]})]})})]})]})}))]})})]})}function K(){return Object(P.jsx)("div",{children:"Product"})}var B=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"getGeo",value:function(e){return f.a.get(e)}}]),e}(),W={userAdress:"",userLocation:""},D=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(c){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.getGeo("https://nominatim.openstreetmap.org/reverse?lat=".concat(e.lat,"&lon=").concat(e.long,"&zoom=18&addressdetails=1&format=json"));case 2:n=t.sent,c((a=n.data.address,{type:A,payload:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,c=Object(p.a)({},e);return t.type===A?(console.log(t),c.userAdress=t.payload.city+" , "+t.payload.road,Object(p.a)({},c)):e},q=function(){var e=Object(n.useState)("home"),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(j.a)(s,2),o=r[0],h=r[1],p=Object(n.useState)(""),m=Object(j.a)(p,2),O=m[0],x=m[1],v=Object(n.useState)(null),f=Object(j.a)(v,2),C=f[0],y=f[1],w=Object(b.b)(),A=Object(b.c)((function(e){return e.shops})),k=A.shops;Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),x(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var a=document.createAttribute("scheme");a.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),function(){e.apply(this,arguments)}(),w(function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getAllShops("https://nostresso-back.herokuapp.com/shop/all");case 3:c=e.sent,t((n=c.data,{type:_,payload:n})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var n}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}());var t=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.send("VKWebAppGetGeodata");case 3:t=e.sent,y(t),console.log("GEO",t,C),w(D({lat:t.lat,long:t.long})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();t()}),[]);var N=function(e){e.currentTarget?a(e.currentTarget.dataset.to):a(e.dataset.to)};return Object(P.jsx)(u.a,{children:Object(P.jsxs)(u.b,{children:[Object(P.jsxs)(u.t,{activePanel:c,popout:O,children:[Object(P.jsx)(z,{id:"home",fetchedUser:o,shops:k,go:N}),Object(P.jsx)(I,{id:"map",go:N}),Object(P.jsx)(V,{id:"current-shop",go:N}),Object(P.jsx)(K,{id:"current-shop-product",go:N})]}),Object(P.jsx)(U,{activePanel:c,go:N})]})})},J=c(36),Q=c(56),X=Object(J.b)({shops:H,user:F}),Y=Object(J.c)(X,Object(J.a)(Q.a));window.store=Y;var $=Y;i.a.send("VKWebAppInit"),s.a.render(Object(P.jsx)(b.a,{store:$,children:Object(P.jsx)(q,{})}),document.getElementById("root"))}},[[179,1,2]]]);
//# sourceMappingURL=main.f38aca79.chunk.js.map