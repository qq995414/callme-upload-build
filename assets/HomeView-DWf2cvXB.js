import{r as o,u as N,j as s}from"./index-BYUO2iQu.js";import{a as p}from"./axios-upsvKRUO.js";import{C as L}from"./CopyrightFooter-DGUZG5Yy.js";import{S as _,b as m}from"./blur-CG1WBxfd.js";const z=()=>{const[n,h]=o.useState(window.innerWidth),[c,g]=o.useState(null),[x,u]=o.useState([]),[f,w]=o.useState([]),[j,b]=o.useState(1),i=N();o.useEffect(()=>{const e=()=>h(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const l=o.useCallback(()=>{let e=2;return n>960&&(e=3),((n>800?800:n)-30)/e},[n]),v=e=>{if(!e)return"";const t=Date.now()-new Date(e).getTime(),r=new Date(t);return" "+Math.abs(r.getUTCFullYear()-1970)},y=async()=>{try{const e=await p.get("https://api.dageiwo.com/index/pinned_picture");e.status===200&&e.data.success&&u(t=>[...t,...e.data.data])}catch(e){console.error(e)}},d=async()=>{try{const e=await p.get(`https://api.dageiwo.com/index/list?page=${j}&limit=40&order=dsc&sort=femaleRegister.clickRate`);if(e.status===200&&e.data.success){const{records:t}=e.data.data;t.length>0&&b(r=>r+1),w(r=>[...r,...t])}}catch(e){console.error(e)}};o.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("promotion_code");t&&window.sessionStorage.setItem("promotion_code",t);const r=window.sessionStorage.getItem("gender_type");g(r)},[]),o.useEffect(()=>{if(c==="MALE"){i("/home-man");return}if(c==="FEMALE"){i("/home-woman");return}y(),d()},[c]);const S={dots:!1,infinite:!0,speed:500,slidesToShow:9,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:768,settings:{slidesToShow:6,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:4,slidesToScroll:1}}]};return s.jsxs("div",{className:"home-view",children:[s.jsxs("div",{className:"app-bar rounded-b-xl",children:[s.jsxs("div",{className:"app-bar-content",children:[s.jsx("div",{className:"logo-container",children:s.jsx("img",{src:"../public/assets/Logo-wide.png",alt:"Logo"})}),s.jsx("button",{className:"login-btn",onClick:()=>i("/login"),children:s.jsx("span",{children:"登入"})})]}),s.jsxs("div",{className:"card-container",children:[s.jsxs("div",{className:"card-item",onClick:()=>i("/register-man"),children:[s.jsx("img",{src:"../public/assets/加入會員.png",alt:"加入會員"}),s.jsx("h3",{style:{color:"#dd8ea4"},children:"加入會員"})]}),s.jsxs("div",{className:"card-item",onClick:()=>i("/register-woman"),children:[s.jsx("img",{src:"../public/assets/成為女神.png",alt:"成為女神"}),s.jsx("h3",{style:{color:"#dd8ea4"},children:"成為女神"})]})]})]}),s.jsxs("div",{className:"main-content",children:[s.jsx("h2",{style:{margin:"10px"},children:"為你推薦"}),s.jsx("div",{style:{padding:"0px 5%"},children:s.jsx(_,{...S,children:x.map((e,t)=>s.jsxs("div",{className:"recommended-item",children:[s.jsx("div",{className:"avatar-container",children:s.jsx(m.LazyLoadImage,{src:e.url,alt:e.nickname,effect:"blur",placeholderSrc:"/images/placeholder.png",onClick:()=>i("/register-man"),style:{border:"2px solid #f2e9eb",outline:"#dd8ea4 solid 2px",width:"64px",height:"64px",objectFit:"cover",cursor:"pointer",borderRadius:"50%",margin:"0 auto"}})}),s.jsx("p",{style:{fontSize:"12px",textAlign:"center"},children:e.nickname})]},t))})}),s.jsx("h2",{style:{margin:"10px"},children:"女神列表"}),s.jsx("div",{className:"female-member-list",children:f.map((e,t)=>{const r=e.img_responses&&e.img_responses[0],a=r&&e.img_responses[0].status==="APPROVED",k=r?e.img_responses[0].image_url:"";return s.jsxs("div",{className:"female-member-item",style:{position:"relative",height:l()},children:[s.jsx(m.LazyLoadImage,{src:k,alt:e.nickname,effect:"blur",placeholderSrc:"/images/placeholder.png",width:"100%",height:l(),onClick:()=>i("/register-man"),style:{objectFit:"cover",filter:a?"none":"blur(8px)",transform:a?"scale(1)":"scale(0.95)",cursor:"pointer"}}),!a&&s.jsx("div",{className:"approving",children:"審查中"}),a&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{position:"absolute",top:"0.5rem",right:"0.5rem"},children:[!e.cannot_take_call&&s.jsx("span",{style:{backgroundColor:"purple",color:"white",padding:"2px 6px",marginRight:"4px",fontSize:"12px",borderRadius:"4px"},children:"語音"}),!e.cannot_take_video_call&&s.jsx("span",{style:{backgroundColor:"cyan",color:"white",padding:"2px 6px",fontSize:"12px",borderRadius:"4px"},children:"視訊"})]}),s.jsxs("div",{style:{position:"absolute",bottom:"0.5rem",left:"1rem",color:"white",fontSize:"14px",fontWeight:"bolder",textShadow:"1px 1px 2px #000"},children:[e.nickname+v(e.birthday),e.review_notes&&s.jsx("div",{style:{fontSize:"10px",marginTop:"0"},children:e.review_notes})]})]})]},t)})}),s.jsx("button",{className:"load-more-btn",style:{backgroundColor:"#dd8ea4",color:"#fff",border:"none",padding:"8px 16px",cursor:"pointer"},onClick:d,children:"查看更多"})]}),s.jsx(L,{})]})};export{z as default};
