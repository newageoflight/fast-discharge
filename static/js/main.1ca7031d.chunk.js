(this["webpackJsonpfast-discharge"]=this["webpackJsonpfast-discharge"]||[]).push([[0],{140:function(e,t,n){},152:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),r=n.n(a),i=n(18),o=n.n(i),s=n(26),l=(n(140),n(1)),u=n(121),b=n.n(u),d=(n(152),n.p+"static/media/running.bda043eb.svg"),j=n(4),h=n(9),f=n(2),O=n(133),p=n(132),m=(n(198),n(8)),g=Object(m.EditListPlugin)({types:["bulleted-list","numbered-list"],typeItem:"list-item"}),x=Object(l.a)(g,3),v=x[0],y=x[1],w=x[2],k=w.Editor,C=(w.Element,w.Transforms),E=function(e){C.increaseItemDepth(e)},S=function(e){C.decreaseItemDepth(e)},D=function(e,t){if(k.isSelectionInList(e)){var n=k.getCurrentList(e,e.selection);console.log(n);var c=Object(l.a)(n,2),a=c[0],r=c[1];t&&a.type!==t?C.setNodes(e,{type:t},{at:r}):C.unwrapList(e)}else C.wrapInList(e,t)},N=n(51),T=function(e,t){var n=t||e.selection,c=f.Editor.next(e,{at:n,match:function(e){return"template-block"===e.type},mode:"lowest",voids:!0});if(c){var a=Object(l.a)(c,2)[1];f.Transforms.select(e,a)}},I=function(e,t){var n=t||e.selection,c=f.Editor.previous(e,{at:n,match:function(e){return"template-block"===e.type},mode:"lowest",voids:!0});if(c){var a=Object(l.a)(c,2)[1];f.Transforms.select(e,a)}},A={"mod+b":"bold","mod+i":"italic","mod+u":"underline"},F={"mod+alt+1":"heading-one","mod+alt+2":"heading-two","mod+alt+3":"heading-three","mod+alt+4":"heading-four","mod+.":"bulleted-list","mod+/":"numbered-list"},R={"mod+]":T,"mod+[":I},L=["numbered-list","bulleted-list"],M=function(e,t){var n=B(e,t),c=L.includes(t);f.Transforms.unwrapNodes(e,{match:function(e){return!f.Editor.isEditor(e)&&f.Element.isElement(e)&&L.includes(e.type)},split:!0});var a={type:n?"paragraph":c?"list-item":t};if(f.Transforms.setNodes(e,a),!n&&c){var r={type:t,children:[]};f.Transforms.wrapNodes(e,r)}},V=function(e,t){J(e,t)?f.Editor.removeMark(e,t):f.Editor.addMark(e,t,!0)},B=function(e,t){var n=f.Editor.nodes(e,{match:function(e){return!f.Editor.isEditor(e)&&f.Element.isElement(e)&&e.type===t}});return!!Object(l.a)(n,1)[0]},J=function(e,t){var n=f.Editor.marks(e);return!!n&&!0===n[t]},P=function(e,t,n,c,a){var r=a||t,i=f.Editor.before(e,t,c),o=i&&f.Editor.range(e,i,r),s=o&&f.Editor.string(e,o),l=s&&s.match(n);return{range:o,text:s,match:l}},Y=n(11),H=n(5),U=n(125),W=n.n(U),$=n(126),q=n(127),z=n.n(q),G=n(128),K=n.n(G),X=n(77),_=function(e){navigator.clipboard.writeText(function(e){var t,n=e.children.map(Z),c=W()().use($.a).use(z.a,{bullet:"-"}),a=c.runSync({type:"root",children:n}),r=c.stringify(a).split("\n"),i=r.map((function(e){return!!e.match(/^\s*(-|\d+\.)\s+/g)})).map((function(e){return e?"t":"f"})).join("").matchAll(/t(ft)+/g),o=[],s=Object(H.a)(i);try{var u=function(){var e=t.value,n=Object(l.a)(e,1)[0],c=e.index,a=Object(Y.a)(n).map((function(e,t){return"f"===e?c+t:-1})).filter((function(e){return e>=0}));o=o.concat(a)};for(s.s();!(t=s.n()).done;)u()}catch(b){s.e(b)}finally{s.f()}return r.map((function(e,t){return o.includes(t)?null:e})).filter((function(e){return null!==e})).join("\n")}(e)).then((function(){window.alert("Copied successfully!")}),(function(){window.alert("Copying failed!")}))},Q=function e(t){var n=Object(j.a)({},t);switch(n.children&&(n.children=n.children.map(e)),n.type){case"template-block":return{text:n.defaultValue?n.defaultValue.value:""};default:return n}},Z=function e(t){var n=Object(j.a)({},t);switch(f.Text.isText(n)&&(n.strong=n.bold,n.emphasis=n.italic),n.children&&(n.children=n.children.map(e)),n.type){case"heading-one":return Object(j.a)(Object(j.a)({},n),{},{type:"heading",depth:1});case"heading-two":return Object(j.a)(Object(j.a)({},n),{},{type:"heading",depth:2});case"heading-three":return Object(j.a)(Object(j.a)({},n),{},{type:"heading",depth:3});case"heading-four":return Object(j.a)(Object(j.a)({},n),{},{type:"heading",depth:4});case"numbered-list":return Object(j.a)(Object(j.a)({},n),{},{type:"list",ordered:!0});case"bulleted-list":return Object(j.a)(Object(j.a)({},n),{},{type:"list",ordered:!1});case"list-item":return Object(j.a)(Object(j.a)({},n),{},{type:"listItem"});case"template-block":return{text:n.defaultValue?n.defaultValue.label:""};default:return n}},ee=function(e){return e.children.map(Q).map(te).join("")},te=function e(t){if(f.Text.isText(t)){var n=K()(t.text);return t.bold&&(n="<strong>".concat(n,"</strong>")),t.italic&&(n="<em>".concat(n,"</em>")),t.underline&&(n="<u>".concat(n,"</u>")),n}var c=t.children.map((function(t){return e(t)})).join("");switch(t.type){case"heading-one":return"<h1>".concat(c,"</h1>");case"heading-two":return"<h2>".concat(c,"</h2>");case"heading-three":return"<h3>".concat(c,"</h3>");case"heading-four":return"<h4>".concat(c,"</h4>");case"bulleted-list":return"<ul>".concat(c,"</ul>");case"numbered-list":return"<ol>".concat(c,"</ol>");case"list-item":return"<li>".concat(c,"</li>");default:return c}},ne=function(e){var t=new X.a({"text/html":new Blob([ee(e)],{type:"text/html"})});try{X.b([t]),window.alert("Copied successfully!")}catch(n){window.alert("Copying failed!")}},ce=n(131),ae=n(10),re=n(41),ie=n.n(re),oe=function(e){var t=e.attributes,n=e.children,r=e.element,i=Object(h.f)(),o=Object(h.e)(),s=Object(h.d)(),u=Object(a.useState)(r.defaultValue?r.defaultValue:null),b=Object(l.a)(u,2),d=b[0],O=b[1],p=Object(a.useState)(r.opts?r.opts:[]),m=Object(l.a)(p,2),g=m[0],x=m[1],v=Object(a.useState)(r.name),y=Object(l.a)(v,2),w=y[0],k=y[1],C=Object(a.useState)(!1),E=Object(l.a)(C,2),S=E[0],D=E[1],N=Object(a.useState)(!1),T=Object(l.a)(N,2),I=T[0],A=T[1],F=Object(a.useRef)(null),R=Object(a.useCallback)((function(e,t){O(e),M({defaultValue:e})}),[O]),L=Object(a.useCallback)((function(e){var t=e.target.value;k(t),M({name:t})}),[k]),M=Object(a.useCallback)((function(e){var t=h.b.findPath(s,r),n=Object(j.a)({},e);f.Transforms.setNodes(s,n,{at:t})}),[]),V={boxShadow:i&&o?"0 0 0 2px #b4d5ff":"none",transform:"translateY(".concat(S?0:2,"px)"),transition:"0.3s ease all"};return Object(c.jsxs)("span",Object(j.a)(Object(j.a)({},t),{},{className:"template-block",contentEditable:!1,style:I?Object(j.a)(Object(j.a)({},V),{position:"relative",zIndex:99}):V,children:[S?Object(c.jsx)("div",{className:"content",children:Object(c.jsx)(ie.a,{placeholder:"Name this field...",value:w,onInput:L,onKeyDown:function(e){return"Enter"===e.key&&D(!S)}})}):Object(c.jsx)(ce.a,{ref:F,styles:ue,theme:be,placeholder:w,onChange:R,onCreateOption:function(e){var t=le(e);x([].concat(Object(Y.a)(g),[t])),O(t),M({opts:[].concat(Object(Y.a)(g),[t]),defaultValue:t})},onMenuOpen:function(){return A(!0)},onMenuClose:function(){return A(!1)},value:d,options:g}),Object(c.jsx)("button",{className:"name-setter",onClick:function(){D(!S)},tabIndex:-1,children:Object(c.jsx)(ae.a,{icon:"bi:gear-fill"})}),n]}))},se=function(e,t){var n=Object(j.a)({type:"template-block",children:[{text:""}]},t);f.Transforms.insertNodes(e,n),f.Transforms.move(e)},le=function(e){return{label:e,value:e}},ue={control:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{minHeight:"1.4em",height:"1.4em",paddingTop:"1px"})},valueContainer:function(e,t){var n=t.getValue(),c=Object(l.a)(n,1)[0];return Object(j.a)(Object(j.a)({},e),{},{margin:"0 0 0 4px",transform:"translateY(-2px)",width:"".concat((c?c.label.length:t.selectProps.placeholder?t.selectProps.placeholder.length:5)+2,"ex"),minWidth:"5ex"})},input:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{margin:"0px"})},indicatorSeparator:function(e){return{display:"none"}},indicatorsContainer:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{height:"1.4em",transform:"translateY(-2px)"})},menu:function(e,t){return Object(j.a)(Object(j.a)({},e),{},{marginTop:0,zIndex:"".concat(t.selectProps.menuIsOpen?999:"inherit")})},option:function(e){return Object(j.a)(Object(j.a)({},e),{},{padding:"5px"})},noOptionsMessage:function(e){return Object(j.a)(Object(j.a)({},e),{},{padding:"5px 0"})}},be=function(e){return Object(j.a)(Object(j.a)({},e),{},{borderRadius:0,spacing:Object(j.a)(Object(j.a)({},e.spacing),{},{baseUnit:0})})},de=[{type:"paragraph",children:[{text:"Type in {{ to create a template block like this (the gear icon allows you to name the field): "},{type:"template-block",name:"sex",opts:[{label:"male",value:"male"},{label:"female",value:"female"}],defaultValue:{label:"male",value:"male"},children:[{text:""}]},{text:""}]},{type:"paragraph",children:[{text:"FastDischarge also comes with all the rich text editing features you know and love!"}]}],je=function(e){var t=e.attributes,n=e.children,a=e.element;switch(a.type){case"bulleted-list":return Object(c.jsx)("ul",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"numbered-list":return Object(c.jsx)("ol",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"heading-one":return Object(c.jsx)("h1",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"heading-two":return Object(c.jsx)("h2",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"heading-three":return Object(c.jsx)("h3",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"heading-four":return Object(c.jsx)("h4",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"list-item":return Object(c.jsx)("li",Object(j.a)(Object(j.a)({},t),{},{children:n}));case"template-block":return Object(c.jsx)(oe,{attributes:t,children:n,element:a});default:return Object(c.jsx)("p",Object(j.a)(Object(j.a)({},t),{},{children:n}))}},he=function(e){var t=e.attributes,n=e.children,a=e.leaf;return a.bold&&(n=Object(c.jsx)("strong",{children:n})),a.code&&(n=Object(c.jsx)("code",{children:n})),a.italic&&(n=Object(c.jsx)("em",{children:n})),a.underline&&(n=Object(c.jsx)("u",{children:n})),a.pretemplate&&(n=Object(c.jsx)("span",{style:{borderRadius:"5px",backgroundColor:"#ddd"},children:n})),Object(c.jsx)("span",Object(j.a)(Object(j.a)({},t),{},{children:n}))},fe=function(e){var t=e.format,n=e.icon,a=e.alt,r=Object(h.g)(),i=J(r,t);return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:i?"active":"",onMouseDown:function(e){e.preventDefault(),V(r,t)},title:a,children:Object(c.jsx)(ae.a,{icon:n})})})},Oe=function(e){var t=e.format,n=e.icon,a=e.alt,r=Object(h.g)(),i=B(r,t);return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:i?"active":"",onMouseDown:function(e){e.preventDefault(),M(r,t)},title:a,children:Object(c.jsx)(ae.a,{icon:n})})})},pe=function(e){var t=e.format,n=e.icon,a=e.alt,r=Object(h.g)(),i=me(r,t);return Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:i?"active":"",onMouseDown:function(e){e.preventDefault(),D(r,t)},title:a,children:Object(c.jsx)(ae.a,{icon:n})})})},me=function(e,t){var n=k.getCurrentList(e);if(n)return Object(l.a)(n,1)[0].type===t},ge=function(e){var t=e.children;return Object(c.jsx)("div",{className:"toolbar-container",children:Object(c.jsx)("ul",{children:t})})},xe=function(e){var t=e.fn,n=e.icon,a=e.alt,r=Object(h.g)();return Object(c.jsx)("li",{children:Object(c.jsx)("button",{onMouseDown:function(e){e.preventDefault(),t(r)},title:a,children:Object(c.jsx)(ae.a,{icon:n})})})},ve=function(e){var t=e.children;return o.a.createPortal(t,document.body)},ye=localStorage.getItem("dotAbbrevs"),we=Object(s.b)({key:"DotAbbreviations",default:ye?JSON.parse(ye):{}}),ke=function(){var e=Object(a.useRef)(null),t=Object(h.g)(),n=Object(s.d)(we);return Object(a.useEffect)((function(){var n=e.current,c=t.selection;if(n)if(c&&h.b.isFocused(t)&&!f.Range.isCollapsed(c)&&""!==f.Editor.string(t,c)){var a=window.getSelection(),r=null===a||void 0===a?void 0:a.getRangeAt(0),i=null===r||void 0===r?void 0:r.getBoundingClientRect();n.style.opacity="1",n.style.top="".concat(i.top+window.pageYOffset-n.offsetHeight,"px"),n.style.left="".concat(i.left+window.pageXOffset-n.offsetWidth/2+15,"px")}else n.removeAttribute("style")})),Object(c.jsx)(ve,{children:Object(c.jsx)("div",{className:"hovering-menubar",ref:e,children:Object(c.jsx)("ul",{children:Object(c.jsx)(xe,{fn:function(){return function(e,t){var n,c=e.selection,a=localStorage.getItem("dotAbbrevs")&&JSON.parse(localStorage.getItem("dotAbbrevs")),r=f.Editor.fragment(e,c),i=window.prompt("Name this fragment: "),o={};o[i]=r,n=a?Object(j.a)(Object(j.a)({},a),o):Object(j.a)({},o);t(n),localStorage.setItem("dotAbbrevs",JSON.stringify(n))}(t,n)},icon:"bi:dot",alt:"Save as a dot abbreviation"})})})})};var Ce=r.a.forwardRef((function(e,t){var n=e.opts,a=e.pos;return Object(c.jsx)(ve,{children:Object(c.jsx)("div",{className:"abbreviation-selector",ref:t,children:n.map((function(e,t){return Object(c.jsx)(Ee,{active:a===t,children:e},e)}))})})})),Ee=function(e){var t=e.active,n=e.children;return Object(c.jsx)("div",{className:"selector-item ".concat(t?"active-item":""),children:n})};function Se(e,t){var n="function"===typeof e?e():e,c=URL.createObjectURL(n),a=document.createElement("a");a.href=c,a.setAttribute("download",t),a.setAttribute("target","_blank"),a.click(),a.remove()}function De(e){var t=document.createElement("input");t.setAttribute("type","file"),t.click(),t.addEventListener("change",(function(n){if(t.files&&t.files.length>=1){var c=t.files[0],a=new FileReader;e(c,a)}}))}var Ne=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(JSON.parse(localStorage.getItem("content"))||de),n=Object(l.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(),u=Object(l.a)(o,2),b=u[0],d=u[1],m=Object(a.useState)(),g=Object(l.a)(m,2),x=g[0],w=g[1],k=Object(a.useState)(0),C=Object(l.a)(k,2),T=C[0],I=C[1],B=Object(a.useState)(""),J=Object(l.a)(B,2),Y=J[0],H=J[1],U=Object(s.c)(we),W=Object(l.a)(U,2),$=W[0],q=W[1],z=Object(a.useState)(!1),G=Object(l.a)(z,2),K=G[0],X=G[1],Q=Object(a.useCallback)((function(e){return Object(c.jsx)(je,Object(j.a)({},e))}),[]),Z=Object(a.useCallback)((function(e){return Object(c.jsx)(he,Object(j.a)({},e))}),[]),ee=Object(a.useMemo)((function(){return Object(O.a)(Object(h.h)(v(function(e){var t=e.isInline,n=e.isVoid,c=["template-block"];return e.isInline=function(e){var n=e.type;return!!c.includes(n)||t(e)},e.isVoid=function(e){var t=e.type;return!!c.includes(t)||n(e)},e}(Object(f.createEditor)()))))}),[]),te=Object.fromEntries(Object.entries($).filter((function(e){var t=Object(l.a)(e,1)[0];return"$"!==Y?t.toLowerCase().startsWith(Y.toLowerCase()):!!t})));Object(a.useEffect)((function(){b&&K&&(f.Transforms.select(ee,b),se(ee,{}),X(!1),d(null))}),[K]),Object(a.useEffect)((function(){if(x&&Object.keys(te).length>0){var t=e.current,n=h.b.toDOMRange(ee,x).getBoundingClientRect();t.style.top="".concat(n.top+window.pageYOffset+24,"px"),t.style.left="".concat(n.left+window.pageXOffset,"px")}}),[te,ee,T,Y,x]);var ce=Object(a.useCallback)((function(e){if(x)switch(e.key){case"ArrowDown":e.preventDefault();var t=T>=Object.keys(te).length-1?0:T+1;I(t);break;case"ArrowUp":e.preventDefault();var n=T<=0?Object.keys(te).length-1:T-1;I(n);break;case"Tab":case"Enter":e.preventDefault(),f.Transforms.select(ee,x);var c=Object.keys(te)[T],a=$[c];f.Editor.insertFragment(ee,a),w(null);break;case"Escape":e.preventDefault(),w(null)}}),[T,Y,x]);return Object(c.jsxs)(h.c,{editor:ee,value:r,onChange:function(e){i(e);var t=JSON.stringify(e);localStorage.setItem("content",t);var n=ee.selection;if(n&&f.Range.isCollapsed(n)){var c,a,r=f.Range.edges(n),o=Object(l.a)(r,1)[0],s=f.Editor.before(ee,o,{unit:"word"}),u=s&&P(ee,s,/^\.(\w+|\$)$/,{},o);u&&(c=u.range,u.text,a=u.match);var b=function(e,t,n,c){var a=f.Editor.after(e,t,c),r=f.Editor.range(e,t,a),i=f.Editor.string(e,r),o=i.match(n);return{range:r,text:i,match:o}}(ee,o,/^(\s|$)/).match,j=P(ee,o,/\{\{/,{distance:2}),h=j.range;if(j.match&&(d(h),X(!0)),a&&b)return w(c),H(a[1]),void I(0)}w(null)},children:[Object(c.jsxs)(ge,{children:[Object(c.jsx)(fe,{format:"bold",icon:"gridicons:bold",alt:"Bold (Ctrl+B)"}),Object(c.jsx)(fe,{format:"italic",icon:"gridicons:italic",alt:"Italic (Ctrl+I)"}),Object(c.jsx)(fe,{format:"underline",icon:"gridicons:underline",alt:"Underline (Ctrl+U)"}),Object(c.jsx)(Oe,{format:"heading-one",icon:"gridicons:heading-h1",alt:"Heading 1 (Ctrl+Alt+1)"}),Object(c.jsx)(Oe,{format:"heading-two",icon:"gridicons:heading-h2",alt:"Heading 2 (Ctrl+Alt+2)"}),Object(c.jsx)(Oe,{format:"heading-three",icon:"gridicons:heading-h3",alt:"Heading 3 (Ctrl+Alt+3)"}),Object(c.jsx)(Oe,{format:"heading-four",icon:"gridicons:heading-h4",alt:"Heading 4 (Ctrl+Alt+4)"}),Object(c.jsx)(pe,{format:"bulleted-list",icon:"ic:baseline-format-list-bulleted",alt:"Bulleted list (Ctrl+.)"}),Object(c.jsx)(pe,{format:"numbered-list",icon:"ic:baseline-format-list-numbered",alt:"Numbered list (Ctrl+/)"}),Object(c.jsx)(xe,{fn:E,icon:"bx:bx-right-indent",alt:"Indent list item (Tab)"}),Object(c.jsx)(xe,{fn:S,icon:"bx:bx-left-indent",alt:"Dedent list item (Shift-Tab)"}),Object(c.jsx)(xe,{fn:function(e){return se(e,{})},icon:"uil:brackets-curly",alt:"Insert a template block (type in {{)"}),Object(c.jsx)(xe,{fn:_,icon:"ion:copy-outline",alt:"Copy to clipboard as plain text (Markdown)"}),Object(c.jsx)(xe,{fn:ne,icon:"ion:copy",alt:"Copy to clipboard as rich text"}),Object(c.jsx)(xe,{fn:function(){return Se(new Blob([JSON.stringify(ee.children)],{type:"application/json"}),"template.fdt")},icon:"bx:bxs-download",alt:"Save current template/contents as file"}),Object(c.jsx)(xe,{fn:function(){return De((function(e,t){t.readAsText(e),t.onload=function(e){var t=JSON.parse(e.target.result);i(t)}}))},icon:"ic:baseline-file-upload",alt:"Open a template/document from a file"}),Object(c.jsx)(xe,{fn:function(){return Se(new Blob([JSON.stringify($)],{type:"application/json"}),"abbreviations.fda")},icon:"bx:bxs-save",alt:"Save your abbreviations into a file"}),Object(c.jsx)(xe,{fn:function(){return De((function(e,t){t.readAsText(e),t.onload=function(e){var t=JSON.parse(e.target.result);q(t)}}))},icon:"bi:cloud-upload",alt:"Load your abbreviations from a file"})]}),Object(c.jsx)(ke,{}),Object(c.jsx)(p.a,{className:"editor",children:Object(c.jsx)(h.a,{renderElement:Q,renderLeaf:Z,placeholder:"Enter some text...",spellCheck:!0,autoFocus:!0,onKeyDown:function(e){ce(e),y(ee)(e),function(e,t){for(var n in A)Object(N.isHotkey)(n,e)&&(e.preventDefault(),V(t,A[n]));for(var c in F)if(Object(N.isHotkey)(c,e)){e.preventDefault();var a=F[c];if(L.includes(a))switch(a){case"bulleted-list":D(t,"bulleted-list");break;case"numbered-list":D(t,"numbered-list")}else M(t,a)}for(var r in R)Object(N.isHotkey)(r,e)&&(e.preventDefault(),(0,R[r])(t))}(e,ee)},onSelect:function(e){if(window.chrome&&null!=ee.selection)try{var t=h.b.toDOMPoint(ee,ee.selection.focus)[0];if(null==t)return;var n=t.parentElement;if(null==n)return;n.scrollIntoView({behavior:"smooth",block:"nearest"})}catch(e){}}})}),x&&Object.keys(te).length>0&&Object(c.jsx)(Ce,{opts:Object.keys(te),pos:T,ref:e})]})},Te=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("p",{children:["FastDischarge aims to be an open-source medical documentation platform that is truly ",Object(c.jsx)("em",{children:"fast"}),"."]}),Object(c.jsx)("p",{children:"With FastDischarge, you can easily create template fields and prepopulate them with commonly used values of your choice. FastDischarge lets you write your progress notes and discharge letters faster, so you can get back to doctoring."}),Object(c.jsxs)("p",{children:["FastDischarge doesn't use any central servers; everything you enter into it is stored locally on your device, so there are no data privacy issues to worry about! (Don't believe me? Check the source code on ",Object(c.jsx)("a",{href:"https://github.com/newageoflight/fast-discharge",children:"Github"}),"!)"]}),Object(c.jsx)("h3",{children:"Usage guide"}),Object(c.jsx)("h4",{children:"Writing documents and templates"}),Object(c.jsxs)("p",{children:["To ",Object(c.jsx)("strong",{children:"create a template field"}),", type ",Object(c.jsx)("kbd",{children:"{{"})," into the editor or press the ",Object(c.jsx)(ae.a,{icon:"uil:brackets-curly"})," button in the toolbar."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Set your template options"})," by clicking on the dropdown menu and typing in some text."]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:"Cycle to the next template field"})," by pressing ",Object(c.jsx)("kbd",{children:"TAB"}),"; ",Object(c.jsx)("strong",{children:"cycle to the previous template field"})," by pressing ",Object(c.jsx)("kbd",{children:"Shift+TAB"})]}),Object(c.jsxs)("p",{children:['If you frequently use a snippet, you can save it as a "dot abbreviation" by selecting it and clicking the ',Object(c.jsx)(ae.a,{icon:"bi:dot"})," dot icon in the hovering selection menu. You will be asked to give it a name."]}),Object(c.jsxs)("p",{children:["You can later invoke the snippet by typing ",Object(c.jsx)("kbd",{children:".nameOfYourAbbreviation"}),', e.g. if you named it "cag" type ',Object(c.jsx)("kbd",{children:".cag"})]}),Object(c.jsxs)("p",{children:["[UNDER DEVELOPMENT] You can also cycle to template fields by pressing ",Object(c.jsx)("kbd",{children:"Ctrl+["})," for the previous and ",Object(c.jsx)("kbd",{children:"Ctrl+]"})," for the next"]}),Object(c.jsx)("h4",{children:"Finalising documents"}),Object(c.jsxs)("p",{children:["To finalise your document and ",Object(c.jsx)("strong",{children:"copy its contents as plain text"})," (e.g. Web DeLacy), press the ",Object(c.jsx)(ae.a,{icon:"ion:copy-outline"})," button in the toolbar."]}),Object(c.jsxs)("p",{children:["To finalise your document and ",Object(c.jsx)("strong",{children:"copy its contents as rich text"})," (e.g. PowerChart), press the ",Object(c.jsx)(ae.a,{icon:"ion:copy"})," button in the toolbar."]}),Object(c.jsx)("h4",{children:"Taking your settings with you"}),Object(c.jsx)("p",{children:"I'm still not sure if there are legal issues around having user accounts to store your abbreviations, especially when sensitive patient data is concerned, so you'll have to store them as files if you want to take them around."}),Object(c.jsxs)("p",{children:["For this there are the ",Object(c.jsx)(ae.a,{icon:"bx:bxs-save"}),' "save my abbreviations" and ',Object(c.jsx)(ae.a,{icon:"bi:cloud-upload"}),' "load my abbreviations" buttons']})]}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("h3",{children:"Contributing/credits"}),Object(c.jsx)("p",{children:"FastDischarge might frequently break and be full of bugs because it's not even really in alpha yet, so don't expect too much out of it!"}),Object(c.jsxs)("p",{children:["If you have experience working with Slate.js, React.js or Typescript, please consider contributing to this project on ",Object(c.jsx)("a",{href:"https://github.com/newageoflight/fast-discharge",children:"Github"}),"."]}),Object(c.jsxs)("p",{children:["Developed by ",Object(c.jsx)("a",{href:"mailto:camint3rnal@live.com",children:"Christopher Chen"})," (JMO/Intern)"]})]})]})};var Ie=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("h1",{children:[Object(c.jsx)("img",{src:d,alt:"Running man",style:{height:"1em",display:"inline-block",transform:"translateY(6px)"}}),"FastDischarge"]})}),Object(c.jsx)("div",{className:"editor-container",children:Object(c.jsx)(Ne,{})}),Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"oneline",children:[Object(c.jsxs)("p",{children:["\xa9 ",Object(c.jsx)("a",{href:"https://github.com/newageoflight",children:"Christopher Chen"})," 2021-"]}),Object(c.jsx)("button",{onClick:function(){return r(!0)},children:Object(c.jsx)(ae.a,{icon:"bx:bx-help-circle"})})]})}),Object(c.jsxs)(b.a,{isOpen:n,onRequestClose:function(){return r(!1)},contentLabel:"About FastDischarge",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h2",{children:"About FastDischarge"}),Object(c.jsx)("button",{onClick:function(){return r(!1)},children:Object(c.jsx)(ae.a,{icon:"eva:close-fill"})})]}),Object(c.jsx)(Te,{})]})]})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,293)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(Ie,{})})}),document.getElementById("root")),Ae()}},[[292,1,2]]]);
//# sourceMappingURL=main.1ca7031d.chunk.js.map