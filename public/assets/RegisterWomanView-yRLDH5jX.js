import{u as Te,r as o,j as e,L as Le}from"./index-C3mMhQvi.js";import{a as h}from"./axios-upsvKRUO.js";import{A as Me}from"./AppBar-C1sVSG8a.js";import{C as Pe}from"./CopyrightFooter-owVNFOTF.js";const Oe=()=>{const I=Te(),[y,K]=o.useState("");o.useState(null);const[m,W]=o.useState("");o.useState(!1);const[Fe,G]=o.useState([]),[j,J]=o.useState(null),[p,X]=o.useState(""),[i,Z]=o.useState(""),[q,_e]=o.useState(""),[N,H]=o.useState(!1),[C,Q]=o.useState(""),[B,Y]=o.useState(""),[S,ee]=o.useState(""),[k,te]=o.useState([]),[T,L]=o.useState([]),[se,M]=o.useState([]),[P]=o.useState(["不約見","不聊色","不電愛","熟了有機會"]),[F,ae]=o.useState([!1,!1,!1,!1]),[_,oe]=o.useState(["高挑","小隻馬","清純","性感","可愛","氣質","活力","古典美","時尚","陽光","甜美","纖細","健康","俏皮","短髮","豐滿","OL","運動"]),[E,V]=o.useState(new Array(18).fill(!1)),[b,$]=o.useState(""),[U,ne]=o.useState(""),[re,f]=o.useState(""),[Ee,R]=o.useState(!1),[ce,g]=o.useState(""),[le,A]=o.useState(!1),[z,ie]=o.useState(!1),[de,c]=o.useState(""),[D,ue]=o.useState(null),[Ve,me]=o.useState(0),[pe,u]=o.useState(!1),O=[{country:"台灣 (Taiwan)",code:"+886"},{country:"中國 (China)",code:"+86"},{country:"新加坡 (Singapore)",code:"+65"},{country:"馬來西亞 (Malaysia)",code:"+60"},{country:"印尼 (Indonesia)",code:"+62"},{country:"泰國 (Thailand)",code:"+66"},{country:"菲律賓 (Philippines)",code:"+63"},{country:"越南 (Vietnam)",code:"+84"},{country:"汶萊 (Brunei)",code:"+673"},{country:"柬埔寨 (Cambodia)",code:"+855"},{country:"寮國 (Laos)",code:"+856"},{country:"緬甸 (Myanmar)",code:"+95"},{country:"美國 (United States)",code:"+1"},{country:"日本 (Japan)",code:"+81"},{country:"南韓 (South Korea)",code:"+82"},{country:"加拿大 (Canada)",code:"+1"},{country:"澳大利亞 (Australia)",code:"+61"},{country:"法國 (France)",code:"+33"},{country:"德國 (Germany)",code:"+49"},{country:"英國 (United Kingdom)",code:"+44"},{country:"義大利 (Italy)",code:"+39"},{country:"西班牙 (Spain)",code:"+34"},{country:"墨西哥 (Mexico)",code:"+52"},{country:"巴西 (Brazil)",code:"+55"},{country:"阿根廷 (Argentina)",code:"+54"},{country:"印度 (India)",code:"+91"},{country:"俄羅斯 (Russia)",code:"+7"},{country:"瑞士 (Switzerland)",code:"+41"},{country:"荷蘭 (Netherlands)",code:"+31"},{country:"南非 (South Africa)",code:"+27"},{country:"新西蘭 (New Zealand)",code:"+64"}];o.useEffect(()=>{window.AppConfig&&window.AppConfig.country_list&&G(window.AppConfig.country_list),he()},[]);const he=()=>{const t=document.getElementById("recordButton"),s=document.getElementById("stopButton"),a=document.getElementById("audio");if(!t||!s||!a)return;let r=null,d=[],n=null;const l=async()=>{try{t.disabled=!0,s.disabled=!1,t.style.background="red";const w=await navigator.mediaDevices.getUserMedia({audio:!0});n=w,r=new MediaRecorder(w,{mimeType:"audio/webm"}),r.start(),d=[],r.ondataavailable=x=>{x.data.size>0&&d.push(x.data)},r.onstop=()=>{const x=new Blob(d,{type:"audio/webm"}),Ie=URL.createObjectURL(x);a.src=Ie,a.controls=!0,ue(x),n&&n.getTracks().forEach(Be=>Be.stop()),t.style.background="",t.disabled=!1,s.disabled=!0}}catch(w){console.error("無法錄音:",w),t.disabled=!1,s.disabled=!0}},v=()=>{r&&r.state==="recording"?r.stop():(t.disabled=!1,s.disabled=!0,t.style.background="")};return t.addEventListener("click",l),s.addEventListener("click",v),()=>{t.removeEventListener("click",l),s.removeEventListener("click",v)}},fe=t=>{ae(s=>{const a=[...s];return a[t]=!a[t],a})},ge=t=>{V(s=>{const a=[...s];return a[t]=!a[t],a})},xe=()=>{b.trim()!==""&&(oe(t=>[...t,b]),V(t=>[...t,!0]),$(""))},ye=t=>{const s=Math.min(t.length,6),a=[];for(let r=0;r<s;r++)a.push(URL.createObjectURL(t[r]));L(a)},je=t=>{const s=t.target.files;if(!s)return;const a=Array.from(s);te(a),ye(a)},be=t=>{L(a=>{const r=[...a];return r.splice(t,1),r});const s=se[t];s&&h.delete(`https://api.dageiwo.com/file/${s}`,{headers:{Authorization:"Bearer ???"}}).then(a=>{a.status===200?(M(r=>{const d=[...r];return d.splice(t,1),d}),alert("圖片已成功刪除！")):alert("刪除失敗，請重試！")}).catch(a=>{console.error("圖片刪除失敗：",a),alert("刪除失敗，請檢查網路連線！")})},ve=t=>{W(t)},we=o.useCallback(()=>{if(!m)return 0;const t=Math.abs(Date.now()-new Date(m).getTime());return Math.ceil(t/(1e3*60*60*24*365.25))},[m]),Ne=t=>{console.log(t,"code");const s=O.find(a=>a.code==t);J(s||null),console.log("found",s),X(t)},Ce=t=>{Z(t),f(""),R(!1),g(""),A(!1)},Se=async()=>{f(""),R(!1);try{const t=await h.post(`https://api.dageiwo.com/auth/send/sms_key?phone_number=${encodeURIComponent(p+i)}`,{});if(t.status===200&&t.data.success)f("發送成功, 收到驗證碼後請輸入驗證碼進行檢查。"),R(!0);else{const s=t.data.message?t.data.message:"請重新發送驗證碼。";f("發送驗證碼失敗, "+s)}}catch(t){console.error(t),f("發送驗證碼失敗, 請檢查網路後再試一次")}},ke=async()=>{g(""),A(!1);try{const t=await h.post(`https://api.dageiwo.com/auth/check/sms_key?phone_number=${encodeURIComponent(p+i)}&key=${S}`,{});if(t.status===200&&t.data.success)g("檢查驗證碼成功."),A(!0);else{const s=t.data.message?t.data.message:"請重新發送驗證碼, 再進行檢查。";g("檢查驗證碼失敗, "+s)}}catch(t){console.error(t),g("檢查驗證碼失敗, 請重新發送驗證碼, 再進行檢查。")}},Re=async()=>{if(k.length===0)return c("請選擇至少一個頭像照片."),null;c("上傳照片中...");const t=new FormData,s=Math.min(k.length,6);for(let a=0;a<s;a++)t.append("files",k[a]);try{const a=await h.post("https://api.dageiwo.com/file/upload_multi?file_type=AVATAR",t);if(a.status!==200||!a.data.success){const n=a.data.message||"請檢查網路後再試一次.";return c("上傳照片失敗, "+n),null}c("上傳照片完成.");const r=a.data.data.map(n=>n.id);M(r);let d=null;if(D){c("開始上傳錄音...");const n=new FormData;n.append("file",D,"留言.mp3");const l=await h.post("https://api.dageiwo.com/file/upload?fileType=WEB_M",n);if(l.status!==200||!l.data.success){const v=l.data.message||"請檢查網路後再試一次.";return c("上傳錄音失敗, "+v),null}c("上傳錄音完成."),d=l.data.data.id,me(d)}return{photoIds:r,audioId:d}}catch(a){return console.error(a),c("上傳照片失敗, 請檢查網路後再試一次."),null}},Ae=async()=>{if(u(!0),c(""),we()<18){c("註冊失敗, 年齡必須大於18."),u(!1);return}c("檢查帳號資料中...");try{const n=await h.get(`https://api.dageiwo.com/auth/check/account?account=${encodeURIComponent(p+i)}`);if(n.status!==200){c("註冊失敗, 請檢查網路後再試一次."),u(!1);return}if(!n.data.success){c("帳號已經存在, 請用其他手機號碼註冊."),u(!1);return}}catch(n){console.error(n),c("註冊失敗, 請檢查網路後再試一次."),u(!1);return}c("上傳照片/留言檔案中...");const t=await Re();if(!t){u(!1);return}const{photoIds:s,audioId:a}=t,r=P.map((n,l)=>F[l]?n:null).filter(Boolean).join(","),d=_.map((n,l)=>E[l]?n:null).filter(Boolean).join(",");c("送出註冊資料中...");try{const n=await h.post("https://api.dageiwo.com/auth/female_register",{country:(j==null?void 0:j.country)||"",account:p+i,password:C,nickname:y,birthday:m,referral_code:B,statement:r,appearance:d,about_me:U,file_ids:s.toString(),mp3_id:a,telegram_account:q},{headers:{"Content-Type":"application/json"}});if(n.status===200&&n.data.success)c("註冊成功, 跳轉登入畫面中..."),u(!1),I("/login");else{const l=n.data.message||"請檢查網路後再試一次.";c("註冊失敗, "+l),u(!1)}}catch(n){console.error(n),c("註冊失敗, 請檢查網路後再試一次."),u(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(Me,{children:e.jsx("button",{className:"btn",onClick:()=>I("/home"),style:{background:"none",border:"none",color:"#fff"},children:e.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})})}),e.jsxs("div",{className:"register-main",children:[e.jsx("h2",{children:"女性用戶註冊"}),e.jsx("hr",{}),e.jsxs("div",{className:"section",children:[e.jsx("h3",{children:"加入條件"}),e.jsx("p",{style:{fontSize:"small",margin:"4px 0"},children:"1. 限女性，需滿18歲"}),e.jsx("p",{style:{fontSize:"small",margin:"4px 0"},children:"2. 本公司發薪水是以銀行帳戶匯款，需為本人之帳戶（包含海外用戶）"}),e.jsx("p",{style:{fontSize:"small",margin:"4px 0"},children:"3. 若發現任何身分造假、從事非法不利於平台之行為，將會立即停權"}),e.jsx("p",{style:{fontSize:"small",margin:"4px 0"},children:"4. 需自備手機或電腦與良好網路環境"})]}),e.jsx("hr",{}),e.jsx("div",{className:"form-row",children:e.jsx("h2",{children:"基本資料"})}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"暱稱"}),e.jsx("input",{className:"form-input",type:"text",value:y,onChange:t=>K(t.target.value)})]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"生日"}),e.jsx("input",{className:"form-input",type:"date",value:m,onChange:t=>ve(t.target.value)})]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"國家/地區"}),e.jsxs("select",{className:"form-select",value:p,onChange:t=>Ne(t.target.value),disabled:!y||!m,children:[e.jsx("option",{value:"",children:!y||!m?"請先輸入暱稱與生日":"選擇國家/地區"}),O.map((t,s)=>e.jsx("option",{value:t.code,children:t.country},s))]})]}),e.jsxs("div",{className:"form-row",style:{display:"flex",alignItems:"center"},children:[e.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"手機號碼"}),e.jsxs("div",{className:"input-container",style:{display:"flex",alignItems:"center",flex:1},children:[e.jsx("span",{className:"input-prefix",style:{background:"#f0f0f0",padding:"4px 10px",border:"1px solid #ccc",borderRadius:"4px 0 0 4px",pointerEvents:"none"},children:p||"+0"}),e.jsx("input",{className:"form-input",type:"number",value:i,onChange:t=>Ce(t.target.value),disabled:!p,placeholder:j?"":"請先選擇國家/地區",style:{flex:1,border:"1px solid #ccc",borderLeft:"none",marginLeft:"2px",borderRadius:"0 4px 4px 0"}})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"密碼"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("input",{className:"form-input",style:{width:"150px"},type:N?"text":"password",value:C,onChange:t=>Q(t.target.value),disabled:!i,placeholder:i?"":"請先輸入手機號"}),e.jsx("button",{className:"btn",type:"button",onClick:()=>H(!N),children:N?"隱藏":"顯示"})]})]}),e.jsxs("div",{className:"code-area text-center",children:[e.jsx("span",{className:"status-text",children:re}),e.jsx("button",{className:"btn",onClick:Se,disabled:!i,children:"發送驗證碼"})]}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"驗證碼"}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("input",{className:"form-input",style:{width:"150px"},type:"number",value:S,onChange:t=>ee(t.target.value),disabled:!i,placeholder:i?"":"輸入手機驗證碼"}),e.jsx("button",{className:"btn",onClick:ke,disabled:!S,children:"檢查驗證碼"})]})]}),e.jsx("div",{className:"status-text",children:ce}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"介紹碼"}),e.jsx("input",{className:"form-input",type:"text",value:B,onChange:t=>Y(t.target.value),disabled:!i,placeholder:i?"":"請先輸入手機號碼"})]}),e.jsxs("div",{className:"form-row",children:[e.jsx("h2",{children:"上傳頭像 "}),e.jsx("h4",{children:"(最少1張，可同時選多個)"})]}),e.jsx("input",{type:"file",accept:"image/jpg,image/jpeg",multiple:!0,onChange:je}),T.length>0&&e.jsx("div",{className:"image-preview-container",children:T.map((t,s)=>e.jsxs("div",{className:"image-preview-wrapper",children:[e.jsx("img",{src:t,alt:"preview",className:"image-preview"}),e.jsx("button",{className:"delete-preview-btn",onClick:()=>be(s),children:"X"})]},s))}),e.jsx("div",{className:"form-row",children:e.jsx("h2",{children:"我先聲明"})}),e.jsx("div",{className:"tag-list",children:P.map((t,s)=>e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:F[s],onChange:()=>fe(s)}),e.jsxs("span",{children:["#",t]})]},s))}),e.jsx("div",{className:"form-row",children:e.jsx("h2",{children:"外型"})}),e.jsx("div",{className:"tag-list",children:_.map((t,s)=>e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:E[s],onChange:()=>ge(s)}),e.jsxs("span",{children:["#",t]})]},s))}),e.jsxs("div",{className:"form-row",children:[e.jsx("label",{className:"form-label",children:"自訂標籤"}),e.jsx("input",{className:"form-input",type:"text",value:b,onChange:t=>$(t.target.value)}),e.jsx("button",{className:"btn",onClick:xe,disabled:!b,children:"+"})]}),e.jsx("div",{className:"form-row",children:e.jsx("h2",{children:"個人描述"})}),e.jsx("textarea",{className:"form-textarea",value:U,onChange:t=>ne(t.target.value),rows:3,style:{width:"100%"}}),e.jsx("div",{className:"form-row",children:e.jsx("h2",{children:"錄音留言"})}),e.jsxs("div",{style:{margin:"5px"},children:[" ",e.jsxs("div",{style:{border:"1px solid #ccc",padding:"8px",marginTop:"4px"},children:[" ",e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"8px"},children:[" ",e.jsx("button",{id:"recordButton",style:{background:"#0088cc",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:" 開始錄音 "})," ",e.jsx("button",{id:"stopButton",style:{background:"#0088cc",color:"#fff",border:"none",padding:"4px 8px",cursor:"pointer"},children:" 停止錄音 "})," "]})," ",e.jsx("audio",{id:"audio",controls:!0,style:{width:"100%"}})," "]})," "]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("label",{style:{cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:z,onChange:t=>ie(t.target.checked)}),e.jsxs("span",{style:{marginLeft:"5px"},children:["我已閱讀並同意 ",e.jsx(Le,{to:"/service",children:"《服務協議》"})]})]}),e.jsx("div",{className:"tip-text",children:"本頁面收集的資料僅用於註冊帳戶"})]}),e.jsx("button",{className:"submit-btn",disabled:!le||C===""||!z||pe,onClick:Ae,children:"同意並繼續"}),e.jsx("div",{className:"register-result",children:de})]}),e.jsx(Pe,{})]})};export{Oe as default};
