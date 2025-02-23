import{u as I,r as n,j as e}from"./index-DJ0IS-oA.js";import{a as f}from"./axios-upsvKRUO.js";const D=()=>{const c=I(),[m,y]=n.useState(""),[a,b]=n.useState(null),[o,j]=n.useState(""),[i,k]=n.useState(""),[l,v]=n.useState(""),[d,w]=n.useState(""),[p,S]=n.useState(null),[C,R]=n.useState(0),[x,r]=n.useState("");n.useEffect(()=>{const t=sessionStorage.getItem("token")||"";return sessionStorage.getItem("u_id"),y(t),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]);const u=()=>{},B=t=>{var g;const s=(g=t.target.files)==null?void 0:g[0];if(s){const h=new FileReader;h.onload=E=>{b(E.target.result)},h.readAsDataURL(s),S(s)}},z=()=>o?l?d?i?a?!0:(r("上傳本人銀行帳戶封面"),!1):(r("請輸入銀行帳號"),!1):(r("請輸入銀行分行代號"),!1):(r("請輸入銀行代號"),!1):(r("請輸入銀行戶名"),!1),F=async()=>{if(!p)return r("請選擇照片後再提交。"),!1;try{const t=new FormData;t.append("file",p);const s=await f.post("https://api.dageiwo.com/file/upload?fileType=BANK",t,{headers:{"Content-Type":"multipart/form-data"}});if(s.status===200&&s.data.success)console.log("文件上傳成功",s.data),R(s.data.data.id);else return r("文件上傳失敗，請稍後重試。"),!1}catch(t){return console.error("文件上傳失敗:",t),r("文件上傳失敗，請稍後重試。"),!1}return!0},A=async()=>{if(!(!z()||(r(""),!await F())))try{const s=await f.post("https://api.dageiwo.com/api/user/bank/verify",{bank_name:o,bank_account:i,bank_code:l,bank_sub_code:d,file_id:C},{headers:{Authorization:`Bearer ${m}`}});console.log("registerResp:",s),s.status===200&&s.data.success?c("/current-points"):r("失敗, 請檢查網路後再試一次.")}catch(s){console.error(s),r("失敗, 請檢查網路後再試一次.")}},_=()=>{c(-1)};return e.jsxs("div",{style:{backgroundColor:"white",maxWidth:"600px",margin:"0 auto",padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsxs("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#dd8ea4",padding:"10px 15px",borderRadius:"10px",color:"white",marginBottom:"20px"},children:[e.jsx("button",{style:{background:"none",border:"none",fontSize:"16px",color:"white",cursor:"pointer"},onClick:_,children:"←"}),e.jsx("h2",{style:{margin:0,fontSize:"20px"},children:"帳號驗證"}),e.jsx("div",{style:{width:"40px"}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx("h3",{style:{color:"dodgerblue"},children:"必須年滿 19 歲, 並使用本人帳號進行認證"})}),e.jsx("hr",{}),e.jsxs("div",{style:{fontSize:"small",margin:"5px"},children:[e.jsx("p",{children:"1. 資料僅供平台認證, 其他用戶無法查看"}),e.jsx("p",{children:"2. 審核結束後, 所有資料將進行嚴密保管"}),e.jsx("p",{children:"3. 審核時間約 1-2 個工作天"})]}),e.jsx("hr",{}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"銀行戶名"}),e.jsx("input",{type:"text",value:o,onChange:t=>j(t.target.value),style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"銀行代號"}),e.jsx("input",{type:"text",value:l,onChange:t=>v(t.target.value),style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"銀行分行代號"}),e.jsx("input",{type:"text",value:d,onChange:t=>w(t.target.value),style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"銀行帳號"}),e.jsx("input",{type:"text",value:i,onChange:t=>k(t.target.value),style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsxs("label",{style:{display:"block",marginBottom:"5px"},children:["上傳本人銀行帳戶封面 ",e.jsx("br",{}),e.jsx("small",{style:{fontSize:"12px",color:"#666"},children:"*實體銀行帳戶封面或數位帳戶截圖首頁"})]}),e.jsx("input",{type:"file",accept:"image/*",onChange:B,style:{display:"block",marginBottom:"5px"}}),a&&e.jsx("img",{src:a,alt:"銀行帳戶封面",style:{display:"block",maxHeight:"200px",border:"1px solid #ccc",borderRadius:"10px",marginTop:"8px"}})]}),e.jsx("div",{style:{textAlign:"center",margin:"15px"},children:e.jsx("button",{onClick:A,style:{backgroundColor:"green",color:"white",padding:"10px 20px",fontSize:"16px",border:"none",borderRadius:"5px",cursor:"pointer"},children:"送出"})}),x&&e.jsx("div",{style:{textAlign:"center",margin:"15px",color:"red"},children:x})]})]})};export{D as default};
