"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[263],{6263:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});n(2791);var i=n(1413),a="Dialog_dialog__1F98E",r=n(3504),t=n(184),d=function(e){var s="/dialogs/"+e.id;return(0,t.jsx)("div",{className:a,children:(0,t.jsx)(r.rU,{to:s,children:e.name})})},o={},u=function(e){return(0,t.jsx)("div",{className:o,children:(0,t.jsx)("p",{children:e.message})})},c={dialogs:"Dialogs_dialogs__hH88V"},l=n(3896),g=function(e){var s=(0,l.cI)({mode:"onChange"}),n=s.register,a=s.handleSubmit,r=s.formState;return(0,t.jsxs)("form",{onSubmit:a((function(s){e.addMessage(s.message)})),children:[(0,t.jsx)("div",{children:(0,t.jsx)("textarea",(0,i.Z)({},n("message",{required:!0})))}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{disabled:!r.isValid,onClick:onsubmit,children:"Send message"})})]})},h=function(e){var s=e.dialogsPage.dialogs.map((function(e){return(0,t.jsx)(d,{name:e.name,id:e.id},e.id)})),n=e.dialogsPage.messages.map((function(e){return(0,t.jsx)(u,{message:e.message},e.id)}));return(0,t.jsxs)("div",{className:c.dialogs,children:[(0,t.jsx)("div",{className:c.dialog,children:s}),(0,t.jsxs)("div",{className:c.messages,children:[n,(0,t.jsx)(g,(0,i.Z)({},e))]})]})},m=n(8687),f=n(1548),j=n(2070),x=(0,n(7781).qC)((0,m.$j)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:j.H}),f.D)(h)},1548:function(e,s,n){n.d(s,{D:function(){return h}});var i=n(1413),a=n(5671),r=n(3144),t=n(9340),d=n(5716),o=n(2791),u=n(6871),c=n(8687),l=n(184),g=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var s=function(s){(0,t.Z)(o,s);var n=(0,d.Z)(o);function o(){return(0,a.Z)(this,o),n.apply(this,arguments)}return(0,r.Z)(o,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,i.Z)({},this.props)):(0,l.jsx)(u.Fg,{to:"/login"})}}]),o}(o.Component);return(0,c.$j)(g)(s)}}}]);
//# sourceMappingURL=263.c402e301.chunk.js.map