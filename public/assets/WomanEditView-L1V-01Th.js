import{r as i,j as t}from"./index-C3mMhQvi.js";import{a as u}from"./axios-upsvKRUO.js";import{A as ee}from"./AppBar-C1sVSG8a.js";import{C as te}from"./CopyrightFooter-owVNFOTF.js";function ie(){const[se,L]=i.useState(null),[p,M]=i.useState(null),[l,x]=i.useState(null),[N,y]=i.useState(""),[f,m]=i.useState(Array(6).fill(null).map(()=>({image_url:null}))),[V,v]=i.useState([]),g=["不約見","不聊色","不電愛","熟了有機會"],[j,A]=i.useState(new Array(g.length).fill(!1)),[h,W]=i.useState(["高挑","小隻馬","清純","性感","可愛","氣質","活力","古典美","時尚","陽光","甜美","纖細","健康","俏皮","短髮","豐滿","OL","運動","成熟"]),[b,w]=i.useState(new Array(h.length).fill(!1)),[_,k]=i.useState(""),[S,I]=i.useState(""),[C,R]=i.useState(!1),[T,P]=i.useState(null),[O,B]=i.useState([]),[F,$]=i.useState(null),[D,U]=i.useState(null),[Y,q]=i.useState("");i.useEffect(()=>{const r=window.localStorage.getItem("token")||"",s=window.localStorage.getItem("u_id")||"";M(r),L(s),r&&s&&(z(r),G(r,s))},[]);async function z(r){try{const s=await u.get("https://api.dageiwo.com/auth/info",{headers:{Authorization:`Bearer ${r}`}});if(s.status===200&&s.data.success){const e=s.data.data;if(x(e),e.female_response){const a=(e.female_response.statement||"").split(",");A(g.map(c=>a.includes(c)));const d=(e.female_response.appearance||"").split(",");w(h.map(c=>d.includes(c))),e.female_response.about_me&&I(e.female_response.about_me)}}}catch(s){console.error("RetrieveInfo error:",s)}}async function G(r,s){try{const e=await u.get(`https://api.dageiwo.com/index/detail/${s}`,{headers:{Authorization:`Bearer ${r}`}});if(e.status===200&&e.data.success){const o=e.data.data;let a=o.img_responses.map(n=>({file_id:n.file_id,image_url:n.image_url,status:n.status,file:null}));if(a.length<6){const n=6-a.length;for(let d=0;d<n;d++)a.push({file_id:null,image_url:null,status:"EMPTY"})}m(a),x(n=>({...n,...o}))}}catch(e){console.error("getInfo error:",e)}}async function H(r,s){if(window.confirm("確定要刪除這張圖片嗎？")){if(!r){m(o=>{const a=[...o];return a.splice(s,1),a});return}try{(await u.delete(`https://api.dageiwo.com/api/user/file?file_id=${r}`,{headers:{Authorization:`Bearer ${p}`}})).status===200?(m(a=>{const n=[...a];return n.splice(s,1),n}),alert("圖片刪除成功！")):alert("刪除失敗，請重試！")}catch(o){console.error(o),alert("刪除失敗，請檢查網路連線後重試！")}}}function J(){if(!navigator.mediaDevices){alert("您的設備不支援錄音");return}navigator.mediaDevices.getUserMedia({audio:!0}).then(r=>{const s=new MediaRecorder(r);P(s),B([]),s.ondataavailable=e=>{B(o=>[...o,e.data])},s.onstop=()=>{const e=new Blob(O,{type:"audio/webm"}),o=URL.createObjectURL(e);$(e),U(o)},s.start(),R(!0)}).catch(r=>{console.error("錄音失敗:",r),alert("無法啟動錄音功能，請檢查瀏覽器權限設定！")})}function K(){T&&(T.stop(),R(!1))}function Q(){$(null),U(null),alert("錄音已捨棄，請重新錄製！")}async function X(){if(!F){alert("無錄音文件可上傳");return}try{const r=new FormData;r.append("file",F,"recording.webm"),r.append("fileType","AVATAR");const s=await u.post("https://api.dageiwo.com/file/upload",r,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${p}`}});if(s.status===200&&s.data.success){const e=s.data.data.id;console.log("錄音上傳成功, fileId=",e),q(e)}else alert("錄音上傳失敗："+s.data.message),console.error("錄音上傳失敗:",s.data.message)}catch(r){alert("錄音上傳失敗，請稍後再試！"),console.error("錄音上傳失敗:",r)}}async function E(){const r=f.filter(a=>a.file),s=f.filter(a=>!a.file&&a.file_id);let e=[];if(r.length>0){const a=new FormData;r.forEach(n=>{a.append("files",n.file)});try{const n=await u.post("https://api.dageiwo.com/file/upload_multi?file_type=AVATAR",a,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${p}`}});if(n.status===200&&n.data.success){console.log("上傳成功:",n.data);const d=n.data.data.map(c=>c.id);e=[...e,...d]}else return console.error("上傳失敗:",n.data.message),alert("圖片上傳失敗，請重試！"),null}catch(n){return console.error("上傳失敗:",n),alert("上傳失敗，請檢查網路連線後重試！"),null}}const o=s.map(a=>a.file_id);return e=[...e,...o],console.log("最終文件ID列表:",e),e}async function Z(){y("");const r=await E();if(!r)return;const s=g.filter((a,n)=>j[n]).join(","),e=h.filter((a,n)=>b[n]).join(","),o=(l==null?void 0:l.about_me)||S;try{const a=await u.put("https://api.dageiwo.com/api/user",{statement:s,appearance:e,about_me:o,file_ids:r.join(","),mp3_id:Y},{headers:{Authorization:`Bearer ${p}`}});a.status===200&&a.data.success?(alert("更新檔案成功"),z(p)):y("更新檔案發生錯誤, 請檢查網路後重試一次.")}catch(a){console.error("UpdateInfo error:",a),y("更新檔案發生錯誤, 請檢查網路後重試一次.")}}return t.jsxs(t.Fragment,{children:[t.jsx(ee,{children:t.jsx("button",{style:{background:"none",border:"none",color:"#fff"},onClick:()=>window.history.back(),children:t.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})})}),t.jsxs("div",{className:"register-main",style:{backgroundColor:"#fff",maxWidth:"600px",margin:"0 auto",padding:"1rem"},children:[t.jsx("h2",{style:{color:"dodgerblue",textAlign:"center"},children:"編輯個人檔案"}),t.jsx("hr",{}),t.jsx("div",{style:{margin:"5px 0"},children:"上傳頭像(最少1張，可同時選多個)"}),t.jsxs("div",{className:"female-member-list",children:[f.map((r,s)=>t.jsx("div",{children:t.jsxs("div",{style:{position:"relative",height:"200px",borderRadius:"12px",border:"1px solid #ccc",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onClick:()=>{const e=document.getElementById(`uploadInput${s}`);e&&e.click()},children:[r.image_url?t.jsx("img",{src:r.image_url,alt:"preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):t.jsx("div",{style:{textAlign:"center",color:"#888"},children:"點擊上傳圖片"}),t.jsx("input",{type:"file",id:`uploadInput${s}`,style:{display:"none"},accept:"image/*",onChange:e=>{const o=e.target.files[0];if(!o)return;const a=new FileReader;a.onload=n=>{m(d=>{const c=[...d];return c[s]={...c[s],file:o,image_url:n.target.result},c})},a.readAsDataURL(o)}}),t.jsx("button",{style:{position:"absolute",top:"5px",right:"5px",background:"rgba(255, 255, 255, 0.8)",borderRadius:"50%",border:"none",cursor:"pointer"},onClick:e=>{e.stopPropagation(),H(r.file_id,s)},children:t.jsx("i",{className:"mdi mdi-delete",style:{fontSize:"18px"}})})]})},s)),t.jsx("div",{children:t.jsx("div",{style:{border:"1px dashed #ccc",borderRadius:"12px",width:"100%",height:"200px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},onClick:()=>{m(r=>[...r,{file_id:null,image_url:null}])},children:t.jsx("i",{className:"mdi mdi-plus",style:{fontSize:"36px",color:"#666"}})})})]}),t.jsx("div",{style:{margin:"10px 0"},children:"我先聲明"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:g.map((r,s)=>t.jsxs("label",{style:{cursor:"pointer"},children:[t.jsx("input",{type:"checkbox",checked:j[s],onChange:()=>{const e=[...j];e[s]=!e[s],A(e)}}),t.jsxs("span",{children:["#",r]})]},s))}),t.jsx("div",{style:{margin:"10px 0"},children:"外型"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px"},children:h.map((r,s)=>t.jsxs("label",{style:{cursor:"pointer"},children:[t.jsx("input",{type:"checkbox",checked:b[s],onChange:()=>{const e=[...b];e[s]=!e[s],w(e)}}),t.jsxs("span",{children:["#",r]})]},s))}),t.jsxs("div",{style:{margin:"10px 0"},children:[t.jsx("label",{children:"自訂標籤"}),t.jsxs("div",{style:{display:"flex",marginTop:"4px"},children:[t.jsx("input",{type:"text",value:_,onChange:r=>k(r.target.value),style:{flex:1}}),t.jsx("button",{onClick:()=>{_.trim()&&(W(r=>[...r,_]),w(r=>[...r,!0]),k(""))},children:"+"})]})]}),t.jsxs("div",{style:{margin:"10px 0"},children:[t.jsx("label",{children:"自我介紹"}),t.jsx("textarea",{rows:3,style:{width:"100%"},value:(l==null?void 0:l.about_me)||S,onChange:r=>{l?x(s=>({...s,about_me:r.target.value})):I(r.target.value)}})]}),(l==null?void 0:l.mp3_url)&&t.jsx("div",{style:{margin:"10px 0"},children:t.jsx("audio",{controls:!0,src:l.mp3_url,style:{width:"100%"}})}),t.jsxs("div",{style:{margin:"5px 0"},children:[t.jsx("button",{style:{background:"#0088cc",color:"#fff",marginRight:"5px"},onClick:J,disabled:C,children:"開始錄音"}),t.jsx("button",{style:{background:"#0088cc",color:"#fff"},onClick:K,disabled:!C,children:"停止錄音"}),D&&t.jsxs("div",{style:{marginTop:"8px"},children:[t.jsx("audio",{src:D,controls:!0,style:{width:"100%"}}),t.jsxs("div",{style:{marginTop:"8px"},children:[t.jsx("button",{style:{background:"green",color:"#fff",marginRight:"5px"},onClick:X,children:"確定使用此錄音"}),t.jsx("button",{style:{background:"red",color:"#fff"},onClick:Q,children:"捨棄重新錄音"})]})]})]}),t.jsx("div",{style:{textAlign:"center",marginTop:"15px"},children:t.jsx("button",{style:{background:"green",color:"#fff",border:"none",padding:"8px 16px"},onClick:Z,children:"送出"})}),t.jsx("div",{style:{marginTop:"10px",color:"red"},children:N})]}),t.jsx(te,{})]})}export{ie as default};
