(this["webpackJsonptest-vk-mini"]=this["webpackJsonptest-vk-mini"]||[]).push([[0],{140:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(27),s=n.n(a),r=n(26),i=n.n(r),o=n(14),l=n.n(o),d=n(23),u=n(24),j=n(3),h=(n(47),n(25)),b=(n(140),n(12)),p=n(38),O=n(15),m=n(36),x=n(37),v=n(33),f=n.n(v).a.create({baseURL:"https://nostresso-back.herokuapp.com"});f.interceptors.request.use((function(e){return e.headers.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMDQ4NTU4ODAiLCJpYXQiOjE2MzUwOTM3MzQsImV4cCI6MTY0MzczMzczNH0._nUSWKfG3vVsjW-iao4qy7Dsl2P_5XZ78GYsx3s6tyg",e}));var g=f,_=function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,null,[{key:"getAllShops",value:function(e){return g.get(e)}},{key:"getCurrentShopMenu",value:function(e){return g.get(e)}},{key:"getCurrentShopCategories",value:function(e){return g.get(e,{})}}]),e}(),C="GET_ALL_SHOPS",y="CHECK_PANEL",N="CHECK_VIEW",A="SET_CURRENT_SHOP_MENU",L="SET_LOADING",k="SET_CURRENT_SHOP_LOADING",w="SET_USER_GEO_DATA",E="SET_USER_ORDER",S=function(e){return{type:C,payload:e}},z=function(e){return{type:A,payload:e}},M=function(e){return{type:w,payload:e}},P=function(e){return{type:E,payload:e}},I=function(e){return{type:L,payload:e}},R=function(e){return{type:k,payload:e}},T="https://nostresso-back.herokuapp.com/",U=T+"shop/all",H=T+"shop/",Z="categories",G="home",D={SEARCH_PANELS:["home","map","current-shop","current-shop-order-product"],MAIN_PANEL:"main",CURRENT_SHOP_PANEL:"current-shop",CURRENT_SHOP_ORDER_PANEL:"current-shop-order-product",MAP_PANEL:"map-panel"},B=140,F=160,V=180,W={shops:[],currentItemsCount:2,totalItemsCount:0,currentPage:0,isLoading:!0,activePanels:Object(h.a)({},G,D.MAIN_PANEL),activeView:G,currentShop:{isLoading:!0,id:0,caption:"",img:"",name:"",menu:[],middleRate:null,addressText:"",activeCategory:null,categories:[],workingFrom:"",workingTo:""}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return console.log("PAGE SIZE",t),function(){var n=Object(d.a)(l.a.mark((function n(c){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.getAllShops("".concat(U,"?pageNumber=").concat(e,"&pageSize=").concat(t,"&lat=0&lng=0"));case 3:a=n.sent,c(I(!1)),c(S({content:a.data.content,totalElements:a.data.totalElements,page:e})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},K=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;return function(){var a=Object(d.a)(l.a.mark((function a(s){var r,i,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s(R(!0)),a.next=4,_.getCurrentShopCategories("".concat(H).concat(e,"/").concat(Z));case 4:return r=a.sent,i=t||r.data[0].id,a.next=8,_.getCurrentShopMenu("".concat(H).concat(e,"/category/").concat(i,"/menu?pageNumber=").concat(n,"&pageSize=").concat(c,"&lat=0&lng=0"));case 8:o=a.sent,s(R(!1)),console.log("menu",o,"cat",r),s(z({menu:o.data.content,categories:r.data,shopId:e})),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.log(a.t0);case 17:case"end":return a.stop()}}),a,null,[[0,14]])})));return function(e){return a.apply(this,arguments)}}()},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=Object(O.a)({},e);switch(t.type){case C:console.log(t),n.currentPage=t.payload.page;var c=t.payload.content.sort((function(e,t){return e.middleRate-t.middleRate}));return n.shops=Object(p.a)(new Set([].concat(Object(p.a)(n.shops),Object(p.a)(c)))),n.totalItemsCount=t.payload.totalElements,n.currentItemsCount,n.totalItemsCount,Object(O.a)({},n);case y:return n.activePanels=t.payload,Object(O.a)({},n);case N:return n.activeView=t.payload,Object(O.a)({},n);case L:return n.isLoading=t.payload,Object(O.a)({},n);case k:return n.currentShop.isLoading=t.payload,Object(O.a)({},n);case A:var a=+t.payload.shopId,s=n.shops.find((function(e){return a===e.id}));return n.currentShop=Object(O.a)(Object(O.a)({},s),{},{menu:t.payload.menu,categories:t.payload.categories}),Object(O.a)({},n);default:return e}},Q=(n(163),n(172)),Y=n(1);function X(){var e=Object(b.b)();return Object(Y.jsxs)("div",{class:"header__block",children:[Object(Y.jsx)(j.w,{size:16}),Object(Y.jsx)(j.B,{className:"header__block-title",children:"\u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 \u0435\u0434\u0443 \u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),Object(Y.jsx)(j.w,{size:16}),Object(Y.jsxs)(j.i,{className:"header__block-options",children:[Object(Y.jsx)(j.u,{className:"header__block-search",icon:Object(Y.jsx)(Q.a,{}),onIconClick:function(t){var n=t.target.parentElement.closest(".vkuiSearch__icons").closest(".Search__after").parentElement.querySelector(".Search__input").value.split(" ");console.log(n);var c=function(){var t=Object(d.a)(l.a.mark((function t(){var c,a,s,r,i,o,d,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://nominatim.openstreetmap.org/?addressdetails=1&q=".concat(n[0]?n[0]:"","+").concat(n[1]?n[1]:"","+").concat(n[2]?n[2]:"","&format=json&limit=1"));case 2:return i=t.sent,t.next=5,i.json();case 5:o=t.sent,d={city:null===(c=o[0].address)||void 0===c?void 0:c.city,amenity:null===(a=o[0].address)||void 0===a?void 0:a.amenity,road:null===(s=o[0].address)||void 0===s?void 0:s.road,houseNumber:null===(r=o[0].address)||void 0===r?void 0:r.house_number},u=Object.values(d).filter((function(e){if(void 0!==e&&e.length)return e})),e(M({data:u,type:"search"}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();c()}}),Object(Y.jsx)(j.i,{className:"geo",children:Object(Y.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 43 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(Y.jsx)("path",{d:"M21.0096 0C9.4186 0 0 9.4186 0 21.0096C0 24.92 1.07921 28.7463 3.13953 32.0541L19.8183 58.9363C20.1407 59.4549 20.7013 59.7632 21.304 59.7632H21.318C21.9347 59.7632 22.4953 59.4409 22.8037 58.9083L39.062 31.7738C40.9961 28.5361 42.0193 24.8079 42.0193 21.0096C42.0193 9.4186 32.6007 0 21.0096 0ZM36.0486 29.9797L21.2759 54.6475L6.11088 30.218C4.40095 27.4569 3.47591 24.2753 3.47591 21.0096C3.47591 11.3528 11.3528 3.47591 21.0096 3.47591C30.6665 3.47591 38.5294 11.3528 38.5294 21.0096C38.5294 24.1772 37.6604 27.2747 36.0486 29.9797Z",fill:"black"}),Object(Y.jsx)("path",{d:"M21.0101 10.5119C15.2216 10.5119 10.4983 15.2212 10.4983 21.0097C10.4983 26.7701 15.1375 31.5215 21.0101 31.5215C26.9528 31.5215 31.5219 26.7141 31.5219 21.0097C31.5219 15.2212 26.7986 10.5119 21.0101 10.5119ZM21.0101 28.0316C17.1277 28.0316 13.9882 24.878 13.9882 21.0097C13.9882 17.1413 17.1558 13.9878 21.0101 13.9878C24.8644 13.9878 28.018 17.1553 28.018 21.0097C28.032 24.822 24.9485 28.0316 21.0101 28.0316Z",fill:"black"})]})})]}),Object(Y.jsx)(j.w,{size:16})]})}function $(){return Object(Y.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:Object(Y.jsx)(j.x,{size:"medium",style:{margin:"20px 0"}})})}var ee=function(e){var t=e.id,n=e.go,a=(e.fetchedUser,e.shops),s=e.userGeo,r=(e.modalActive,e.setModalActive),i=Object(b.c)((function(e){return e.user})),o=i.userAdress,l=Object(b.c)((function(e){return e.shops})),d=l.currentItemsCount,u=l.totalItemsCount,p=l.currentPage,O=l.isLoading,m=Object(b.b)(),x=p+1,v=function(e){e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<1&&2*p<=u&&m(J(x,2))};Object(c.useEffect)((function(){return document.addEventListener("scroll",v),function(){document.removeEventListener("scroll",v)}}),[d,p]);var f=a;return Object(Y.jsxs)(j.r,{id:t,children:[Object(Y.jsx)(X,{}),Object(Y.jsxs)(j.k,{children:[Object(Y.jsxs)(j.z,{className:"select__tabs",children:[Object(Y.jsx)(j.A,{children:"C\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"}),Object(Y.jsx)(j.A,{"data-to":"map","data-item":"map-btn",onClick:function(e){s?n(e):r({state:!0,panel:D.MAIN_PANEL,target:"map-btn",shop:!1})},children:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"})]}),"Adress : ",o]}),Object(Y.jsx)(j.i,{children:Object(Y.jsx)(j.e,{className:"cards__container","data-to":"current-shop",size:"l",children:O?Object(Y.jsx)(j.x,{}):f.map((function(e){var t,c=e.id;return Object(Y.jsx)(j.h,(t={className:"card",onClick:function(e){m(K(c)),n(e.target.closest(".cards__container"))}},Object(h.a)(t,"className","item__card"),Object(h.a)(t,"image",e.img),Object(h.a)(t,"src",e.img),Object(h.a)(t,"subtitle","\u0427\u0430\u0441\u044b \u0440\u0430\u0431\u043e\u0442\u044b "+e.workingFrom+" - "+e.workingTo),Object(h.a)(t,"header","\u0420\u0435\u0439\u0442\u0438\u043d\u0433 : "+e.middleRate),Object(h.a)(t,"caption","\u0410\u0434\u0440\u0435\u0441 : "+e.addressText),t),e.id)}))})})]})},te=(n(165),function(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return e.shops})),a=n.shops,s=Object(c.useState)(""),r=Object(u.a)(s,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){window.ymaps.ready((function(){o(new ymaps.Map("map-2",{center:[55.751574,37.573856],zoom:9},{searchControlProvider:"yandex#search"}))}))}),[]),a.forEach((function(n,c){var s,r,o='<div id="map_point" class="map_point" data-to="current-shop"   data-id='.concat(a[c].id,' class="text">\n    <svg width="45" height="45" viewBox="0 0 43 60" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M39.3987 14.268L34.2549 6.33511L27.0508 3.11149L27.191 2.25652L24.528 1.99023L24.1776 1.83605L24.1636 1.96219L20.5475 1.59778L20.5335 1.20534L19.7346 1.51369L16.6792 1.19133L16.9735 2.57889L11.7456 4.62519L2.52323 13.6233L2.08874 26.4898L20.954 57.3665L29.3214 44.7103L36.8198 32.4885L40.0294 23.9109L39.3987 14.268ZM24.8223 29.2789L16.6792 28.424L12.3903 22.201L14.745 14.0578L19.5944 12.2217L22.9022 12.7684L27.191 14.9128L29.3354 23.4904L24.8223 29.2789Z" fill="#F48542"/>\n<path d="M21.0096 0C9.4186 0 0 9.4186 0 21.0096C0 24.92 1.07921 28.7463 3.13953 32.0541L19.8183 58.9363C20.1407 59.4549 20.7013 59.7632 21.304 59.7632H21.318C21.9347 59.7632 22.4953 59.4409 22.8037 58.9083L39.062 31.7738C40.9961 28.5361 42.0193 24.8079 42.0193 21.0096C42.0193 9.4186 32.6007 0 21.0096 0ZM36.0486 29.9797L21.2759 54.6475L6.11088 30.218C4.40095 27.4569 3.47591 24.2753 3.47591 21.0096C3.47591 11.3528 11.3528 3.47591 21.0096 3.47591C30.6665 3.47591 38.5294 11.3528 38.5294 21.0096C38.5294 24.1772 37.6604 27.2747 36.0486 29.9797Z" fill="black"/>\n<path d="M21.0101 10.5119C15.2216 10.5119 10.4983 15.2212 10.4983 21.0097C10.4983 26.7701 15.1375 31.5215 21.0101 31.5215C26.9528 31.5215 31.5219 26.7141 31.5219 21.0097C31.5219 15.2212 26.7986 10.5119 21.0101 10.5119ZM21.0101 28.0316C17.1277 28.0316 13.9882 24.878 13.9882 21.0097C13.9882 17.1413 17.1558 13.9878 21.0101 13.9878C24.8644 13.9878 28.018 17.1553 28.018 21.0097C28.032 24.822 24.9485 28.0316 21.0101 28.0316Z" fill="black"/>\n</svg>\n\n    <div class="place_title">\n    <div>').concat(a[c].name,'</div>\n    <div>\n    <img src="https://cdn1.iconfinder.com/data/icons/interface-travel-and-environment/64/star-interface-256.png" style="width:12px;heigth:12px">\n    <span class="text_small">\n    4,5 \u041a\u0430\u043f\u0443\u0447\u0438\u043d\u043e \u043e\u0442 190 \u0440\n    </span>\n    </div>\n    </div>\n    </div>'),l=null===(s=ymaps)||void 0===s||null===(r=s.templateLayoutFactory)||void 0===r?void 0:r.createClass(o);if(window.ymaps.GeoObject){var d=new ymaps.Placemark(a[c].location,{hintContent:a[c].name},{iconLayout:l,iconShape:{type:"Rectangle",coordinates:[[-95,-88],[85,78]]}});i.geoObjects&&(i.geoObjects.add(d),d.events.add("click",(function(n){var a=document.getElementsByClassName("map_point");e.setModalActive({state:!0,panel:D.MAP_PANEL,shop:a[c]}),t(K(a[c].dataset.id))})))}})),Object(Y.jsxs)(j.r,{id:e.id,children:[Object(Y.jsx)(X,{className:"header__block-map"}),Object(Y.jsx)(j.k,{children:Object(Y.jsxs)(j.z,{className:"select__tabs-map",children:[Object(Y.jsx)(j.A,{"data-to":"home",onClick:function(t){return e.go(t)},children:"C\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"}),Object(Y.jsx)(j.A,{"data-to":"map",onClick:function(t){return e.go(t)},className:"shop",children:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439"})]})}),Object(Y.jsx)("div",{id:"map-2"})]})}),ne=n(173),ce=n(174),ae=(n(166),function(e){var t=e.activePanel,n=e.go;return Object(Y.jsx)(j.y,{className:"nav__tabbar",children:Object(Y.jsx)(j.k,{className:"footer__group",children:Object(Y.jsxs)(j.n,{className:"nav__list",children:[Object(Y.jsx)(j.f,{className:"nav__item",expandable:!0,children:D.SEARCH_PANELS.some((function(e){return e===t}))?Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(j.i,{children:Object(Y.jsx)(Q.a,{fill:"orange","data-to":"home",onClick:function(e){return n(e)}})}),Object(Y.jsx)("span",{class:"active",children:"\u041f\u043e\u0438\u0441\u043a"})]}):""}),Object(Y.jsxs)(j.f,{className:"nav__item",expandable:!0,children:[Object(Y.jsx)(j.i,{children:Object(Y.jsx)(ne.a,{fill:"#99A2AD"})}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(Y.jsxs)(j.f,{className:"nav__item",expandable:!0,children:[Object(Y.jsx)(j.i,{children:Object(Y.jsx)(ce.a,{fill:"#99A2AD"})}),"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"]})]})})})});n(167);function se(e){var t=e.go,n=e.id,a=Object(b.c)((function(e){return e.shops})),s=a.currentShop,r=Object(b.c)((function(e){return e.user})),i=r.currentUserOrder,o=Object(b.b)(),l=Object(c.useState)("\u041d\u0430\u043f\u0438\u0442\u043a\u0438"),d=Object(u.a)(l,2);d[0],d[1];return Object(Y.jsx)(j.r,{id:n,children:s.isLoading?Object(Y.jsx)($,{}):Object(Y.jsxs)(j.k,{children:[Object(Y.jsx)(j.e,{className:"cards__container current__shop-card",size:"l",children:Object(Y.jsx)(j.h,{onClick:function(e){},className:"current__shop-card",image:s.img,src:s.img,subtitle:"\u041a\u041e\u0424\u0415\u0419\u041d\u042f "+s.name},s.id)}),Object(Y.jsx)(j.z,{children:Object(Y.jsx)(j.m,{children:s.categories.map((function(e){return Object(Y.jsx)(j.A,{onClick:function(){return o(K(s.id,e.id))},children:e.name})}))})}),Object(Y.jsxs)(j.k,{class:"",children:[Object(Y.jsx)(j.e,{className:"menu__container",size:"m",children:s.menu.map((function(e){return Object(Y.jsxs)(j.d,{className:"menu__item",mode:"outline",children:[Object(Y.jsx)("img",{src:e.img,class:"menu__item-img"}),Object(Y.jsx)(j.w,{size:16}),Object(Y.jsx)("div",{children:Object(Y.jsx)(j.l,{children:e.name})}),Object(Y.jsx)(j.w,{size:16}),Object(Y.jsxs)("div",{class:"menu__item-buy",children:[Object(Y.jsxs)(j.B,{class:"menu__item-but-text",level:"2",weight:"semibold",children:["\u20bd ",e.cost]}),Object(Y.jsx)("div",{class:"menu__item-buy-cirle","data-to":D.CURRENT_SHOP_ORDER_PANEL,onClick:function(e){return t(e)},children:Object(Y.jsxs)("svg",{height:"26",width:"26",fill:"white",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(Y.jsx)("title",{}),Object(Y.jsxs)("g",{"data-name":"1",id:"_1",children:[Object(Y.jsx)("path",{d:"M397.78,316H192.65A15,15,0,0,1,178,304.33L143.46,153.85a15,15,0,0,1,14.62-18.36H432.35A15,15,0,0,1,447,153.85L412.4,304.33A15,15,0,0,1,397.78,316ZM204.59,286H385.84l27.67-120.48H176.91Z"}),Object(Y.jsx)("path",{d:"M222,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,222,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,222,365.05Z"}),Object(Y.jsx)("path",{d:"M368.42,450a57.48,57.48,0,1,1,57.48-57.48A57.54,57.54,0,0,1,368.42,450Zm0-84.95a27.48,27.48,0,1,0,27.48,27.47A27.5,27.5,0,0,0,368.42,365.05Z"}),Object(Y.jsx)("path",{d:"M158.08,165.49a15,15,0,0,1-14.23-10.26L118.14,78H70.7a15,15,0,1,1,0-30H129a15,15,0,0,1,14.23,10.26l29.13,87.49a15,15,0,0,1-14.23,19.74Z"})]})]})})]})]})}))}),i.totalCount>0?Object(Y.jsxs)(j.c,{size:"l",stretched:!0,style:{marginTop:150,position:"absolute",bottom:100},children:["\u0417\u0430\u043a\u0430\u0437 : ",i.totalCount," \u20bd"]}):""]})]})})}n(168),n(169);function re(){return Object(Y.jsxs)("svg",{className:"selected",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(Y.jsx)("rect",{x:"2.5",y:"2.5",width:"25",height:"25",rx:"12.5",fill:"white"}),Object(Y.jsx)("path",{d:"M25 15C25 17.6522 23.9464 20.1957 22.0711 22.0711C20.1957 23.9464 17.6522 25 15 25C12.3478 25 9.8043 23.9464 7.92893 22.0711C6.05357 20.1957 5 17.6522 5 15C5 12.3478 6.05357 9.8043 7.92893 7.92893C9.8043 6.05357 12.3478 5 15 5C17.6522 5 20.1957 6.05357 22.0711 7.92893C23.9464 9.8043 25 12.3478 25 15ZM20.0375 11.2125C19.9482 11.1235 19.8419 11.0535 19.7249 11.0065C19.6079 10.9596 19.4827 10.9367 19.3567 10.9393C19.2306 10.9418 19.1064 10.9698 18.9914 11.0215C18.8765 11.0731 18.7731 11.1475 18.6875 11.24L14.3463 16.7712L11.73 14.1537C11.5523 13.9881 11.3172 13.898 11.0743 13.9023C10.8315 13.9066 10.5997 14.005 10.428 14.1767C10.2562 14.3485 10.1578 14.5802 10.1535 14.8231C10.1492 15.066 10.2394 15.301 10.405 15.4788L13.7125 18.7875C13.8016 18.8764 13.9077 18.9465 14.0245 18.9936C14.1413 19.0406 14.2663 19.0637 14.3922 19.0613C14.5181 19.059 14.6422 19.0313 14.7571 18.98C14.8721 18.9286 14.9755 18.8547 15.0612 18.7625L20.0513 12.525C20.2214 12.3481 20.3153 12.1116 20.313 11.8662C20.3107 11.6208 20.2122 11.3861 20.0387 11.2125H20.0375Z",fill:"#F48542"}),Object(Y.jsx)("rect",{x:"2.5",y:"2.5",width:"25",height:"25",rx:"12.5",stroke:"#FAF2EB","stroke-width":"5"})]})}var ie=function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,null,[{key:"getGeo",value:function(e){return fetch(e).then((function(e){return e.json()}))}}]),e}(),oe={userAdress:"",userLocation:"",currentUserOrder:{size:"",adds:[],sizeCount:0,addsCount:0,totalCount:0}},le=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.getGeo("https://nominatim.openstreetmap.org/reverse?lat=".concat(e.lat,"&lon=").concat(e.long,"&zoom=18&addressdetails=1&format=json"));case 2:c=t.sent,n(M({data:c.address,type:"auto"}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},de=function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){var c,a,s,r,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===(c=e.target.closest(".current-dish__size"))||void 0===c||null===(a=c.dataset)||void 0===a?void 0:a.sizeCount)){t.next=4;break}return i=e.target.closest(".current-dish__size").dataset.sizeCount,n(P({type:"size",count:+i})),t.abrupt("return");case 4:if(!(null===(s=e.target.closest(".vkuiCheckbox__input"))||void 0===s||null===(r=s.dataset)||void 0===r?void 0:r.addsCount)){t.next=8;break}return o=e.target.closest(".vkuiCheckbox__input").dataset.addsCount,n(P({type:"adds",count:+o})),t.abrupt("return");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n=Object(O.a)({},e);switch(t.type){case w:return console.log(t),"auto"===t.payload.type&&(n.userAdress=t.payload.data.city+" , "+t.payload.data.road),"search"===t.payload.type&&(n.userAdress=t.payload.data.join(" , ")),Object(O.a)({},n);case E:return console.log(t),"size"===t.payload.type&&(n.currentUserOrder.sizeCount=t.payload.count),"adds"===t.payload.type&&(n.currentUserOrder.addsCount+=t.payload.count),n.currentUserOrder.totalCount=n.currentUserOrder.sizeCount+n.currentUserOrder.addsCount,Object(O.a)({},n);default:return e}};function je(e){var t=e.go,n=Object(b.c)((function(e){return e.shops})),a=n.currentShop,s=Object(b.c)((function(e){return e.user})),r=(s.currentUserOrder,Object(c.useState)(!1)),i=Object(u.a)(r,2),o=i[0],l=i[1],d=Object(b.b)();return Object(Y.jsxs)(j.r,{children:[Object(Y.jsxs)(j.e,{className:"current-dish__cotnainer",size:"l",children:[Object(Y.jsx)(j.s,{className:"back_button",onClick:t,"data-to":D.CURRENT_SHOP_PANEL}),Object(Y.jsx)(j.h,{onClick:function(e){},className:"current__shop-card",image:a.img,src:a.img},a.id),Object(Y.jsxs)("div",{className:"current-dish__title",children:[Object(Y.jsx)("div",{children:Object(Y.jsx)("h2",{children:"130 P"})}),Object(Y.jsx)("div",{children:Object(Y.jsx)("h2",{children:"\u041a\u0430\u043f\u0443\u0447\u0438\u043d\u043e"})}),Object(Y.jsx)("div",{children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0431\u044c\u0451\u043c L"})]}),Object(Y.jsxs)("div",{className:"current-dish__sizes",children:[Object(Y.jsx)(j.k,{children:Object(Y.jsxs)(j.z,{className:"current-dish__sizes",mode:"segmented",children:[Object(Y.jsxs)(j.A,{className:"current-dish__size",onClick:function(e){d(de(e)),l(B)},selected:o===B,"data-size-count":"140",children:[o===B?Object(Y.jsx)(re,{}):""," S ",B," \u20bd"]}),Object(Y.jsxs)(j.A,{className:"current-dish__size",onClick:function(e){d(de(e)),l(F)},selected:o===F,"data-size-count":"160",children:[o===F?Object(Y.jsx)(re,{}):""," M ",F," ","\u20bd"]}),Object(Y.jsxs)(j.A,{className:"current-dish__size",onClick:function(e){d(de(e)),l(V)},selected:o===V,"data-size-count":"180",children:[o===V?Object(Y.jsx)(re,{}):"","L ",V," \u20bd"]})]})}),Object(Y.jsx)(j.k,{children:Object(Y.jsx)("div",{className:"current-dish__adds",children:Object(Y.jsxs)("div",{className:"current-dish__add",children:[Object(Y.jsx)("div",{className:"add-title",children:"\u0421 \u0441\u0438\u0440\u043e\u043f\u043e\u043c \u0432\u043a\u0443\u0441\u043d\u0435\u0435! \ud83c\udf6c"}),Object(Y.jsxs)("div",{className:"add-variants",children:[Object(Y.jsx)(j.j,{className:"add-variant",children:Object(Y.jsx)(j.g,{onChange:function(e){d(de(e))},"data-adds-count":"20",children:"\u041a\u043e\u043a\u043e\u0441\u043e\u0432\u044b\u0439 \u0441\u0438\u0440\u043e\u043f +20 \u20bd"})}),Object(Y.jsx)(j.j,{className:"add-variant",children:Object(Y.jsx)(j.g,{onChange:function(e){d(de(e))},"data-adds-count":"20",children:"\u041a\u043b\u0435\u043d\u043e\u0432\u044b\u0439 \u0441\u0438\u0440\u043e\u043f +20 \u20bd"})}),Object(Y.jsx)("div",{className:"add-title",children:"\u041d\u0430 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u043e\u043c \u043c\u043e\u043b\u043e\u043a\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u0435\u0435 \ud83c\udf3f"}),Object(Y.jsx)(j.j,{className:"add-variant",children:Object(Y.jsx)(j.g,{onChange:function(e){d(de(e))},"data-adds-count":"40",children:"\u041c\u0438\u043d\u0434\u0430\u043b\u044c\u043d\u043e\u0435 +40 \u20bd"})}),Object(Y.jsx)(j.j,{children:Object(Y.jsx)(j.g,{onChange:function(e){d(de(e))},"data-adds-count":"40",children:"\u041c\u0438\u043d\u0434\u0430\u043b\u044c\u043d\u043e\u0435 +40 \u20bd"})})]}),Object(Y.jsx)(j.c,{size:"l",stretched:!0,style:{marginRight:8},children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})})})]})]}),Object(Y.jsx)(j.k,{className:"current__dish"})]})}n(170);var he=function(e){var t=e.modalActive,n=e.setModalActive,c=e.getGeo,a=e.go,s=Object(b.c)((function(e){return e.shops})),r=s.currentShop,i="popup_container",o="popup_buttons",l="popup-map__container",d="popup-map__img-container",u="popup-map__img",h="popup-map__description",p="popup-map__button";return console.log("MODAL DATA",t),Object(Y.jsx)(j.q,{activeModal:t.state?"modalPage":null,onClose:function(){n(!1)},children:Object(Y.jsxs)(j.o,{id:"modalPage",children:[Object(Y.jsx)(j.p,{right:Object(Y.jsx)(j.t,{onClick:function(){return n(!1)}})}),function(e){switch(e){case D.MAIN_PANEL:return Object(Y.jsxs)("div",{className:i,children:[Object(Y.jsx)("h2",{children:"\u0427\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043d\u0430 \u043a\u0430\u0440\u0442\u0435, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0433\u0435\u043e\u0434\u0430\u043d\u043d\u044b\u0445"}),Object(Y.jsxs)("div",{className:o,children:[Object(Y.jsx)(j.i,{onClick:function(){c(),n({state:!1,panel:D.MAIN_PANEL})},children:Object(Y.jsx)(j.c,{children:"C\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0441\u044f"})}),Object(Y.jsx)(j.i,{onClick:function(){return n({state:!1,panel:D.MAIN_PANEL})},children:Object(Y.jsx)(j.c,{mode:"destructive",children:"\u041e\u0442\u043a\u0430\u0437\u0430\u0442\u0441\u044f"})})]})]});case D.MAP_PANEL:return Object(Y.jsxs)("div",{className:l,children:[Object(Y.jsx)("div",{className:d,children:Object(Y.jsx)("img",{src:r.img,className:u})}),Object(Y.jsxs)("div",{className:h,children:[Object(Y.jsxs)("span",{children:["Name : ",r.name]}),Object(Y.jsxs)("span",{children:["from : ",r.workingFrom," to ",r.workingTo]}),Object(Y.jsxs)("span",{children:["Rate : ",r.middleRate]}),Object(Y.jsxs)("span",{children:["Adress : ",r.addressText]})]}),Object(Y.jsx)("div",{className:p,children:Object(Y.jsx)(j.i,{onClick:function(){a(t.shop),n(Object(O.a)(Object(O.a)({},t),{},{state:!1}))},children:Object(Y.jsx)(j.c,{children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"})})})]});default:return""}}(t.panel||t.target),Object(Y.jsx)(j.v,{})]})})},be=function(){var e=Object(c.useState)("home"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(u.a)(s,2),o=r[0],h=r[1],p=Object(c.useState)({state:!0,panel:D.MAIN_PANEL,target:"",shop:null}),O=Object(u.a)(p,2),m=O[0],x=O[1],v=Object(c.useState)(null),f=Object(u.a)(v,2),g=f[0],_=f[1],C=Object(b.b)(),y=Object(b.c)((function(e){return e.shops})),N=y.shops,A=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.send("VKWebAppGetGeodata");case 3:t=e.sent,_(t),C(le({lat:t.lat,long:t.long})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),function(){e.apply(this,arguments)}(),C(J())}),[]);var L=function(e){e.currentTarget?a(e.currentTarget.dataset.to):a(e.dataset.to)};return Object(Y.jsx)(j.a,{children:Object(Y.jsxs)(j.b,{children:[Object(Y.jsxs)(j.C,{activePanel:n,modal:Object(Y.jsx)(he,{modalActive:m,setModalActive:x,getGeo:A,go:L}),children:[Object(Y.jsx)(ee,{modalActive:m,setModalActive:x,userGeo:g,id:"home",fetchedUser:o,shops:N,go:L}),Object(Y.jsx)(te,{setModalActive:x,id:"map",go:L}),Object(Y.jsx)(se,{id:"current-shop",go:L}),Object(Y.jsx)(je,{id:"current-shop-order-product",go:L})]}),Object(Y.jsx)(ae,{activePanel:n,go:L})]})})},pe=n(30),Oe=n(58),me=Object(pe.b)({shops:q,user:ue}),xe=Object(pe.c)(me,Object(pe.a)(Oe.a));window.redux=xe;var ve=xe;i.a.send("VKWebAppInit"),s.a.render(Object(Y.jsx)(b.a,{store:ve,children:Object(Y.jsx)(be,{})}),document.getElementById("root"))}},[[171,1,2]]]);
//# sourceMappingURL=main.e43ba52f.chunk.js.map