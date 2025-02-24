import { a as u } from "./axios-upsvKRUO.js";
import { u as L, r as a, j as e } from "./index-DJ0IS-oA.js";
const $=()=>{const g=L(),[b,j]=a.useState(""),[n,v]=a.useState(null),[l,k]=a.useState(null),[f,w]=a.useState(null),[m,R]=a.useState(null),[F,S]=a.useState(0),[C,B]=a.useState(0),[d,z]=a.useState(""),[c,I]=a.useState(""),[p,A]=a.useState(""),[y,s]=a.useState("");a.useEffect(()=>{const r=localStorage.getItem("token")||"";return localStorage.getItem("u_id"),j(r),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}},[]);const h=()=>{},_=()=>d?c?p?n?l?!0:(s("請上傳身分證反面照片"),!1):(s("請上傳身分證正面照片"),!1):(s("請輸入電子郵件"),!1):(s("請輸入身分證字號"),!1):(s("請輸入真實姓名"),!1),D=r=>{var i;const t=(i=r.target.files)==null?void 0:i[0];if(t){const o=new FileReader;o.onload=x=>{v(x.target.result)},o.readAsDataURL(t),w(t)}},T=r=>{var i;const t=(i=r.target.files)==null?void 0:i[0];if(t){const o=new FileReader;o.onload=x=>{k(x.target.result)},o.readAsDataURL(t),R(t)}},E=async()=>{if(!f||!m)return s("請選擇正反面照片後再提交。"),!1;try{const r=new FormData;r.append("file",f);const t=await u.post("https://api.dageiwo.com/file/upload?fileType=ID_CARD",r,{headers:{"Content-Type":"multipart/form-data"}});if(t.status===200&&t.data.success)console.log("正面文件上傳成功",t.data),S(t.data.data.id);else return s("正面文件上傳失敗，請稍後重試。"),!1}catch(r){return console.error("正面文件上傳失敗:",r),s("正面文件上傳失敗，請稍後重試。"),!1}try{const r=new FormData;r.append("file",m);const t=await u.post("https://api.dageiwo.com/file/upload?fileType=ID_CARD",r,{headers:{"Content-Type":"multipart/form-data"}});if(t.status===200&&t.data.success)console.log("反面文件上傳成功",t.data),B(t.data.data.id);else return s("反面文件上傳失敗，請稍後重試。"),!1}catch(r){return console.error("反面文件上傳失敗:",r),s("反面文件上傳失敗，請稍後重試。"),!1}return!0},N=async()=>{if(!(!_()||(s(""),!await E())))try{const t=await u.post("https://api.dageiwo.com/api/user/person/verify",{real_name:d,id_number:c,email:p,front_file_id:F,back_file_id:C},{headers:{Authorization:`Bearer ${b}`}});console.log("registerResp:",t),t.status===200&&t.data.success?g("/current-points"):s("失敗, 請檢查網路後再試一次.")}catch(t){console.error(t),s("失敗, 請檢查網路後再試一次.")}};return e.jsxs("div",{style:{backgroundColor:"white",maxWidth:"600px",margin:"0 auto",padding:"20px",fontFamily:"Arial, sans-serif"},children:[e.jsxs("header",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#dd8ea4",padding:"10px 15px",borderRadius:"10px",color:"white",marginBottom:"20px"},children:[e.jsx("button",{style:{background:"none",border:"none",fontSize:"16px",color:"white",cursor:"pointer"},onClick:()=>g(-1),children:"←"}),e.jsx("h2",{style:{margin:0,fontSize:"20px"},children:"身分驗證"}),e.jsx("div",{style:{width:"40px"}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx("h3",{style:{color:"dodgerblue"},children:"必須年滿 19 歲,並使用本人證件進行認證"})}),e.jsx("hr",{}),e.jsxs("div",{style:{fontSize:"small",margin:"5px"},children:[e.jsx("p",{children:"1. 資料僅供平台認證,其他用戶無法查看"}),e.jsx("p",{children:"2. 審核結束後,所有資料將進行嚴密保管"}),e.jsx("p",{children:"3. 審核時間約 1-2 個工作天"})]}),e.jsx("hr",{}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"真實姓名"}),e.jsx("input",{type:"text",value:d,onChange:r=>z(r.target.value),required:!0,style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"身分證字號"}),e.jsx("input",{type:"text",value:c,onChange:r=>I(r.target.value),required:!0,style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"電子郵件"}),e.jsx("input",{type:"email",value:p,onChange:r=>A(r.target.value),required:!0,style:{width:"100%",padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px"}}),e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"5px 0 0"},children:"寄發匯款成功通知"})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"上傳本人身分證正面（*照片須能夠用肉眼清晰辨識）"}),e.jsx("input",{type:"file",accept:"image/*",onChange:D,style:{display:"block",marginBottom:"5px"}}),n&&e.jsx("img",{src:n,alt:"身分證正面",style:{display:"block",maxHeight:"200px",border:"1px solid #ccc",borderRadius:"10px",marginTop:"8px"}})]}),e.jsxs("div",{style:{margin:"10px 0"},children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"上傳本人身分證反面（*照片須能夠用肉眼清晰辨識）"}),e.jsx("input",{type:"file",accept:"image/*",onChange:T,style:{display:"block",marginBottom:"5px"}}),l&&e.jsx("img",{src:l,alt:"身分證反面",style:{display:"block",maxHeight:"200px",border:"1px solid #ccc",borderRadius:"10px",marginTop:"8px"}})]}),e.jsx("div",{style:{textAlign:"center",margin:"20px"},children:e.jsx("button",{onClick:N,style:{backgroundColor:"green",color:"#fff",padding:"10px 20px",fontSize:"16px",border:"none",borderRadius:"5px",cursor:"pointer"},children:"送出"})}),y&&e.jsx("div",{style:{textAlign:"center",margin:"15px",color:"red"},children:y})]})]})};export { $ as default };

