import{u as b,r as o,j as e}from"./index-B5A3E37t.js";import{a as I}from"./axios-upsvKRUO.js";import{A as C}from"./AppBar-Ks0lJbdw.js";import{C as R}from"./CopyrightFooter-BZBRJ3MH.js";function L(){const a=b(),[W,c]=o.useState(window.innerWidth),[l,g]=o.useState(""),[T,m]=o.useState(""),[E,h]=o.useState(""),[N,u]=o.useState(""),[z,p]=o.useState(""),[A,x]=o.useState(""),[f,w]=o.useState([]),[y,S]=o.useState(1);o.useEffect(()=>{const t=()=>c(window.innerWidth);window.addEventListener("resize",t);const s=window.sessionStorage.getItem("gender_type")||"";h(s),m(window.sessionStorage.getItem("nickname")||"");const n=window.sessionStorage.getItem("token")||"";if(g(n),u(window.sessionStorage.getItem("chat_id")||""),p(window.sessionStorage.getItem("chat_token")||""),x(window.sessionStorage.getItem("u_id")||""),s==="FEMALE"){a("/home-woman");return}if(!s){a("/home");return}return!window.WebSocketObject&&typeof window.WebSocketConnect=="function"&&window.WebSocketConnect(n),d(n,1),()=>{window.removeEventListener("resize",t)}},[]);const d=async(t,s)=>{try{const n=await I.get(`https://api.dageiwo.com/api/user/deposit?page=${s}&limit=10&order=dsc&sort=createTime`,{headers:{Authorization:`Bearer ${t}`}});if(n.status===200&&n.data.success){const r=n.data.data.records;r.length>0&&S(i=>i+1),w(i=>[...i,...r])}}catch(n){console.error("RetrieveRecord error:",n)}},j=t=>{if(!t)return"";const s=new Date(t);let n=(s.getMonth()+1).toString(),r=s.getDate().toString();const i=s.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[i,n,r].join("/")},k=t=>t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"",v=()=>{d(l,y)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("button",{style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>a(-1),children:e.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})}),e.jsx("h2",{style:{margin:"0 auto"},children:"金幣紀錄"})]})}),e.jsxs("div",{className:"transaction-record",style:{maxWidth:"800px",margin:"0 auto",padding:"1rem"},children:[f.map(t=>e.jsxs("div",{style:{padding:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"4px"},children:[e.jsx("div",{style:{flex:1},children:j(t.create_time)}),e.jsx("div",{style:{flex:1},children:"加值"}),e.jsx("div",{style:{flex:1,textAlign:"right"},children:e.jsxs("h3",{style:{color:"#dd8ea4",margin:0},children:["+",k(t.coin)," 點"]})})]}),e.jsx("hr",{})]},t.id)),e.jsx("button",{style:{backgroundColor:"#dd8ea4",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",cursor:"pointer",marginTop:"10px"},onClick:v,children:"查看更多"})]}),e.jsx(R,{})]})}export{L as default};
