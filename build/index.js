!function(){var e,t={651:function(e,t,n){"use strict";var r=window.wp.i18n,o=window.wp.blocks;function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}var l=window.wp.element,c=n(184),i=n.n(c);function s(){return(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-chevron-down",viewBox:"0 0 16 16"},(0,l.createElement)("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}))}var u=window.wp.components,d=window.wp.blockEditor;(0,o.registerBlockType)("cjsb/accordion",{example:{attributes:{message:"Accordion"}},edit:function(e){let{clientId:t,attributes:n,setAttributes:o}=e;const{title:c,textAlignTitle:p,ariaExpanded:f,accordionId:m,placeholder:v}=n,b=(0,d.useBlockProps)();o({accordionId:t.substring(0,8)});const h="none"!==p?i()({[` has-text-align-${p}`]:p}):"",g=e=>"wp-block-cjsb-accordion__"+e,w=()=>{o(f?{ariaExpanded:!1}:{ariaExpanded:!0})};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",a({id:g("item--"+m)},b),(0,l.createElement)("button",{id:g("button--"+m),"aria-expanded":f,className:g("button")+h,onClick:w},(0,l.createElement)(d.BlockControls,{group:"block"},(0,l.createElement)(d.AlignmentControl,{value:p,onChange:e=>o({textAlignTitle:e})})),(0,l.createElement)(d.RichText,{className:g("title"),tagName:"span",value:c,allowedFormats:["core/bold","core/italic"],onChange:e=>o({title:e}),textAlign:p,placeholder:v||(0,r.__)("Accordion Heading")}),(0,l.createElement)("span",{class:g("icon"),"aria-hidden":"true"},(0,l.createElement)(s,null))),(0,l.createElement)("div",{class:g("content")},(0,l.createElement)(d.InnerBlocks,{template:[["core/paragraph",{placeholder:"Accordion Text"}]]}))),(0,l.createElement)(d.InspectorControls,null,(0,l.createElement)(u.PanelBody,{title:(0,r.__)("Accordion Settings")},(0,l.createElement)(u.PanelRow,null,(0,l.createElement)(u.CheckboxControl,{label:(0,r.__)("Open by default?"),checked:f,onChange:w})))))},save:function(e){let{attributes:t}=e;const{title:n,textAlignTitle:r,ariaExpanded:o,accordionId:c}=t,u="none"!==r?i()({[` has-text-align-${r}`]:r}):"",p=e=>"wp-block-cjsb-accordion__"+e;return(0,l.createElement)("div",a({id:p("item--"+c)},d.useBlockProps.save()),(0,l.createElement)("button",{id:p("button--"+c),"aria-expanded":o,className:p("button")+u},(0,l.createElement)(d.RichText.Content,{tagName:"span",className:p("title"),value:n}),(0,l.createElement)("span",{class:p("icon"),"aria-hidden":"true"},(0,l.createElement)(s,null))),(0,l.createElement)("div",{className:p("content")},(0,l.createElement)(d.InnerBlocks.Content,null)))}}),(0,o.registerBlockStyle)("cjsb/accordion",{name:"icon-on-left",label:(0,r.__)("Icon on Left"),isDefault:!1}),(0,o.registerBlockStyle)("cjsb/accordion",{name:"icon-on-right",label:(0,r.__)("Icon on Right"),isDefault:!0})},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],a=e[u][2];for(var c=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(c=!1,a<l&&(l=a));if(c){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,l=n[0],c=n[1],i=n[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(i)var u=i(r)}for(t&&t(n);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkaccordion=self.webpackChunkaccordion||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(651)}));o=r.O(o)}();