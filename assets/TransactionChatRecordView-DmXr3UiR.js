import{u as C,r as i,j as n}from"./index-BG8ls1W1.js";import{a as W}from"./axios-upsvKRUO.js";import{A as E}from"./AppBar-DDHEgYTa.js";import{C as N}from"./CopyrightFooter-D8qVg-lt.js";function H(){const a=C(),[R,d]=i.useState(window.innerWidth),[l,g]=i.useState(""),[_,u]=i.useState(""),[A,h]=i.useState(""),[G,m]=i.useState(""),[$,p]=i.useState(""),[z,x]=i.useState(""),[f,w]=i.useState([]),[y,j]=i.useState(1);i.useEffect(()=>{const r=()=>d(window.innerWidth);window.addEventListener("resize",r);const t=window.localStorage.getItem("gender_type")||"",e=window.localStorage.getItem("token")||"";if(h(t),g(e),u(window.localStorage.getItem("nickname")||""),m(window.localStorage.getItem("chat_id")||""),p(window.localStorage.getItem("chat_token")||""),x(window.localStorage.getItem("u_id")||""),t==="FEMALE"){a("/home-woman");return}if(!t){a("/home");return}return!window.WebSocketObject&&typeof window.WebSocketConnect=="function"&&window.WebSocketConnect(window.localStorage.getItem("u_id")),c(e,1),()=>{window.removeEventListener("resize",r)}},[]);const c=async(r,t)=>{try{const e=await W.get(`https://api.dageiwo.com/api/user/transactions_chat?page=${t}&limit=10&order=desc&sort=createTime`,{headers:{Authorization:`Bearer ${r}`}});if(e.status===200&&e.data.success){const o=S(e.data.data.records);e.data.data.records.length>0&&j(s=>s+1),w(s=>v(s,o))}}catch(e){console.error("RetrieveRecord error:",e)}},S=r=>{let t=[],e=null;return r.forEach(o=>{const s=k(o.create_time);(!e||e!==s)&&(e=s,t.push({date:s,list:[]})),t[t.length-1].list.push({time:I(o.create_time),coin:o.coin})}),t},v=(r,t)=>{let e=[...r];if(t.length===0)return e;if(e.length>0){const o=e[e.length-1],s=t[0];o.date===s.date&&(o.list=[...o.list,...s.list],t.shift())}return e=[...e,...t],e},k=r=>{if(!r)return"";const t=new Date(r);let e=(t.getMonth()+1).toString(),o=t.getDate().toString();const s=t.getFullYear();return e.length<2&&(e="0"+e),o.length<2&&(o="0"+o),`${s}/${e}/${o}`},I=r=>{if(!r)return"";const t=new Date(r),e=t.getHours()>11?"下午":"上午";let o=t.getHours().toString(),s=t.getMinutes().toString();return o.length<2&&(o="0"+o),s.length<2&&(s="0"+s),e+o+":"+s},b=r=>r?r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0",T=()=>{c(l,y)};return n.jsxs(n.Fragment,{children:[n.jsx(E,{children:n.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n.jsx("button",{style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>a(-1),children:n.jsx("i",{className:"mdi mdi-chevron-left",style:{fontSize:"24px"}})}),n.jsx("h2",{style:{margin:"0 auto"},children:"消費紀錄(訊息)"})]})}),n.jsxs("div",{className:"transaction-record",style:{maxWidth:"800px",margin:"0 auto",padding:"1rem"},children:[f.map(r=>n.jsxs("div",{children:[n.jsx("div",{style:{padding:"15px 10px 5px 10px"},children:n.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n.jsx("div",{style:{flex:1},children:r.date}),n.jsx("div",{style:{flex:1}})]})}),n.jsx("hr",{}),n.jsx("div",{style:{padding:"10px"},children:r.list.map(t=>n.jsxs("div",{style:{display:"flex",margin:"4px 0",alignItems:"center"},children:[n.jsx("div",{style:{flex:1}}),n.jsx("div",{style:{flex:2},children:t.time}),n.jsx("div",{style:{flex:1},children:"訊息"}),n.jsx("div",{style:{flex:1,textAlign:"right"},children:n.jsxs("h3",{style:{color:"#dd8ea4",margin:0},children:[b(t.coin)," 點"]})})]},t.time))})]},r.date)),n.jsx("button",{style:{backgroundColor:"#dd8ea4",color:"#fff",border:"none",borderRadius:"4px",padding:"8px 16px",cursor:"pointer",marginTop:"10px"},onClick:T,children:"查看更多"})]}),n.jsx(N,{})]})}export{H as default};
