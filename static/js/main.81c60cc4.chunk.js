(this["webpackJsonpreact-redux-template"]=this["webpackJsonpreact-redux-template"]||[]).push([[0],{24:function(t,e,n){t.exports=n(36)},29:function(t,e,n){},30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(12),i=n.n(a),c=(n(29),n(30),n(31),n(4)),s=n(5),l=n(7),u=n(6),f=n(8),d=n(13),p=n(1);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var g=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this))).starRef=o.a.createRef(),n.state={config:t},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({config:this.props,delay:1e3*Math.random()})}},{key:"componentDidUpdate",value:function(){var t=p.e(this.starRef.current),e=this;this.state.config.config.blink&&t.attr("r",.2).transition().delay(this.state.delay).duration(1600).attr("r",this.state.config.config.size).transition().attr("r",.2).on("end",(function(){e.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.state))}))}},{key:"repeat",value:function(t){t.attr("r",2).transition().duration(1600).attr("r",5)}},{key:"render",value:function(){var t=this.state.config.config,e=t.location[0],n=t.location[1],r=t.size,a=t.color?t.color:"white";return o.a.createElement("circle",{cx:e,r:r,cy:n,fill:a,ref:this.starRef})}}]),e}(r.Component),m=n(14),v=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this))).starRef=o.a.createRef(),n.state={config:t},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState({config:this.props})}},{key:"render",value:function(){var t=this.state.config.config,e=t.location[0],n=t.location[1],r=t.size;t.color&&t.color;return o.a.createElement("g",null,o.a.createElement("defs",null,o.a.createElement("radialGradient",{id:"grad1",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},o.a.createElement("stop",{offset:"0%",style:{stopColor:"FFFF66",stopOpacity:1}}),o.a.createElement("stop",{offset:"100%",style:{stopColor:"FF9900",stopOpacity:1}}))),o.a.createElement("circle",{id:"sunBurst",cx:e,r:r,cy:n,fill:"url(#grad1)",ref:this.starRef}))}}]),e}(r.Component);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach((function(e){Object(d.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this))).planetRef=o.a.createRef(),n.state={config:t,delay:5e3*Math.random(),start_angle:2*Math.PI*Math.random()},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.setState(b({},this.state))}},{key:"componentDidUpdate",value:function(){var t=p.e(this.planetRef.current),e=1.1*this.props.config.distance,n=.8*this.props.config.distance,r=this,o=p.a().innerRadius(e).outerRadius(e+.5).startAngle(0).endAngle(2*Math.PI);t.select("path").attr("d",o());var a=t.select("circle"),i=!0===this.props.config.rotation_direction?1:-1;a.transition().duration(this.props.config.revolution_time).ease(p.b).attrTween("cx",(function(){return function(t){return e*Math.cos(i*(2*Math.PI*t+r.state.start_angle))}})).attrTween("cy",(function(){return function(t){return n*Math.sin(i*(2*Math.PI*t+r.state.start_angle))}})).on("end",(function(){r.setState(b({},this.state))}))}},{key:"render",value:function(){var t=this.state.config.config,e=t.distance,n=1.1*e,r=.8*e,a=this.state.start_angle,i=t.size,c=(t.revolution_time,t.rotation_time,t.color),s=20*t.revolution_direction;this.props.config.distance,Math.SQRT2;return o.a.createElement("g",{ref:this.planetRef,transform:"translate("+(400+s)+",300)"},o.a.createElement("ellipse",{rx:n,ry:r,fill:"none",strokeWidth:"2",style:{opacity:0,stroke:c}}),o.a.createElement("circle",{cx:n*Math.cos(a),r:i,cy:r*Math.sin(a),fill:c}))}}]),e}(r.Component),j=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.starsReducer,e=this.props.sunReducer,n=this.props.planetsReducer;return o.a.createElement("svg",{className:"container bg-dark",style:{height:"600px",width:"800px"}},t.map((function(t,e){return o.a.createElement(g,{key:e,config:t})})),n.map((function(t,e){return o.a.createElement(O,{key:e,config:t})})),o.a.createElement(v,{config:e}))}}]),e}(r.Component),w=Object(m.b)((function(t){return t}))(j);var k=function(){return o.a.createElement(w,null)},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var E=n(9),P=n(21),M=n(22),S=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1?arguments[1]:void 0;t.type;for(var e=[],n=0;n<200;n++){var r=.5+.5*Math.random(),o={location:[800*Math.random(),800*Math.random()],size:r,blink:Math.random()>.75,color:"white"};e.push(o)}return e},x=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1?arguments[1]:void 0;t.type;var e={location:[400,300],size:20,color:"yellow"};return e},D={diameter_ratio:[.383,.949,1,.532,11.21,9.45,4.01,3.88,.186],revolution_period:[.2,.6,1,1.9,11.9,29.5,84,164.8,248],distance_from_sun:[.387,.723,1,1.52,5.2,9.58,19.2,30.05,39.48]},C=p.c().domain([0,12]).range([1,6]),F=p.d().domain([0,40]).range([40,350/Math.SQRT2]),W=p.c().domain([.2,250]).range([5e3,15e4]),z=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1?arguments[1]:void 0;t.type;for(var e=[{name:"Mercury",color:"gray",rotation_time:2e3},{name:"Venus",color:"LightYellow",rotation_time:2e3},{name:"Earth",color:"blue",rotation_time:2e3},{name:"Mars",color:"#654321",rotation_time:2e3},{name:"Jupiter",color:"Orange",rotation_time:2e3},{name:"Saturn",color:"PaleGoldenRod",rotation_time:2e3},{name:"Uranus",color:"SlateBlue ",rotation_time:2e3},{name:"Neptune",color:"#6081FF",rotation_time:2e3},{name:"Pluto",color:"RosyBrown",rotation_time:2e3}],n=0;n<9;n++)e[n].size=C(D.diameter_ratio[n]),e[n].distance=F(D.distance_from_sun[n]),e[n].revolution_time=W(D.revolution_period[n]),e[n].revolution_direction=(Math.random(),1);return e},A=Object(E.c)({starsReducer:S,sunReducer:x,planetsReducer:z}),T=Object(M.createLogger)(),U=Object(E.d)(A,Object(E.a)(P.a,T));i.a.render(o.a.createElement(m.a,{store:U}," ",o.a.createElement(k,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/solar-system-react-redux-d3",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/solar-system-react-redux-d3","/service-worker.js");_?(!function(t,e){fetch(t).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):R(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(e,t)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.81c60cc4.chunk.js.map