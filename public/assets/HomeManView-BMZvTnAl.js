import { a as p } from "./axios-upsvKRUO.js";
import { S as F, b } from "./blur-DBoUEmXi.js";
import { C as E } from "./CopyrightFooter-BTH_ji-_.js";
import { u as B, r as n, j as t } from "./index-DJ0IS-oA.js";
function q(){const g=B(),[h,y]=n.useState(window.innerWidth),[a,k]=n.useState(""),[D,S]=n.useState(""),[O,j]=n.useState(""),[M,v]=n.useState(""),[P,C]=n.useState(""),[U,_]=n.useState(""),[z,I]=n.useState([]),[T,d]=n.useState([]),[i,m]=n.useState("關注"),[u,c]=n.useState(1);n.useEffect(()=>{const e=window.localStorage.getItem("nickname")||"",o=window.localStorage.getItem("gender_type")||"",s=window.localStorage.getItem("token")||"",r=window.localStorage.getItem("chat_id")||"",l=window.localStorage.getItem("chat_token")||"",w=window.localStorage.getItem("u_id")||"";S(e),j(o),k(s),v(r),C(l),_(w),!window.WebSocketObject&&typeof window.WebSocketConnect=="function"&&window.WebSocketConnect(w),$(s),x(!0,s)},[]),n.useEffect(()=>{const e=()=>y(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const R=n.useCallback(()=>{let e=2;return h>960&&(e=3),((h>800?800:h)-30)/e},[h]),W=e=>{if(!e)return"";const o=Date.now()-new Date(e).getTime(),s=new Date(o);return" "+Math.abs(s.getUTCFullYear()-1970)},$=async e=>{try{console.log(a);const o=await p.get("https://api.dageiwo.com/index/pinned_picture",{headers:{Authorization:`Bearer ${e}`}});o.status===200&&o.data.success&&I(s=>[...s,...o.data.data])}catch(o){console.error(o)}},f=async e=>{try{e&&(c(1),d([])),m("列表");const o=await p.get(`https://api.dageiwo.com/index/list?page=${e?1:u}&limit=40&order=dsc&sort=femaleRegister.clickRate`,{headers:{Authorization:`Bearer ${a}`}});if(o.status===200&&o.data.success){const{records:s}=o.data.data;s.length>0&&c(r=>r+1),d(r=>[...r,...s])}}catch(o){console.error(o)}},x=async(e,o)=>{try{e&&(c(1),d([])),m("關注");const s=await p.get(`https://api.dageiwo.com/api/user/follows?page=${e?1:u}&limit=40&order=dsc&sort=femaleRegister.clickRate`,{headers:{Authorization:`Bearer ${o}`}});if(s.status===200&&s.data.success){const{records:r}=s.data.data;r.length>0&&c(l=>l+1),d(l=>[...l,...r])}}catch(s){console.error(s)}},L=async()=>{try{d([]),m("在線");const e=await p.get("https://api.dageiwo.com/index/is_online",{headers:{Authorization:`Bearer ${a}`}});if(e.status===200&&e.data.success){const{records:o}=e.data.data;o.length>0&&c(s=>s+1),d(s=>[...s,...o])}}catch(e){console.error(e)}},N=async()=>{try{const e=await p.post("https://api.dageiwo.com/auth/logout",{},{headers:{Authorization:`Bearer ${a}`}});e.status===200&&e.data.success&&(window.localStorage.setItem("nickname",""),window.localStorage.setItem("gender_type",""),window.localStorage.setItem("token",""),window.localStorage.setItem("chat_id",""),window.localStorage.setItem("chat_token",""),window.localStorage.setItem("u_id",""),window.WebSocketObject&&window.WebSocketObject.close(),g("/home"))}catch(e){console.error(e),g("/home")}},A={dots:!1,infinite:!0,speed:500,slidesToShow:9,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:768,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1}}]};return t.jsxs("div",{className:"home-man-view",style:{backgroundColor:"#f2e9eb"},children:[t.jsx("div",{className:"app-bar",style:{backgroundColor:"#dd8ea4",padding:"1rem"},children:t.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[t.jsx("div",{style:{flex:1}}),t.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center"},children:t.jsx("div",{style:{backgroundColor:"white",width:"120px",height:"40px",borderRadius:"8px",overflow:"hidden"},children:t.jsx("img",{src:"../src/assets/Logo-wide.png",alt:"Logo",style:{width:"100%",height:"100%",objectFit:"cover"}})})}),t.jsx("div",{style:{flex:1,display:"flex",justifyContent:"flex-end"},children:t.jsxs("button",{style:{backgroundColor:"#dd8ea4",color:"white",fontSize:"18px",marginRight:"26px",border:"none",cursor:"pointer"},onClick:N,children:[t.jsx("i",{className:"mdi mdi-logout",style:{marginRight:"6px"}}),"登出"]})})]})}),t.jsxs("div",{className:"home-man-main",style:{maxWidth:"800px",margin:"0 auto",padding:"1rem"},children:[t.jsx("h2",{style:{margin:"10px"},children:"為你推薦"}),t.jsx("div",{style:{margin:"0 5%"},children:t.jsx(F,{...A,children:z.map((e,o)=>t.jsxs("div",{style:{padding:"8px"},children:[t.jsx(b.LazyLoadImage,{src:e.url||"/images/placeholder.png",alt:e.nickname||"No name",effect:"blur",placeholderSrc:"/images/placeholder.png",onClick:()=>g(`/woman-info/${e.id}`),style:{border:"2px solid #f2e9eb",outline:"#dd8ea4 solid 2px",width:"64px",height:"64px",objectFit:"cover",cursor:"pointer",borderRadius:"50%",margin:"0 auto",display:"block"}}),t.jsx("p",{style:{fontSize:"12px",textAlign:"center",marginTop:"4px"},children:e.nickname})]},o))})}),t.jsx("h2",{style:{margin:"10px"},children:"女神列表"}),t.jsxs("div",{style:{display:"flex",marginBottom:"5px"},children:[t.jsx("button",{style:{flex:1,border:"none",background:"none",cursor:"pointer",fontSize:"1rem",color:i==="關注"?"#dd8ea4":"grey",borderBottom:i==="關注"?"2px solid #dd8ea4":"none"},onClick:()=>x(!0,a),children:"關注"}),t.jsx("button",{style:{flex:1,border:"none",background:"none",cursor:"pointer",fontSize:"1rem",color:i==="列表"?"#dd8ea4":"grey",borderBottom:i==="列表"?"2px solid #dd8ea4":"none"},onClick:()=>f(!0),children:"列表"}),t.jsx("button",{style:{flex:1,border:"none",background:"none",cursor:"pointer",fontSize:"1rem",color:i==="在線"?"#dd8ea4":"grey",borderBottom:i==="在線"?"2px solid #dd8ea4":"none"},onClick:L,children:"在線"})]}),t.jsx("div",{className:"female-member-list",children:T.map((e,o)=>{const r=e.img_responses&&e.img_responses[0]&&e.img_responses[0].status==="APPROVED";return t.jsx("div",{className:"female-member-item",style:{position:"relative"},children:t.jsxs("div",{style:{position:"relative",borderRadius:"16px",overflow:"hidden"},children:[t.jsx(b.LazyLoadImage,{src:e.img_responses?e.img_responses[0].image_url:"/images/placeholder.png",alt:e.nickname||"No name",effect:"blur",placeholderSrc:"/images/placeholder.png",onClick:()=>g(`/woman-info/${e.id}`),width:"100%",height:R(),style:{objectFit:"cover",filter:r?"none":"blur(8px)",transform:r?"scale(1)":"scale(0.95)",cursor:"pointer"}}),!r&&t.jsx("div",{style:{color:"white",fontSize:"32px",fontWeight:"1000",WebkitTextStroke:"1px black",top:"50%",left:"50%",minWidth:"130px",justifyContent:"center",position:"absolute",display:"block",zIndex:999,transform:"translate(-50%, -50%)"},children:"審查中"}),r&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{position:"absolute",top:"8px",right:"8px"},children:[!e.cannot_take_call&&t.jsx("span",{style:{backgroundColor:"purple",color:"#fff",padding:"2px 6px",marginRight:"4px",fontSize:"12px",borderRadius:"4px"},children:"語音"}),!e.cannot_take_video_call&&t.jsx("span",{style:{backgroundColor:"cyan",color:"#fff",padding:"2px 6px",fontSize:"12px",borderRadius:"4px"},children:"視訊"})]}),t.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"16px",color:"white",fontSize:"14px",fontWeight:"bolder",textShadow:"1px 1px 2px #000"},children:[e.nickname+W(e.birthday),e.review_notes&&t.jsx("div",{style:{fontSize:"10px",marginTop:"0"},children:e.review_notes})]})]})]})},o)})}),i==="列表"&&t.jsx("button",{style:{backgroundColor:"#dd8ea4",color:"#fff",border:"none",padding:"8px 16px",cursor:"pointer",marginTop:"1rem"},onClick:()=>f(!1),children:"查看更多"}),i==="關注"&&t.jsx("button",{style:{backgroundColor:"#dd8ea4",color:"#fff",border:"none",padding:"8px 16px",cursor:"pointer",marginTop:"1rem"},onClick:()=>x(!1,a),children:"查看更多"})]}),t.jsx(E,{})]})}export { q as default };

