(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{20:function(n,e,t){},26:function(n,e,t){},27:function(n,e,t){"use strict";t.r(e);var r,i,o,c,d=t(0),a=t(11),l=t.n(a),u=(t(20),t(15)),b=t(5),s=t(2),j=t(3),h=t(1),g=j.a.li(r||(r=Object(s.a)(["\n  margin: 1rem 0;\n  background: #8b005d;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n  border-radius: 0.5rem;\n  color: white;\n  padding: 1rem 2rem;\n  cursor: pointer;\n"]))),m=function(n){var e=n.onDelete,t=n.id,r=n.children;return Object(h.jsx)(g,{onClick:function(){e(t)},children:r})},f=j.a.ul(i||(i=Object(s.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),p=function(n){var e=n.items,t=n.onDeleteItem;return Object(h.jsx)(f,{children:e.map((function(n){return Object(h.jsx)(m,{id:n.id,onDelete:t,children:n.text},n.id)}))})},x=j.a.button(o||(o=Object(s.a)(["\n  width: 100%;\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #8b005d;\n  border-radius: 0.5rem;\n  color: white;\n  background: #8b005d;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: auto;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover,\n  &:active {\n    background: #ac0e77;\n    border-color: #ac0e77;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);\n  }\n"]))),O=j.a.div(c||(c=Object(s.a)(["\n  margin: 0.5rem 0;\n\n  & label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 0.5rem;\n    color: ",";\n  }\n\n  & input {\n    display: block;\n    width: 100%;\n    border: 1px solid ",";\n    font: inherit;\n    line-height: 1.5rem;\n    padding: 0 0.25rem;\n    background-color: ",";\n  }\n\n  & input:focus {\n    outline: none;\n    background: #fad0ec;\n    border-color: #8b005d;\n  }\n"])),(function(n){return n.invalid?"red":"black"}),(function(n){return n.invalid?"red":"#ccc"}),(function(n){return n.invalid?"lightgrey":"transparent"})),v=function(n){var e=n.onAddGoal,t=Object(d.useState)(""),r=Object(b.a)(t,2),i=r[0],o=r[1],c=Object(d.useState)(!0),a=Object(b.a)(c,2),l=a[0],u=a[1];return Object(h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),0!==i.trim().length?(e(i),o("")):u(!1)},children:[Object(h.jsxs)(O,{invalid:!l,children:[Object(h.jsx)("label",{children:"Goal for Today"}),Object(h.jsx)("input",{type:"text",onChange:function(n){n.target.value.trim().length>0&&u(!0),o(n.target.value)},value:i})]}),Object(h.jsx)(x,{type:"submit",children:"Add Goal"})]})},w=(t(26),function(){var n=Object(d.useState)([{text:"Do project!",id:"g1"},{text:"Finish one chapter of the course!",id:"g2"},{text:"Do exercise!",id:"g3"}]),e=Object(b.a)(n,2),t=e[0],r=e[1],i=Object(h.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return t.length>0&&(i=Object(h.jsx)(p,{items:t,onDeleteItem:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))}})),Object(h.jsxs)("div",{children:[Object(h.jsx)("section",{id:"goal-form",children:Object(h.jsx)(v,{onAddGoal:function(n){r((function(e){var t=Object(u.a)(e);return t.unshift({text:n,id:Math.random().toString()}),t}))}})}),Object(h.jsx)("section",{id:"goals",children:i})]})});l.a.render(Object(h.jsx)(w,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.e324703b.chunk.js.map