(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),r=a.n(c),s=(a(13),a(2)),i=a(3),h=a(5),l=a(4),u=a(7),m=(a(14),a(15),a(1)),p=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={photoName:""},e.handleNameChange=function(t){e.setState({photoName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.photoName.trim()?(e.props.onSubmit(e.state.photoName),e.setState({photoName:""})):Object(u.b)("Enter name photo")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.photoName,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),b=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:"",alt:"",className:"ImageGalleryItem-image"})})}}]),a}(n.Component),j=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.photoName!==this.props.photoName&&(console.log("\u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c \u0444\u043e\u0442\u043e"),console.log("prevProps.photoName",e.photoName),console.log("this.props.photoName",this.props.photoName))}},{key:"render",value:function(){return Object(m.jsxs)("ul",{className:"ImageGallery",children:[Object(m.jsx)(b,{}),Object(m.jsx)("p",{children:this.props.photoName})]})}}]),a}(n.Component),O=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={photoName:"",loading:!1},e.onSubmit=function(t){e.setState({photoName:t}),console.log(t)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{onSubmit:this.onSubmit}),this.state.loading&&Object(m.jsx)("h1",{children:" Downloading... "}),Object(m.jsx)(j,{photoName:this.state.photoName}),Object(m.jsx)(u.a,{autoClose:3e3,position:"top-left"})]})}}]),a}(n.Component),d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),d()}},[[17,1,2]]]);
//# sourceMappingURL=main.265b4ec6.chunk.js.map