(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[15],{1297:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),r=n(36),i=n(35),c=n(614),o=n(198),s=n(1267),l=n(37),d=n(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,j=e.moreLink,p=void 0===j?[]:j,h=e.sx,f=Object(r.a)(e,u);return Object(d.jsxs)(c.a,{sx:Object(a.a)({mb:5},h),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.b,Object(a.a)({links:t},f))]}),n&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(i.isString)(p)?Object(d.jsx)(s.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1299:function(e,t,n){"use strict";function a(e){return new Promise((function(t){return setTimeout(t,e)}))}n.d(t,"a",(function(){return a}))},1305:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),r=n(36),i=n(1269),c=n(198),o=n(0),s=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(r.a)(e,s);return Object(o.jsxs)(i.a,Object(a.a)(Object(a.a)({},l),{},{children:[Object(o.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},1347:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return x}));var a=n(614),r=n(23),i=n(400),c=n.n(i),o=n(0),s=["jpg","jpeg","gif","bmp","png"],l=["m4v","avi","mpg","mp4","webm"],d=["doc","docx"],u=["xls","xlsx"],b=["ppt","pptx"],j=["pdf"],p=["psd"],h=["ai","esp"];function f(e){return e.split(".").pop()}function m(e){return e.substring(e.lastIndexOf("/")+1).replace(/\.[^/.]+$/,"")}function g(e){return e.split("/").pop()}var O=function(e){return Object(o.jsx)(a.a,{component:"img",src:"/static/icons/file/".concat(e,".svg"),alt:e,sx:{width:28,height:28}})};function x(e){var t;switch(function(e){var t;switch(e.includes(f(e))){case s.includes(f(e)):t="image";break;case l.includes(f(e)):t="video";break;case d.includes(f(e)):t="word";break;case u.includes(f(e)):t="excel";break;case b.includes(f(e)):t="powerpoint";break;case j.includes(f(e)):t="pdf";break;case p.includes(f(e)):t="photoshop";break;case h.includes(f(e)):t="illustrator";break;default:t=f(e)}return t}(e)){case"image":t=Object(o.jsx)(a.a,{component:"img",src:e,alt:e,sx:{width:1,height:1}});break;case"video":t=O("file_type_video");break;case"word":t=O("file_type_word");break;case"excel":t=O("file_type_excel");break;case"powerpoint":t=O("file_type_powerpoint");break;case"pdf":t=O("file_type_pdf");break;case"photoshop":t=O("file_type_photoshop");break;case"illustrator":t=O("file_type_ai");break;default:t=Object(o.jsx)(a.a,{component:r.a,icon:c.a,sx:{width:28,height:28}})}return t}},1399:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(16),r=n(36),i=n(3),c=(n(1464),n(1494)),o=n(23),s=n(1),l=n(1465),d=n.n(l),u=n(7),b=n(73),j=n(52),p=n(263),h=n(1271),f=n(0),m=["disabled","value","setValue","alignRight"],g=Object(u.a)("div")({position:"relative"}),O=Object(u.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(i.a)(Object(i.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(i.a)(Object(i.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(b.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function x(e){var t,n=e.disabled,l=e.value,u=e.setValue,b=e.alignRight,x=void 0!==b&&b,v=Object(r.a)(e,m),y=Object(j.a)(),w=Object(s.useState)(!1),k=Object(a.a)(w,2),_=k[0],S=k[1];_&&(t=Object(f.jsx)(c.a,{color:y.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return u(l+e.native)}}));return Object(f.jsx)(p.a,{onClickAway:function(){S(!1)},children:Object(f.jsxs)(g,Object(i.a)(Object(i.a)({},v),{},{children:[Object(f.jsx)(O,{sx:Object(i.a)({},x&&{right:-2,left:"auto !important"}),children:t}),Object(f.jsx)(h.a,{disabled:n,size:"small",onClick:function(e){e.preventDefault(),S(!_)},children:Object(f.jsx)(o.a,{icon:d.a,width:20,height:20})})]}))})}},1401:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(36),r=n(3),i=n(1),c=n(1466),o=n(1186),s=n(1232),l=n(73),d=n(198),u=n(0),b=["images","photoIndex","setPhotoIndex","isOpen","onClose"],j=Object(o.a)((function(e){var t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(l.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return Object(s.a)({root:{backdropFilter:"blur(8px)",backgroundColor:Object(l.a)(e.palette.grey[900],.88),"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-of-type":{flexGrow:1},"& li:not(:first-of-type)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(r.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(r.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}})}));function p(e){var t=e.images,n=e.photoIndex,o=e.setPhotoIndex,s=e.isOpen,l=e.onClose,p=Object(a.a)(e,b),h=j();Object(i.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var f=[Object(u.jsx)(d.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(u.jsx)(u.Fragment,{children:s&&Object(u.jsx)(c.a,Object(r.a)({mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:l,onMovePrevRequest:function(){return o((n+t.length-1)%t.length)},onMoveNextRequest:function(){return o((n+1)%t.length)},toolbarButtons:f,reactModalStyle:{overlay:{zIndex:9999}},wrapperClassName:h.root},p))})}},1660:function(e,t){},1754:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return rt}));var a=n(12),r=n.n(a),i=n(20),c=n(16),o=n(1),s=n(32),l=n(1636),d=n.n(l),u=n(1281),b=n(1291),j=n(309),p=n(403),h=n(407),f=n(399),m=n(25),g=n(82),O=n(57),x=n(395),v=n(1297),y=n(23),w=n(1243),k=(n(414),n(1364),n(1459),n(614)),_=(n(1272),n(198)),S=(n(1286),n(1271)),C=n(1179),I=n(1273),R=(n(1275),n(1238),n(1239)),L=(n(1253),n(1237)),M=(n(211),n(401)),A=n(0);var P=n(3),T=n(36),U=n(311),W=n.n(U),F=n(7),z=n(1262),B=n(263),E=n(1288),N=n(1283),q=["query","onChange","onFocus","onClickAway"],D=Object(F.a)("div")((function(e){return{marginTop:e.theme.spacing(2)}})),G=Object(F.a)(z.a)((function(e){var t=e.theme;return{transition:t.transitions.create("box-shadow",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function J(e){var t=e.query,n=e.onChange,a=e.onFocus,r=e.onClickAway,i=Object(T.a)(e,q);return Object(A.jsx)(B.a,{onClickAway:r,children:Object(A.jsx)(D,Object(P.a)(Object(P.a)({},i),{},{children:Object(A.jsx)(E.a,{fullWidth:!0,size:"small",children:Object(A.jsx)(G,{value:t,onFocus:a,onChange:n,placeholder:"Search contacts...",startAdornment:Object(A.jsx)(N.a,{position:"start",children:Object(A.jsx)(k.a,{component:y.a,icon:W.a,sx:{color:"text.disabled"}})})})})}))})}var V=n(27),H=n(35),Q=n(1780),Y=n(1285),Z=n(1259),K=n(1256),$=n(237),X=["isSelected","opponent","conversation","onSelectConversation","isOpenSidebar"],ee=Object(F.a)(L.a)((function(e){var t=e.theme;return{padding:t.spacing(1.5,3),transition:t.transitions.create("all")}})),te=Object(F.a)("div")({position:"relative",width:48,height:48,"& .MuiAvatar-img":{borderRadius:"50%"},"& .MuiAvatar-root":{width:"100%",height:"100%"}});function ne(e){var t=e.isSelected,n=e.opponent,a=e.conversation,r=e.onSelectConversation,i=e.isOpenSidebar,c=Object(T.a)(e,X),o=Object(O.a)().user,s=n.created,l="".concat($.b.baseUrl,"/user/img-src/").concat(n.avatarUrl),d=n.online?"online":"offline",u=a&&(a.lastMessage.users_see_message.indexOf(o._id)>-1?0:a.lastMessage.unread_count)||0,b=u>0;return Object(A.jsxs)(ee,Object(P.a)(Object(P.a)({disableGutters:!0,onClick:r,sx:Object(P.a)({},t&&{bgcolor:"action.selected"})},c),{},{children:[Object(A.jsx)(Y.a,{children:Object(A.jsx)(k.a,{sx:Object(P.a)({},!1),children:Object(A.jsxs)(te,{className:"avatarWrapper",children:[Object(A.jsx)(Z.a,{alt:n.name,src:l}),Object(A.jsx)(M.a,{status:d,sx:{right:2,bottom:2,position:"absolute"}})]},n._id)})}),i&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(R.a,{primary:n.name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:a&&a.lastMessage.message,secondaryTypographyProps:{noWrap:!0,variant:b?"subtitle2":"body2",color:b?"textPrimary":"textSecondary"}}),Object(A.jsxs)(k.a,{sx:{ml:2,height:44,display:"flex",alignItems:"flex-end",flexDirection:"column"},children:[Object(A.jsx)(k.a,{sx:{mb:1.25,fontSize:12,lineHeight:"22px",whiteSpace:"nowrap",color:"text.disabled"},children:Object(Q.a)(new Date(s),{addSuffix:!1})}),b&&Object(A.jsx)(K.a,{color:"secondary",badgeContent:u})]})]})]}))}var ae=["conversations","isOpenSidebar","activeConversationId","query","onlyUnreadShow"];function re(e){var t=e.conversations,n=e.isOpenSidebar,a=(e.activeConversationId,e.query),r=e.onlyUnreadShow,i=Object(T.a)(e,ae),c=Object(s.h)(),o=Object(O.a)().user,l=Object(j.d)((function(e){return e.user})).userList,d=Object(s.i)().opponentId,u=function(e){return Object(H.find)(t.byId,(function(t){return Object(H.map)(t.users,(function(e){return e._id})).indexOf(e)>-1}))},b=l.filter((function(e){var t=e._id!==o._id&&e.name.toLowerCase().indexOf(a.toLowerCase())>-1;return r&&t?function(e){var t=u(e);return(t&&(t.lastMessage.users_see_message.indexOf(o._id)>-1?0:t.lastMessage.unread_count)||0)>0}(e._id):t}));return Object(A.jsx)(I.a,Object(P.a)(Object(P.a)({disablePadding:!0},i),{},{children:b.map((function(e){return Object(A.jsx)(ne,{opponent:e,isOpenSidebar:n,conversation:u(e._id),isSelected:d===e._id,onSelectConversation:function(){return t=e._id,void c("".concat(m.b.chat.private,"/").concat(t));var t}},e._id)}))}))}n(1460),n(1461),n(1365),n(73),n(1769),n(1770);var ie=n(1250);n(1305),Object(F.a)("div")((function(e){return{display:"flex",alignItems:"center",padding:e.theme.spacing(2,3)}})),Object(F.a)("div")((function(e){var t=e.theme;return{"& .MuiAutocomplete-root":{minWidth:280,marginLeft:t.spacing(2),"&.Mui-focused .MuiAutocomplete-inputRoot":{boxShadow:t.customShadows.z8}},"& .MuiAutocomplete-inputRoot":{transition:t.transitions.create("box-shadow",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}}));n(1462),n(1333);var ce=n(1300),oe=n.n(ce),se=n(136),le=n.n(se),de=n(1779),ue=n(1267),be=n(233),je=n(37),pe=["participants"],he=Object(F.a)("div")((function(e){return{flexShrink:0,minHeight:92,display:"flex",alignItems:"center",padding:e.theme.spacing(0,3)}}));function fe(e){var t=e.participants,n=Object(V.a)(t)[0];return void 0===n?null:Object(A.jsxs)(k.a,{sx:{display:"flex",alignItems:"center"},children:[Object(A.jsxs)(k.a,{sx:{position:"relative"},children:[Object(A.jsx)(Z.a,{src:n.avatar,alt:n.name}),Object(A.jsx)(M.a,{status:n.status,sx:{position:"absolute",right:2,bottom:2}})]}),Object(A.jsxs)(k.a,{sx:{ml:2},children:[Object(A.jsx)(_.a,{variant:"subtitle2",children:n.name}),Object(A.jsx)(_.a,{variant:"body2",sx:{color:"text.secondary"},children:"offline"!==n.status?Object(w.a)(n.status):Object(be.d)(n.lastActivity)})]})]})}function me(e){var t=e.participants;return Object(A.jsxs)("div",{children:[Object(A.jsx)(de.a,{max:3,sx:{mb:.5,"& .MuiAvatar-root":{width:32,height:32}},children:t.map((function(e){return Object(A.jsx)(Z.a,{alt:e.name,src:e.avatar},e.id)}))}),Object(A.jsx)(ue.a,{variant:"body2",underline:"none",component:"button",color:"text.secondary",onClick:function(){},children:Object(A.jsxs)(k.a,{sx:{display:"flex",alignItems:"center"},children:[t.length," persons",Object(A.jsx)(y.a,{icon:le.a})]})})]})}function ge(e){var t=e.participants,n=Object(T.a)(e,pe),a=t.length>1;return Object(A.jsxs)(he,Object(P.a)(Object(P.a)({},n),{},{children:[a?Object(A.jsx)(me,{participants:t}):Object(A.jsx)(fe,{participants:t}),Object(A.jsx)(k.a,{sx:{flexGrow:1}}),Object(A.jsx)(je.d,{children:Object(A.jsx)(y.a,{icon:oe.a,width:20,height:20})})]}))}var Oe=n(1187),xe=(n(1463),n(1366)),ve=n.n(xe),ye=(n(1346),n(1330)),we=n.n(ye),ke=n(1178),_e=n(1282),Se=n(21),Ce=n(1399),Ie=["disabled","conversationId","opponentId","onSend","messageMaxLen"],Re=Object(F.a)("div")((function(e){return{height:"auto",position:"relative",alignItems:"center",paddingLeft:e.theme.spacing(2)}})),Le=Object(F.a)("img")((function(e){return{height:40,minWidth:40,width:"auto",cursor:"pointer",objectFit:"cover",borderRadius:e.theme.shape.borderRadius}}));function Me(e){var t=e.disabled,n=e.conversationId,a=e.opponentId,s=e.onSend,l=e.messageMaxLen,d=Object(T.a)(e,Ie),u=(Object(j.c)(),Object(o.useRef)(null)),b=Object(o.useState)(""),p=Object(c.a)(b,2),h=p[0],f=p[1],m=Object(O.a)().user,g=Object(o.useState)([]),x=Object(c.a)(g,2),v=x[0],w=x[1],k=Object(o.useState)(null),_=Object(c.a)(k,2),I=_[0],R=_[1],L=function(){var e=Object(i.a)(r.a.mark((function e(){var t,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h||0!==v.length){e.next=2;break}return e.abrupt("return","");case 2:if(!s){e.next=12;break}if(t=[],!I){e.next=11;break}return e.next=7,Se.a.post("/message/upload_multi_imgs",I);case 7:i=e.sent,t=i.data.data,w([]),R(null);case 11:s({conversationId:n,messageId:Object(Oe.a)(),message:h,imgs:t,senderId:m._id,senderName:m.name,messageType:0,receiverId:a});case 12:return e.abrupt("return",f(""));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(Re,Object(P.a)(Object(P.a)({},d),{},{children:[v.length>0&&Object(A.jsx)(ke.a,{direction:{xs:"column",sm:"row"},sx:{mt:1,mb:1},spacing:{xs:3,sm:2},children:v.map((function(e){return Object(A.jsx)(Le,{alt:"attachment",src:"".concat(e.url)},"".concat(e.index))}))}),Object(A.jsxs)(ke.a,{direction:{xs:"column",sm:"row"},sx:{mt:1,mb:1},children:[Object(A.jsx)(_e.a,{disabled:t,fullWidth:!0,value:h,disableUnderline:!0,onKeyUp:function(e){"Enter"===e.key&&L()},onChange:function(e){f(e.target.value)},placeholder:"Type a message",inputProps:{maxLength:l||1e3},startAdornment:Object(A.jsx)(N.a,{position:"start",children:Object(A.jsx)(Ce.a,{disabled:t,value:h,setValue:f})}),endAdornment:Object(A.jsx)(ke.a,{direction:"row",spacing:.5,mr:1.5,children:Object(A.jsx)(S.a,{disabled:t,size:"small",onClick:function(){u.current.click()},children:Object(A.jsx)(y.a,{icon:we.a,width:24,height:24})})}),sx:{height:"100%"}}),Object(A.jsx)(C.a,{orientation:"vertical",flexItem:!0}),Object(A.jsx)(S.a,{color:"primary",disabled:!h&&0===v.length,onClick:L,sx:{mx:1},children:Object(A.jsx)(y.a,{icon:ve.a,width:24,height:24})})]}),Object(A.jsx)("input",{type:"file",multiple:!0,ref:u,accept:"image/*",style:{display:"none"},onChange:function(e){var t=[],n=[],a=new FormData;t.push(e.target.files);for(var r=0;r<t[0].length;r+=1){var i=t[0][r];a.append("img[".concat(r,"]"),i,i.name),n.push({index:r,name:i.name,url:URL.createObjectURL(i)})}w(n),R(a)}})]}))}var Ae=["message","conversation","onOpenLightbox"],Pe=Object(F.a)("div")((function(e){return{display:"flex",marginBottom:e.theme.spacing(3)}})),Te=Object(F.a)("div")((function(e){var t=e.theme;return{maxWidth:450,padding:t.spacing(1.5),marginTop:t.spacing(.5),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral}})),Ue=Object(F.a)(_.a)((function(e){var t=e.theme;return{display:"flex",marginBottom:t.spacing(.75),color:t.palette.text.secondary}})),We=Object(F.a)("img")((function(e){return{height:80,minWidth:100,width:"auto",cursor:"pointer",objectFit:"cover",borderRadius:e.theme.shape.borderRadius}}));function Fe(e){var t,n=e.message,a=e.conversation,r=e.onOpenLightbox,i=Object(T.a)(e,Ae),c=Object(O.a)().user,o=a.users.find((function(e){return e._id===n.sender_id})),s=n.sender_id===c._id?{type:"me"}:{avatar:"".concat($.b.baseUrl,"/user/img-src/").concat(o.avatarUrl),name:o.name},l="me"===s.type,d=s.name&&s.name.split(" ")[0];return Object(A.jsx)(Pe,Object(P.a)(Object(P.a)({},i),{},{children:Object(A.jsxs)(k.a,{sx:Object(P.a)({display:"flex"},l&&{ml:"auto"}),children:["me"!==s.type&&Object(A.jsx)(Z.a,{alt:s.name,src:s.avatar,sx:{width:32,height:32}}),Object(A.jsxs)(k.a,{sx:{ml:2},children:[Object(A.jsxs)(Ue,{noWrap:!0,variant:"caption",sx:Object(P.a)({},l&&{justifyContent:"flex-end"}),children:[!l&&"".concat(d,","),"\xa0",Object(Q.a)(new Date(n.createdAt),{addSuffix:!0})]}),Object(A.jsxs)(Te,{sx:Object(P.a)({},l&&{color:"grey.800",bgcolor:"primary.lighter"}),children:[Object(A.jsx)(ke.a,{spacing:2,dangerouslySetInnerHTML:{__html:(t=n.message,t.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim,(function(e){return'<a target="_blank" href="'.concat(e,'">').concat(e,"</a>")})))}}),n.imgs.length>0&&Object(A.jsx)(ke.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:n.imgs.map((function(e){return Object(A.jsx)(We,{alt:"attachment",src:"".concat($.b.baseUrl,"/message/img-src/").concat(e),onClick:function(){return r("".concat($.b.baseUrl,"/message/img-src/").concat(e))}},"".concat(e))}))})]})]})]})}))}var ze=n(97),Be=n(1401);function Ee(e){var t=e.conversation,n=Object(o.useRef)(),a=Object(o.useState)(!1),r=Object(c.a)(a,2),i=r[0],s=r[1],l=Object(o.useState)(null),d=Object(c.a)(l,2),u=d[0],b=d[1];Object(o.useEffect)((function(){n.current&&(n.current.scrollTop=n.current.scrollHeight)}),[t.messages]);var j=t.messages.filter((function(e){return e.imgs.length>0})).map((function(e){return e.imgs})).join().split(",").map((function(e){return"".concat($.b.baseUrl,"/message/img-src/").concat(e)})),p=function(e){var t=Object(H.findIndex)(j,(function(t){return t===e}));s(!0),b(t)};return Object(A.jsxs)(ze.a,{scrollableNodeProps:{ref:n},sx:{p:3,flexGrow:1},children:[t.messages.map((function(e){return Object(A.jsx)(Fe,{message:e,conversation:t,onOpenLightbox:p},e._id)})),Object(A.jsx)(Be.a,{images:j,photoIndex:u,setPhotoIndex:b,isOpen:i,onClose:function(){return s(!1)}})]})}var Ne=n(312),qe=n.n(Ne),De=n(52),Ge=n(1228),Je=(n(164),n(394));n(504),n(1347),Object(F.a)("div")((function(e){return{flexGrow:1,height:"100%",display:"flex",overflow:"hidden",flexDirection:"column",paddingBottom:e.theme.spacing(2)}})),Object(F.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",marginTop:t.spacing(2),padding:t.spacing(0,2.5)}})),Object(F.a)("div")((function(e){var t=e.theme;return{width:40,height:40,flexShrink:0,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",color:t.palette.text.secondary,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[50016]}})),Object(F.a)(Je.a)((function(e){var t=e.theme;return Object(P.a)(Object(P.a)({},t.typography.overline),{},{height:40,flexShrink:0,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})}));n(1367),n(1323),Object(F.a)(Je.a)((function(e){var t=e.theme;return Object(P.a)(Object(P.a)({},t.typography.overline),{},{height:40,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})})),Object(F.a)(y.a)((function(e){return{width:16,height:16,marginTop:4,color:e.theme.palette.text.secondary}})),Object(F.a)(_.a)((function(e){var t=e.theme;return Object(P.a)({flexGrow:1,maxWidth:160,wordWrap:"break-word"},t.typography.body2)}));n(1415),n(199),Object(F.a)("div")((function(e){return{display:"flex",alignItems:"center",justifyContent:"center",marginTop:e.theme.spacing(1.5)}})),Object(F.a)(y.a)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(1),color:t.palette.text.secondary}}));Object(F.a)(Je.a)((function(e){var t=e.theme;return Object(P.a)(Object(P.a)({},t.typography.overline),{},{height:40,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})}));Object(F.a)("div")((function(e){var t=e.theme;return{width:240,flexShrink:0,display:"flex",position:"relative",flexDirection:"column",borderLeft:"solid 1px ".concat(t.palette.divider),transition:t.transitions.create("width")}})),Object(F.a)("div")((function(e){var t=e.theme;return{borderRight:0,display:"flex",overflow:"hidden",position:"absolute",alignItems:"center",top:t.spacing(1),left:t.spacing(-4),width:t.spacing(4),height:t.spacing(4),justifyContent:"center",boxShadow:t.customShadows.z8,border:"solid 1px ".concat(t.palette.divider),borderTopLeftRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper,borderBottomLeftRadius:t.shape.borderRadius}}));n(1306);var Ve=n(1290),He=n(1254),Qe=Object(F.a)("div")((function(e){var t=e.theme;return{width:320,flexShrink:0,display:"flex",flexDirection:"column",transition:t.transitions.create("width"),borderRight:"1px solid ".concat(t.palette.divider)}}));function Ye(){var e=Object(De.a)(),t=(Object(s.h)(),Object(Ge.a)(e.breakpoints.down("md"))),n=Object(o.useState)(!0),a=Object(c.a)(n,2),l=a[0],d=a[1],u=Object(o.useState)(""),b=Object(c.a)(u,2),p=b[0],h=b[1],f=Object(o.useState)([]),m=Object(c.a)(f,2),g=(m[0],m[1]),O=Object(o.useState)(!1),x=Object(c.a)(O,2),v=(x[0],x[1]),w=Object(j.d)((function(e){return e.privatechat})),_=w.conversations,S=w.activeConversationId,C=Object(o.useState)(!1),I=Object(c.a)(C,2),R=I[0],L=I[1];Object(o.useEffect)((function(){return d(!t)}),[t]),Object(o.useEffect)((function(){if(!l)return v(!1)}),[l]);var M=function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.target.value,h(n),!n){e.next=10;break}return e.next=6,Se.a.get("/chat/search",{params:{query:n}});case 6:a=e.sent,g(a.data.results),e.next=11;break;case 10:g([]);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(Qe,{sx:Object(P.a)({},!l&&{width:96}),children:[Object(A.jsxs)(k.a,{sx:{py:2,px:3},children:[Object(A.jsxs)(k.a,{sx:{display:"flex",alignItems:"center"},children:[l&&Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(k.a,{sx:{flexGrow:1}})}),Object(A.jsx)(je.d,{onClick:function(){return d(!l)},children:Object(A.jsx)(y.a,{width:20,height:20,icon:l?qe.a:le.a})})]}),l&&Object(A.jsxs)(k.a,{children:[Object(A.jsx)(J,{query:p,onFocus:function(){v(!0)},onChange:M,onClickAway:function(){v(!1),h("")}}),Object(A.jsx)(Ve.a,{control:Object(A.jsx)(He.a,{checked:R,onChange:function(e){L(e.target.checked)}}),label:"display unread chat partner only"})]})]}),Object(A.jsx)(ze.a,{children:Object(A.jsx)(re,{conversations:_,isOpenSidebar:l,activeConversationId:S,query:p,onlyUnreadShow:R})})]})}function Ze(e){var t=e.socket,n=Object(j.c)(),a=(Object(s.h)(),Object(O.a)().user),c=Object(s.g)().pathname,l=Object(s.i)().opponentId,d=Object(j.d)((function(e){return e.privatechat})),u=(d.contacts,d.recipients,d.participants),b=d.activeConversationId,p=Object(j.d)((function(e){return function(e){var t=e.privatechat,n=t.conversations,a=t.activeConversationId;return n.byId[a]||{id:null,messages:[],lastMessage:null,users:[]}}(e)})),g=Object(j.d)((function(e){return e.setting})).settingsList.find((function(e){return"parameter"===e.type}));Object(o.useEffect)((function(){n(Object(f.b)())}),[n]);var x=u.filter((function(e){return"8864c717-587d-472a-929a-8e5f298024da-0"!==e._id}));Object(o.useEffect)((function(){b&&(console.log("get conversation",b),n(Object(h.d)(b)))}),[n,b]),Object(o.useEffect)((function(){p.lastMessage&&-1===p.lastMessage.users_see_message.indexOf(a._id)&&t.emit("makeLastMessageAsSeen",JSON.stringify({chatId:b,userId:a._id}))}),[n,p]);var v=function(){var e=Object(i.a)(r.a.mark((function e(a){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n(Object(h.g)(a)),i={sender_id:a.senderId,sender_name:a.senderName,messageId:a.messageId,chat_id:a.conversationId,message:a.message,receiver_id:a.receiverId,message_type:a.messageType,imgs:a.imgs},console.log("socket new message",i),t.emit("new_message",JSON.stringify(i))}catch(r){console.error(r)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(k.a,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[Object(A.jsx)(ge,{participants:x}),Object(A.jsx)(C.a,{}),Object(A.jsx)(k.a,{sx:{flexGrow:1,display:"flex",overflow:"hidden"},children:Object(A.jsxs)(k.a,{sx:{display:"flex",flexGrow:1,flexDirection:"column"},children:[Object(A.jsx)(Ee,{conversation:p}),Object(A.jsx)(C.a,{}),Object(A.jsx)(Me,{conversationId:b,opponentId:l,onSend:v,disabled:c===m.b.chat.private,messageMaxLen:g&&Number(g.settings.message_limit_character_num)})]})})]})}var Ke=n(231),$e=n(162),Xe=n(230),et=n(1257),tt=n(1261),nt=n(1299);function at(e){var t=e.chatSettings,n=(Object(s.h)(),Object($e.useSnackbar)().enqueueSnackbar),a=Ke.b().shape({admin_message:Ke.d().required("This field is required")}),c=Object(Xe.c)({enableReinitialize:!0,initialValues:{admin_message:(null===t||void 0===t?void 0:t.settings.admin_message)||"Please leave a message, I will reply to you as soon as possible. You may talk about anything: advertising, complaining, suggestions, advice, cooperation, etc."},validationSchema:a,onSubmit:function(){var e=Object(i.a)(r.a.mark((function e(t,a){var i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.setSubmitting,a.resetForm,c=a.setErrors,e.prev=1,e.next=4,Object(nt.a)(500);case 4:return e.next=6,Se.a.put("/settings/chat",t);case 6:i(!1),n("Update success",{variant:"success"}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),i(!1),c(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()}),o=c.errors,l=(c.values,c.touched),d=c.handleSubmit,u=c.isSubmitting,j=(c.setFieldValue,c.getFieldProps);return Object(A.jsx)(Xe.b,{value:c,children:Object(A.jsx)(Xe.a,{noValidate:!0,autoComplete:"off",onSubmit:d,children:Object(A.jsx)(tt.a,{container:!0,spacing:3,children:Object(A.jsx)(tt.a,{item:!0,xs:12,md:12,children:Object(A.jsx)(b.a,{sx:{p:3},children:Object(A.jsx)(ke.a,{spacing:3,children:Object(A.jsxs)(ke.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(A.jsx)(ie.a,Object(P.a)(Object(P.a)({fullWidth:!0,label:"Admin Message",multiline:!0,minRows:2,maxRows:4},j("admin_message")),{},{error:Boolean(l.message&&o.message),helperText:l.message&&o.message})),Object(A.jsx)(et.a,{type:"submit",variant:"contained",loading:u,children:"Save"})]})})})})})})})}function rt(){var e=Object(g.a)().themeStretch,t=Object(j.c)(),n=Object(O.a)().user,a=Object(s.i)().opponentId,l=Object(j.d)((function(e){return e.setting})).settingsList.find((function(e){return"chat"===e.type})),y=Object(j.d)((function(e){return e.privatechat})).activeConversationId,w=Object(o.useState)(null),k=Object(c.a)(w,2),_=k[0],S=k[1];console.log("Private Chat"),Object(o.useEffect)((function(){if(a){var e=(null===l||void 0===l?void 0:l.settings.admin_message)||"Please leave a message, I will reply to you as soon as possible. You may talk about anything: advertising, complaining, suggestions, advice, cooperation, etc.";t(Object(h.f)(n._id,a,e))}}),[t,a]),Object(o.useEffect)((function(){t(Object(p.i)()),t(Object(h.e)()),t(Object(h.c)()),t(Object(f.b)())}),[t]);var C=Object(o.useState)(null),I=Object(c.a)(C,2),R=I[0],L=I[1];Object(o.useEffect)((function(){var e=d.a.connect("".concat($.b.socketUrl,"/api/message"),{transports:["websocket"]});return e.on("connect",(function(){console.log("Successfully connected")})),e.on("connect_failed",(function(){console.log("Connection Failed")})),e.on("disconnect",(function(){console.log("Disconnected")})),e.on("msgReceive",M),e.on("onDeleted",P),e.on("onTyping",T),L(e),function(){return e.close()}}),[L]),Object(o.useEffect)((function(){if(R&&y){_&&_!==y&&(console.log("leaveChat",_),R.emit("leaveChat",JSON.stringify({chatId:_}))),console.log("joinChat",y);var e={chatId:y};R.emit("joinChat",JSON.stringify(e)),S(y)}}),[R,t,y]);var M=function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(y,n),y&&t(Object(h.d)(y));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(n),t(Object(h.d)(y));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=Object(o.useState)(null),W=Object(c.a)(U,2),F=(W[0],W[1]);Object(o.useEffect)((function(){console.log("RoomList Socket!");var e=d.a.connect("".concat($.b.socketUrl,"/api/chatRoomList"),{transports:["websocket"]});return e.on("connect",(function(){console.log("Successfully connected: api/chatRoomList")})),e.on("updateChatRoomList",z),F(e),function(){return e.close()}}),[F]);var z=function(){console.log("handleUpdateChatRoomList"),t(Object(h.e)())};return Object(A.jsx)(x.a,{title:"Chat | Locals",children:Object(A.jsxs)(u.a,{maxWidth:!e&&"xl",children:[Object(A.jsx)(v.a,{heading:"Private Chat",links:[{name:"Dashboard",href:m.b.root},{name:"Private Chat"}]}),Object(A.jsx)(at,{chatSettings:l}),Object(A.jsxs)(b.a,{sx:{height:"72vh",display:"flex"},children:[Object(A.jsx)(Ye,{}),R&&Object(A.jsx)(Ze,{socket:R})]})]})})}}}]);
//# sourceMappingURL=15.c6e257a2.chunk.js.map