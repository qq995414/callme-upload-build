import{o as x,b as n,F as y,H as h,G as L,i as F,W as I,r as N}from"./ChatList-DVC4lS0_.js";import"./index-DJ0IS-oA.js";import"./axios-upsvKRUO.js";var M=function(i,o){return new Promise(function(w,s){if(typeof XMLHttpRequest<"u"){var d=x.of(i),a=d.dispatcher,v=d.logger,u=o.requestId,E=o.method,R=o.url,c=o.headers,f=c===void 0?{}:c,p=o.data,S=p===void 0?"":p,l=o.uploadProgressHandler,g=!1,e=new XMLHttpRequest;e.open(E,R),Object.keys(f).forEach(function(t){e.setRequestHeader(t,f[t])}),l&&e.upload.addEventListener("progress",function(t){t.lengthComputable?l(u,t.loaded,t.total):v.debug("Progress computing failed: `Content-Length` header is not given.")}),e.onabort=function(){s(n.requestCanceled)},e.onerror=function(t){s(n.networkError)},e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE&&!g)if(e.status===0||e.status>=200&&e.status<400)try{var t=JSON.parse(e.responseText);w(new y(i,t))}catch{s(n.networkError)}else try{var m=JSON.parse(e.responseText);if(m){var r=new n(m);if(r.isSessionExpiredError){if(a.dispatch(new h({reason:r.code,message:r.message})),!(e instanceof L)){var q=new F;return a.dispatch(new I({request:e,deferred:q,error:r})),q.promise}}else r.isSessionInvalidatedError&&a.dispatch(new h({reason:r.code,message:r.message}));s(r)}else s(n.requestFailed)}catch{s(n.requestFailed)}},a.on(function(t){t instanceof N&&(t.requestId&&t.requestId!==u||(g=!0,e.abort()))}),e.send(S)}else s(n.xmlHttpRequestNotSupported)})};export{M as xmlHttpRequest};
