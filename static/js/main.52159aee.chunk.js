(window["webpackJsonpbaza-gier"]=window["webpackJsonpbaza-gier"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"en":{"title":"Welcome to GameBoard ","desc":"This is GameBoard coded in React","tictactoe":"Tic Tac Toe","homepage":"HomePage","paddlegame":"PaddleGame","setting":"Settings","pleaseSelect":"Select language","scoreReset":"Reset scores"},"pl":{"title":"Witaj w platformie gier ","desc":"platforma zostala zakodowana w React","tictactoe":"K\xf3\u0142ko i krzy\u017cyk","homepage":"Strona g\u0142\xf3wna","paddlegame":"Odbijanie pi\u0142ki","setting":"Ustawienia","pleaseSelect":"Wybierz j\u0119zyk","scoreReset":"Zresetuj wyniki"}}')},,,,,,,,,,,,function(e,t){e.exports={EventEmitter:{events:{},dispatch:function(e,t){this.events[e]&&this.events[e].forEach(function(e){e(t)})},subscribe:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}}}},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/cat.276094fe.wav"},function(e,t,a){e.exports=a.p+"static/media/loop.82baf3cd.mp3"},function(e,t,a){e.exports=a.p+"static/media/jump.c264143a.wav"},function(e,t,a){e.exports=a.p+"static/media/failure.44db2cdb.wav"},function(e,t,a){e.exports=a.p+"static/media/trash.0e45d333.mp3"},function(e,t,a){e.exports=a.p+"static/media/plate.39499797.mp3"},,,,,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(5),i=a.n(l),r=(a(42),a(8)),c=a(9),o=a(12),m=a(10),d=a(11),u=a(16),h=a(14),g=a(58),v=(a(43),a(7)),p=(a(44),a(27)),b=a.n(p),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setLanguage",value:function(e){localStorage.setItem("lang",e)}},{key:"catSound",value:function(){var e;e=document.getElementById("catSound"),e.volume=.1,setTimeout(function(){e.play()},6e3)}},{key:"catSoundStop",value:function(){document.getElementById("catSound").pause()}},{key:"getLocalization",value:function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(e){console.log(e)}):console.log("Twoja prz\u0119gl\u0105darka nie wspiera geolokalizacji")}},{key:"flyAnimationStart",value:function(){var e,t=Math.ceil(10),a=Math.floor(360),n=Math.floor(Math.random()*(a-t+1))+t,s=Math.ceil(10),l=Math.floor(300),i=Math.floor(Math.random()*(l-s+1))+s,r=Math.ceil(10),c=Math.floor(300),o=Math.floor(Math.random()*(c-r+1))+r;console.log(n,o,i),(e=document.getElementById("fly2")).style.animationPlayState="running",e.animate([{transform:"rotate(20deg) translate(100px,200px)"},{transform:"rotate("+n+"deg) translate("+o+"px,"+i+"px)"}],{duration:500,iterations:1,easing:"ease-in-out",fill:"both"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"main"},s.a.createElement("h1",{className:"title"},v[localStorage.getItem("lang")].title),s.a.createElement("h3",{className:"desc"},v[localStorage.getItem("lang")].desc),s.a.createElement("div",{id:"fly2",className:"fly2",onMouseLeave:this.flyAnimationStart.bind(this)})),s.a.createElement("div",{className:"meow"},s.a.createElement("audio",{id:"catSound",src:b.a,style:{display:"none"}}),s.a.createElement("div",{onMouseEnter:this.catSound.bind(this),onMouseLeave:this.catSoundStop.bind(this),className:"cat"},s.a.createElement("div",{className:"cat-inner"}),s.a.createElement("div",{className:"cat-head"},s.a.createElement("div",{className:"cat-ear"}),s.a.createElement("div",{className:"cat-ear2"}),s.a.createElement("div",{className:"cat-nose"}),s.a.createElement("div",{className:"cat-mouth"},s.a.createElement("div",{className:"cat-meow"})),s.a.createElement("div",{className:"cateye"},s.a.createElement("div",{className:"cateye inner"}),s.a.createElement("div",{className:"cateye inner inner-2"}),s.a.createElement("div",{className:"cateyelid top"}),s.a.createElement("div",{className:"cateyelid bottom"})),s.a.createElement("div",{className:"cateye2"},s.a.createElement("div",{className:"cateye inner"}),s.a.createElement("div",{className:"cateye inner inner-2"}),s.a.createElement("div",{className:"cateyelid top"}),s.a.createElement("div",{className:"cateyelid bottom"}))),s.a.createElement("div",{className:"cat-leg"}),s.a.createElement("div",{className:"cat-foot"}),s.a.createElement("div",{className:"cat-leg-front"}),s.a.createElement("div",{className:"cat-foot-front"}),s.a.createElement("div",{className:"cat-hind-leg"}),s.a.createElement("div",{className:"cat-hind-leg-top"}),s.a.createElement("div",{className:"cat-hind-foot"}),s.a.createElement("div",{className:"cat-hind-paw"}),s.a.createElement("div",{className:"cat-hind-leg2"}),s.a.createElement("div",{className:"cat-hind-leg-top2"}),s.a.createElement("div",{className:"cat-hind-foot2"}),s.a.createElement("div",{className:"cat-hind-paw2"}),s.a.createElement("div",{className:"cat-tail"}),s.a.createElement("div",{className:"cat-tail-end"}))))}}]),t}(s.a.Component),E=a(18),y=a.n(E),S=a(22),k=a(15),N=(a(46),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={player1:"O",player2:"X",turn:1,board:["","","","","","","","",""],gameEnabled:!1,info:""},e.computerTurn=e.computerTurn.bind(Object(k.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"checkGameStatus",value:function(e){for(var t=0;t<=6;t+=3)this.state.board[t]&&this.state.board[t+1]&&this.state.board[t+2]&&this.state.board[t]===this.state.board[t+1]&&this.state.board[t+1]===this.state.board[t+2]&&this.endGame(e);for(var a=0;a<3;a++)this.state.board[a]&&this.state.board[a+3]&&this.state.board[a+6]&&this.state.board[a]===this.state.board[a+3]&&this.state.board[a+3]===this.state.board[a+6]&&this.endGame(e);this.state.board[0]&&this.state.board[4]&&this.state.board[8]&&this.state.board[0]===this.state.board[4]&&this.state.board[4]===this.state.board[8]&&this.endGame(e),this.state.board[2]&&this.state.board[4]&&this.state.board[6]&&this.state.board[2]===this.state.board[4]&&this.state.board[4]===this.state.board[6]&&this.endGame(e),void 0===e&&this.state.gameEnabled[!0]&&this.state.turn>8&&this.tieGame()}},{key:"onFieldClick",value:function(e){if(this.state.gameEnabled)if(""===this.state.board[e])if(this.state.turn>9)this.tieGame();else{var t=this.state.turn%2===0?this.state.player1:this.state.player2,a=this.state.turn%2===1?this.state.player1:this.state.player2,n=this.state.board;n[e]=t;var s=new Number(this.state.turn)+1;this.setState({turn:s,board:n,info:""})," ",i.a.render(" ",document.querySelector(".game-info")),this.checkGameStatus(t),this.nextTurn(a)}else this.infoGame()}},{key:"infoGame",value:function(){this.setState({info:"This field is already taken!"}),i.a.render("This field is already taken!",document.querySelector(".game-info"))}},{key:"nextTurn",value:function(e){var t;t="next player:   "+e,i.a.render(t,document.querySelector(".nextturn"))}},{key:"resetGameBoard",value:function(){this.setState({board:["","","","","","","","",""],turn:0,gameEnabled:!1}),i.a.render("",document.querySelector(".winner")),i.a.render(" ",document.querySelector(".nextturn")),i.a.render("Choose X or O to begin!",document.querySelector(".game-info"))}},{key:"endGame",value:function(e){var t;t="the winner is:   "+e,i.a.render(t,document.querySelector(".winner")),this.setState({gameEnabled:!1})}},{key:"tieGame",value:function(){i.a.render("tie!!!",document.querySelector(".winner")),this.setState({gameEnabled:!1}),this.infoGame()}},{key:"setX",value:function(){!1===this.state.gameEnabled&&this.setState({player1:"O",player2:"X",turn:1,gameEnabled:!0,info:"you chose X"}),i.a.render("you chose X",document.querySelector(".game-info"))}},{key:"setO",value:function(){!1===this.state.gameEnabled&&this.setState({player1:"X",player2:"O",turn:1,gameEnabled:!0,info:"you chose O"}),i.a.render("you chose O",document.querySelector(".game-info"))}},{key:"getRandomInt",value:function(){for(var e=Math.ceil(0),t=Math.floor(8),a=Math.floor(Math.random()*(t-e+1))+e;""!==this.state.board[a];)a=Math.floor(Math.random()*(t-e+1))+e;return a}},{key:"computerTurn",value:function(){var e=Object(S.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.board,e.next=3,this.getRandomInt();case 3:a=e.sent,t[a]="o",this.checkGameStatus("o"),this.setState({turn:this.state.turn+1,board:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onFieldClickCom",value:function(){var e=Object(S.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.gameEnabled){e.next=2;break}return e.abrupt("return");case 2:if(""===this.state.board[t]){e.next=5;break}return alert("To miejsce jest ju\u017c\xa0zaj\u0119te!"),e.abrupt("return");case 5:return(a=this.state.board)[t]="x",this.checkGameStatus("x"),this.setState({turn:this.state.turn+1,board:a}),e.next=11,this.computerTurn();case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"wrapperFunction",value:function(){this.getRandomInt.bind(this),this.computerTurn.bind(this),this.onFieldClickCom.bind(this)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tictactoe"},s.a.createElement("div",{className:"score-board"},s.a.createElement("div",{className:"score-board-border"},s.a.createElement("div",{className:"mode"},s.a.createElement("h1",{className:"mode-title"},"Mode:"),s.a.createElement("div",{className:"select-mode"},s.a.createElement("div",{className:"vs-player"},"vs Player"),s.a.createElement("div",{className:"vs-comp",onClick:this.wrapperFunction.bind(this)},"vs Comp"))),s.a.createElement("div",{className:"difficulty"},s.a.createElement("h1",{className:"score-board-title"},"Move:"),s.a.createElement("div",{className:"nextturn"})),s.a.createElement("div",{className:"choose"},s.a.createElement("h1",{className:"score-board-title"},"Choose:"),s.a.createElement("p",{className:"choose-player",onClick:this.setX.bind(this)},"X"),s.a.createElement("p",{className:"choose-player",onClick:this.setO.bind(this)},"O")),s.a.createElement("div",{className:"score"},s.a.createElement("h1",{className:"score-board-title"},"Score"),s.a.createElement("div",{className:"winner"})),s.a.createElement("div",{onClick:this.resetGameBoard.bind(this),className:"btn-reset"},"RESET GAME"))),s.a.createElement("div",{className:"game-container"},s.a.createElement("div",{className:"game-board"},this.state.board.map(function(t,a){return s.a.createElement("div",{className:"game-board--field",id:"field"+a,key:a,onClick:e.onFieldClick.bind(e,a)},s.a.createElement("div",{className:"game-board--field-content"},t))})),s.a.createElement("div",{className:"game-info"},"Choose X or O to begin!"))))}}]),t}(s.a.Component)),I=(a(47),a(28)),w=a.n(I),x=a(29),O=a.n(x),j=a(30),R=a.n(j),C=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).game={gameBoard:null,context:null,ballX:100,ballY:100,ballSpeedX:5,ballSpeedY:7,paddleWidth:100,paddleHeight:10,paddleDistFromEdge:60,paddleX:400,gameSpeed:1e3,gameStatus:null},e.state={gameRefreshInterval:null,bounces:0,isFullScreen:!1},e.updateAll=e.updateAll.bind(Object(k.a)(e)),e.updateMousePosition=e.updateMousePosition.bind(Object(k.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.game.gameBoard=this.refs.canvas,this.game.context=this.refs.canvas.getContext("2d"),this.backgroundSound(),this.setState({gameRefreshInterval:setInterval(this.updateAll,1e3/30)}),this.refs.canvas.addEventListener("mousemove",this.updateMousePosition)}},{key:"setLevel",value:function(){this.state.bounces>0&&(clearInterval(this.state.gameRefreshInterval),this.setState({gameRefreshInterval:setInterval(this.updateAll,1e3/30)}),this.setState({gameSpeed:1e3})),this.state.bounces>5&&(clearInterval(this.state.gameRefreshInterval),this.setState({gameRefreshInterval:setInterval(this.updateAll,800/30)}),this.setState({gameSpeed:800})),this.state.bounces>10&&(clearInterval(this.state.gameRefreshInterval),this.setState({gameRefreshInterval:setInterval(this.updateAll,500/30)}),this.setState({gameSpeed:500})),this.state.bounces>20&&(clearInterval(this.state.gameRefreshInterval),this.setState({gameRefreshInterval:setInterval(this.updateAll,400/30)}),this.setState({gameSpeed:400}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.gameRefreshInterval)}},{key:"updateDirection",value:function(){this.setLevel(),this.game.ballX+=this.game.ballSpeedX,this.game.ballY+=this.game.ballSpeedY,this.game.ballX<0&&(this.game.ballSpeedX*=-1,this.beepSound()),this.game.ballX>this.game.gameBoard.width&&(this.game.ballSpeedX*=-1,this.beepSound()),this.game.ballY<0&&(this.game.ballSpeedY*=-1,this.beepSound()),this.game.ballY>this.game.gameBoard.height&&(this.resetBall(),this.setState({bounces:0}),this.failureSound(),clearInterval(this.state.gameRefreshInterval),this.gameOver());var e=this.game.gameBoard.height-this.game.paddleDistFromEdge,t=e+this.game.paddleHeight,a=this.game.paddleX,n=a+this.game.paddleWidth;this.game.ballY>e&&this.game.ballY<t&&this.game.ballX>a&&this.game.ballX<n&&(this.game.ballSpeedY*=-1,this.setState({bounces:this.state.bounces+1}),this.setHighScore(),this.beepSound())}},{key:"gameOver",value:function(){this.pauseBackgroundSound(),this.setState({gameStatus:!1})}},{key:"setHighScore",value:function(){localStorage.getItem("highScore")<this.state.bounces&&localStorage.setItem("highScore",this.state.bounces)}},{key:"printElements",value:function(){this.game.context.fillStyle="black",this.game.context.fillRect(0,0,this.game.gameBoard.width,this.game.gameBoard.height),this.game.context.fillStyle="white",this.game.context.fillRect(this.game.paddleX,this.game.gameBoard.height-this.game.paddleDistFromEdge-this.game.paddleHeight,this.game.paddleWidth,this.game.paddleHeight),this.game.context.fillStyle="white",this.game.context.beginPath(),this.game.context.arc(this.game.ballX,this.game.ballY,10,0,2*Math.PI,!0),this.game.context.fill()}},{key:"updateAll",value:function(){this.printElements(),this.updateDirection()}},{key:"updateMousePosition",value:function(e){var t=this.refs.canvas.getBoundingClientRect(),a=e.clientX-t.left;this.game.paddleX=a-this.game.paddleWidth/2}},{key:"resetBall",value:function(){this.game.ballX=this.game.gameBoard.width/2,this.game.ballY=this.game.gameBoard.height/4}},{key:"backgroundSound",value:function(){var e;(e=document.getElementById("soundEfx")).volume=.2,e.play()}},{key:"pauseBackgroundSound",value:function(){document.getElementById("soundEfx").pause()}},{key:"beepSound",value:function(){var e;e=document.getElementById("beepSound"),e.volume=.5,e.play()}},{key:"failureSound",value:function(){var e;e=document.getElementById("failureSound"),e.volume=.2,e.play()}},{key:"setCanvasSize",value:function(){return this.state.isFullScreen?"game-board-paddle game-board-paddle--full-screen":"game-board-paddle"}},{key:"toggleFullScreen",value:function(){this.setState({isFullScreen:!this.state.isFullScreen})}},{key:"startGame",value:function(){this.state.gameRefreshInterval&&(this.setState({gameRefreshInterval:setInterval(this.updateAll,1e3/30)}),this.setState({gameSpeed:1e3}),this.backgroundSound(),this.setState({gameStatus:!0}))}},{key:"startEndGame",value:function(){this.state.gameRefreshInterval?(clearInterval(this.state.gameRefreshInterval),this.setState({gameRefreshInterval:null}),this.pauseBackgroundSound()):(this.setState({gameRefreshInterval:setInterval(this.updateAll,this.game.gameSpeed/30)}),this.backgroundSound()),this.setState({gameStatus:!0})}},{key:"render",value:function(){var e,t;return e=this.state.gameRefreshInterval?s.a.createElement("div",{onClick:this.startEndGame.bind(this),className:"menu-text pause"},"PAUSE"):s.a.createElement("div",{onClick:this.startEndGame.bind(this),className:"menu-text pause"},"RESUME"),!1===this.state.gameStatus&&(t=s.a.createElement("div",{onClick:this.startGame.bind(this),className:"gameover"},"Game Over",s.a.createElement("div",{className:"h5"},"start again"))),s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{onClick:this.toggleFullScreen.bind(this),style:{cursor:"pointer"},className:"full"},"\u2921"),s.a.createElement("div",{className:"scanlines"},s.a.createElement("div",{className:"screen"},s.a.createElement("div",{className:"overlay"},s.a.createElement("div",{className:"text"},s.a.createElement("span",null,"AV-1")),s.a.createElement("div",{className:"menu"},s.a.createElement("header",null,s.a.createElement("div",{className:"menu-text"},"Paddle Game"),e),s.a.createElement("div",{className:"game-field"},t,s.a.createElement("audio",{id:"soundEfx",src:w.a,style:{display:"none"},loop:!0}),s.a.createElement("audio",{id:"beepSound",src:O.a,style:{display:"none"}}),s.a.createElement("audio",{id:"failureSound",src:R.a,style:{display:"none"}}),s.a.createElement("canvas",{onDoubleClick:this.toggleFullScreen.bind(this),className:this.setCanvasSize(),ref:"canvas",width:"600",height:"400"})),s.a.createElement("footer",null,s.a.createElement("div",{className:"key"},s.a.createElement("h1",null,"High Score: ",localStorage.getItem("highScore"))),s.a.createElement("div",{className:"key"},s.a.createElement("h2",null,"Current bounces: ",this.state.bounces))))))),s.a.createElement("div",{className:"gameover"}))}}]),t}(s.a.Component),M=(a(48),a(19)),B=a(31),G=a.n(B),X=a(32),T=a.n(X),A=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"setLanguage",value:function(e){localStorage.setItem("lang",e),M.EventEmitter.dispatch("langChange",!0)}},{key:"resetScore",value:function(){localStorage.setItem("highScore",0)}},{key:"trashSoundStart",value:function(){var e;(e=document.getElementById("trash")).volume=.1,e.play(),this.trashAnimationStart()}},{key:"trashAnimationStart",value:function(){var e;(e=document.getElementById("smells")).style.animationPlayState="running",e.style.display="block"}},{key:"trashAnimationStop",value:function(){document.getElementById("smells").style.display="none"}},{key:"plateSoundStart",value:function(){var e;(e=document.getElementById("plate")).volume=.1,e.play(),this.flyAnimationStart()}},{key:"flyAnimationStart",value:function(){var e;(e=document.getElementById("fly1")).style.animationPlayState="running",e.style.display="block"}},{key:"render",value:function(){return s.a.createElement("div",{className:"setting"},s.a.createElement("div",{className:"option setting-menu"},s.a.createElement("h5",null," ",v[localStorage.getItem("lang")].pleaseSelect),s.a.createElement("button",{onClick:this.setLanguage.bind(this,"pl"),className:"btn btn-danger"},"PL"),s.a.createElement("button",{onClick:this.setLanguage.bind(this,"en"),className:"btn btn-primary"},"EN")),s.a.createElement("div",{className:"option1 setting-menu"},s.a.createElement("h5",null," ",v[localStorage.getItem("lang")].scoreReset),s.a.createElement("button",{onClick:this.resetScore.bind(this),className:"btn btn-danger"},"RESET")),s.a.createElement("div",{className:"plate",onMouseEnter:this.plateSoundStart.bind(this)},s.a.createElement("audio",{id:"plate",src:T.a,style:{display:"none"}}),"created by ",s.a.createElement("a",{href:"mailto:tn@mpro.pl"},"MPRO"),s.a.createElement("div",{id:"fly1",className:"fly1"})),s.a.createElement("div",{className:"trash",onMouseEnter:this.trashSoundStart.bind(this),onMouseLeave:this.trashAnimationStop.bind(this)},s.a.createElement("audio",{id:"trash",src:G.a,style:{display:"none"}}),s.a.createElement("div",{className:"pokrywka"}),s.a.createElement("div",{className:"blackhole"},s.a.createElement("div",{class:"eyes"},s.a.createElement("div",{class:"eye"},s.a.createElement("div",{class:"ball"})),s.a.createElement("div",{class:"eye"},s.a.createElement("div",{class:"ball"})))),s.a.createElement("div",{className:"paski"}),s.a.createElement("div",{id:"smells",className:"smells"}),s.a.createElement("div",{className:"fly"})))}}]),t}(s.a.Component),F=function(e){function t(){var e;Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={appRefreshed:null};return(!localStorage.getItem("lang")||void 0===localStorage.getItem("lang")||["en","pl"].indexOf(localStorage.getItem("lang"))<0)&&localStorage.setItem("lang","en"),M.EventEmitter.subscribe("langChange",function(){e.setState({appRefreshed:new Date})}),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(g.a,{className:"navigation navi",variant:"pills",defaultActiveKey:"/TicTacToe"},s.a.createElement(g.a.Item,null,s.a.createElement(u.b,{className:"nav-link",to:"/"},v[localStorage.getItem("lang")].homepage)),s.a.createElement(g.a.Item,null,s.a.createElement(u.b,{className:"nav-link nav-tic-tac",to:"/TicTacToe"},v[localStorage.getItem("lang")].tictactoe)),s.a.createElement(g.a.Item,null,s.a.createElement(u.b,{className:"nav-link",to:"/PaddleGame"},v[localStorage.getItem("lang")].paddlegame)),s.a.createElement(g.a.Item,null,s.a.createElement(u.b,{className:"nav-link",to:"/Setting"},v[localStorage.getItem("lang")].setting)))),s.a.createElement("div",{className:"container"},s.a.createElement(h.a,{exact:!0,path:"/",component:f}),s.a.createElement(h.a,{path:"/tictactoe",component:N}),s.a.createElement(h.a,{path:"/paddlegame",component:C}),s.a.createElement(h.a,{path:"/setting",component:A}))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[37,1,2]]]);
//# sourceMappingURL=main.52159aee.chunk.js.map