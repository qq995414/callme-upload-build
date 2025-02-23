import{u as se,r as i,j as e}from"./index-D4cVrLXe.js";import{a as p}from"./axios-upsvKRUO.js";import{A as R}from"./AppBar-BIlMpYqp.js";import{C as F}from"./CopyrightFooter-BZd__YOl.js";function pe(){var k,_,C,S,I,N;const r=se(),[ne,T]=i.useState(window.innerWidth),[f,W]=i.useState(""),[ie,A]=i.useState(""),[ae,B]=i.useState(""),[oe,P]=i.useState(""),[re,z]=i.useState(""),[le,E]=i.useState(""),[n,a]=i.useState(null),[j,$]=i.useState(null),[D,O]=i.useState(!1),[y,u]=i.useState(null),[L,m]=i.useState(!1),[v,c]=i.useState(""),[l,U]=i.useState(""),[g,V]=i.useState(""),G=[{value:15,text:"15 點 / 分鐘"},{value:20,text:"20 點 / 分鐘"},{value:25,text:"25 點 / 分鐘"},{value:30,text:"30 點 / 分鐘"},{value:35,text:"35 點 / 分鐘"},{value:40,text:"40 點 / 分鐘"},{value:45,text:"45 點 / 分鐘"},{value:50,text:"50 點 / 分鐘"}],H=[{value:40,text:"40 點 / 分鐘"},{value:45,text:"45 點 / 分鐘"},{value:55,text:"55 點 / 分鐘"},{value:60,text:"60 點 / 分鐘"},{value:70,text:"70 點 / 分鐘"},{value:80,text:"80 點 / 分鐘"},{value:90,text:"90 點 / 分鐘"},{value:100,text:"100 點 / 分鐘"},{value:110,text:"110 點 / 分鐘"}];i.useEffect(()=>{const t=()=>T(window.innerWidth);window.addEventListener("resize",t);const s=window.sessionStorage.getItem("token")||"",o=window.sessionStorage.getItem("gender_type")||"",h=window.sessionStorage.getItem("chat_id")||"",d=window.sessionStorage.getItem("chat_token")||"",x=window.sessionStorage.getItem("u_id")||"",te=window.sessionStorage.getItem("nickname")||"";return W(s),E(o),B(h),P(d),z(x),A(te),typeof window.WebSocketConnect=="function"&&!window.WebSocketObject&&window.WebSocketConnect(x),X(s),()=>{window.removeEventListener("resize",t)}},[]);const X=async t=>{try{const s=await p.get("https://api.dageiwo.com/auth/info",{headers:{Authorization:`Bearer ${t}`}});if(s.status===200&&s.data.success){const o=s.data.data;a(o),$(o.avatar_url)}}catch(s){console.error("RetrieveInfo error:",s)}},w=t=>t==null?"":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),q=()=>{O(!1)},b=async()=>{var t,s,o,h;if(n){u(null);try{const d={nickname:n.nickname,birthday:n.birthday,cannot_take_call:(t=n.female_response)==null?void 0:t.cannot_take_call,cannot_take_video_call:(s=n.female_response)==null?void 0:s.cannot_take_video_call,video_coin:(o=n.female_response)==null?void 0:o.video_coin,call_coin:(h=n.female_response)==null?void 0:h.call_coin,notify_telegram:n.notify_telegram};console.log("updateInfo data:",d);const x=await p.put("https://api.dageiwo.com/api/user",d,{headers:{Authorization:`Bearer ${f}`}});x.status===200&&x.data.success?alert("更新成功！"):u("更新檔案發生錯誤, 請檢查網路後重試一次.")}catch(d){console.error(d),u("更新發生錯誤, 請稍後重試.")}}},J=async()=>{if(c(""),!l||l!==g){c("兩次輸入的密碼不一致.");return}try{const t={phone_number:"??",new_pwd:l};(await p.post("https://api.dageiwo.com/auth/forget/pwd",t)).data.success?(c("重設密碼成功."),m(!1)):c("重設密碼失敗, 請檢查網路, 再試一次.")}catch(t){console.error(t),c("重設密碼發生錯誤, 請稍後再試.")}},K=t=>{n&&a(s=>({...s,female_response:{...s.female_response,cannot_take_call:!t}}))},M=t=>{n&&a(s=>({...s,female_response:{...s.female_response,cannot_take_video_call:!t}}))},Q=t=>{n&&a(s=>({...s,female_response:{...s.female_response,call_coin:Number(t)}}))},Y=t=>{n&&a(s=>({...s,female_response:{...s.female_response,video_coin:Number(t)}}))},Z=t=>{n&&a(s=>({...s,notify_telegram:t}))},ee=async()=>{try{(await p.post("https://api.dageiwo.com/auth/logout",{},{headers:{Authorization:`Bearer ${f}`}})).data.success&&(window.sessionStorage.clear(),window.WebSocketObject&&window.WebSocketObject.close(),r("/home"))}catch(t){console.error(t),r("/home")}};return n?e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("button",{style:{background:"none",border:"none",color:"#fff"},onClick:()=>r(-1),children:e.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})}),e.jsx("h2",{style:{margin:"0 auto",color:"#fff"},children:"個人檔案"})]})}),e.jsxs("div",{className:"info-main",style:{maxWidth:"800px",margin:"0 auto",minHeight:"100%",color:"rgba(0,0,0,0.7)",padding:"1rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",flex:1},children:[e.jsx("div",{style:{width:"96px",height:"96px",border:"2px solid #f2e9eb",outline:"#dd8ea4 solid 2px",marginRight:"20px",borderRadius:"50%",overflow:"hidden"},children:j&&e.jsx("img",{src:j,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsx("h2",{style:{margin:0},children:n.nickname}),e.jsxs("h5",{style:{color:"#999",alignItems:"end",paddingLeft:"10px",paddingTop:"5px"},children:["#",n.female_response.referral_code]})]}),e.jsx("button",{style:{borderRadius:"8px",background:"#dd8ea4",color:"#fff",padding:"6px 12px",border:"none"},onClick:()=>r("/woman-edit"),children:"編輯檔案"})]}),e.jsxs("div",{style:{border:"1px solid #ccc",background:"#FFF",borderRadius:"8px",padding:"1rem",marginBottom:"10px"},children:[e.jsx("h3",{style:{color:"purple",textAlign:"center"},children:"總累計點數"}),e.jsxs("h1",{style:{textAlign:"center"},children:[w((k=n.female_response)==null?void 0:k.point),"點"]})]}),e.jsxs("div",{style:{border:"1px solid #ccc",background:"#FFF",borderRadius:"8px",padding:"1rem",marginBottom:"10px"},children:[e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"目前點數"}),e.jsxs("div",{onClick:()=>r("/current-points"),children:[w((_=n.female_response)==null?void 0:_.point),"點",e.jsx("i",{className:"mdi mdi-chevron-right"})]})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"語音費率"}),e.jsxs("select",{value:((C=n.female_response)==null?void 0:C.call_coin)||"",onChange:t=>Q(t.target.value),children:[e.jsx("option",{value:"",children:"請選擇費率"}),G.map(t=>e.jsx("option",{value:t.value,children:t.text},t.value))]})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"視訊費率"}),e.jsxs("select",{value:((S=n.female_response)==null?void 0:S.video_coin)||"",onChange:t=>Y(t.target.value),children:[e.jsx("option",{value:"",children:"請選擇費率"}),H.map(t=>e.jsx("option",{value:t.value,children:t.text},t.value))]})]})}),e.jsx("div",{style:{margin:"5px 0",borderTop:"1px solid #ccc",paddingTop:"8px"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",cursor:"pointer"},onClick:()=>m(!0),children:[e.jsx("h3",{style:{margin:0},children:"更改密碼"}),e.jsx("i",{className:"mdi mdi-chevron-right"})]})}),e.jsx("hr",{}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"語音聊天"}),e.jsx("input",{type:"checkbox",checked:!((I=n.female_response)!=null&&I.cannot_take_call),onChange:t=>K(t.target.checked)})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"視訊聊天"}),e.jsx("input",{type:"checkbox",checked:!((N=n.female_response)!=null&&N.cannot_take_video_call),onChange:t=>M(t.target.checked)})]})}),e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("h3",{style:{margin:0},children:"通知開關"}),e.jsx("input",{type:"checkbox",checked:n.notify_telegram,onChange:t=>Z(t.target.checked)})]})})]}),e.jsx("div",{style:{textAlign:"center",marginBottom:"1rem"},children:e.jsx("button",{style:{backgroundColor:"#dd8ea4",color:"#fff",border:"none",padding:"8px 16px",borderRadius:"4px",cursor:"pointer"},onClick:b,children:"送出"})}),e.jsxs("div",{style:{border:"1px solid #ccc",background:"#FFF",borderRadius:"8px",padding:"1rem",marginBottom:"10px"},children:[e.jsx("div",{style:{margin:"5px 0"},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",cursor:"pointer"},onClick:()=>window.location.assign("https://line.me/R/ti/p/@668pwyqo"),children:[e.jsx("h3",{style:{margin:0},children:"聯絡客服"}),e.jsx("i",{className:"mdi mdi-chevron-right"})]})}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px"},children:e.jsx("button",{style:{borderRadius:"8px",background:"#dd8ea4",color:"#fff",padding:"6px 12px",border:"none"},onClick:ee,children:"登出"})})]})]}),D&&e.jsx("div",{className:"dialog-overlay",children:e.jsxs("div",{className:"dialog-content",children:[e.jsx("button",{onClick:q,children:"X"}),e.jsx("h3",{children:"修改個人檔案"}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"暱稱"}),e.jsx("input",{type:"text",value:n.nickname,onChange:t=>a(s=>({...s,nickname:t.target.value}))})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"生日"}),e.jsx("input",{type:"date",value:n.birthday||"",onChange:t=>a(s=>({...s,birthday:t.target.value}))})]}),e.jsx("button",{onClick:b,children:"儲存"}),y&&e.jsx("div",{style:{color:"red"},children:y})]})}),L&&e.jsx("div",{className:"dialog-overlay",children:e.jsxs("div",{className:"dialog-content",children:[e.jsx("button",{onClick:()=>m(!1),children:"X"}),e.jsx("h3",{children:"重設密碼"}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"輸入新密碼"}),e.jsx("input",{type:"password",value:l,onChange:t=>U(t.target.value)})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{children:"再輸入一次新密碼"}),e.jsx("input",{type:"password",value:g,onChange:t=>V(t.target.value)}),e.jsx("div",{style:{width:"100%",textAlign:"center"},children:e.jsx("button",{onClick:J,disabled:!l||l!==g,children:"重設密碼"})})]}),v&&e.jsx("div",{style:{color:"red"},children:v})]})}),e.jsx(F,{})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("button",{style:{background:"none",border:"none",color:"#fff"},onClick:()=>r(-1),children:e.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})}),e.jsx("h2",{style:{margin:"0 auto",color:"#fff"},children:"個人檔案"})]})}),e.jsx("div",{style:{maxWidth:"800px",margin:"0 auto",minHeight:"100%",padding:"1rem"},children:"載入中..."}),e.jsx(F,{})]})}export{pe as default};
