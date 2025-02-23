import{u as se,r as i,j as e}from"./index-DJ0IS-oA.js";import{a as u}from"./axios-upsvKRUO.js";import{A as F}from"./AppBar-CL-OfsFA.js";import{C as W}from"./CopyrightFooter-BTH_ji-_.js";function pe(){var _,C,S,I,N,R;const o=se(),[ne,T]=i.useState(window.innerWidth),[j,A]=i.useState(""),[ie,B]=i.useState(""),[ae,P]=i.useState(""),[oe,z]=i.useState(""),[re,E]=i.useState(""),[le,$]=i.useState(""),[n,a]=i.useState(null),[y,D]=i.useState(null),[O,v]=i.useState(!1),[w,m]=i.useState(null),[U,g]=i.useState(!1),[b,x]=i.useState(""),[r,V]=i.useState(""),[f,L]=i.useState(""),G=[{value:15,text:"15 點 / 分鐘"},{value:20,text:"20 點 / 分鐘"},{value:25,text:"25 點 / 分鐘"},{value:30,text:"30 點 / 分鐘"},{value:35,text:"35 點 / 分鐘"},{value:40,text:"40 點 / 分鐘"},{value:45,text:"45 點 / 分鐘"},{value:50,text:"50 點 / 分鐘"}],H=[{value:40,text:"40 點 / 分鐘"},{value:45,text:"45 點 / 分鐘"},{value:55,text:"55 點 / 分鐘"},{value:60,text:"60 點 / 分鐘"},{value:70,text:"70 點 / 分鐘"},{value:80,text:"80 點 / 分鐘"},{value:90,text:"90 點 / 分鐘"},{value:100,text:"100 點 / 分鐘"},{value:110,text:"110 點 / 分鐘"}];i.useEffect(()=>{const t=()=>T(window.innerWidth);window.addEventListener("resize",t);const s=window.sessionStorage.getItem("token")||"",d=window.sessionStorage.getItem("gender_type")||"",p=window.sessionStorage.getItem("chat_id")||"",c=window.sessionStorage.getItem("chat_token")||"",h=window.sessionStorage.getItem("u_id")||"",te=window.sessionStorage.getItem("nickname")||"";return A(s),$(d),P(p),z(c),E(h),B(te),typeof window.WebSocketConnect=="function"&&!window.WebSocketObject&&window.WebSocketConnect(h),X(s),()=>{window.removeEventListener("resize",t)}},[]);const X=async t=>{try{const s=await u.get("https://api.dageiwo.com/auth/info",{headers:{Authorization:`Bearer ${t}`}});if(s.status===200&&s.data.success){const d=s.data.data;a(d),D(s.data.data.avatar_url)}}catch(s){console.error("RetrieveInfo error:",s)}},k=t=>t==null?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),q=()=>{v(!1)},l=async()=>{var t,s,d,p;if(n){m(null);try{const c={nickname:n.nickname,birthday:n.birthday,cannot_take_call:(t=n.female_response)==null?void 0:t.cannot_take_call,cannot_take_video_call:(s=n.female_response)==null?void 0:s.cannot_take_video_call,video_coin:(d=n.female_response)==null?void 0:d.video_coin,call_coin:(p=n.female_response)==null?void 0:p.call_coin,notify_telegram:n.notify_telegram};console.log("updateInfo data:",c);const h=await u.put("https://api.dageiwo.com/api/user",c,{headers:{Authorization:`Bearer ${j}`}});h.status===200&&h.data.success?v(!1):m("更新檔案發生錯誤, 請檢查網路後重試一次.")}catch(c){console.error(c),m("更新發生錯誤, 請稍後重試.")}}},J=async()=>{if(x(""),!r||r!==f){x("兩次輸入的密碼不一致.");return}try{const t={phone_number:"??",new_pwd:r};(await u.post("https://api.dageiwo.com/auth/forget/pwd",t)).data.success?(x("重設密碼成功."),g(!1)):x("重設密碼失敗, 請檢查網路, 再試一次.")}catch(t){console.error(t),x("重設密碼發生錯誤, 請稍後再試.")}},K=t=>{n&&(a(s=>({...s,female_response:{...s.female_response,cannot_take_call:!t}})),l())},M=t=>{n&&(a(s=>({...s,female_response:{...s.female_response,cannot_take_video_call:!t}})),l())},Q=t=>{n&&(a(s=>({...s,female_response:{...s.female_response,call_coin:Number(t)}})),l())},Y=t=>{n&&(a(s=>({...s,female_response:{...s.female_response,video_coin:Number(t)}})),l())},Z=t=>{n&&(a(s=>({...s,notify_telegram:t})),l())},ee=async()=>{try{(await u.post("https://api.dageiwo.com/auth/logout",{},{headers:{Authorization:`Bearer ${j}`}})).data.success&&(window.sessionStorage.clear(),window.WebSocketObject&&window.WebSocketObject.close(),o("/home"))}catch(t){console.error(t),o("/home")}};return n?e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("button",{style:{background:"none",border:"none",color:"#fff"},onClick:()=>o(-1),children:e.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})}),e.jsx("h2",{style:{margin:"0 auto",color:"#fff"},children:"個人檔案"})]})}),e.jsxs("div",{className:"info-main",style:{maxWidth:"800px",margin:"0 auto",minHeight:"100%",color:"rgba(0,0,0,0.7)",padding:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1},children:[e.jsx("div",{style:{width:"96px",height:"96px",border:"2px solid #f2e9eb",outline:"#dd8ea4 solid 2px",marginRight:"20px",borderRadius:"50%",overflow:"hidden"},children:y&&e.jsx("img",{src:y,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsx("h3",{style:{margin:0},children:n.nickname})]}),e.jsx("button",{style:{borderRadius:"8px",background:"#dd8ea4",color:"#fff",padding:"6px 12px",border:"none"},onClick:()=>o("/woman-edit"),children:"編輯檔案"})]}),e.jsxs("div",{style:{border:"1px solid #ccc",background:"#FFF",borderRadius:"8px",padding:"1rem",marginBottom:"10px"},children:[e.jsx("h3",{style:{color:"purple",textAlign:"center"},children:"總累計點數"}),e.jsxs("h1",{style:{textAlign:"center"},children:[k((_=n.female_response)==null?void 0:_.point),"點"]})]}),e.jsxs("div",{style:{border:"1px solid #ccc",background:"#FFF",borderRadius:"8px",padding:"1rem",marginBottom:"10px"},children:[e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"目前點數"}),e.jsxs("div",{onClick:()=>o("/current-points"),children:[k((C=n.female_response)==null?void 0:C.point),"點",e.jsx("i",{className:"mdi mdi-chevron-right"})]})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"語音費率"}),e.jsxs("select",{value:((S=n.female_response)==null?void 0:S.call_coin)||0,onChange:t=>Q(t.target.value),children:[e.jsx("option",{value:"",children:"請選擇費率"}),G.map(t=>e.jsx("option",{value:t.value,children:t.text},t.value))]})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"視訊費率"}),e.jsxs("select",{value:((I=n.female_response)==null?void 0:I.video_coin)||0,onChange:t=>Y(t.target.value),children:[e.jsx("option",{value:"",children:"請選擇費率"}),H.map(t=>e.jsx("option",{value:t.value,children:t.text},t.value))]})]})}),e.jsx("div",{style:{margin:"5px 0",borderTop:"1px solid #ccc",paddingTop:"8px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",cursor:"pointer"},onClick:()=>g(!0),children:[e.jsx("h3",{style:{margin:0},children:"更改密碼"}),e.jsx("i",{className:"mdi mdi-chevron-right"})]})}),e.jsx("hr",{}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"語音聊天"}),e.jsx("input",{type:"checkbox",checked:!((N=n.female_response)!=null&&N.cannot_take_call),onChange:t=>K(t.target.checked)})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"視訊聊天"}),e.jsx("input",{type:"checkbox",checked:!((R=n.female_response)!=null&&R.cannot_take_video_call),onChange:t=>M(t.target.checked)})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"通知開關"}),e.jsx("input",{type:"checkbox",checked:n.notify_telegram,onChange:t=>Z(t.target.checked)})]})})]}),e.jsxs("div",{style:{border:"1px solid #ccc",background:"#FFF",borderRadius:"8px",padding:"1rem",marginBottom:"10px"},children:[e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",cursor:"pointer"},onClick:()=>window.location.assign("https://line.me/R/ti/p/@668pwyqo"),children:[e.jsx("h3",{style:{margin:0},children:"聯絡客服"}),e.jsx("i",{className:"mdi mdi-chevron-right"})]})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px"},children:e.jsx("button",{style:{borderRadius:"8px",background:"#dd8ea4",color:"#fff",padding:"6px 12px",border:"none"},onClick:ee,children:"登出"})})]})]}),O&&e.jsx("div",{className:"dialog-overlay",children:e.jsxs("div",{className:"dialog-content",children:[e.jsx("button",{onClick:q,children:"X"}),e.jsx("h3",{children:"修改個人檔案"}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"暱稱"}),e.jsx("input",{type:"text",value:n.nickname,onChange:t=>a(s=>({...s,nickname:t.target.value}))})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"生日"}),e.jsx("input",{type:"date",value:n.birthday||"",onChange:t=>a(s=>({...s,birthday:t.target.value}))})]}),e.jsx("button",{onClick:l,children:"儲存"}),w&&e.jsx("div",{style:{color:"red"},children:w})]})}),U&&e.jsx("div",{className:"dialog-overlay",children:e.jsxs("div",{className:"dialog-content",children:[e.jsx("button",{onClick:()=>g(!1),children:"X"}),e.jsx("h3",{children:"重設密碼"}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"輸入新密碼"}),e.jsx("input",{type:"password",value:r,onChange:t=>V(t.target.value)})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"再輸入一次新密碼"}),e.jsx("input",{type:"password",value:f,onChange:t=>L(t.target.value)}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx("button",{onClick:J,disabled:!r||r!==f,children:"重設密碼"})})]}),b&&e.jsx("div",{style:{color:"red"},children:b})]})}),e.jsx(W,{})]}):e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("button",{style:{background:"none",border:"none",color:"#fff"},onClick:()=>o(-1),children:e.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})}),e.jsx("h2",{style:{margin:"0 auto",color:"#fff"},children:"個人檔案"})]})}),e.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",minHeight:"100%",padding:"1rem"},children:"載入中..."}),e.jsx(W,{})]})}export{pe as default};
