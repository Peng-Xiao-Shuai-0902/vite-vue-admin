import{by as I,bz as b,bA as g,bB as w,bC as A,bD as x,bE as S,bF as F}from"./index-9249cd86.js";function N(){}function R(n){return n!==n}function d(n,e,s){for(var t=s-1,r=n.length;++t<r;)if(n[t]===e)return t;return-1}function C(n,e,s){return e===e?d(n,e,s):I(n,R,s)}function E(n,e){var s=n==null?0:n.length;return!!s&&C(n,e,0)>-1}function O(n,e,s){for(var t=-1,r=n==null?0:n.length;++t<r;)if(s(e,n[t]))return!0;return!1}var v=1/0,L=b&&1/g(new b([,-0]))[1]==v?function(n){return new b(n)}:N;const T=L;var Y=200;function _(n,e,s){var t=-1,r=E,c=n.length,h=!0,u=[],i=u;if(s)h=!1,r=O;else if(c>=Y){var a=e?null:T(n);if(a)return g(a);h=!1,r=A,i=new w}else i=e?[]:u;n:for(;++t<c;){var f=n[t],l=e?e(f):f;if(f=s||f!==0?f:0,h&&l===l){for(var o=i.length;o--;)if(i[o]===l)continue n;e&&i.push(l),u.push(f)}else r(i,l,s)||(i!==u&&i.push(l),u.push(f))}return u}var $=x(function(n){return _(S(n,1,F,!0))});const k=$;export{E as a,O as b,_ as c,k as u};