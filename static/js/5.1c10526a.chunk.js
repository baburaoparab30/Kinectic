(this.webpackJsonpkineco=this.webpackJsonpkineco||[]).push([[5],{103:function(e,t,a){"use strict";var n=a(2),r=a(3),c=a(10),o=a(1),i=a.n(o);var u=function(e,t){var a=Object(o.useRef)(!0);Object(o.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},l=a(43),s=a(88),d=Math.pow(2,31)-1;function m(){var e=Object(l.a)(),t=Object(o.useRef)();return Object(s.a)((function(){return clearTimeout(t.current)})),Object(o.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=d?t.current=setTimeout(n,r):function e(t,a,n){var r=n-Date.now();t.current=r<=d?setTimeout(a,r):setTimeout((function(){return e(t,a,n)}),d)}(t,n,Date.now()+r))},clear:a}}),[])}var p=a(4),f=a.n(p),v=a(41),b=a(21),g=a(6),E=a.n(g),j=a(13),O=a(23),x=Object(O.a)("carousel-caption"),h=Object(O.a)("carousel-item");function N(e,t){var a=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,a++):e}))}var y=a(20),k=a(5),S=a(42),I={bsPrefix:E.a.string,as:E.a.elementType,slide:E.a.bool,fade:E.a.bool,controls:E.a.bool,indicators:E.a.bool,activeIndex:E.a.number,onSelect:E.a.func,onSlide:E.a.func,onSlid:E.a.func,interval:E.a.number,keyboard:E.a.bool,pause:E.a.oneOf(["hover",!1]),wrap:E.a.bool,touch:E.a.bool,prevIcon:E.a.node,prevLabel:E.a.string,nextIcon:E.a.node,nextLabel:E.a.string},w={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var C=i.a.forwardRef((function(e,t){var a=Object(j.a)(e,{activeIndex:"onSelect"}),l=a.as,s=void 0===l?"div":l,d=a.bsPrefix,p=a.slide,g=a.fade,E=a.controls,O=a.indicators,x=a.activeIndex,h=a.onSelect,I=a.onSlide,w=a.onSlid,C=a.interval,T=a.keyboard,_=a.onKeyDown,M=a.pause,L=a.onMouseOver,R=a.onMouseOut,D=a.wrap,A=a.touch,P=a.onTouchStart,K=a.onTouchMove,J=a.onTouchEnd,V=a.prevIcon,X=a.prevLabel,F=a.nextIcon,H=a.nextLabel,q=a.className,z=a.children,B=Object(r.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),G=Object(k.a)(d,"carousel"),Q=Object(o.useRef)(null),U=Object(o.useState)("next"),W=U[0],Y=U[1],Z=Object(o.useState)(!1),$=Z[0],ee=Z[1],te=Object(o.useState)(x||0),ae=te[0],ne=te[1];$||x===ae||(Q.current?(Y(Q.current),Q.current=null):Y((x||0)>ae?"next":"prev"),p&&ee(!0),ne(x||0));var re=i.a.Children.toArray(z).filter(i.a.isValidElement).length,ce=Object(o.useCallback)((function(e){if(!$){var t=ae-1;if(t<0){if(!D)return;t=re-1}Q.current="prev",h&&h(t,e)}}),[$,ae,h,D,re]),oe=Object(c.a)((function(e){if(!$){var t=ae+1;if(t>=re){if(!D)return;t=0}Q.current="next",h&&h(t,e)}})),ie=Object(o.useRef)();Object(o.useImperativeHandle)(t,(function(){return{element:ie.current,prev:ce,next:oe}}));var ue=Object(c.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&oe()})),le="next"===W?"left":"right";u((function(){p||(I&&I(ae,le),w&&w(ae,le))}),[ae]);var se=G+"-item-"+W,de=G+"-item-"+le,me=Object(o.useCallback)((function(e){Object(S.a)(e),I&&I(ae,le)}),[I,ae,le]),pe=Object(o.useCallback)((function(){ee(!1),w&&w(ae,le)}),[w,ae,le]),fe=Object(o.useCallback)((function(e){if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ce(e);case"ArrowRight":return e.preventDefault(),void oe(e)}_&&_(e)}),[T,_,ce,oe]),ve=Object(o.useState)(!1),be=ve[0],ge=ve[1],Ee=Object(o.useCallback)((function(e){"hover"===M&&ge(!0),L&&L(e)}),[M,L]),je=Object(o.useCallback)((function(e){ge(!1),R&&R(e)}),[R]),Oe=Object(o.useRef)(0),xe=Object(o.useRef)(0),he=Object(o.useState)(!1),Ne=he[0],ye=he[1],ke=m(),Se=Object(o.useCallback)((function(e){Oe.current=e.touches[0].clientX,xe.current=0,A&&ye(!0),P&&P(e)}),[A,P]),Ie=Object(o.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-Oe.current,K&&K(e)}),[K]),we=Object(o.useCallback)((function(e){if(A){var t=xe.current;if(Math.abs(t)<=40)return;t>0?ce(e):oe(e)}ke.set((function(){ye(!1)}),C||void 0),J&&J(e)}),[A,ce,oe,ke,C,J]),Ce=null!=C&&!be&&!Ne&&!$,Te=Object(o.useRef)();Object(o.useEffect)((function(){if(Ce)return Te.current=window.setInterval(document.visibilityState?ue:oe,C||void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Ce,oe,C,ue]);var _e=Object(o.useMemo)((function(){return O&&Array.from({length:re},(function(e,t){return function(e){h&&h(t,e)}}))}),[O,re,h]);return i.a.createElement(s,Object(n.a)({ref:ie},B,{onKeyDown:fe,onMouseOver:Ee,onMouseOut:je,onTouchStart:Se,onTouchMove:Ie,onTouchEnd:we,className:f()(q,G,p&&"slide",g&&G+"-fade")}),O&&i.a.createElement("ol",{className:G+"-indicators"},N(z,(function(e,t){return i.a.createElement("li",{key:t,className:t===ae?"active":void 0,onClick:_e?_e[t]:void 0})}))),i.a.createElement("div",{className:G+"-inner"},N(z,(function(e,t){var a=t===ae;return p?i.a.createElement(b.e,{in:a,onEnter:a?me:void 0,onEntered:a?pe:void 0,addEndListener:v.a},(function(t){return i.a.cloneElement(e,{className:f()(e.props.className,a&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&de)})})):i.a.cloneElement(e,{className:f()(e.props.className,a&&"active")})}))),E&&i.a.createElement(i.a.Fragment,null,(D||0!==x)&&i.a.createElement(y.a,{className:G+"-control-prev",onClick:ce},V,X&&i.a.createElement("span",{className:"sr-only"},X)),(D||x!==re-1)&&i.a.createElement(y.a,{className:G+"-control-next",onClick:oe},F,H&&i.a.createElement("span",{className:"sr-only"},H))))}));C.displayName="Carousel",C.propTypes=I,C.defaultProps=w,C.Caption=x,C.Item=h;t.a=C},109:function(e,t,a){e.exports=a.p+"static/media/product-01.f58366fc.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/product-02.cf704450.jpg"},111:function(e,t,a){e.exports=a.p+"static/media/product-03.74d3db65.jpg"},112:function(e,t,a){e.exports=a.p+"static/media/product-04.d2d96a96.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/product-05.e30a1eb7.jpg"},114:function(e,t,a){e.exports=a.p+"static/media/product-06.71f6aaa4.jpg"},115:function(e,t,a){e.exports=a.p+"static/media/product-07.2b054912.jpg"},116:function(e,t,a){e.exports=a.p+"static/media/product-08.67307d6a.jpg"},117:function(e,t,a){e.exports=a.p+"static/media/product-09.9220cef4.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/product-10.ebdff4e2.jpg"},128:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(1),r=a.n(n),c=a(93),o=a.n(c),i=a(94),u=a.n(i),l=a(95),s=a.n(l),d=a(96),m=a.n(d),p=a(109),f=a.n(p),v=a(110),b=a.n(v),g=a(111),E=a.n(g),j=a(112),O=a.n(j),x=a(113),h=a.n(x),N=a(114),y=a.n(N),k=a(115),S=a.n(k),I=a(116),w=a.n(I),C=a(117),T=a.n(C),_=a(118),M=a.n(_),L=a(87),R=a(81),D=a(75);function A(){var e=[o.a,u.a,s.a,m.a];return r.a.createElement("div",{className:"products-container"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"carousel__display--container"},r.a.createElement(L.a,{carouselItems:e})),r.a.createElement("div",{className:"products__display--container"},r.a.createElement(R.a,null,r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:f.a,alt:"product_image1"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:b.a,alt:"product_image2"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:E.a,alt:"product_image3"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:O.a,alt:"product_image4"}))),r.a.createElement(R.a,null,r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:h.a,alt:"product_image5"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:y.a,alt:"product_image6"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:S.a,alt:"product_image7"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:w.a,alt:"product_image8"}))),r.a.createElement(R.a,null,r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:T.a,alt:"product_image9"})),r.a.createElement(D.a,{lg:"3"},r.a.createElement("img",{src:M.a,alt:"product_image10"})),r.a.createElement(D.a,{lg:"3"}),r.a.createElement(D.a,{lg:"3"})))))}},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),r=a.n(n),c=a(103);function o(e){var t=e.carouselItems;return r.a.createElement(c.a,{className:"carousel-container"},t.map((function(e,t){return r.a.createElement(c.a.Item,{key:t},r.a.createElement("img",{className:"d-block w-100",src:e,alt:"".concat(t,"_slide")}))})))}},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1);function r(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}},93:function(e,t,a){e.exports=a.p+"static/media/slider-products-01.c1992bf4.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/slider-products-02.d432f196.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/slider-products-03.ea748cec.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/slider-products-04.08aabad8.jpg"}}]);
//# sourceMappingURL=5.1c10526a.chunk.js.map