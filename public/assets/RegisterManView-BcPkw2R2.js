import{u as H,r as s,j as t,L as Q}from"./index-C3mMhQvi.js";import{a as l}from"./axios-upsvKRUO.js";import{A as W}from"./AppBar-C1sVSG8a.js";import{C as X}from"./CopyrightFooter-owVNFOTF.js";const re=()=>{const g=H(),[R,b]=s.useState([]),[c,A]=s.useState(null),[p,I]=s.useState(""),[d,_]=s.useState(""),[v,j]=s.useState([]),[u,$]=s.useState(null),[i,w]=s.useState(""),[a,L]=s.useState(""),[h,P]=s.useState(!1),[f,V]=s.useState(""),[y,M]=s.useState(""),[U,Y]=s.useState(""),[C,B]=s.useState(""),[E,N]=s.useState(""),[x,F]=s.useState(""),[ee,r]=s.useState(""),[te,T]=s.useState(!1),[z,o]=s.useState(""),[S,D]=s.useState(!1);s.useEffect(()=>{const e=window.localStorage.getItem("promotion_code")||"";N(e),window.AppConfig&&window.AppConfig.country_list&&j(window.AppConfig.country_list),window.AvatarList&&b(window.AvatarList),console.log(`promotion_code: ${e}`)},[]),s.useEffect(()=>{const e=window.localStorage.getItem("promotion_code")||"";N(e);const n=async()=>{try{const m=await l.get("https://api.dageiwo.com/auth/default/avatar");m.status===200&&m.data.success&&b(m.data.data)}catch(m){console.error("取得預設頭貼失敗:",m)}};j([{country:"台灣 (Taiwan)",code:"+886"},{country:"中國 (China)",code:"+86"},{country:"新加坡 (Singapore)",code:"+65"},{country:"馬來西亞 (Malaysia)",code:"+60"},{country:"印尼 (Indonesia)",code:"+62"},{country:"泰國 (Thailand)",code:"+66"},{country:"菲律賓 (Philippines)",code:"+63"},{country:"越南 (Vietnam)",code:"+84"},{country:"汶萊 (Brunei)",code:"+673"},{country:"柬埔寨 (Cambodia)",code:"+855"},{country:"寮國 (Laos)",code:"+856"},{country:"緬甸 (Myanmar)",code:"+95"},{country:"美國 (United States)",code:"+1"},{country:"日本 (Japan)",code:"+81"},{country:"南韓 (South Korea)",code:"+82"},{country:"加拿大 (Canada)",code:"+1"},{country:"澳大利亞 (Australia)",code:"+61"},{country:"法國 (France)",code:"+33"},{country:"德國 (Germany)",code:"+49"},{country:"英國 (United Kingdom)",code:"+44"},{country:"義大利 (Italy)",code:"+39"},{country:"西班牙 (Spain)",code:"+34"},{country:"墨西哥 (Mexico)",code:"+52"},{country:"巴西 (Brazil)",code:"+55"},{country:"阿根廷 (Argentina)",code:"+54"},{country:"印度 (India)",code:"+91"},{country:"俄羅斯 (Russia)",code:"+7"},{country:"瑞士 (Switzerland)",code:"+41"},{country:"荷蘭 (Netherlands)",code:"+31"},{country:"南非 (South Africa)",code:"+27"},{country:"新西蘭 (New Zealand)",code:"+64"}]),n()},[]);const K=e=>{c&&(c.isSelected=!1),A(e),e.isSelected=!0},G=e=>{const n=v.find(k=>k.code===e);n&&($(n),w(n.code))},J=e=>{L(e),r(""),o("")},O=async()=>{r("");try{const e=await l.get(`https://api.dageiwo.com/auth/check/account?account=${encodeURIComponent(i+a)}`);if(e.status!==200){r("發送驗證碼失敗, 請重新發送驗證碼.");return}if(!e.data.success){r("帳號已經存在, 請用其他手機號碼註冊.");return}}catch(e){console.error(e),r("發送驗證碼失敗, 請重新發送驗證碼.");return}try{const e=await l.post(`https://api.dageiwo.com/auth/send/sms_key?phone_number=${encodeURIComponent(i+a)}`,{});e.status===200&&e.data.success?(r("發送成功, 收到驗證碼之後請填入驗證碼。"),T(!0)):r("發送驗證碼失敗, 請重新發送驗證碼.")}catch(e){console.error(e),r("發送驗證碼失敗, 請重新發送驗證碼.")}},Z=s.useCallback(()=>{if(!d)return 0;const e=Math.abs(Date.now()-new Date(d).getTime());return Math.floor(e/(1e3*60*60*24*365.25))},[d]),q=async()=>{if(o(""),f!==y){o("註冊失敗，兩次密碼不一致。");return}if(Z()<18){o("註冊失敗, 年齡必須大於18.");return}try{const e=await l.get(`https://api.dageiwo.com/auth/check/account?account=${encodeURIComponent(i+a)}`);if(e.status!==200){o("註冊失敗, 請檢查網路後再試一次.");return}if(!e.data.success){o("帳號已經存在, 請用其他手機號碼註冊.");return}}catch(e){console.error(e),o("註冊失敗, 請檢查網路後再試一次.");return}try{const e=await l.post(`https://api.dageiwo.com/auth/check/sms_key?phone_number=${encodeURIComponent(i+a)}&key=${x}`,{});if(!(e.status===200&&e.data.success)){o("驗證碼錯誤，請重新發送或檢查驗證碼.");return}}catch(e){console.error(e),o("驗證碼檢查失敗, 請重新發送驗證碼.");return}try{const e=await l.post("https://api.dageiwo.com/auth/register",{country:(u==null?void 0:u.country)||"",account:i+a,password:f,nickname:p,birthday:d,referral_code:C,promotion_code:E||"",avatar_type:(c==null?void 0:c.type_name)||"",telegram_account:U},{headers:{"Content-Type":"application/json"}});e.status===200&&e.data.success?g("/login"):o("註冊失敗, 請檢查網路後再試一次.")}catch(e){console.error(e),o("註冊失敗, 請檢查網路後再試一次.")}};return t.jsxs(t.Fragment,{children:[t.jsx(W,{children:t.jsx("button",{className:"btn",style:{background:"none",border:"none",color:"#fff"},onClick:()=>g("/home"),children:t.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})})}),t.jsxs("div",{className:"register-main",children:[t.jsx("h2",{children:"用手機號碼註冊"}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"虛擬頭像"}),t.jsx("div",{className:"avatar-list",children:R.map((e,n)=>t.jsxs("div",{className:`avatar-item ${e.isSelected?"selected":""}`,onClick:()=>K(e),children:[t.jsx("img",{src:e.url,alt:e.name,className:"avatar-img"}),t.jsx("div",{className:"avatar-name",children:e.name})]},n))})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"暱稱"}),t.jsx("input",{className:"form-input",type:"text",value:p,onChange:e=>I(e.target.value),disabled:!c,placeholder:c?"":"請先選擇虛擬頭像"})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"生日"}),t.jsx("input",{className:"form-input",type:"date",value:d,onChange:e=>_(e.target.value),max:new Date().toISOString().substring(0,10)})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"國家/地區"}),t.jsxs("select",{className:"form-select",value:i,onChange:e=>{w(e.target.value),G(e.target.value)},disabled:p==="",children:[t.jsx("option",{value:"",children:p===""?"請先輸入暱稱":"請選擇"}),v.map((e,n)=>t.jsx("option",{value:e.code,children:e.country},n))]})]}),t.jsxs("div",{className:"form-row",style:{display:"flex",alignItems:"center"},children:[t.jsx("label",{className:"form-label",style:{marginRight:"10px"},children:"手機號碼"}),t.jsxs("div",{className:"input-container",style:{display:"flex",alignItems:"center",flex:1},children:[t.jsx("span",{className:"input-prefix",style:{background:"#f0f0f0",padding:"4px 10px",border:"1px solid #ccc",borderRadius:"4px 0 0 4px",pointerEvents:"none"},children:i||"+0"}),t.jsx("input",{className:"form-input",type:"number",value:a,onChange:e=>J(e.target.value),disabled:!u,placeholder:u?"":"請先選擇國家/地區",style:{flex:1,border:"1px solid #ccc",borderLeft:"none",marginLeft:"2px",borderRadius:"0 4px 4px 0"}})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"密碼"}),t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx("input",{className:"form-input",style:{width:"150px"},type:h?"text":"password",value:f,onChange:e=>V(e.target.value),disabled:a==="",placeholder:a===""?"請先輸入手機號":""}),t.jsx("button",{className:"btn",type:"button",onClick:()=>P(!h),children:h?"隱藏":"顯示"}),t.jsx("button",{className:"btn",onClick:O,disabled:a==="",children:"發送驗證碼"})]})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"再次輸入密碼"}),t.jsx("input",{className:"form-input",type:h?"text":"password",value:y,onChange:e=>M(e.target.value),disabled:a==="",placeholder:a===""?"請先輸入手機號":""})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"驗證碼"}),t.jsx("input",{className:"form-input",type:"number",value:x,onChange:e=>F(e.target.value),disabled:a==="",placeholder:a===""?"輸入手機驗證碼":""})]}),t.jsxs("div",{className:"form-row",children:[t.jsx("label",{className:"form-label",children:"介紹碼"}),t.jsx("input",{className:"form-input",type:"text",value:C,onChange:e=>B(e.target.value),disabled:a==="",placeholder:a===""?"請先輸入手機號碼":""})]}),t.jsx("div",{className:"form-row",children:t.jsxs("label",{style:{cursor:"pointer",display:"inline-flex",alignItems:"center"},children:[t.jsx("input",{type:"checkbox",checked:S,onChange:e=>D(e.target.checked)}),t.jsxs("span",{style:{marginLeft:"5px"},children:["我已閱讀並同意 ",t.jsx(Q,{to:"/service",children:"《服務協議》"})]})]})}),t.jsx("div",{className:"tip-text",style:{marginBottom:"1rem"},children:"本頁面收集的資料僅用於註冊帳戶"}),t.jsx("button",{className:"submit-btn",disabled:a===""||x===""||f===""||y===""||!S,onClick:q,children:"同意並繼續"}),t.jsx("div",{className:"register-result",children:z})]}),t.jsx(X,{})]})};export{re as default};
