(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(12),o=n.n(c),s=(n(20),n(2)),r=n(3),i=n(5),m=n(4),u=n(6),h=(n(22),n(28)),p=n(29),f=n(8),b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark container-fluid fixed-top",style:{backgroundColor:"#F36D76"}},l.a.createElement("a",{className:"navbar-brand px-3",href:"#",onClick:function(){e.showThisPage("home")}},l.a.createElement("span",{className:"navbar-brand font-weight-bold",style:{fontSize:"x-large"}},"whatMusic ")),l.a.createElement("button",{className:"navbar-toggler mx-3",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse px-3",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto text-center font-weight-bold"},l.a.createElement("li",{className:"nav-item mx-1"},l.a.createElement("a",{className:"nav-link",href:"#",style:{color:"white"},onClick:function(){e.showThisPage("mymusic")}},"My Music")),l.a.createElement("li",{className:"nav-item mx-1"},l.a.createElement("a",{className:"nav-link",href:"#",style:{color:"white"},onClick:function(){e.showThisPage("friends")}},"Search Friends")),l.a.createElement("li",{className:"nav-item mx-1"},l.a.createElement("a",{className:"nav-link",href:"#",style:{color:"white"},onClick:function(){e.showThisPage("nearby")}},"Find Nearby")),l.a.createElement("li",{className:"nav-item mx-1"},l.a.createElement("a",{className:"nav-link",href:"#",style:{color:"white"},onClick:function(){e.showThisPage("rando")}},"Meet Rando"))))))},d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).showThisPage=function(e){var t=e.target.name;n.props.showThisPage(t)},n.showThisPage=n.showThisPage.bind(Object(f.a)(Object(f.a)(n))),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e={whiteSpace:"normal",fontWeight:"bold",width:"150px",height:"200px",fontSize:"xx-large",WebkitTextStroke:"1px teal",color:"white",border:"5px solid teal"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"text-center font-weight-bold"},"Welcome"),l.a.createElement("div",{className:"container-fluid text-center mt-3",style:{}},l.a.createElement("div",{className:""},l.a.createElement("button",{name:"mymusic",className:"btn btn-lg btn-outline-success m-3",style:e,onClick:this.showThisPage},"My Music"),l.a.createElement("button",{name:"friends",className:"btn btn-lg btn-outline-success m-3",style:e,onClick:this.showThisPage},"Search for Friends")),l.a.createElement("div",{className:""},l.a.createElement("button",{name:"nearby",className:"btn btn-lg btn-outline-success m-3",style:e,onClick:this.showThisPage},"Find Nearby"),l.a.createElement("button",{name:"rando",className:"btn btn-lg btn-outline-success m-3",style:e,onClick:this.showThisPage},"Meet a Rando")))))}}]),t}(l.a.Component),y=(l.a.Component,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={nicoleSpotifyID:"1215746208",playlistID:"37i9dQZF1DX76Wlfdnj7AP"},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new URLSearchParams(window.location.search).get("access_token"),t={method:"GET",headers:{Authorization:"Bearer ".concat(e)}};fetch("https://api.spotify.com/v1/me",t).then(function(e){return e.json()}).then(function(e){console.log("*** spotify/v1/me ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/top/artists?limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my top artists ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/top/tracks?limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my top tracks ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/player/recently-played?limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my recently played ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/playlists?limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my playlists ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/following?type=artist&limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my followed artists ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/albums?limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my saved albums ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/me/tracks?limit=50",t).then(function(e){return e.json()}).then(function(e){return console.log("*** my saved tracks ***",e)}).catch(function(e){return console.log(e)}),fetch("https://api.spotify.com/v1/playlists/".concat(this.state.playlistID,"/tracks?limit=100"),t).then(function(e){return e.json()}).then(function(e){return console.log("*** a playlist's tracks, by playlist_id ***",e)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{}},l.a.createElement("h3",{className:"text-center font-weight-bold"},"MyMusic.js"),l.a.createElement("span",{className:"font-weight-bold"},"spotify/v1/me"),l.a.createElement("ul",null,l.a.createElement("li",null,"country"),l.a.createElement("li",null,"display_name"),l.a.createElement("li",null,"email"),l.a.createElement("li",null,"id (spotify_id)")),l.a.createElement("span",{className:"font-weight-bold"}),l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))))}}]),t}(l.a.Component)),g=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"",style:{}},l.a.createElement("h3",null,"i am Friends.js; "),l.a.createElement("p",{className:"p-3 m-1",style:{border:"1px solid black"}},"search bar - search allUsers in dbase by name"),l.a.createElement("p",{className:"p-3 m-1",style:{border:"1px solid black"}},"see search results")))}}]),t}(l.a.Component),E=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"",style:{}},l.a.createElement("h3",null,"lolz under construction"),l.a.createElement("p",null,"see what ppl around u like.")))}}]),t}(l.a.Component),v=function(e){function t(e){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"",style:{}},l.a.createElement("h3",null,"I am Rando.js; I will help you meet a rando.")))}}]),t}(l.a.Component),j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).showThisPage=function(e){n.setState({showThisPage:e})},n.state={showThisPage:"home"},n.showThisPage=n.showThisPage.bind(Object(f.a)(Object(f.a)(n))),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"",style:{}},l.a.createElement(b,{showThisPage:this.showThisPage}),"home"===this.state.showThisPage&&l.a.createElement(d,{showThisPage:this.showThisPage}),"mymusic"===this.state.showThisPage&&l.a.createElement(y,null),"friends"===this.state.showThisPage&&l.a.createElement(g,null),"nearby"===this.state.showThisPage&&l.a.createElement(E,null),"rando"===this.state.showThisPage&&l.a.createElement(v,null)))}}]),t}(l.a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).signInWithSpotify=function(){fetch("/api/login-spotify").then(function(e){return e.json()}).then(function(){return n.props.pickPage("profile")})},n.state={user:n.props.user},n.signInWithSpotify=n.signInWithSpotify.bind(Object(f.a)(Object(f.a)(n))),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="".concat("http://localhost:5000","/api/login-spotify");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h5",{className:"propaganda-text-stroke mb-5 ml-auto text-center",style:{width:"50%"}},"Musical compatibility is important to many people. And that makes sense - music is really intimate; it's emotional."),l.a.createElement("h4",{className:"propaganda-text-stroke-black mb-2 mx-auto text-center",style:{width:"50%"}},"Find your",l.a.createElement("br",null)," music soulmate."),l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{href:e,style:{}},l.a.createElement("button",{className:"btn btn-sm btn-outline-primary",style:{borderWidth:"2px"}},l.a.createElement("span",{className:"font-weight-bold"},l.a.createElement("u",null,"Sign in with Spotify")))))))}}]),t}(l.a.Component),k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"root-div"},l.a.createElement("div",{className:"my-background"},l.a.createElement(p.a,{exact:!0,path:"/",component:w}),l.a.createElement(p.a,{path:"/user",component:j}))))}}]),t}(l.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.5cdda415.chunk.js.map