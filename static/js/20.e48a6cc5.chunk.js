(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[20],{1292:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(35),i=r(1320),a=r.n(i);function c(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return a()(e).format()}function s(e){return Object(n.replace)(a()(e).format("0.00a"),".00","")}function d(e){return a()(e).format("0.0 b")}},1297:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(3),i=r(36),a=r(35),c=r(614),o=r(198),s=r(1267),d=r(37),l=r(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,r=e.action,b=e.heading,j=e.moreLink,p=void 0===j?[]:j,h=e.sx,x=Object(i.a)(e,u);return Object(l.jsxs)(c.a,{sx:Object(n.a)({mb:5},h),children:[Object(l.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(l.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(l.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(l.jsx)(d.b,Object(n.a)({links:t},x))]}),r&&Object(l.jsx)(c.a,{sx:{flexShrink:0},children:r})]}),Object(l.jsx)(c.a,{sx:{mt:2},children:Object(a.isString)(p)?Object(l.jsx)(s.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(l.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1299:function(e,t,r){"use strict";function n(e){return new Promise((function(t){return setTimeout(t,e)}))}r.d(t,"a",(function(){return n}))},1319:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n=r(3),i=r(36),a=r(6),c=r(35),o=r(23),s=r(1301),d=(r(400),r(238),r(1258),r(1246),r(7)),l=r(73),u=r(1269),b=r(614),j=r(198),p=(r(1273),r(1275),r(1238),r(1239),r(1276),r(1178),r(394),r(1292)),h=(r(37),r(199),r(617),r(0));Object(d.a)("div")((function(e){var t=e.theme;return Object(a.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,1),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));Object(d.a)("div")((function(e){var t=e.theme;return Object(a.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},t.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));var x=r(1340),f=r.n(x),m=["error","file","caption","sx"],O=Object(d.a)("div")((function(e){var t=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:t.spacing(1),border:"1px dashed ".concat(t.palette.grey[50032])}})),g=Object(d.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),v=Object(d.a)("div")((function(e){var t=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,transition:t.transitions.create("opacity",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function w(e){var t=e.error,r=e.file,a=e.caption,d=e.sx,x=Object(i.a)(e,m),w=Object(s.a)(Object(n.a)({multiple:!1},x)),k=w.getRootProps,y=w.getInputProps,C=w.isDragActive,S=w.isDragReject,I=w.fileRejections,R=function(){return Object(h.jsx)(u.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(l.a)(e.palette.error.main,.08)}},children:I.map((function(e){var t=e.file,r=e.errors,n=t.path,i=t.size;return Object(h.jsxs)(b.a,{sx:{my:1},children:[Object(h.jsxs)(j.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(p.b)(i)]}),r.map((function(e){return Object(h.jsxs)(j.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{sx:d,children:Object(h.jsxs)(g,Object(n.a)(Object(n.a)({},k()),{},{sx:Object(n.a)(Object(n.a)({},C&&{opacity:.72}),(S||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(h.jsx)("input",Object(n.a)({},y())),r&&Object(h.jsx)(b.a,{component:"img",alt:"avatar",src:Object(c.isString)(r)?r:r.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(h.jsxs)(v,{className:"placeholder",sx:Object(n.a)({},r&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(h.jsx)(b.a,{component:o.a,icon:f.a,sx:{width:24,height:24,mb:1}}),Object(h.jsx)(j.a,{variant:"caption",children:r?"Update photo":"Upload photo"})]})]}))}),a,I.length>0&&Object(h.jsx)(R,{})]})}},1349:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(4),i=r(402);function a(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(i.a)(e,Object(n.a)({delimiter:"."},t))}(e,Object(n.a)({delimiter:"-"},t))}},1772:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return L}));var n=r(1),i=r(1349),a=r(32),c=r(1281),o=r(309),s=r(412),d=r(25),l=r(82),u=r(395),b=r(1297),j=r(3),p=r(12),h=r.n(p),x=r(20),f=r(231),m=r(162),O=r(230),g=r(1257),v=r(1261),w=r(1291),k=r(1178),y=r(1250),C=r(614),S=r(21),I=(r(1292),r(1299)),R=(r(396),r(1319),r(0));function W(e){var t=e.isEdit,r=e.currentWord,n=Object(a.h)(),i=Object(m.useSnackbar)().enqueueSnackbar,c=f.b().shape({word:f.d().required("Word is required")}),o=Object(O.c)({enableReinitialize:!0,initialValues:{word:(null===r||void 0===r?void 0:r.word)||"",replacewith:(null===r||void 0===r?void 0:r.replacewith)||""},validationSchema:c,onSubmit:function(){var e=Object(x.a)(h.a.mark((function e(a,c){var o,s,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.setSubmitting,s=c.resetForm,l=c.setErrors,e.prev=1,e.next=4,Object(I.a)(500);case 4:if(t){e.next=9;break}return e.next=7,S.a.post("/block-limited-words/",a);case 7:e.next=11;break;case 9:return e.next=11,S.a.put("/block-limited-words?word=".concat(null===r||void 0===r?void 0:r.word),a);case 11:s(),o(!1),i(t?"Update success":"Create success",{variant:"success"}),n(d.b.blocklimitedwords.list),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),o(!1),l(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t,r){return e.apply(this,arguments)}}()}),s=o.errors,l=(o.values,o.touched),u=o.handleSubmit,b=o.isSubmitting,p=(o.setFieldValue,o.getFieldProps);return Object(R.jsx)(O.b,{value:o,children:Object(R.jsx)(O.a,{noValidate:!0,autoComplete:"off",onSubmit:u,children:Object(R.jsx)(v.a,{container:!0,spacing:3,children:Object(R.jsx)(v.a,{item:!0,xs:12,md:8,children:Object(R.jsx)(w.a,{sx:{p:3},children:Object(R.jsxs)(k.a,{spacing:3,children:[Object(R.jsx)(k.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:Object(R.jsx)(y.a,Object(j.a)(Object(j.a)({fullWidth:!0,label:"Block Limited Word"},p("word")),{},{error:Boolean(l.word&&s.word),helperText:l.word&&s.word}))}),Object(R.jsx)(C.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(R.jsx)(g.a,{type:"submit",variant:"contained",loading:b,children:t?"Save Changes":"Create Block Limited Word"})})]})})})})})})}function L(){var e=Object(l.a)().themeStretch,t=Object(o.c)(),r=Object(a.g)().pathname,j=Object(a.i)().word,p=Object(o.d)((function(e){return e.blocklimitedword})).wordList,h=r.includes("edit"),x=p.find((function(e){return Object(i.a)(e.word)===j}));return Object(n.useEffect)((function(){t(Object(s.c)())}),[t]),Object(R.jsx)(u.a,{title:"Word Restrication: Create a new block limited word | Locals",children:Object(R.jsxs)(c.a,{maxWidth:!e&&"lg",children:[Object(R.jsx)(b.a,{heading:h?"Edit block limited word":"Create a new block limited word",links:[{name:"List of Block Limited Words",href:d.b.blocklimitedwords.root}]}),Object(R.jsx)(W,{isEdit:h,currentWord:x})]})})}}}]);
//# sourceMappingURL=20.e48a6cc5.chunk.js.map