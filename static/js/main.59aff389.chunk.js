(this["webpackJsonpfast-discharge"]=this["webpackJsonpfast-discharge"]||[]).push([[0],{134:function(e,t,n){},146:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),i=n.n(a),r=n(22),o=n.n(r),l=(n(134),n(2)),s=n(116),u=n.n(s),d=(n(146),n.p+"static/media/running.bda043eb.svg"),b=n(4),j=n(9),h=n(1),f=n(128),O=n(127),p=(n(192),n(7)),m=Object(p.EditListPlugin)({types:["bulleted-list","numbered-list"],typeItem:"list-item"}),x=Object(l.a)(m,3),g=x[0],v=x[1],y=x[2],w=y.Editor,k=(y.Element,y.Transforms),C=function(e){k.increaseItemDepth(e)},E=function(e){k.decreaseItemDepth(e)},D=function(e,t){if(w.isSelectionInList(e)){var n=w.getCurrentList(e,e.selection);console.log(n);var c=Object(l.a)(n,2),a=c[0],i=c[1];t&&a.type!==t?k.setNodes(e,{type:t},{at:i}):k.unwrapList(e)}else k.wrapInList(e,t)},T=n(46),S=function(e,t){var n=h.Editor.before(e,t||e.selection,{unit:"block"});console.log(n,e.children);var c=h.Editor.next(e,{at:n,match:function(e){return"template-block"===e.type},voids:!0});if(c){var a=Object(l.a)(c,2)[1];h.Transforms.select(e,a)}},N=function(e,t){var n=h.Editor.after(e,t||e.selection,{unit:"block"});console.log(n,e.children);var c=h.Editor.previous(e,{at:n,match:function(e){return"template-block"===e.type},voids:!0});if(c){var a=Object(l.a)(c,2)[1];h.Transforms.select(e,a)}},I={"mod+b":"bold","mod+i":"italic","mod+u":"underline"},V={"mod+alt+1":"heading-one","mod+alt+2":"heading-two","mod+alt+3":"heading-three","mod+alt+4":"heading-four","mod+.":"bulleted-list","mod+/":"numbered-list"},A={"mod+]":S,"mod+[":N},L=["numbered-list","bulleted-list"],F=function(e,t){var n=R(e,t),c=L.includes(t);h.Transforms.unwrapNodes(e,{match:function(e){return!h.Editor.isEditor(e)&&h.Element.isElement(e)&&L.includes(e.type)},split:!0});var a={type:n?"paragraph":c?"list-item":t};if(h.Transforms.setNodes(e,a),!n&&c){var i={type:t,children:[]};h.Transforms.wrapNodes(e,i)}},M=function(e,t){B(e,t)?h.Editor.removeMark(e,t):h.Editor.addMark(e,t,!0)},R=function(e,t){var n=h.Editor.nodes(e,{match:function(e){return!h.Editor.isEditor(e)&&h.Element.isElement(e)&&e.type===t}});return!!Object(l.a)(n,1)[0]},B=function(e,t){var n=h.Editor.marks(e);return!!n&&!0===n[t]},P=n(11),H=n(126),J=n(10),U=n(39),W=n.n(U),Y=function(e){var t=e.attributes,n=e.children,i=e.element,r=Object(j.f)(),o=Object(j.e)(),s=Object(j.d)(),u=Object(a.useState)(i.defaultValue?i.defaultValue:null),d=Object(l.a)(u,2),f=d[0],O=d[1],p=Object(a.useState)(i.opts?i.opts:[]),m=Object(l.a)(p,2),x=m[0],g=m[1],v=Object(a.useState)(i.name),y=Object(l.a)(v,2),w=y[0],k=y[1],C=Object(a.useState)(!1),E=Object(l.a)(C,2),D=E[0],T=E[1],S=Object(a.useState)(!1),N=Object(l.a)(S,2),I=N[0],V=N[1],A=Object(a.useRef)(null),L=Object(a.useCallback)((function(e,t){O(e),M({defaultValue:e})}),[O]),F=Object(a.useCallback)((function(e){var t=e.target.value;k(t),M({name:t})}),[k]),M=Object(a.useCallback)((function(e){var t=e.name,n=e.opts,c=e.defaultValue,a=j.b.findPath(s,i),r={name:t,opts:n,defaultValue:c};h.Transforms.setNodes(s,r,{at:a})}),[]),R={boxShadow:r&&o?"0 0 0 2px #b4d5ff":"none",transform:"translateY(".concat(D?0:2,"px)"),transition:"0.3s ease all"};return Object(c.jsxs)("span",Object(b.a)(Object(b.a)({},t),{},{className:"template-block",contentEditable:!1,style:I?Object(b.a)(Object(b.a)({},R),{position:"relative",zIndex:99}):R,children:[D?Object(c.jsx)("div",{className:"content",children:Object(c.jsx)(W.a,{placeholder:"Name this field...",value:w,onInput:F,onKeyDown:function(e){return"Enter"===e.key&&T(!D)}})}):Object(c.jsx)(H.a,{ref:A,styles:K,theme:_,placeholder:w,onChange:L,onCreateOption:function(e){var t=G(e);g([].concat(Object(P.a)(x),[t])),O(t),M({opts:[].concat(Object(P.a)(x),[t]),defaultValue:t})},onMenuOpen:function(){return V(!0)},onMenuClose:function(){return V(!1)},value:f,options:x}),Object(c.jsx)("button",{className:"name-setter",onClick:function(){T(!D)},tabIndex:-1,children:Object(c.jsx)(J.a,{icon:"bi:gear-fill"})}),n]}))},z=function(e,t){var n={type:"template-block",name:t.name,opts:t.opts,defaultValue:t.defaultValue,children:[{text:""}]};h.Transforms.insertNodes(e,n),h.Transforms.move(e)},G=function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"_")}},K={control:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{minHeight:"1.4em",height:"1.4em",paddingTop:"1px"})},valueContainer:function(e,t){var n=t.getValue(),c=Object(l.a)(n,1)[0];return Object(b.a)(Object(b.a)({},e),{},{margin:"0 0 0 4px",transform:"translateY(-2px)",width:"".concat((c?c.label.length:t.selectProps.placeholder?t.selectProps.placeholder.length:5)+2,"ex"),minWidth:"5ex"})},input:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{margin:"0px"})},indicatorSeparator:function(e){return{display:"none"}},indicatorsContainer:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{height:"1.4em",transform:"translateY(-2px)"})},menu:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{marginTop:0,zIndex:"".concat(t.selectProps.menuIsOpen?999:"inherit")})},option:function(e){return Object(b.a)(Object(b.a)({},e),{},{padding:"5px"})},noOptionsMessage:function(e){return Object(b.a)(Object(b.a)({},e),{},{padding:"5px 0"})}},_=function(e){return Object(b.a)(Object(b.a)({},e),{},{borderRadius:0,spacing:Object(b.a)(Object(b.a)({},e.spacing),{},{baseUnit:0})})},q=[{type:"paragraph",children:[{text:"Type in {{ to create a template block like this (the gear icon allows you to name the field): "},{type:"template-block",name:"sex",opts:[{label:"male",value:"male"},{label:"female",value:"female"}],defaultValue:{label:"male",value:"male"},children:[{text:""}]},{text:""}]},{type:"paragraph",children:[{text:"FastDischarge also comes with all the rich text editing features you know and love!"}]}],Z=function(e){var t=e.attributes,n=e.children,a=e.element;switch(a.type){case"bulleted-list":return Object(c.jsx)("ul",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"numbered-list":return Object(c.jsx)("ol",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-one":return Object(c.jsx)("h1",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-two":return Object(c.jsx)("h2",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-three":return Object(c.jsx)("h3",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-four":return Object(c.jsx)("h4",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"list-item":return Object(c.jsx)("li",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"template-block":return Object(c.jsx)(Y,{attributes:t,children:n,element:a});default:return Object(c.jsx)("p",Object(b.a)(Object(b.a)({},t),{},{children:n}))}},Q=function(e){var t=e.attributes,n=e.children,a=e.leaf;return a.bold&&(n=Object(c.jsx)("strong",{children:n})),a.code&&(n=Object(c.jsx)("code",{children:n})),a.italic&&(n=Object(c.jsx)("em",{children:n})),a.underline&&(n=Object(c.jsx)("u",{children:n})),a.pretemplate&&(n=Object(c.jsx)("span",{style:{borderRadius:"5px",backgroundColor:"#ddd"},children:n})),Object(c.jsx)("span",Object(b.a)(Object(b.a)({},t),{},{children:n}))},X=function(e){var t=e.format,n=e.icon,a=e.alt,i=Object(j.g)(),r=B(i,t);return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:r?"active":"",onMouseDown:function(e){e.preventDefault(),M(i,t)},title:a,children:Object(c.jsx)(J.a,{icon:n})})})},$=function(e){var t=e.format,n=e.icon,a=e.alt,i=Object(j.g)(),r=R(i,t);return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:r?"active":"",onMouseDown:function(e){e.preventDefault(),F(i,t)},title:a,children:Object(c.jsx)(J.a,{icon:n})})})},ee=function(e){var t=e.format,n=e.icon,a=e.alt,i=Object(j.g)(),r=te(i,t);return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:r?"active":"",onMouseDown:function(e){e.preventDefault(),D(i,t)},title:a,children:Object(c.jsx)(J.a,{icon:n})})})},te=function(e,t){var n=w.getCurrentList(e);if(n)return Object(l.a)(n,1)[0].type===t},ne=function(e){var t=e.children;return Object(c.jsx)("div",{className:"toolbar-container",children:Object(c.jsx)("ul",{children:t})})},ce=function(e){var t=e.fn,n=e.icon,a=e.alt,i=Object(j.g)();return Object(c.jsx)("li",{children:Object(c.jsx)("button",{onMouseDown:function(e){e.preventDefault(),t(i)},title:a,children:Object(c.jsx)(J.a,{icon:n})})})},ae=n(5),ie=n(122),re=n.n(ie),oe=n(123),le=n(124),se=n.n(le),ue=n(125),de=n.n(ue),be=n(72),je=function(e){navigator.clipboard.writeText(function(e){var t,n=e.children.map(fe),c=re()().use(oe.a).use(se.a,{bullet:"-"}),a=c.runSync({type:"root",children:n}),i=c.stringify(a).split("\n"),r=i.map((function(e){return!!e.match(/^\s*(-|[0-9A-Za-z]+\.)\s+/g)})).map((function(e){return e?"t":"f"})).join("").matchAll(/t(ft)+/g),o=[],s=Object(ae.a)(r);try{var u=function(){var e=t.value,n=Object(l.a)(e,1)[0],c=e.index,a=Object(P.a)(n).map((function(e,t){return"f"===e?c+t:-1})).filter((function(e){return e>=0}));o=o.concat(a)};for(s.s();!(t=s.n()).done;)u()}catch(d){s.e(d)}finally{s.f()}return i.map((function(e,t){return o.includes(t)?null:e})).filter((function(e){return null!==e})).join("\n")}(e)).then((function(){window.alert("Copied successfully!")}),(function(){window.alert("Copying failed!")}))},he=function e(t){var n=Object(b.a)({},t);switch(n.children&&(n.children=n.children.map(e)),n.type){case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},fe=function e(t){var n=Object(b.a)({},t);switch(h.Text.isText(n)&&(n.strong=n.bold,n.emphasis=n.italic),n.children&&(n.children=n.children.map(e)),n.type){case"heading-one":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:1});case"heading-two":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:2});case"heading-three":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:3});case"heading-four":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:4});case"numbered-list":return Object(b.a)(Object(b.a)({},n),{},{type:"list",ordered:!0});case"bulleted-list":return Object(b.a)(Object(b.a)({},n),{},{type:"list",ordered:!1});case"list-item":return Object(b.a)(Object(b.a)({},n),{},{type:"listItem"});case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},Oe=function(e){return e.children.map(he).map(pe).join("")},pe=function e(t){if(h.Text.isText(t)){var n=de()(t.text);return t.bold&&(n="<strong>".concat(n,"</strong>")),t.italic&&(n="<em>".concat(n,"</em>")),t.underline&&(n="<u>".concat(n,"</u>")),n}var c=t.children.map((function(t){return e(t)})).join("");switch(t.type){case"heading-one":return"<h1>".concat(c,"</h1>");case"heading-two":return"<h2>".concat(c,"</h2>");case"heading-three":return"<h3>".concat(c,"</h3>");case"heading-four":return"<h4>".concat(c,"</h4>");case"bulleted-list":return"<ul>".concat(c,"</ul>");case"numbered-list":return"<ol>".concat(c,"</ol>");case"list-item":return"<li>".concat(c,"</li>");default:return c}},me=function(e){var t=new be.a({"text/html":new Blob([Oe(e)],{type:"text/html"})});be.b([t])},xe=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("content"))||q),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(),o=Object(l.a)(r,2),s=o[0],u=o[1],d=Object(a.useState)(!1),p=Object(l.a)(d,2),m=p[0],x=p[1],y=Object(a.useCallback)((function(e){return Object(c.jsx)(Z,Object(b.a)({},e))}),[]),w=Object(a.useCallback)((function(e){return Object(c.jsx)(Q,Object(b.a)({},e))}),[]),k=Object(a.useMemo)((function(){return Object(f.a)(Object(j.h)(g(function(e){var t=e.isInline,n=e.isVoid,c=["template-block"];return e.isInline=function(e){var n=e.type;return!!c.includes(n)||t(e)},e.isVoid=function(e){var t=e.type;return!!c.includes(t)||n(e)},e}(Object(h.createEditor)()))))}),[]);Object(a.useEffect)((function(){s&&m&&(h.Transforms.select(k,s),z(k,{}),x(!1),u(null))}),[s]);return Object(c.jsxs)(j.c,{editor:k,value:n,onChange:function(e){i(e);var t=JSON.stringify(e);localStorage.setItem("content",t);var n=k.selection;if(n&&h.Range.isCollapsed(n)){var c=h.Range.edges(n),a=Object(l.a)(c,1)[0],r=h.Editor.before(k,a,{distance:2}),o=r&&h.Editor.range(k,r,a),s=o&&h.Editor.string(k,o);s&&s.match(/\{\{/)&&(x(!0),u(o))}},children:[Object(c.jsxs)(ne,{children:[Object(c.jsx)(X,{format:"bold",icon:"gridicons:bold",alt:"Bold (Ctrl+B)"}),Object(c.jsx)(X,{format:"italic",icon:"gridicons:italic",alt:"Italic (Ctrl+I)"}),Object(c.jsx)(X,{format:"underline",icon:"gridicons:underline",alt:"Underline (Ctrl+U)"}),Object(c.jsx)($,{format:"heading-one",icon:"gridicons:heading-h1",alt:"Heading 1 (Ctrl+Alt+1)"}),Object(c.jsx)($,{format:"heading-two",icon:"gridicons:heading-h2",alt:"Heading 2 (Ctrl+Alt+2)"}),Object(c.jsx)($,{format:"heading-three",icon:"gridicons:heading-h3",alt:"Heading 3 (Ctrl+Alt+3)"}),Object(c.jsx)($,{format:"heading-four",icon:"gridicons:heading-h4",alt:"Heading 4 (Ctrl+Alt+4)"}),Object(c.jsx)(ee,{format:"bulleted-list",icon:"ic:baseline-format-list-bulleted",alt:"Bulleted list (Ctrl+.)"}),Object(c.jsx)(ee,{format:"numbered-list",icon:"ic:baseline-format-list-numbered",alt:"Numbered list (Ctrl+/)"}),Object(c.jsx)(ce,{fn:C,icon:"bx:bx-right-indent",alt:"Indent list item (Tab)"}),Object(c.jsx)(ce,{fn:E,icon:"bx:bx-left-indent",alt:"Dedent list item (Shift-Tab)"}),Object(c.jsx)(ce,{fn:function(e){return z(e,{})},icon:"uil:brackets-curly",alt:"Insert a template block (type in {{)"}),Object(c.jsx)(ce,{fn:je,icon:"ion:copy-outline",alt:"Copy to clipboard as plain text (Markdown)"}),Object(c.jsx)(ce,{fn:me,icon:"ion:copy",alt:"Copy to clipboard as rich text"}),Object(c.jsx)(ce,{fn:function(){var e=new Blob([JSON.stringify(k.children)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.setAttribute("download","template.fdt"),n.setAttribute("target","_blank"),n.click(),n.remove()},icon:"bx:bxs-download",alt:"Save current template/contents as file"}),Object(c.jsx)(ce,{fn:function(){var e=document.createElement("input");e.setAttribute("type","file"),e.click(),e.addEventListener("change",(function(t){if(e.files&&e.files.length>=1){var n=e.files[0],c=new FileReader;c.readAsText(n),c.onload=function(e){var t=JSON.parse(e.target.result);i(t)}}}))},icon:"ic:baseline-file-upload",alt:"Open a template/document from a file"})]}),Object(c.jsx)(O.a,{className:"editor",children:Object(c.jsx)(j.a,{renderElement:y,renderLeaf:w,placeholder:"Enter some text...",spellCheck:!0,autoFocus:!0,onKeyDown:function(e){v(k)(e),function(e,t){for(var n in I)Object(T.isHotkey)(n,e)&&(e.preventDefault(),M(t,I[n]));for(var c in V)if(Object(T.isHotkey)(c,e)){e.preventDefault();var a=V[c];if(L.includes(a))switch(a){case"bulleted-list":D(t,"bulleted-list");break;case"numbered-list":D(t,"numbered-list")}else F(t,a)}for(var i in A)Object(T.isHotkey)(i,e)&&(e.preventDefault(),(0,A[i])(t))}(e,k)},onSelect:function(e){if(window.chrome&&null!=k.selection)try{var t=j.b.toDOMPoint(k,k.selection.focus)[0];if(null==t)return;var n=t.parentElement;if(null==n)return;n.scrollIntoView({behavior:"smooth",block:"nearest"})}catch(e){}}})})]})};var ge=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)("img",{src:d,alt:"Running man",style:{height:"1em",display:"inline-block",transform:"translateY(6px)"}}),"FastDischarge"]})}),Object(c.jsx)("div",{className:"editor-container",children:Object(c.jsx)(xe,{})}),Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"oneline",children:[Object(c.jsxs)("p",{children:["\xa9 ",Object(c.jsx)("a",{href:"https://github.com/newageoflight",children:"Christopher Chen"})," 2021-"]}),Object(c.jsx)("button",{onClick:function(){return i(!0)},children:Object(c.jsx)(J.a,{icon:"bx:bx-help-circle"})})]})}),Object(c.jsxs)(u.a,{isOpen:n,onRequestClose:function(){return i(!1)},contentLabel:"About FastDischarge",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h2",{children:"About FastDischarge"}),Object(c.jsx)("button",{onClick:function(){return i(!1)},children:Object(c.jsx)(J.a,{icon:"eva:close-fill"})})]}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("p",{children:["FastDischarge aims to be an open-source medical documentation platform that is truly ",Object(c.jsx)("em",{children:"fast"}),"."]}),Object(c.jsx)("p",{children:"With FastDischarge, you can easily create template fields and prepopulate them with commonly used values of your choice. FastDischarge lets you write your progress notes and discharge letters faster, so you can get back to being a doctor."}),Object(c.jsxs)("p",{children:["If you have experience working with Slate.js, React.js or Typescript, please consider contributing to this project on ",Object(c.jsx)("a",{href:"https://github.com/newageoflight/fast-discharge",children:"Github"}),"."]}),Object(c.jsxs)("p",{children:["FastDischarge doesn't use any central servers; everything you enter into it is stored locally on your device, so there are no data privacy issues to worry about! (Don't believe me? Check the source code on ",Object(c.jsx)("a",{href:"https://github.com/newageoflight/fast-discharge",children:"Github"}),"!)"]}),Object(c.jsxs)("p",{children:["Developed by ",Object(c.jsx)("a",{href:"mailto:camint3rnal@live.com",children:"Christopher Chen"})," (JMO/Intern)"]}),Object(c.jsx)("h3",{children:"Usage guide"}),Object(c.jsxs)("p",{children:["To ",Object(c.jsx)("strong",{children:"create a template field"}),", type ",Object(c.jsx)("kbd",{children:"{{"})," into the editor or press the ",Object(c.jsx)(J.a,{icon:"uil:brackets-curly"})," button in the toolbar."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Set your template options"})," by clicking on the dropdown menu and typing in some text."]}),Object(c.jsxs)("p",{children:["Cycle to the next template field by pressing ",Object(c.jsx)("kbd",{children:"TAB"}),"; cycle to the previous template field by pressing ",Object(c.jsx)("kbd",{children:"Shift+TAB"})]}),Object(c.jsxs)("p",{children:["To finalise your document and copy it as plain text (e.g. Web DeLacy), press the ",Object(c.jsx)(J.a,{icon:"ion:copy-outline"})," button in the toolbar."]}),Object(c.jsxs)("p",{children:["To finalise your document and copy it as rich text (e.g. PowerChart), press the ",Object(c.jsx)(J.a,{icon:"ion:copy"})," button in the toolbar."]})]}),Object(c.jsx)("div",{className:"modal-footer"})]})]})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(ge,{})}),document.getElementById("root")),ve()}},[[287,1,2]]]);
//# sourceMappingURL=main.59aff389.chunk.js.map