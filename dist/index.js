module.exports=function(e){var o=function(e,o){Object.keys(o).forEach(function(t){e[t]=o[t]})},t={size:2,color:"#29e",className:"bar-of-progress",delay:80};e&&o(t,e);var i,s,a={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:1e4,height:"number"==typeof t.size?t.size+"px":t.size,color:t.color,opacity:0,width:"0%"},n={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},l={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"};this.start=function(){s&&s.parentNode&&s.parentNode.removeChild(s),(s=document.body.appendChild(document.createElement("div"))).className=t.className+" stopped",o(s.style,a),null!=i&&clearTimeout(i),i=setTimeout(function(){i=null,s.className=t.className+" started",o(s.style,n)},t.delay),s.scrollTop=0},this.finish=function(){null!=i&&(clearTimeout(i),i=null),s&&(s.className=t.className+" finished",o(s.style,l))}};
//# sourceMappingURL=index.js.map
