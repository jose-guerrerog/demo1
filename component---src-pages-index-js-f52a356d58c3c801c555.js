"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[293],{4017:function(e,t,a){var r=a(4994);t.A=void 0;var i=r(a(2032)),s=a(4848);t.A=(0,i.default)((0,s.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,n=new RegExp("^"+s.source),o=new RegExp(s.source+i.source,"gu"),l=new RegExp("\\d+"+i.source,"gu"),d=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),d=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?d(e):s(e);return e!==s(e)&&(e=((e,r,i)=>{let s=!1,n=!1,o=!1;for(let l=0;l<e.length;l++){const d=e[l];s&&t.test(d)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=n,n=!0,l++):n&&o&&a.test(d)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=n,n=!1,s=!0):(s=r(d)===d&&i(d)!==d,o=n,n=i(d)===d&&r(d)!==d)}return e})(e,s,d)),e=e.replace(n,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),i.pascalCase&&(e=d(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,d)};e.exports=d,e.exports.default=d},151:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return v},P:function(){return w},S:function(){return _},_:function(){return o},a:function(){return n},b:function(){return c},g:function(){return A},h:function(){return l}});var r=a(6540),i=(a(2729),a(5556)),s=a.n(i);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(i[a]=e[a]);return i}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function d(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function c(e,t,a,r,i){return void 0===i&&(i={}),n({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:n({},i,{opacity:t?1:0})})}function A(e,t,a,r,i,s,o,l){const d={};s&&(d.backgroundColor=s,"fixed"===a?(d.width=r,d.height=i,d.backgroundColor=s,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),o&&(d.objectFit=o),l&&(d.objectPosition=l);const c=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return c}const u=["children"],g=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=o(e,u);return r.createElement(r.Fragment,null,r.createElement(g,n({},a)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],p=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:s="",shouldLoad:l}=e,d=o(e,m);return r.createElement("img",n({},d,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,s=o(e,p);const l=s.sizes||(null==t?void 0:t.sizes),d=r.createElement(h,n({},s,t,{sizes:l,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:l})})),d):d};var b;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const E=["fallback"],w=function(e){let{fallback:t}=e,a=o(e,E);return t?r.createElement(y,n({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",n({},a))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const v=function(e){return r.createElement(r.Fragment,null,r.createElement(y,n({},e)),r.createElement("noscript",null,r.createElement(y,n({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=y.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],k=e=>e.replace(/\n/g,""),j=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),n=3;n<r;n++)i[n-3]=arguments[n];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:s().object.isRequired,alt:j},B=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],N=new Set;let R,I;const Q=function(e){let{as:t="div",image:i,style:s,backgroundColor:c,className:A,class:u,onStartLoad:g,onLoad:f,onError:m}=e,p=o(e,B);const{width:h,height:y,layout:b}=i,E=d(h,y,b),{style:w,className:v}=E,x=o(E,L),C=(0,r.useRef)(),k=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(A=u);const j=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,h,y);return(0,r.useEffect)((()=>{R||(R=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(k);if(I&&N.has(k))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;C.current&&(C.current.innerHTML=a(n({isLoading:!0,isLoaded:N.has(k),image:i},p)),N.has(k)||(t=requestAnimationFrame((()=>{C.current&&(r=o(C.current,k,N,s,g,f,m))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{N.has(k)&&I&&(C.current.innerHTML=I(n({isLoading:N.has(k),isLoaded:N.has(k),image:i},p)),null==g||g({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,r.createElement)(t,n({},x,{style:n({},w,s,{backgroundColor:c}),className:v+(A?" "+A:""),ref:C,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(Q,e):null}));T.propTypes=S,T.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:i,__error:s}=t,l=o(t,D);return s&&console.warn(s),i?r.createElement(e,n({image:i},l)):(console.warn("Image not loaded",a),null)}}const O=P((function(e){let{as:t="div",className:a,class:i,style:s,image:l,loading:u="lazy",imgClassName:g,imgStyle:m,backgroundColor:p,objectFit:h,objectPosition:y}=e,b=o(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),m=n({objectFit:h,objectPosition:y,backgroundColor:p},m);const{width:E,height:j,layout:S,images:B,placeholder:L,backgroundColor:N}=l,R=d(E,j,S),{style:I,className:Q}=R,T=o(R,C),D={fallback:void 0,sources:[]};return B.fallback&&(D.fallback=n({},B.fallback,{srcSet:B.fallback.srcSet?k(B.fallback.srcSet):void 0})),B.sources&&(D.sources=B.sources.map((e=>n({},e,{srcSet:k(e.srcSet)})))),r.createElement(t,n({},T,{style:n({},I,s,{backgroundColor:p}),className:Q+(a?" "+a:"")}),r.createElement(f,{layout:S,width:E,height:j},r.createElement(w,n({},A(L,!1,S,E,j,N,h,y))),r.createElement(v,n({"data-gatsby-image-ssr":"",className:g},b,c("eager"===u,!1,D,u,m)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),Y={src:s().string.isRequired,alt:j,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};O.displayName="StaticImage",O.propTypes=Y;const _=P(T);_.displayName="StaticImage",_.propTypes=Y},775:function(e,t,a){a.r(t);var r=a(6540),i=(a(5456),a(8622)),s=a(8296),n=a(4073),o=a(9067),l=a(151),d=a(4017);const c=["Start your child on the road to success.","Turn Non-Readers into Readers!","Unlock your child's full potential by building their self esteem and confidence.","Support your children, they do not need to fail.","Provide your child with early intervention and support, using explicit teaching methods and individual programs that will improve their literacy and numeracy skills.","Supply you with regular progress reports.","Design individual ﬂexible programs based on diagnostic assessments of your child"];t.default=()=>r.createElement(i.A,null,r.createElement(s.A,{title:"Home"}),r.createElement(n.A,{variant:"h3",fontWeight:700},"Welcome to Eastside Learning Centre"),r.createElement(n.A,{variant:"body1",mt:5,textAlign:"justify",sx:{maxWidth:"100%"}},"Eastside Learning Centre is situated in the Eastern Suburbs servicing the areas of Matraville, Maroubra, Malabar, Mascot Coogee, Kensington, Kingsford, Chifley, Botany, Rosebery, Daceyville, Pagewood, Eastgardens, Randwick and Little Bay."),r.createElement(o.A,{my:4,sx:{display:"flex",justifyContent:"center"}},r.createElement(l.S,{src:"../images/eastside-image.jpeg",placeholder:"blurred",width:500,height:500,formats:["auto","webp","avif"],alt:"A Dog Image",transformOptions:{fit:"cover",cropFocus:"attention"},__imageData:a(3908)})),r.createElement(n.A,{variant:"body1",mt:2},"Eastside Learning Centre is here to:"),r.createElement(o.A,{sx:{display:"flex",flexDirection:"column"},my:5},c.map((e=>r.createElement(o.A,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"row"},mb:2},r.createElement(d.A,null),r.createElement(n.A,{variant:"body1",sx:{maxWidth:"100%"},ml:2},e))))),r.createElement(n.A,{variant:"body1",textAlign:"justify",sx:{maxWidth:"100%"},mb:2},"Our individual programs are curriculum based and taught by teachers and university specialists qualified in their field."),r.createElement(n.A,{mb:4,variant:"body1",textAlign:"justify",sx:{maxWidth:"100%"}},"We provide One to One tuition for students in literacy and numeracy, from pre school through to year 12, in a caring, safe and nurturing environment, with up to date resources."))},3908:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIEA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABQZvJsamCgkH/xAAbEAACAgMBAAAAAAAAAAAAAAABAgARAxATQv/aAAgBAQABBQLErDG7uk63FJrygTnZ1c//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAVEQEBAAAAAAAAAAAAAAAAAAAgIf/aAAgBAgEBPwGj/8QAHRAAAgICAwEAAAAAAAAAAAAAAREAAhAxISJhgf/aAAgBAQAGPwIHg+R2r1M2vk3EytKVZGDj/8QAHRAAAwACAgMAAAAAAAAAAAAAAAERITFBUWFxkf/aAAgBAQABPyFDJcTkbKjIpkW6/ArRr1BtqWMDkA4JWE56PvRXZ//aAAwDAQACAAMAAAAQg99A/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QUYT/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAgEBPxAAx//EABwQAQACAwEBAQAAAAAAAAAAAAERIQAxQXGBYf/aAAgBAQABPxAAVrIfTKifMgw3bAfi33uCJEWkmvcEz7QBWWRCCuCtSVkVxijy3BGE1SF+4EElpRd9vKSEBoKDP//Z"},"images":{"fallback":{"src":"/demo1/static/653df99ed9df0b951c8dde493f3efff4/fdcef/eastside-image.jpg","srcSet":"/demo1/static/653df99ed9df0b951c8dde493f3efff4/7ca30/eastside-image.jpg 125w,\\n/demo1/static/653df99ed9df0b951c8dde493f3efff4/40427/eastside-image.jpg 250w,\\n/demo1/static/653df99ed9df0b951c8dde493f3efff4/fdcef/eastside-image.jpg 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/demo1/static/653df99ed9df0b951c8dde493f3efff4/2b0d2/eastside-image.avif 125w,\\n/demo1/static/653df99ed9df0b951c8dde493f3efff4/48f95/eastside-image.avif 250w,\\n/demo1/static/653df99ed9df0b951c8dde493f3efff4/86c92/eastside-image.avif 500w","type":"image/avif","sizes":"(min-width: 500px) 500px, 100vw"},{"srcSet":"/demo1/static/653df99ed9df0b951c8dde493f3efff4/b6ddb/eastside-image.webp 125w,\\n/demo1/static/653df99ed9df0b951c8dde493f3efff4/ff6d1/eastside-image.webp 250w,\\n/demo1/static/653df99ed9df0b951c8dde493f3efff4/f5edf/eastside-image.webp 500w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":500}')}}]);
//# sourceMappingURL=component---src-pages-index-js-f52a356d58c3c801c555.js.map