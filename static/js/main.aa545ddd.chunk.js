(this["webpackJsonpspanish-21"]=this["webpackJsonpspanish-21"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"rank":"A","suit":"spades"},{"rank":"2","suit":"spades"},{"rank":"3","suit":"spades"},{"rank":"4","suit":"spades"},{"rank":"5","suit":"spades"},{"rank":"6","suit":"spades"},{"rank":"7","suit":"spades"},{"rank":"8","suit":"spades"},{"rank":"9","suit":"spades"},{"rank":"J","suit":"spades"},{"rank":"Q","suit":"spades"},{"rank":"K","suit":"spades"},{"rank":"A","suit":"diamonds"},{"rank":"2","suit":"diamonds"},{"rank":"3","suit":"diamonds"},{"rank":"4","suit":"diamonds"},{"rank":"5","suit":"diamonds"},{"rank":"6","suit":"diamonds"},{"rank":"7","suit":"diamonds"},{"rank":"8","suit":"diamonds"},{"rank":"9","suit":"diamonds"},{"rank":"J","suit":"diamonds"},{"rank":"Q","suit":"diamonds"},{"rank":"K","suit":"diamonds"},{"rank":"A","suit":"clubs"},{"rank":"2","suit":"clubs"},{"rank":"3","suit":"clubs"},{"rank":"4","suit":"clubs"},{"rank":"5","suit":"clubs"},{"rank":"6","suit":"clubs"},{"rank":"7","suit":"clubs"},{"rank":"8","suit":"clubs"},{"rank":"9","suit":"clubs"},{"rank":"J","suit":"clubs"},{"rank":"Q","suit":"clubs"},{"rank":"K","suit":"clubs"},{"rank":"A","suit":"hearts"},{"rank":"2","suit":"hearts"},{"rank":"3","suit":"hearts"},{"rank":"4","suit":"hearts"},{"rank":"5","suit":"hearts"},{"rank":"6","suit":"hearts"},{"rank":"7","suit":"hearts"},{"rank":"8","suit":"hearts"},{"rank":"9","suit":"hearts"},{"rank":"J","suit":"hearts"},{"rank":"Q","suit":"hearts"},{"rank":"K","suit":"hearts"}]')},,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(5),c=a.n(s),l=(a(17),a(1)),i=a(3),o=a(6),u=a(7),d=a(9),v=a(8),m=a(10);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var p=n.a.createContext(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},{shoe:null,cardInd:0,players:[],activePlayer:0},{dealCard:function(){},dealCardToPlayer:function(e){},setActivePlayer:function(e){},setNextPlayer:function(){},dealRound:function(){}})),b=(a(18),a(19),a(2)),y=(a(20),function(e){return n.a.createElement("div",{className:"card"},!e.hide&&n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"value"},e.value),n.a.createElement("img",{className:"card-suit",width:"42px",src:"".concat("/spanish-21-react","/img/").concat(e.suit,".png"),alt:e.suit&&"".concat(e.suit)})),e.hide&&n.a.createElement("div",{className:"card-content"},"Hidden Card"))}),h=function(e){var t=e.cardId,a=e.hide,r=b[t];return n.a.createElement(y,{hide:a,value:r&&r.rank,suit:r&&r.suit})},k=function(e){var t;return e.bust?t=n.a.createElement("h4",null,"BUSTED"):e.active&&(t=n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-success",onClick:e.hit}," Hit "),n.a.createElement("button",{className:"btn btn-danger",onClick:e.stay}," Stay "))),n.a.createElement("div",{className:"player",id:e.id},n.a.createElement("div",{className:"player-header"},n.a.createElement("h4",null,"Player ",e.id,": ",e.total),t),n.a.createElement("div",{className:"cards"},e.cards.map((function(e,t){return n.a.createElement(h,{key:t,cardId:e})}))))};function O(e){for(var t=Math.round(e.length/52),a=0;a<1e3*t;a++){var r=Math.floor(Math.random()*e.length),n=Math.floor(Math.random()*e.length),s=e[r];e[r]=e[n],e[n]=s}return e}function E(e){for(var t=[],a=0;a<e;a++)for(var r=0;r<b.length;r++)t.push(r);return t}var P={A:11,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,J:10,Q:10,K:10};function j(e){for(var t=0,a=0,r=0;r<e.length;r++){var n=b[e[r]].rank;if("A"===n)a++;else t+=P[n]}for(var s=0;s<a;s++)t+=11-a+s+1<=t?1:11;return t}var C=function(e){var t=e.id,a=Object(r.useContext)(p),s=a.dealCard,c=a.setNextPlayer,l=a.players[t],i=l.cards,o=l.active,u=l.bust,d=l.total;return n.a.createElement(k,{id:t,cards:i,active:o,bust:u,total:d,hit:function(){return s(t)},stay:c})},g=a(11),N=(a(21),function(e){return n.a.createElement("div",{className:"dealer",id:e.id},n.a.createElement("div",null,e.active&&n.a.createElement("div",null,"Dealer: ",e.total," ",e.bust&&"BUSTED"),!e.active&&n.a.createElement("div",null,"Dealer: Hidden"),n.a.createElement("div",{className:"dealer-cards"},e.cards.map((function(t,a){return n.a.createElement(h,{key:a,cardId:t,hide:0===a&&!e.active})})))),n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-primary",onClick:e.nextPlayer},"Go to next player"),n.a.createElement("button",{className:"btn btn-info",onClick:e.dealRound},"Deal Round")))}),w=function(e){var t=e.id,a=Object(r.useContext)(p),s=a.dealRound,c=a.setNextPlayer,l=Object(g.a)(a,["dealRound","setNextPlayer"]).players[t],i=l.cards,o=l.active;!function(e){var t=Object(r.useContext)(p).dealCardsToDealer;Object(r.useEffect)((function(){e&&t()}),[e])}(o);var u=j(i),d=u>21;return n.a.createElement(N,{id:t,cards:i,total:u,bust:d,active:o,nextPlayer:c,dealRound:s})},x=(a(22),function(e){return n.a.createElement("div",{className:"spanish21-shoe"},n.a.createElement(h,{cardId:e.currentCard}),n.a.createElement("div",null,"Cards Left: ",e.cardsLeft),n.a.createElement("button",{className:"btn btn-secondary",onClick:e.dealCard},"Deal Card"))}),D=function(){var e=Object(r.useContext)(p),t=e.dealCard,a=e.shoe,s=a[a.length-1];return n.a.createElement(x,{dealCard:t,cardsLeft:a.length,currentCard:s})},S=function(){var e=Object(r.useContext)(p),t=(e.shoe,e.players);e.activePlayer,e.dealCard,e.dealCardToPlayer,e.dealRound,e.setNextPlayer;return n.a.createElement("div",{className:"game"},n.a.createElement("div",null,n.a.createElement(w,{id:0}),n.a.createElement("div",{className:"dealerside"},n.a.createElement(D,null)),n.a.createElement("div",{className:"players"},t.slice(1).map((function(e,t){return n.a.createElement(C,{key:t+1,id:t+1})})))))};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(v.a)(t).call(this,e))).setActivePlayer=function(e){a.setState((function(t){var a=t.players.map((function(e){return R({},e,{active:!1})}));return a[e].active=!0,R({},t,{players:a,activePlayer:e})}))},a.setNextPlayer=function(){var e=a.state,t=(e.activePlayer+1)%e.players.length;a.setActivePlayer(t)},a.dealCardNoState=function(e){var t=0===e.length?O(E(8)):e;return{card:t.pop(),shoe:t}},a.dealCard=function(){a.setState((function(e){var t=Object(l.a)(e.shoe),a=0===t.length?O(E(8)):t;return a.pop(),R({},e,{shoe:a})}))},a.dealCardToPlayer=function(e){a.setState((function(t){var r=Object(l.a)(t.players),n=Object(l.a)(t.shoe),s=0===n.length?O(E(8)):n,c=[].concat(Object(l.a)(r[e].cards),[s.pop()]),i=j(c),o=i>21;return o&&a.setNextPlayer(),r[e]=R({},r[e],{cards:c,total:i,bust:o}),R({},t,{players:r,shoe:s})}))},a.dealCardsToDealer=function(){var e=a.state.players[0];if(e.total<17){for(var t=Object(l.a)(e.cards),r=Object(l.a)(a.state.shoe);j(t)<17;){var n=a.dealCardNoState(r),s=n.shoe,c=n.card;r=s,t.push(c)}a.setState((function(e){var a=Object(l.a)(e.players),n=j(t),s=n>21;return a[0]=R({},a[0],{cards:t,total:n,bust:s}),R({},e,{players:a,shoe:r})}))}},a.resetRound=function(){a.setState((function(e){for(var t=0;t<e.players.length;t++)e.players[t].cards=[];return{players:e.players}}))},a.dealRound=function(){a.resetRound(),a.setActivePlayer(1);for(var e=0;e<2;e++)for(var t=0;t<a.state.players.length;t++)a.dealCardToPlayer(t)},a.state={shoe:[],cardInd:0,players:[{active:!1,total:0,bust:!1,cards:[]},{active:!1,total:0,bust:!1,cards:[]},{active:!1,total:0,bust:!1,cards:[]},{active:!1,total:0,bust:!1,cards:[]},{active:!1,total:0,bust:!1,cards:[]},{active:!1,total:0,bust:!1,cards:[]},{active:!1,total:0,bust:!1,cards:[]}],activePlayer:0,dealCard:a.dealCard,dealCardToPlayer:a.dealCardToPlayer,setActivePlayer:a.setActivePlayer,setNextPlayer:a.setNextPlayer,dealRound:a.dealRound,dealCardsToDealer:a.dealCardsToDealer},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(p.Provider,{value:this.state},n.a.createElement(S,null))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.aa545ddd.chunk.js.map