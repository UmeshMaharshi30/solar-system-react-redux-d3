(this["webpackJsonpreact-redux-template"]=this["webpackJsonpreact-redux-template"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(12),i=n.n(a),c=(n(29),n(30),n(31),n(4)),s=n(5),l=n(7),u=n(6),f=n(8),d=n(13),p=n(1);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).starRef=o.a.createRef(),n.state={config:e},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({config:this.props,delay:1e3*Math.random()})}},{key:"componentDidUpdate",value:function(){var e=p.e(this.starRef.current),t=this;this.state.config.config.blink&&e.attr("r",.2).transition().delay(this.state.delay).duration(1600).attr("r",this.state.config.config.size).transition().attr("r",.2).on("end",(function(){t.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state))}))}},{key:"repeat",value:function(e){e.attr("r",2).transition().duration(1600).attr("r",5)}},{key:"render",value:function(){var e=this.state.config.config,t=e.location[0],n=e.location[1],r=e.size,a=e.color?e.color:"white";return o.a.createElement("circle",{cx:t,r:r,cy:n,fill:a,ref:this.starRef})}}]),t}(r.Component),g=n(14),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).starRef=o.a.createRef(),n.state={config:e},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({config:this.props})}},{key:"render",value:function(){var e=this.state.config.config,t=e.location[0],n=e.location[1],r=e.size;e.color&&e.color;return o.a.createElement("g",null,o.a.createElement("defs",null,o.a.createElement("radialGradient",{id:"grad1",cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},o.a.createElement("stop",{offset:"0%",style:{stopColor:"FFFF66",stopOpacity:1}}),o.a.createElement("stop",{offset:"100%",style:{stopColor:"FF9900",stopOpacity:1}}))),o.a.createElement("circle",{id:"sunBurst",cx:t,r:r,cy:n,fill:"url(#grad1)",ref:this.starRef}))}}]),t}(r.Component);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this))).planetRef=o.a.createRef(),n.state={config:e,delay:5e3*Math.random(),start_angle:2*Math.PI*Math.random()},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState(y({},this.state))}},{key:"componentDidUpdate",value:function(){var e=p.e(this.planetRef.current),t=1.1*this.props.config.distance,n=.8*this.props.config.distance,r=this,o=p.a().innerRadius(t).outerRadius(t+.5).startAngle(0).endAngle(2*Math.PI);e.select("path").attr("d",o());var a=e.select("circle");this.props.config.rotation_direction;a.transition().duration(this.props.config.revolution_time).ease(p.b).attrTween("cx",(function(){return function(e){return t*Math.cos(2*Math.PI*e+r.state.start_angle)}})).attrTween("cy",(function(){return function(e){return n*Math.sin(2*Math.PI*e+r.state.start_angle)}})).on("end",(function(){r.setState(y({},this.state))}))}},{key:"render",value:function(){var e=this.state.config.config,t=e.name,n=e.distance,r=1.1*n,a=.8*n,i=this.state.start_angle,c=e.size,s=(e.revolution_time,e.rotation_time,e.color[0]),l=e.color,u=20*e.revolution_direction;this.props.config.distance,Math.SQRT2;return o.a.createElement("g",{ref:this.planetRef,transform:"translate("+(400+u)+",300)"},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:t,gradientTransform:"rotate(90)"},o.a.createElement("stop",{offset:"5%",style:{stopColor:l[0]}}),o.a.createElement("stop",{offset:"95%",style:{stopColor:l[1]}}))),o.a.createElement("ellipse",{rx:r,ry:a,fill:"none",strokeWidth:"0.5",style:{opacity:0,stroke:s}}),o.a.createElement("circle",{cx:r*Math.cos(i),r:c,cy:a*Math.sin(i),fill:"url(#"+t+")"}))}}]),t}(r.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.starsReducer,t=this.props.sunReducer,n=this.props.planetsReducer;return o.a.createElement("svg",{className:"container bg-dark",style:{height:"600px",width:"800px"}},e.map((function(e,t){return o.a.createElement(m,{key:t,config:e})})),n.map((function(e,t){return o.a.createElement(O,{key:t,config:e})})),o.a.createElement(v,{config:t}))}}]),t}(r.Component),j=Object(g.b)((function(e){return e}))(w);var k=function(){return o.a.createElement(j,null)},E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(9),P=n(21),M=n(22),S=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;e.type;for(var t=[],n=0;n<200;n++){var r=.5+.5*Math.random(),o={location:[800*Math.random(),800*Math.random()],size:r,blink:Math.random()>.75,color:"white"};t.push(o)}return t},x=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;e.type;var t={location:[400,300],size:20,color:"yellow"};return t},D={diameter_ratio:[.383,.949,1,.532,11.21,9.45,4.01,3.88,.186],revolution_period:[.2,.6,1,1.9,11.9,29.5,84,164.8,248],distance_from_sun:[.387,.723,1,1.52,5.2,9.58,19.2,30.05,39.48]},C=p.c().domain([0,12]).range([1,6]),F=p.d().domain([0,40]).range([40,450/Math.SQRT2]),W=p.c().domain([.2,250]).range([5e3,5e4]),z=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0;e.type;for(var t=[{name:"Mercury",color:["gray","brown"],rotation_time:2e3},{name:"Venus",color:["LightYellow","gold"],rotation_time:2e3},{name:"Earth",color:["blue","white"],rotation_time:2e3},{name:"Mars",color:["#654321","brown"],rotation_time:2e3},{name:"Jupiter",color:["Orange","brown"],rotation_time:2e3},{name:"Saturn",color:["PaleGoldenRod","blue"],rotation_time:2e3},{name:"Uranus",color:["SlateBlue","lightGreen"],rotation_time:2e3},{name:"Neptune",color:["#6081FF","DarkBlue"],rotation_time:2e3},{name:"Pluto",color:["RosyBrown","white"],rotation_time:2e3}],n=0;n<9;n++)t[n].size=C(D.diameter_ratio[n]),t[n].distance=F(D.distance_from_sun[n]),t[n].revolution_time=W(D.revolution_period[n]),t[n].revolution_direction=(Math.random(),1);return t},A=Object(R.c)({starsReducer:S,sunReducer:x,planetsReducer:z}),T=Object(M.createLogger)(),B=Object(R.d)(A,Object(R.a)(P.a,T));i.a.render(o.a.createElement(g.a,{store:B}," ",o.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/solar-system-react-redux-d3",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/solar-system-react-redux-d3","/service-worker.js");E?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.7a05a2b9.chunk.js.map