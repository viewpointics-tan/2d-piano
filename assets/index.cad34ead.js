import{r as e,R as t,S as n,a as o}from"./vendor.79dd8614.js";const r=(e,t)=>Math.floor(e/t),l=(e,t)=>(e%t+t)%t,a=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],i=({keyNumber:n,keyHeight:o,keyWidth:r,parity:i})=>{const d={width:`${r}mm`,height:`${o}mm`},[s,m]=e.exports.useState(!1),c=()=>{m(!1),document.dispatchEvent(new CustomEvent("noteOff",{detail:{note:n+60}}))};return t.createElement("div",{style:d},t.createElement("div",{className:"flex-shrink-0 rounded-lg h-full shadow-lg flex justify-evenly items-center "+(s?"bg-red-300":i?"bg-white":"bg-yellow-200"),style:{width:"95%",height:"90%"},onPointerDown:()=>{m(!0),document.dispatchEvent(new CustomEvent("noteOn",{detail:{note:n+60}}))},onPointerUp:c,onPointerOut:c},t.createElement("div",{className:"text-2xl font-serif"},n),t.createElement("div",{className:"text-3xl font-serif"},a[l(n,12)])))},d=({rowNumber:e,rowIndex:n,rowLength:o,keyHeight:a,keyWidth:d,deltaX:s,deltaY:m})=>{const c={width:o*d+"mm",height:`${a}mm`,left:d/2*(e-1-n)+"mm"},u=[...Array(o).keys()].map((e=>{const o=e-s,c=n-m,u=7*r(o,2)+(4-l(c,2))*l(o,2)-3*r(c,2)-1*l(c,2),h=0===l(o,2)!=(0===l(c,2));return t.createElement(i,{keyNumber:u,keyHeight:a,keyWidth:d,parity:h})}));return t.createElement("div",{className:"flex flex-row relative",style:c},u)},s=()=>{e.exports.useEffect((()=>{const e=[{}],t=new AudioContext,o=n.instrument(t,"acoustic_grand_piano"),r=e=>o.then((n=>n.play(`${e}`,t.currentTime,{gain:20}))).catch((e=>{console.log(e)}));document.addEventListener("noteOn",(t=>{const{note:n}=t.detail;e.push({note:n,value:r(n)})})),document.addEventListener("noteOff",(t=>{var n;const{note:o}=t.detail,r=e.findIndex((e=>e.note===o));null==(n=e[r])||n.value.then((e=>null==e?void 0:e.stop())),e.splice(r,1)}))}),[]);const o=[...Array(5).keys()].map((e=>t.createElement(d,{rowNumber:5,rowIndex:e,rowLength:10,keyHeight:20,keyWidth:40,deltaX:2,deltaY:3})));return t.createElement("div",{className:"flex flex-col w-max",id:"app"},o)};o.render(t.createElement(t.StrictMode,null,t.createElement(s,null)),document.getElementById("root"));
