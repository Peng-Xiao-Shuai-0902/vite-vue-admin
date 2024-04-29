import{i as $}from"./interopRequireDefault-01ffd8a5.js";function P(t,c){for(var d=0;d<c.length;d++){const i=c[d];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const e=Object.getOwnPropertyDescriptor(i,r);e&&Object.defineProperty(t,r,e.get?e:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var g={},h={},M;function S(){if(M)return h;M=1,h.__esModule=!0,h.default=t;function t(c){return function(i){return{install:function(e){e.vMdParser.use(c,i)}}}}return h}var _={},k={},m={exports:{}},w;function I(){return w||(w=1,function(t){function c(){return t.exports=c=Object.assign?Object.assign.bind():function(d){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(d[e]=r[e])}return d},t.exports.__esModule=!0,t.exports.default=t.exports,c.apply(this,arguments)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports}(m)),m.exports}var b={},q;function j(){if(q)return b;q=1,b.__esModule=!0,b.default=i;function t(r,e){var u,n,o=r.posMax,s=!0,a=!0;return u=e>0?r.src.charCodeAt(e-1):-1,n=e+1<=o?r.src.charCodeAt(e+1):-1,(u===32||u===9||n>=48&&n<=57)&&(a=!1),(n===32||n===9)&&(s=!1),{can_open:s,can_close:a}}function c(r,e){var u,n,o,s,a;if(r.src[r.pos]!=="$")return!1;if(s=t(r,r.pos),!s.can_open)return e||(r.pending+="$"),r.pos+=1,!0;for(u=r.pos+1,n=u;(n=r.src.indexOf("$",n))!==-1;){for(a=n-1;r.src[a]==="\\";)a-=1;if((n-a)%2==1)break;n+=1}return n===-1?(e||(r.pending+="$"),r.pos=u,!0):n-u===0?(e||(r.pending+="$$"),r.pos=u+1,!0):(s=t(r,n),s.can_close?(e||(o=r.push("math_inline","math",0),o.markup="$",o.content=r.src.slice(u,n)),r.pos=n+1,!0):(e||(r.pending+="$"),r.pos=u,!0))}function d(r,e,u,n){var o,s,a,x,p=!1,l,f=r.bMarks[e]+r.tShift[e],v=r.eMarks[e];if(f+2>v||r.src.slice(f,f+2)!=="$$")return!1;if(f+=2,o=r.src.slice(f,v),n)return!0;for(o.trim().slice(-2)==="$$"&&(o=o.trim().slice(0,-2),p=!0),a=e;!p&&(a++,!(a>=u||(f=r.bMarks[a]+r.tShift[a],v=r.eMarks[a],f<v&&r.tShift[a]<r.blkIndent)));)r.src.slice(f,v).trim().slice(-2)==="$$"&&(x=r.src.slice(0,v).lastIndexOf("$$"),s=r.src.slice(f,x),p=!0);return r.line=a+1,l=r.push("math_block","math",0),l.block=!0,l.content=(o&&o.trim()?o+`
`:"")+r.getLines(e+1,a,r.tShift[e],!0)+(s&&s.trim()?s:""),l.map=[e,r.line],l.markup="$$",!0}function i(r,e){e=e||{};var u=e,n=u.katex,o=function(l){e.displayMode=!1;try{return n.renderToString(l,e)}catch(f){return e.throwOnError&&console.log(f),l}},s=function(l,f){return o(l[f].content)},a=function(l){e.displayMode=!0;try{return"<p>"+n.renderToString(l,e)+"</p>"}catch(f){return e.throwOnError&&console.log(f),l}},x=function(l,f){return a(l[f].content)+`
`};r.inline.ruler.after("escape","math_inline",c),r.block.ruler.after("blockquote","math_block",d,{alt:["paragraph","reference","blockquote","list"]}),r.renderer.rules.math_inline=s,r.renderer.rules.math_block=x}return b}var C;function D(){if(C)return k;C=1;var t=$;k.__esModule=!0,k.default=i;var c=t(I()),d=t(j());function i(r){return function(u,n){u.extendMarkdown(function(o){r&&o.use(d.default,(0,c.default)({},n,{katex:r}))})}}return k}var y;function K(){if(y)return _;y=1;var t=$;_.__esModule=!0,_.default=void 0;var c=t(D()),d=typeof window>"u";!d&&!window.katex&&console.error("Please import resources katex from cdn");var i=(0,c.default)(d?null:window.katex);return _.default=i,_}var O=$;g.__esModule=!0;var R=g.default=void 0,A=O(S()),E=O(K()),L=(0,A.default)(E.default);R=g.default=L;const B=P({__proto__:null,get default(){return R}},[g]);export{B as c};
