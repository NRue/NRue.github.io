_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Juyh:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return a}));var r=t("nKUr"),o=t("YFqc"),c=t.n(o);function a(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"About us"}),Object(r.jsxs)("div",{children:["Back to"," ",Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{children:"Home"})})]})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=c.Children.only(v),w=g&&"object"===typeof g&&g.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),E=r(m,2),L=E[0],j=E[1],M=c.default.useCallback((function(e){L(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,L]);(0,c.useEffect)((function(){var e=j&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof _?_:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,j,_,n,t]);var O={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i,scroll:u}))}(e,t,d,p,h,b,y,_)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof _?_:t&&t.locale,I=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,k,t&&t.locales,t&&t.domainLocales);O.href=I||(0,a.addBasePath)((0,a.addLocale)(p,k,t&&t.defaultLocale))}return c.default.cloneElement(g,O)};n.default=f},rB5V:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,i=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var u=new Map}},[["rB5V",0,2,1]]]);