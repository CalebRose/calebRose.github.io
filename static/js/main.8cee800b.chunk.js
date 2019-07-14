(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),l=a.n(o),c=(a(56),a(57),a(43)),r=a(44),s=a(48),m=a(45),u=a(49),d=a(46),h=a.n(d),p=a(47),g=a.n(p),f=a(9),E=a.n(f),v=a(10),b=a.n(v),k=a(17),w=a.n(k),S={about:{title:"About Me",content:[{id:1,desc:"I am a software engineer based in Austin, Texas. I have previous experience in Quality Assurance, performing system integrated tests for web application UIs and building automation suites using frameworks such as Selenium and JUnit."},{id:2,desc:"In February 2019, I decided to challenge myself and partake in the University of Texas at Austin Full Stack Developer Bootcamp. I've been learning some of the latest technologies used for building websites, including React, Node.js, MongoDB, and Sequelizer."},{id:3,desc:"I am open to hearing about opportunities. Please open the contact tab for the best way to contact me."}]},tech:{title:"Tech Stack",content:[{id:1,name:"JavaScript",url:"/images/javascript.svg"},{id:2,name:"React",url:"/images/react.svg"},{id:3,name:"Node",url:"/images/nodejs.svg"},{id:4,name:"MongoDB",url:"/images/mongodb.svg"},{id:5,name:"HTML",url:"/images/html5.svg"},{id:6,name:"CSS",url:"/images/css3.svg"},{id:7,name:"Express",url:"/images/express.svg"},{id:8,name:"Java",url:"/images/java.svg"},{id:9,name:"Python",url:"/images/python.svg"}]},portfolio:{title:"Portfolio",content:[{id:1,project:"Pathfinder",description:"Finding the best route for you",img:"/images/map.svg",siteLink:"https://the-warp-zone.github.io/pathfinderApp/",repoLink:"https://github.com/CalebRose/pathfinderApp"},{id:2,project:"Fast Travel Stocks",description:"Finance App on Game Publishers",img:"/images/stock.svg",siteLink:"https://fast-travel-stocks-warp.herokuapp.com",repoLink:"https://github.com/the-warp-zone/FastTravelStocks"},{id:3,project:"Clickbait",description:"React-made Game",img:"/images/hook.svg",siteLink:"",repoLink:"https://github.com/CalebRose/clickBaitGame"},{id:4,project:"MongoDB Homework",description:"COMING SOON",img:"/images/web-crawler.svg",siteLink:"",repoLink:""},{id:5,project:"For more...",description:"Please visit my Github Profile",img:"/images/more.svg",siteLink:"https://github.com/CalebRose?tab=repositories",repoLink:"https://github.com/CalebRose?tab=repositories"}]},contact:{title:"Contact Me",content:{email:"calebrose.mobile@gmail.com",resume:"/assets/CalebRoseResume.pdf",github:"https://www.github.com/CalebRose",linkedin:"https://www.linkedin.com/in/caleb-rose"}}},y=(a(19),function(e){return i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"svg",src:e.info.url,alt:e.info.name}))}),C=a(15),N=a.n(C),j=a(18),L=a.n(j),B=function(e){return i.a.createElement(N.a.Item,null,i.a.createElement(L.a,null,i.a.createElement("img",{width:64,height:64,className:"mr-3",src:e.info.img,alt:""}),i.a.createElement(L.a.Body,{className:"project"},i.a.createElement("h5",null,e.info.project),i.a.createElement("p",null,e.info.description)),i.a.createElement(L.a.Body,{className:"links"},i.a.createElement(E.a,null,i.a.createElement("a",{href:e.info.siteLink},"Site Link")),i.a.createElement(E.a,null,i.a.createElement("a",{href:e.info.repoLink},"Repo Link")))))},R=a(16),T=a.n(R),A=function(e){return i.a.createElement(T.a,{style:{width:"3rem"}},i.a.createElement(T.a.Img,{variant:"top",src:e.info.url}),i.a.createElement(T.a.Body,null,i.a.createElement(T.a.Title,null,e.info.title)))},I=function(e){return i.a.createElement("div",null,i.a.createElement("p",null,e.info.desc),i.a.createElement("br",null))},P=(a(65),function(e){if(console.log(e.data),"Tech Stack"===e.data.title){var t=e.data.content.map(function(e){return i.a.createElement(y,{key:e.id,info:e})});return i.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"},t)}if("Portfolio"===e.data.title){var a=e.data.content.map(function(e){return i.a.createElement(N.a,null,i.a.createElement(B,{key:e.id,info:e}))});return i.a.createElement("div",{className:"portfolios"},a)}if("Contact Me"===e.data.title){console.log(e.data);var n=e.data.content;return i.a.createElement("div",null,i.a.createElement(A,{info:n}))}if("About Me"===e.data.title){console.log(e.data.content);var o=e.data.content.map(function(e){return i.a.createElement("div",null,i.a.createElement(I,{key:e.id,info:e}))});return i.a.createElement("div",null,o)}return i.a.createElement("div",null,i.a.createElement("h2",null,"Data"))}),x=(a(66),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={show:!1,title:"",content:""},a.handleShow=function(e){a.setState({show:!0}),"about"===e.target.id?a.setState({title:S.about.title,content:S.about.content}):"Tech Stack"===e.target.id?a.setState({title:S.tech.title,content:S.tech.content}):"Portfolio"===e.target.id?a.setState({title:S.portfolio.title,content:S.portfolio.content}):"Contact"===e.target.id&&(console.log(e.target),a.setState({title:S.contact.title,content:S.contact.content}))},a.handleHide=function(){a.setState({show:!1})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"main"},i.a.createElement(h.a,{fluid:!0},i.a.createElement(w.a,{show:this.state.show,onHide:this.handleHide,dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title"},i.a.createElement(w.a.Header,{closeButton:!0},i.a.createElement(w.a.Title,{id:"example-custom-modal-styling-title"},this.state.title)),i.a.createElement(w.a.Body,null,i.a.createElement(P,{data:this.state})))),i.a.createElement(g.a,{id:"header"},i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("h1",null,"Caleb Rose"))),i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("h3",null,"Full Stack Engineer"))),i.a.createElement(E.a,null,i.a.createElement(b.a,null,i.a.createElement("div",{className:"options",onClick:this.handleShow},i.a.createElement("p",{id:"about"},"About"))),i.a.createElement(b.a,null,i.a.createElement("div",{onClick:this.handleShow,className:"options"},i.a.createElement("p",{id:"Portfolio"},"Portfolio"))),i.a.createElement(b.a,null,i.a.createElement("div",{className:"options",onClick:this.handleShow},i.a.createElement("p",{id:"Tech Stack"},"Tech Stack"))),i.a.createElement(b.a,null,i.a.createElement("div",{className:"options",onClick:this.handleShow},i.a.createElement("p",{id:"Contact"},"Contact Me"))))))}}]),t}(i.a.Component)),M=function(){return i.a.createElement("div",{className:"App",id:"main"},i.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t,a){},50:function(e,t,a){e.exports=a(100)},56:function(e,t,a){},57:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.8cee800b.chunk.js.map