(this["webpackJsonpfast-discharge"]=this["webpackJsonpfast-discharge"]||[]).push([[0],{134:function(e,t,n){},146:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),r=n(22),o=n.n(r),l=(n(134),n(2)),s=n(116),u=n.n(s),d=(n(146),n.p+"static/media/running.bda043eb.svg"),b=n(4),j=n(9),h=n(1),O=n(128),f=n(127),p=(n(192),n(7)),m=Object(p.EditListPlugin)({types:["bulleted-list","numbered-list"],typeItem:"list-item"}),x=Object(l.a)(m,3),g=x[0],v=x[1],y=x[2],w=y.Editor,k=(y.Element,y.Transforms),C=function(e){k.increaseItemDepth(e)},E=function(e){k.decreaseItemDepth(e)},T=function(e,t){if(w.isSelectionInList(e)){var n=w.getCurrentList(e,e.selection);console.log(n);var a=Object(l.a)(n,2),c=a[0],i=a[1];t&&c.type!==t?k.setNodes(e,{type:t},{at:i}):k.unwrapList(e)}else k.wrapInList(e,t)},D=n(46),N=function(e,t){var n=h.Editor.before(e,t||e.selection,{unit:"block"});console.log(n,e.children);var a=h.Editor.next(e,{at:n,match:function(e){return"template-block"===e.type},voids:!0});if(a){var c=Object(l.a)(a,2)[1];h.Transforms.select(e,c)}},S=function(e,t){var n=h.Editor.after(e,t||e.selection,{unit:"block"});console.log(n,e.children);var a=h.Editor.previous(e,{at:n,match:function(e){return"template-block"===e.type},voids:!0});if(a){var c=Object(l.a)(a,2)[1];h.Transforms.select(e,c)}},I={"mod+b":"bold","mod+i":"italic","mod+u":"underline"},V={"mod+alt+1":"heading-one","mod+alt+2":"heading-two","mod+alt+3":"heading-three","mod+alt+4":"heading-four","mod+.":"bulleted-list","mod+/":"numbered-list"},L={"mod+]":N,"mod+[":S},F=["numbered-list","bulleted-list"],M=function(e,t){var n=A(e,t),a=F.includes(t);h.Transforms.unwrapNodes(e,{match:function(e){return!h.Editor.isEditor(e)&&h.Element.isElement(e)&&F.includes(e.type)},split:!0});var c={type:n?"paragraph":a?"list-item":t};if(h.Transforms.setNodes(e,c),!n&&a){var i={type:t,children:[]};h.Transforms.wrapNodes(e,i)}},R=function(e,t){H(e,t)?h.Editor.removeMark(e,t):h.Editor.addMark(e,t,!0)},A=function(e,t){var n=h.Editor.nodes(e,{match:function(e){return!h.Editor.isEditor(e)&&h.Element.isElement(e)&&e.type===t}});return!!Object(l.a)(n,1)[0]},H=function(e,t){var n=h.Editor.marks(e);return!!n&&!0===n[t]},P=n(13),B=n(126),J=n(10),U=n(39),W=n.n(U),Y=function(e){var t=e.attributes,n=e.children,i=e.element,r=Object(j.f)(),o=Object(j.e)(),s=Object(j.d)(),u=Object(c.useState)(i.defaultValue?i.defaultValue:null),d=Object(l.a)(u,2),O=d[0],f=d[1],p=Object(c.useState)(i.opts?i.opts:[]),m=Object(l.a)(p,2),x=m[0],g=m[1],v=Object(c.useState)(i.name),y=Object(l.a)(v,2),w=y[0],k=y[1],C=Object(c.useState)(!1),E=Object(l.a)(C,2),T=E[0],D=E[1],N=Object(c.useState)(!1),S=Object(l.a)(N,2),I=S[0],V=S[1],L=Object(c.useRef)(null),F=(Object(c.useRef)(s.selection),Object(c.useCallback)((function(e,t){f(e),R({defaultValue:e})}),[f])),M=Object(c.useCallback)((function(e){var t=e.target.value;k(t),R({name:t})}),[k]),R=Object(c.useCallback)((function(e){var t=e.name,n=e.opts,a=e.defaultValue,c=j.b.findPath(s,i),r={name:t,opts:n,defaultValue:a};h.Transforms.setNodes(s,r,{at:c})}),[]),A={boxShadow:r&&o?"0 0 0 2px #b4d5ff":"none",transform:"translateY(".concat(T?0:2,"px)"),transition:"0.3s ease all"};return Object(a.jsxs)("span",Object(b.a)(Object(b.a)({},t),{},{className:"template-block",contentEditable:!1,style:I?Object(b.a)(Object(b.a)({},A),{position:"relative",zIndex:99}):A,children:[T?Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(W.a,{placeholder:"Name this field...",value:w,onInput:M,onKeyDown:function(e){return"Enter"===e.key&&D(!T)}})}):Object(a.jsx)(B.a,{ref:L,styles:q,theme:G,placeholder:w,onChange:F,onCreateOption:function(e){var t=K(e);g([].concat(Object(P.a)(x),[t])),f(t),R({opts:[].concat(Object(P.a)(x),[t]),defaultValue:t})},onMenuOpen:function(){return V(!0)},onMenuClose:function(){return V(!1)},value:O,options:x}),Object(a.jsx)("button",{className:"name-setter",onClick:function(){D(!T)},tabIndex:-1,children:Object(a.jsx)(J.a,{icon:"bi:gear-fill"})}),n]}))},z=function(e,t){var n={type:"template-block",name:t.name,opts:t.opts,defaultValue:t.defaultValue,children:[{text:""}]};h.Transforms.insertNodes(e,n),h.Transforms.move(e)},K=function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"_")}},q={control:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{minHeight:"1.4em",height:"1.4em",paddingTop:"1px"})},valueContainer:function(e,t){var n=t.getValue(),a=Object(l.a)(n,1)[0];return Object(b.a)(Object(b.a)({},e),{},{margin:"0 0 0 4px",transform:"translateY(-2px)",width:"".concat((a?a.label.length:t.selectProps.placeholder?t.selectProps.placeholder.length:5)+2,"ex"),minWidth:"5ex"})},input:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{margin:"0px"})},indicatorSeparator:function(e){return{display:"none"}},indicatorsContainer:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{height:"1.4em",transform:"translateY(-2px)"})},menu:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{marginTop:0,zIndex:"".concat(t.selectProps.menuIsOpen?999:"inherit")})},option:function(e){return Object(b.a)(Object(b.a)({},e),{},{padding:"5px"})},noOptionsMessage:function(e){return Object(b.a)(Object(b.a)({},e),{},{padding:"5px 0"})}},G=function(e){return Object(b.a)(Object(b.a)({},e),{},{borderRadius:0,spacing:Object(b.a)(Object(b.a)({},e.spacing),{},{baseUnit:0})})},_=[{type:"paragraph",children:[{text:"Type in {{ to create a template block like this (the gear icon allows you to name the field): "},{type:"template-block",name:"sex",opts:[{label:"male",value:"male"},{label:"female",value:"female"}],defaultValue:{label:"male",value:"male"},children:[{text:""}]},{text:""}]},{type:"paragraph",children:[{text:"FastDischarge also comes with all the rich text editing features you know and love!"}]}],Q=function(e){var t=e.attributes,n=e.children,c=e.element;switch(c.type){case"bulleted-list":return Object(a.jsx)("ul",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"numbered-list":return Object(a.jsx)("ol",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-one":return Object(a.jsx)("h1",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-two":return Object(a.jsx)("h2",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-three":return Object(a.jsx)("h3",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"heading-four":return Object(a.jsx)("h4",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"list-item":return Object(a.jsx)("li",Object(b.a)(Object(b.a)({},t),{},{children:n}));case"template-block":return Object(a.jsx)(Y,{attributes:t,children:n,element:c});default:return Object(a.jsx)("p",Object(b.a)(Object(b.a)({},t),{},{children:n}))}},X=function(e){var t=e.attributes,n=e.children,c=e.leaf;return c.bold&&(n=Object(a.jsx)("strong",{children:n})),c.code&&(n=Object(a.jsx)("code",{children:n})),c.italic&&(n=Object(a.jsx)("em",{children:n})),c.underline&&(n=Object(a.jsx)("u",{children:n})),c.pretemplate&&(n=Object(a.jsx)("span",{style:{borderRadius:"5px",backgroundColor:"#ddd"},children:n})),Object(a.jsx)("span",Object(b.a)(Object(b.a)({},t),{},{children:n}))},Z=function(e){var t=e.format,n=e.icon,c=e.alt,i=Object(j.g)(),r=H(i,t);return Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:r?"active":"",onMouseDown:function(e){e.preventDefault(),R(i,t)},title:c,children:Object(a.jsx)(J.a,{icon:n})})})},$=function(e){var t=e.format,n=e.icon,c=e.alt,i=Object(j.g)(),r=A(i,t);return Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:r?"active":"",onMouseDown:function(e){e.preventDefault(),M(i,t)},title:c,children:Object(a.jsx)(J.a,{icon:n})})})},ee=function(e){var t=e.format,n=e.icon,c=e.alt,i=Object(j.g)(),r=te(i,t);return Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:r?"active":"",onMouseDown:function(e){e.preventDefault(),T(i,t)},title:c,children:Object(a.jsx)(J.a,{icon:n})})})},te=function(e,t){var n=w.getCurrentList(e);if(n)return Object(l.a)(n,1)[0].type===t},ne=function(e){var t=e.children;return Object(a.jsx)("div",{className:"toolbar-container",children:Object(a.jsx)("ul",{children:t})})},ae=function(e){var t=e.fn,n=e.icon,c=e.alt,i=Object(j.g)();return Object(a.jsx)("li",{children:Object(a.jsx)("button",{onMouseDown:function(e){e.preventDefault(),t(i)},title:c,children:Object(a.jsx)(J.a,{icon:n})})})},ce=n(122),ie=n.n(ce),re=n(123),oe=n(124),le=n.n(oe),se=n(125),ue=n.n(se),de=n(72),be=function(e){navigator.clipboard.writeText(function(e){var t=e.children.map(he),n=ie()().use(re.a).use(le.a,{bullet:"-"}),a=n.runSync({type:"root",children:t});return n.stringify(a)}(e)).then((function(){window.alert("Copied successfully!")}),(function(){window.alert("Copying failed!")}))},je=function e(t){var n=Object(b.a)({},t);switch(n.children&&(n.children=n.children.map(e)),n.type){case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},he=function e(t){var n=Object(b.a)({},t);switch(h.Text.isText(n)&&(n.strong=n.bold,n.emphasis=n.italic),n.children&&(n.children=n.children.map(e)),n.type){case"heading-one":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:1});case"heading-two":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:2});case"heading-three":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:3});case"heading-four":return Object(b.a)(Object(b.a)({},n),{},{type:"heading",depth:4});case"numbered-list":return Object(b.a)(Object(b.a)({},n),{},{type:"list",ordered:!0});case"bulleted-list":return Object(b.a)(Object(b.a)({},n),{},{type:"list",ordered:!1});case"list-item":return Object(b.a)(Object(b.a)({},n),{},{type:"listItem"});case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},Oe=function(e){return e.children.map(je).map(fe).join("")},fe=function e(t){if(h.Text.isText(t)){var n=ue()(t.text);return t.bold&&(n="<strong>".concat(n,"</strong>")),t.italic&&(n="<em>".concat(n,"</em>")),t.underline&&(n="<u>".concat(n,"</u>")),n}var a=t.children.map((function(t){return e(t)})).join("");switch(t.type){case"heading-one":return"<h1>".concat(a,"</h1>");case"heading-two":return"<h2>".concat(a,"</h2>");case"heading-three":return"<h3>".concat(a,"</h3>");case"heading-four":return"<h4>".concat(a,"</h4>");case"bulleted-list":return"<ul>".concat(a,"</ul>");case"numbered-list":return"<ol>".concat(a,"</ol>");case"list-item":return"<li>".concat(a,"</li>");default:return a}},pe=function(e){var t=new de.a({"text/html":new Blob([Oe(e)],{type:"text/html"})});de.b([t])},me=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("content"))||_),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(),o=Object(l.a)(r,2),s=o[0],u=o[1],d=Object(c.useState)(!1),p=Object(l.a)(d,2),m=p[0],x=p[1],y=Object(c.useCallback)((function(e){return Object(a.jsx)(Q,Object(b.a)({},e))}),[]),w=Object(c.useCallback)((function(e){return Object(a.jsx)(X,Object(b.a)({},e))}),[]),k=Object(c.useMemo)((function(){return Object(O.a)(g(Object(j.h)(function(e){var t=e.isInline,n=e.isVoid,a=["template-block"];return e.isInline=function(e){var n=e.type;return!!a.includes(n)||t(e)},e.isVoid=function(e){var t=e.type;return!!a.includes(t)||n(e)},e}(Object(h.createEditor)()))))}),[]);Object(c.useEffect)((function(){s&&m&&(h.Transforms.select(k,s),z(k,{}),x(!1),u(null))}),[s]);return Object(a.jsxs)(j.c,{editor:k,value:n,onChange:function(e){i(e);var t=JSON.stringify(e);localStorage.setItem("content",t);var n=k.selection;if(n&&h.Range.isCollapsed(n)){var a=h.Range.edges(n),c=Object(l.a)(a,1)[0],r=h.Editor.before(k,c,{distance:2}),o=r&&h.Editor.range(k,r,c),s=o&&h.Editor.string(k,o);s&&s.match(/\{\{/)&&(x(!0),u(o))}},children:[Object(a.jsxs)(ne,{children:[Object(a.jsx)(Z,{format:"bold",icon:"gridicons:bold",alt:"Bold (Ctrl+B)"}),Object(a.jsx)(Z,{format:"italic",icon:"gridicons:italic",alt:"Italic (Ctrl+I)"}),Object(a.jsx)(Z,{format:"underline",icon:"gridicons:underline",alt:"Underline (Ctrl+U)"}),Object(a.jsx)($,{format:"heading-one",icon:"gridicons:heading-h1",alt:"Heading 1 (Ctrl+Alt+1)"}),Object(a.jsx)($,{format:"heading-two",icon:"gridicons:heading-h2",alt:"Heading 2 (Ctrl+Alt+2)"}),Object(a.jsx)($,{format:"heading-three",icon:"gridicons:heading-h3",alt:"Heading 3 (Ctrl+Alt+3)"}),Object(a.jsx)($,{format:"heading-four",icon:"gridicons:heading-h4",alt:"Heading 4 (Ctrl+Alt+4)"}),Object(a.jsx)(ee,{format:"bulleted-list",icon:"ic:baseline-format-list-bulleted",alt:"Bulleted list (Ctrl+.)"}),Object(a.jsx)(ee,{format:"numbered-list",icon:"ic:baseline-format-list-numbered",alt:"Numbered list (Ctrl+/)"}),Object(a.jsx)(ae,{fn:C,icon:"bx:bx-right-indent",alt:"Indent list item (Tab)"}),Object(a.jsx)(ae,{fn:E,icon:"bx:bx-left-indent",alt:"Dedent list item (Shift-Tab)"}),Object(a.jsx)(ae,{fn:function(e){return z(e,{})},icon:"uil:brackets-curly",alt:"Insert a template block (type in {{)"}),Object(a.jsx)(ae,{fn:be,icon:"ion:copy-outline",alt:"Copy to clipboard as plain text (Markdown)"}),Object(a.jsx)(ae,{fn:pe,icon:"ion:copy",alt:"Copy to clipboard as rich text"}),Object(a.jsx)(ae,{fn:function(){var e=new Blob([JSON.stringify(k.children)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.setAttribute("download","template.fdt"),n.click(),n.remove()},icon:"bx:bxs-download",alt:"Save current template/contents as file"}),Object(a.jsx)(ae,{fn:function(){var e=document.createElement("input");e.setAttribute("type","file"),e.click(),e.addEventListener("change",(function(t){if(e.files&&e.files.length>=1){var n=e.files[0],a=new FileReader;a.readAsText(n),a.onload=function(e){var t=JSON.parse(e.target.result);i(t)}}}))},icon:"ic:baseline-file-upload",alt:"Open a template/document from a file"})]}),Object(a.jsx)(f.a,{className:"editor",children:Object(a.jsx)(j.a,{renderElement:y,renderLeaf:w,placeholder:"Enter some text...",spellCheck:!0,autoFocus:!0,onKeyDown:function(e){console.log(h.Editor.node(k,k.selection)),v(k)(e),function(e,t){for(var n in I)Object(D.isHotkey)(n,e)&&(e.preventDefault(),R(t,I[n]));for(var a in V)if(Object(D.isHotkey)(a,e)){e.preventDefault();var c=V[a];if(F.includes(c))switch(c){case"bulleted-list":T(t,"bulleted-list");break;case"numbered-list":T(t,"numbered-list")}else M(t,c)}for(var i in L)Object(D.isHotkey)(i,e)&&(e.preventDefault(),(0,L[i])(t))}(e,k)}})})]})};var xe=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("img",{src:d,alt:"Running man",style:{height:"1em",display:"inline-block",transform:"translateY(6px)"}}),"FastDischarge"]})}),Object(a.jsx)("div",{className:"editor-container",children:Object(a.jsx)(me,{})}),Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"oneline",children:[Object(a.jsxs)("p",{children:["\xa9 ",Object(a.jsx)("a",{href:"https://github.com/newageoflight",children:"Christopher Chen"})," 2021-"]}),Object(a.jsx)("button",{onClick:function(){return i(!0)},children:Object(a.jsx)(J.a,{icon:"bx:bx-help-circle"})})]})}),Object(a.jsxs)(u.a,{isOpen:n,onRequestClose:function(){return i(!1)},contentLabel:"About FastDischarge",children:[Object(a.jsxs)("div",{className:"modal-header",children:[Object(a.jsx)("h2",{children:"About FastDischarge"}),Object(a.jsx)("button",{onClick:function(){return i(!1)},children:Object(a.jsx)(J.a,{icon:"eva:close-fill"})})]}),Object(a.jsxs)("div",{className:"modal-body",children:[Object(a.jsxs)("p",{children:["FastDischarge aims to be an open-source medical documentation platform that is truly ",Object(a.jsx)("em",{children:"fast"}),"."]}),Object(a.jsx)("p",{children:"With FastDischarge, you can easily create template fields and prepopulate them with commonly used values of your choice. FastDischarge lets you write your progress notes and discharge letters faster, so you can get back to being a doctor."}),Object(a.jsxs)("p",{children:["If you have experience working with Slate.js, React.js or Typescript, please consider contributing to this project on ",Object(a.jsx)("a",{href:"https://github.com/newageoflight/fast-discharge",children:"Github"}),"."]}),Object(a.jsxs)("p",{children:["Developed by ",Object(a.jsx)("a",{href:"mailto:camint3rnal@live.com",children:"Christopher Chen"})," (JMO/Intern)"]}),Object(a.jsx)("h3",{children:"Usage guide"}),Object(a.jsxs)("p",{children:["To ",Object(a.jsx)("strong",{children:"create a template field"}),", type ",Object(a.jsx)("kbd",{children:"{{"})," into the editor or press the ",Object(a.jsx)(J.a,{icon:"uil:brackets-curly"})," button in the toolbar."]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Set your template options"})," by clicking on the dropdown menu and typing in some text."]}),Object(a.jsxs)("p",{children:["To finalise your document and copy it as plain text (e.g. Web DeLacy), press the ",Object(a.jsx)(J.a,{icon:"ion:copy-outline"})," button in the toolbar."]}),Object(a.jsxs)("p",{children:["To finalise your document and copy it as rich text (e.g. PowerChart), press the ",Object(a.jsx)(J.a,{icon:"ion:copy"})," button in the toolbar."]})]}),Object(a.jsx)("div",{className:"modal-footer"})]})]})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(xe,{})}),document.getElementById("root")),ge()}},[[287,1,2]]]);
//# sourceMappingURL=main.885a3382.chunk.js.map