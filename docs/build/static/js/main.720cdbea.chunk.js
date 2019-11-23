(this["webpackJsonpreact-soundcloud-explorer"]=this["webpackJsonpreact-soundcloud-explorer"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),i=(a(40),a(8)),s=a(7),o=a(5),u=a.n(o),m=a(12),d=a(10),h=a(11),p=a(15),g=a(14),v=a(16),f=a(34);var k=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],l=t[1];return r.a.createElement("header",{className:"header"},r.a.createElement("button",{onClick:function(){return l(!a)},className:"menu-button"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("h1",{className:"logo"},r.a.createElement(i.b,{to:"/"},r.a.createElement("svg",null,r.a.createElement("circle",null),r.a.createElement("circle",null),r.a.createElement("circle",null),r.a.createElement("circle",null)),r.a.createElement("span",null,"Soundcloud explorer"))),r.a.createElement("nav",{className:a?"nav nav--open":"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/explorer","aria-label":"Home, current page"},"Explore music")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/player"},"Player")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login"},"Profile")))))},E=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(k,null),t)};var _=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 75 75",version:"1.1",viewBox:"0 0 75 75",xmlSpace:"preserve"},r.a.createElement("path",{d:"M52.66.249a1.012 1.012 0 00-.789-.241l-31 4.011A1 1 0 0020 5.01v35.613C18.174 38.428 15.273 37 12 37c-5.514 0-10 4.037-10 9s4.486 9 10 9 10-4.037 10-9c0-.232-.019-.46-.039-.687.013-.065.039-.124.039-.192V16.118l29-3.753v18.257C49.174 28.428 46.273 27 43 27c-5.514 0-10 4.037-10 9s4.486 9 10 9c5.464 0 9.913-3.966 9.993-8.867 0-.013.007-.024.007-.037V1a.998.998 0 00-.34-.751z"}))};var y=function(e){var t=this,a=e.trackList.map((function(e){return{pageTitle:"Title",id:e.id,title:e.title,genre:e.genre||"No genre",description:e.description,stream_url:e.stream_url,created_at:e.created_at,path:e.permalink,soundcloudURL:e.permalink_url,uri:e.uri.replace("https://",""),img:e.artwork_url,likes:e.likes_count?'<i class="fa fa-heart"></i> '.concat(e.likes_count):"",userImg:e.user.avatar_url||"../img/user.svg",userLink:e.user.permalink_url,userName:e.user.username,duration:e.duration}}));return a.length?a.map((function(a,n){return r.a.createElement("article",{className:"track",key:n,id:a.id,onClick:e.onSelectTrack.bind(t,a,n)},a.img?r.a.createElement("img",{className:"track__thumb",src:a.img,alt:a.title}):r.a.createElement("div",{className:"track__thumb svg"},r.a.createElement(_,null)),r.a.createElement("div",{className:"track__info"},r.a.createElement("h2",{className:"track__title"},a.title),r.a.createElement("p",{value:"track__likes",dangerouslySetInnerHTML:{__html:a.likes}})))})):r.a.createElement("section",null,r.a.createElement("h3",null,"No song found, please try something else"))},b=a(20),w=a.n(b),N=function(){function e(){Object(d.a)(this,e),this.clientId="E9bvER0kSJUJFDHCllZ3IL5h18C7QICR",this.search="random",this.limit="60"}return Object(h.a)(e,[{key:"url",value:function(e){return e?"https://api.soundcloud.com/tracks/".concat(e,"?client_id=").concat(this.clientId):void 0}},{key:"getList",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w()({method:"GET",url:"https://api.soundcloud.com/tracks?client_id=".concat(this.clientId,"&limit=").concat(this.limit,"&q=").concat(this.search)});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error at getlist",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"searchSong",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w()({method:"GET",url:"https://api.soundcloud.com/tracks?client_id=".concat(this.clientId,"&limit=").concat(this.limit,"&q=").concat(t)});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error at getlist",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();var S=function(e){var t;return r.a.createElement("form",{className:"search form",onSubmit:function(a){a.preventDefault(),t&&e.onSubmit(t.value)},action:"#search"},r.a.createElement("div",{className:"form__group"},r.a.createElement("input",{ref:function(e){return t=e},type:"text",id:"search",name:"q",placeholder:"Search a song"}),r.a.createElement("label",{htmlFor:"search"},"Search a song")),r.a.createElement("button",{type:"submit",name:"button"},r.a.createElement("i",{className:"fa fa-search"})))},x=window.SC,O=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).iframe=r.a.createRef(),a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("mounted"),this.player=x.Widget(this.iframe),this.player.bind(x.Widget.Events.READY,(function(){e.player.bind(x.Widget.Events.PLAY,(function(e){console.log(e.id+" "+e.title+" "+e.artwork_url)})),e.player.bind(x.Widget.Events.PLAY_PROGRESS,(function(e){console.log("playing")})),e.player.bind(x.Widget.Events.FINISH,(function(){console.log("Finish")}))}))}},{key:"togglePlayer",value:function(){this.player.toggle(),this.props.onTogglePlay()}},{key:"generateURI",value:function(){var e={auto_play:!0,color:"#333333",buying:!1,sharing:!1,download:!1,show_playcount:!1,show_artwork:!1,show_user:!1,single_active:!1,hide_related:!0,show_comments:!1,show_reposts:!1},t=this.props.song.uri;for(var a in e)if(e.hasOwnProperty(a)){var n=e[a];t+="&amp;".concat(a,"=").concat(n)}return"https://w.soundcloud.com/player/?url="+t}},{key:"componentDidUpdate",value:function(){this.player.getSounds((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props;return r.a.createElement("div",{className:t.song.uri?"player":"player player--hidden"},r.a.createElement("div",{className:"player__inner"},r.a.createElement("div",{className:"player__thumb"},t.song.img?r.a.createElement("img",{className:"track__thumb",src:t.song.img,alt:t.song.title}):r.a.createElement("div",{className:"track__thumb svg"},r.a.createElement(_,null))),r.a.createElement("div",{className:"player__description"},t.song.title&&r.a.createElement("h3",{className:"track__title"},t.song.title)),r.a.createElement("div",{className:"player__controls"},r.a.createElement("button",{onClick:t.prev},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-backward"}))),r.a.createElement("button",{onClick:this.togglePlayer.bind(this)},r.a.createElement("span",null,r.a.createElement("i",{className:t.playing?"fa fa-pause":"fa fa-play"}))),r.a.createElement("button",{onClick:t.next},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-forward"}))))),r.a.createElement("iframe",{className:"player__iframe",ref:function(t){return e.iframe=t},title:"iframe",width:"100%",height:"166",scrolling:"no",frameBorder:"no",allow:"autoplay",src:this.generateURI()}))}}]),t}(r.a.Component),I=new N,j=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={data:[],query:"",song:{},songIndex:0,playing:!1},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"resolveData",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.data){e.next=5;break}t=JSON.parse(localStorage.data),e.next=9;break;case 5:return e.next=7,I.getList();case 7:t=e.sent,localStorage.data=JSON.stringify(t);case 9:this.setState({data:t}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error at resolveData",e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.searchSong(t);case 3:a=e.sent,this.setState({data:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error at resolveData",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"selectSong",value:function(e,t){this.setState({song:e,songIndex:t});for(var a=document.querySelectorAll(".track"),n=0;n<a.length;n++){a[n].classList.remove("playing")}document.getElementById(e.id).classList.add("playing"),this.togglePlay(!0)}},{key:"next",value:function(){var e=this.state.songIndex+1,t=this.state.data[e];t={pageTitle:"Title",id:t.id,title:t.title,genre:t.genre||"No genre",description:t.description,stream_url:t.stream_url,created_at:t.created_at,path:t.permalink,soundcloudURL:t.permalink_url,uri:t.uri,img:t.artwork_url,likes:t.likes_count?'<i class="fa fa-heart"></i> '.concat(t.likes_count):"",userImg:t.user.avatar_url||"../img/user.svg",userLink:t.user.permalink_url,userName:t.user.username,duration:t.duration},this.selectSong(t,e)}},{key:"prev",value:function(){if(this.state.songIndex>0){var e=this.state.songIndex-1,t=this.state.data[e];t={pageTitle:"Title",id:t.id,title:t.title,genre:t.genre||"No genre",description:t.description,stream_url:t.stream_url,created_at:t.created_at,path:t.permalink,soundcloudURL:t.permalink_url,uri:t.uri.replace("https://",""),img:t.artwork_url,likes:t.likes_count?'<i class="fa fa-heart"></i> '.concat(t.likes_count):"",userImg:t.user.avatar_url||"../img/user.svg",userLink:t.user.permalink_url,userName:t.user.username,duration:t.duration},this.selectSong(t,e)}}},{key:"togglePlay",value:function(e){this.setState({playing:e||!this.state.playing})}},{key:"componentDidMount",value:function(){this.resolveData()}},{key:"render",value:function(){var e=this;return r.a.createElement(E,null,r.a.createElement("section",{id:"explorer",className:"home"},r.a.createElement(S,{onSubmit:function(t){return e.handleSubmit(t)}}),r.a.createElement("section",{id:"content",className:"tracks"},r.a.createElement(y,{onSelectTrack:this.selectSong.bind(this),trackList:this.state.data}),r.a.createElement("section",{className:"tracks__more"},r.a.createElement("h3",null,"Search more songs"),r.a.createElement(S,{onSubmit:this.handleSubmit}))),r.a.createElement(O,{playing:this.state.playing,onTogglePlay:this.togglePlay.bind(this),song:this.state.song,next:this.next.bind(this),prev:this.prev.bind(this)})))}}]),t}(r.a.Component);var L=function(){return r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j})))},C=function(){return r.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.720cdbea.chunk.js.map