(this["webpackJsonpfast-discharge"]=this["webpackJsonpfast-discharge"]||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),i=n(15),l=n.n(i),o=(n(56),n(57),n.p+"static/media/running.bda043eb.svg"),s=n(4),u=n(2),d=n(9),b=n(1),j=n(50),f=n(7),h=Object(f.EditListPlugin)({types:["bulleted-list","numbered-list"],typeItem:"list-item"}),O=Object(u.a)(h,3),m=O[0],p=O[1],g=O[2],x=g.Editor,v=(g.Element,g.Transforms),y=function(e){v.increaseItemDepth(e)},w=function(e){v.decreaseItemDepth(e)},k=function(e,t){x.isSelectionInList(e)?v.unwrapList(e):v.wrapInList(e,t)},C=n(23),E=function(e,t){var n=b.Editor.before(e,t||e.selection,{unit:"block"});console.log(n,e.children);var a=b.Editor.next(e,{at:n,match:function(e){return"template-block"===e.type},voids:!0});if(a){var c=Object(u.a)(a,2)[1];b.Transforms.select(e,c)}},T=function(e,t){var n=b.Editor.after(e,t||e.selection,{unit:"block"});console.log(n,e.children);var a=b.Editor.previous(e,{at:n,match:function(e){return"template-block"===e.type},voids:!0});if(a){var c=Object(u.a)(a,2)[1];b.Transforms.select(e,c)}},N={"mod+b":"bold","mod+i":"italic","mod+u":"underline"},S={"mod+alt+1":"heading-one","mod+alt+2":"heading-two","mod+alt+3":"heading-three","mod+alt+4":"heading-four","mod+.":"bulleted-list","mod+/":"numbered-list"},D={"mod+]":E,"mod+[":T},I=["numbered-list","bulleted-list"],V=function(e,t){var n=M(e,t),a=I.includes(t);b.Transforms.unwrapNodes(e,{match:function(e){return!b.Editor.isEditor(e)&&b.Element.isElement(e)&&I.includes(e.type)},split:!0});var c={type:n?"paragraph":a?"list-item":t};if(b.Transforms.setNodes(e,c),!n&&a){var r={type:t,children:[]};b.Transforms.wrapNodes(e,r)}},L=function(e,t){R(e,t)?b.Editor.removeMark(e,t):b.Editor.addMark(e,t,!0)},M=function(e,t){var n=b.Editor.nodes(e,{match:function(e){return!b.Editor.isEditor(e)&&b.Element.isElement(e)&&e.type===t}});return!!Object(u.a)(n,1)[0]},R=function(e,t){var n=b.Editor.marks(e);return!!n&&!0===n[t]},A=n(10),F=n(49),H=n(12),P=n(20),B=n.n(P),J=function(e){var t=e.attributes,n=e.children,r=e.element,i=Object(d.f)(),l=Object(d.e)(),o=Object(d.d)(),j=Object(c.useState)(r.defaultValue?r.defaultValue:null),f=Object(u.a)(j,2),h=f[0],O=f[1],m=Object(c.useState)(r.opts?r.opts:[]),p=Object(u.a)(m,2),g=p[0],x=p[1],v=Object(c.useState)(r.name),y=Object(u.a)(v,2),w=y[0],k=y[1],C=Object(c.useState)(!1),E=Object(u.a)(C,2),T=E[0],N=E[1],S=Object(c.useRef)(null),D=(Object(c.useRef)(o.selection),Object(c.useCallback)((function(e,t){O(e),V({defaultValue:e})}),[O])),I=Object(c.useCallback)((function(e){var t=e.target.value;k(t),V({name:t})}),[k]),V=Object(c.useCallback)((function(e){var t=e.name,n=e.opts,a=e.defaultValue;console.log("changeProps called");var c=d.b.findPath(o,r),i={name:t,opts:n,defaultValue:a};console.log(c,i,o.children),b.Transforms.setNodes(o,i,{at:c})}),[]);return Object(a.jsxs)("span",Object(s.a)(Object(s.a)({},t),{},{className:"template-block",contentEditable:!1,style:{boxShadow:i&&l?"0 0 0 2px #b4d5ff":"none",transform:"translateY(".concat(T?0:2,"px)")},children:[T?Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(B.a,{placeholder:"Name this field...",value:w,onInput:I,onKeyDown:function(e){return"Enter"===e.key&&N(!T)}})}):Object(a.jsx)(F.a,{ref:S,styles:K,theme:W,placeholder:w,onChange:D,onCreateOption:function(e){var t=Y(e);x([].concat(Object(A.a)(g),[t])),O(t),V({opts:[].concat(Object(A.a)(g),[t]),defaultValue:t})},value:h,options:g}),Object(a.jsx)("button",{className:"name-setter",onClick:function(){N(!T)},children:Object(a.jsx)(H.a,{icon:"bi:gear-fill"})}),n]}))},U=function(e,t){var n={type:"template-block",name:t.name,opts:t.opts,defaultValue:t.defaultValue,children:[{text:""}]};b.Transforms.insertNodes(e,n),b.Transforms.move(e)},Y=function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"_")}},K={control:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{minHeight:"1.4em",height:"1.4em",paddingTop:"1px"})},valueContainer:function(e,t){var n=t.getValue(),a=Object(u.a)(n,1)[0];return Object(s.a)(Object(s.a)({},e),{},{margin:"0 0 0 4px",transform:"translateY(-2px)",width:"".concat((a?a.label.length:t.selectProps.placeholder?t.selectProps.placeholder.length:5)+2,"ex"),minWidth:"5ex"})},input:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{margin:"0px"})},indicatorSeparator:function(e){return{display:"none"}},indicatorsContainer:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{height:"1.4em"})},menu:function(e,t){return Object(s.a)(Object(s.a)({},e),{},{marginTop:0,zIndex:"".concat(t.selectProps.menuIsOpen?999:"inherit")})},option:function(e){return Object(s.a)(Object(s.a)({},e),{},{padding:"5px"})},noOptionsMessage:function(e){return Object(s.a)(Object(s.a)({},e),{},{padding:"5px 0"})}},W=function(e){return Object(s.a)(Object(s.a)({},e),{},{borderRadius:0,spacing:Object(s.a)(Object(s.a)({},e.spacing),{},{baseUnit:0})})},z=[{type:"paragraph",children:[{text:"Type in {{ to create a template block like this (the gear icon allows you to name the field): "},{type:"template-block",name:"sex",opts:[{label:"male",value:"male"},{label:"female",value:"female"}],defaultValue:{label:"male",value:"male"},children:[{text:""}]},{text:""}]},{type:"paragraph",children:[{text:"FastDischarge also comes with all the rich text editing features you know and love!"}]}],_=function(e){var t=e.attributes,n=e.children,c=e.element;switch(c.type){case"bulleted-list":return Object(a.jsx)("ul",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"numbered-list":return Object(a.jsx)("ol",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"heading-one":return Object(a.jsx)("h1",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"heading-two":return Object(a.jsx)("h2",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"heading-three":return Object(a.jsx)("h3",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"heading-four":return Object(a.jsx)("h4",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"list-item":return Object(a.jsx)("li",Object(s.a)(Object(s.a)({},t),{},{children:n}));case"template-block":return Object(a.jsx)(J,{attributes:t,children:n,element:c});default:return Object(a.jsx)("p",Object(s.a)(Object(s.a)({},t),{},{children:n}))}},q=function(e){var t=e.attributes,n=e.children,c=e.leaf;return c.bold&&(n=Object(a.jsx)("strong",{children:n})),c.code&&(n=Object(a.jsx)("code",{children:n})),c.italic&&(n=Object(a.jsx)("em",{children:n})),c.underline&&(n=Object(a.jsx)("u",{children:n})),c.pretemplate&&(n=Object(a.jsx)("span",{style:{borderRadius:"5px",backgroundColor:"#ddd"},children:n})),Object(a.jsx)("span",Object(s.a)(Object(s.a)({},t),{},{children:n}))},G=function(e){var t=e.format,n=e.icon,c=e.alt,r=Object(d.g)(),i=R(r,t);return Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:i?"active":"",onMouseDown:function(e){e.preventDefault(),L(r,t)},title:c,children:Object(a.jsx)(H.a,{icon:n})})})},Q=function(e){var t=e.format,n=e.icon,c=e.alt,r=Object(d.g)(),i=M(r,t);return Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:i?"active":"",onMouseDown:function(e){e.preventDefault(),V(r,t)},title:c,children:Object(a.jsx)(H.a,{icon:n})})})},X=function(e){var t=e.format,n=e.icon,c=e.alt,r=Object(d.g)(),i=Z(r,t);return Object(a.jsx)("li",{children:Object(a.jsx)("button",{className:i?"active":"",onMouseDown:function(e){e.preventDefault(),k(r,t)},title:c,children:Object(a.jsx)(H.a,{icon:n})})})},Z=function(e,t){var n=x.getCurrentList(e);if(n)return Object(u.a)(n,1)[0].type===t},$=function(e){var t=e.children;return Object(a.jsx)("div",{className:"toolbar-container",children:Object(a.jsx)("ul",{children:t})})},ee=function(e){var t=e.fn,n=e.icon,c=e.alt,r=Object(d.g)();return Object(a.jsx)("li",{children:Object(a.jsx)("button",{onMouseDown:function(e){e.preventDefault(),t(r)},title:c,children:Object(a.jsx)(H.a,{icon:n})})})},te=n(45),ne=n.n(te),ae=n(46),ce=n(47),re=n.n(ce),ie=n(48),le=n.n(ie),oe=n(31),se=function(e){navigator.clipboard.writeText(function(e){var t=e.children.map(de),n=ne()().use(ae.a).use(re.a,{bullet:"-"}),a=n.runSync({type:"root",children:t});return n.stringify(a)}(e)).then((function(){window.alert("Copied successfully!")}),(function(){window.alert("Copying failed!")}))},ue=function e(t){var n=Object(s.a)({},t);switch(n.children&&(n.children=n.children.map(e)),n.type){case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},de=function e(t){var n=Object(s.a)({},t);switch(b.Text.isText(n)&&(n.strong=n.bold,n.emphasis=n.italic),n.children&&(n.children=n.children.map(e)),n.type){case"heading-one":return Object(s.a)(Object(s.a)({},n),{},{type:"heading",depth:1});case"heading-two":return Object(s.a)(Object(s.a)({},n),{},{type:"heading",depth:2});case"heading-three":return Object(s.a)(Object(s.a)({},n),{},{type:"heading",depth:3});case"heading-four":return Object(s.a)(Object(s.a)({},n),{},{type:"heading",depth:4});case"numbered-list":return Object(s.a)(Object(s.a)({},n),{},{type:"list",ordered:!0});case"bulleted-list":return Object(s.a)(Object(s.a)({},n),{},{type:"list",ordered:!1});case"list-item":return Object(s.a)(Object(s.a)({},n),{},{type:"listItem"});case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},be=function(e){return e.children.map(ue).map(je).join("")},je=function e(t){if(b.Text.isText(t)){var n=le()(t.text);return t.bold&&(n="<strong>".concat(n,"</strong>")),t.italic&&(n="<em>".concat(n,"</em>")),t.underline&&(n="<u>".concat(n,"</u>")),n}var a=t.children.map((function(t){return e(t)})).join("");switch(t.type){case"heading-one":return"<h1>".concat(a,"</h1>");case"heading-two":return"<h2>".concat(a,"</h2>");case"heading-three":return"<h3>".concat(a,"</h3>");case"heading-four":return"<h4>".concat(a,"</h4>");case"bulleted-list":return"<ul>".concat(a,"</ul>");case"numbered-list":return"<ol>".concat(a,"</ol>");case"list-item":return"<li>".concat(a,"</li>");default:return a}},fe=function(e){var t=new oe.a({"text/html":new Blob([be(e)],{type:"text/html"})});oe.b([t])},he=function(){var e=Object(c.useState)(JSON.parse(localStorage.getItem("content"))||z),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(),l=Object(u.a)(i,2),o=l[0],f=l[1],h=Object(c.useState)(!1),O=Object(u.a)(h,2),g=O[0],x=O[1],v=Object(c.useCallback)((function(e){return Object(a.jsx)(_,Object(s.a)({},e))}),[]),E=Object(c.useCallback)((function(e){return Object(a.jsx)(q,Object(s.a)({},e))}),[]),T=Object(c.useMemo)((function(){return Object(j.a)(m(Object(d.h)(function(e){var t=e.isInline,n=e.isVoid,a=["template-block"];return e.isInline=function(e){var n=e.type;return!!a.includes(n)||t(e)},e.isVoid=function(e){var t=e.type;return!!a.includes(t)||n(e)},e}(Object(b.createEditor)()))))}),[]);Object(c.useEffect)((function(){o&&g&&(b.Transforms.select(T,o),U(T,{}),x(!1),f(null))}),[o]);return Object(a.jsxs)(d.c,{editor:T,value:n,onChange:function(e){r(e);var t=JSON.stringify(e);localStorage.setItem("content",t),console.log(e);var n=T.selection;if(n&&b.Range.isCollapsed(n)){var a=b.Range.edges(n),c=Object(u.a)(a,1)[0],i=b.Editor.before(T,c,{distance:2}),l=i&&b.Editor.range(T,i,c),o=l&&b.Editor.string(T,l);o&&o.match(/\{\{/)&&(x(!0),f(l))}},children:[Object(a.jsxs)($,{children:[Object(a.jsx)(G,{format:"bold",icon:"gridicons:bold",alt:"Bold (Ctrl+B)"}),Object(a.jsx)(G,{format:"italic",icon:"gridicons:italic",alt:"Italic (Ctrl+I)"}),Object(a.jsx)(G,{format:"underline",icon:"gridicons:underline",alt:"Underline (Ctrl+U)"}),Object(a.jsx)(Q,{format:"heading-one",icon:"gridicons:heading-h1",alt:"Heading 1 (Ctrl+Alt+1)"}),Object(a.jsx)(Q,{format:"heading-two",icon:"gridicons:heading-h2",alt:"Heading 2 (Ctrl+Alt+2)"}),Object(a.jsx)(Q,{format:"heading-three",icon:"gridicons:heading-h3",alt:"Heading 3 (Ctrl+Alt+3)"}),Object(a.jsx)(Q,{format:"heading-four",icon:"gridicons:heading-h4",alt:"Heading 4 (Ctrl+Alt+4)"}),Object(a.jsx)(X,{format:"bulleted-list",icon:"ic:baseline-format-list-bulleted",alt:"Bulleted list (Ctrl+.)"}),Object(a.jsx)(X,{format:"numbered-list",icon:"ic:baseline-format-list-numbered",alt:"Numbered list (Ctrl+/)"}),Object(a.jsx)(ee,{fn:y,icon:"bx:bx-right-indent",alt:"Indent list item (Tab)"}),Object(a.jsx)(ee,{fn:w,icon:"bx:bx-left-indent",alt:"Dedent list item (Shift-Tab)"}),Object(a.jsx)(ee,{fn:function(e){return U(e,{})},icon:"uil:brackets-curly",alt:"Insert a template block (type in {{)"}),Object(a.jsx)(ee,{fn:se,icon:"ion:copy-outline",alt:"Copy to clipboard as plain text (Markdown)"}),Object(a.jsx)(ee,{fn:fe,icon:"ion:copy",alt:"Copy to clipboard as rich text"}),Object(a.jsx)(ee,{fn:function(){var e=new Blob([JSON.stringify(T.children)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.setAttribute("download","template.fdt"),n.click(),n.remove()},icon:"bx:bxs-download",alt:"Save current template/contents as file"}),Object(a.jsx)(ee,{fn:function(){var e=document.createElement("input");e.setAttribute("type","file"),e.click(),e.addEventListener("change",(function(t){if(e.files&&e.files.length>=1){var n=e.files[0],a=new FileReader;a.readAsText(n),a.onload=function(e){var t=JSON.parse(e.target.result);r(t)}}}))},icon:"ic:baseline-file-upload",alt:"Open a template/document from a file"})]}),Object(a.jsx)("div",{className:"editor",children:Object(a.jsx)(d.a,{renderElement:v,renderLeaf:E,placeholder:"Enter some text...",spellCheck:!0,autoFocus:!0,onKeyDown:function(e){console.log(b.Editor.node(T,T.selection)),p(T)(e),function(e,t){for(var n in N)Object(C.isHotkey)(n,e)&&(e.preventDefault(),L(t,N[n]));for(var a in S)if(Object(C.isHotkey)(a,e)){e.preventDefault();var c=S[a];if(I.includes(c))switch(c){case"bulleted-list":k(t);break;case"numbered-list":k(t,"numbered-list")}else V(t,c)}for(var r in D)Object(C.isHotkey)(r,e)&&(e.preventDefault(),(0,D[r])(t))}(e,T)}})})]})};var Oe=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("h1",{children:[Object(a.jsx)("img",{src:o,alt:"Running man",style:{height:"1em",display:"inline-block",transform:"translateY(6px)"}}),"FastDischarge"]})}),Object(a.jsx)("div",{className:"editor-container",children:Object(a.jsx)(he,{})}),Object(a.jsx)("footer",{children:Object(a.jsxs)("p",{children:["\xa9 ",Object(a.jsx)("a",{href:"https://github.com/newageoflight",children:"Christopher Chen"})," 2021-"]})})]})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Oe,{})}),document.getElementById("root")),me()},56:function(e,t,n){},57:function(e,t,n){}},[[153,1,2]]]);
//# sourceMappingURL=main.87deac62.chunk.js.map