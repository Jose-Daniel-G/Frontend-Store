import{a as H}from"./chunk-N6EWL7EN.js";import{a as G,b as U}from"./chunk-46VRIVHI.js";import{$ as z,Ea as h,F as C,G as _,H as M,M as F,N as V,Q as $,R as s,W as D,X as u,Z as I,_ as q,aa as B,ba as o,c as w,ca as n,da as v,ea as k,fa as l,g as P,ga as f,ha as c,j as x,ja as S,ka as R,l as T,la as g,na as A,o as E,p as L,u as j,y as p,z as m}from"./chunk-Y7GHDLQ4.js";var y=(()=>{let t=class t{constructor(){this.productsService=p(H),this.initialState={products:[],status:"loading",page:1},this.changePage$=new w,this.loadProducts$=this.changePage$.pipe(E(1),L(r=>this.productsService.getProducts(r)),x(r=>({products:r,status:"success"})),T(()=>P({products:[],status:"error"}))),this.state=G({initialState:this.initialState,sources:[this.changePage$.pipe(x(r=>({page:r,status:"loading"}))),this.loadProducts$]})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=j({token:t,factory:t.\u0275fac});let e=t;return e})();var N=e=>["/product",e],J=(()=>{let t=class t{constructor(){this.product=V.required(),this.addToCart=F()}add(r){r.stopPropagation(),r.preventDefault(),this.addToCart.emit(this.product())}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-product-card"]],inputs:{product:[1,"product"]},outputs:{addToCart:"addToCart"},standalone:!0,features:[g],decls:19,vars:6,consts:[[3,"routerLink"],[1,"max-w-sm","bg-white","border","border-gray-200","rounded-lg","shadow","dark:bg-gray-800","dark:border-gray-700"],["alt","",1,"rounded-t-lg","h-60","w-full","object-contain","object-center",3,"src"],[1,"p-5"],["href","#"],[1,"mb-2","text-xl","font-bold","tracking-tight","text-gray-900","dark:text-white","line-clamp-1"],[1,"mb-3","font-normal","text-gray-700","dark:text-gray-400","line-clamp-3"],[1,"flex","justify-end","my-4"],[1,"inline-flex","items-center","gap-2","px-3","py-2","text-sm","font-medium","text-center","text-white","bg-blue-700","rounded-lg","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"icon","icon-tabler","icons-tabler-outline","icon-tabler-shopping-cart"],["stroke","none","d","M0 0h24v24H0z","fill","none"],["d","M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"],["d","M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"],["d","M17 17h-11v-14h-2"],["d","M6 5l14 1l-1 7h-13"]],template:function(i,a){i&1&&(o(0,"a",0)(1,"div",1)(2,"picture"),v(3,"img",2),n(),o(4,"div",3)(5,"a",4)(6,"h5",5),c(7),n()(),o(8,"p",6),c(9),n(),o(10,"div",7)(11,"button",8),l("click",function(K){return a.add(K)}),M(),o(12,"svg",9),v(13,"path",10)(14,"path",11)(15,"path",12)(16,"path",13)(17,"path",14),n(),c(18," Agregar al carrito "),n()()()()()),i&2&&(u("routerLink",A(4,N,a.product().id)),s(3),u("src",a.product().image,$),s(4),S(" ",a.product().title," "),s(2),S(" ",a.product().description," "))},dependencies:[h]});let e=t;return e})();function O(e,t){e&1&&(o(0,"p"),c(1,"Loading..."),n())}function Q(e,t){e&1&&(o(0,"p"),c(1,"Error"),n())}function X(e,t){if(e&1){let d=k();o(0,"app-product-card",5),l("addToCart",function(i){C(d);let a=f(2);return _(a.addToCart(i))}),n()}if(e&2){let d=t.$implicit;u("product",d)}}function Y(e,t){if(e&1){let d=k();o(0,"div",1)(1,"button",2),l("click",function(){C(d);let i=f();return _(i.changePage())}),c(2," Cambiar pagina "),n()(),o(3,"div",3),z(4,X,1,1,"app-product-card",4,q),n()}if(e&2){let d=f();s(4),B(d.productsState.state().products)}}var gt=(()=>{let t=class t{constructor(){this.productsState=p(y),this.cartState=p(U).state}changePage(){let r=this.productsState.state.page()+1;this.productsState.changePage$.next(r)}addToCart(r){this.cartState.add({product:r,quantity:1})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-product-list"]],standalone:!0,features:[R([y]),g],decls:4,vars:1,consts:[[1,"mx-auto","max-w-screen-xl"],[1,"flex","justify-end","my-6"],["type","button",1,"text-white","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800",3,"click"],[1,"grid","grid-cols-[repeat(4,300px)]","gap-6"],["routerLink","detail",1,"block",3,"product"],["routerLink","detail",1,"block",3,"addToCart","product"]],template:function(i,a){if(i&1&&(o(0,"div",0),D(1,O,2,0,"p")(2,Q,2,0,"p")(3,Y,6,0),n()),i&2){let b;s(),I((b=a.productsState.state.status())==="loading"?1:b==="error"?2:3)}},dependencies:[J,h],encapsulation:2});let e=t;return e})();export{gt as a};