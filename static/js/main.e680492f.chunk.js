(this["webpackJsonpreact-wikishow"]=this["webpackJsonpreact-wikishow"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),a=c(39),n=c.n(a),i=c(17),o=(c(47),c(48),c(49),c(2)),l=c(3),j=(c(50),c(0)),d=function(e){return Object(j.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},b=(c(52),c.p+"static/media/Logo.5f0f4bac.JPG"),u=[{display:"Home",path:"/"}],m=[{display:"Movies",path:"/movie"}],h=[{display:"TV",path:"/tv"}],x=[{display:"Actors",path:"/person"}],O=function(){var e=Object(s.useRef)(null);return Object(s.useEffect)((function(){var t=function(){document.documentElement.scrollTop>92?e.current.classList.add("vanish"):e.current.classList.remove("vanish")};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),Object(j.jsxs)("div",{ref:e,className:"header",children:[Object(j.jsx)("div",{className:"header_container",children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:b,alt:"Se necesita alt para suprimir errores"}),Object(j.jsx)(o.b,{to:"/",children:"WikiShow"})]})}),Object(j.jsxs)("ul",{className:"header_menu",children:[u.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{className:"small",children:Object(j.jsxs)(o.b,{className:"small_header",to:e.path,children:[Object(j.jsx)("i",{className:"bx bx-home"}),e.display]})})},e)})),m.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{className:"small",children:Object(j.jsxs)(o.b,{className:"small_header",to:e.path,children:[Object(j.jsx)("i",{className:"bx bx-movie"}),e.display]})})},e)})),h.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{className:"small",children:Object(j.jsxs)(o.b,{className:"small_header",to:e.path,children:[Object(j.jsx)("i",{className:"bx bx-tv"}),e.display]})})},e)})),x.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{className:"small",children:Object(j.jsxs)(o.b,{className:"small_header",to:e.path,children:[Object(j.jsx)("i",{className:"bx bx-user"}),e.display]})})},e)}))]})]})},p=c.p+"static/media/footer-background.ee3893bf.jpg",v=(c(58),function(){return Object(j.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(p,")")},children:Object(j.jsxs)("div",{className:"footer__content container",children:[Object(j.jsx)("div",{className:"footer__content__logo",children:Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:b,alt:""}),Object(j.jsx)(o.b,{to:"/",children:"WikiShow"})]})}),Object(j.jsxs)("div",{className:"footer__content__menus",children:[Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h3",{children:"THE BASICS"})}),Object(j.jsx)(o.b,{to:"/",children:"About TMDB"}),Object(j.jsx)(o.b,{to:"/",children:"Contact"}),Object(j.jsx)(o.b,{to:"/",children:"Help forums"}),Object(j.jsx)(o.b,{to:"/",children:"API"}),Object(j.jsx)(o.b,{to:"/",children:"System status"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h3",{children:"PARTICIPATES"})}),Object(j.jsx)(o.b,{to:"/",children:"Contribution Guide"}),Object(j.jsx)(o.b,{to:"/",children:"Add new movie"}),Object(j.jsx)(o.b,{to:"/",children:"Add new tv show"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h3",{children:"COMMUNITY"})}),Object(j.jsx)(o.b,{to:"/",children:"Guidelines"}),Object(j.jsx)(o.b,{to:"/",children:"Discussions"}),Object(j.jsx)(o.b,{to:"/",children:"Leaderboard"}),Object(j.jsx)(o.b,{to:"/",children:"Twitter"})]}),Object(j.jsxs)("div",{className:"footer__content__menu",children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h3",{children:"LEGAL"})}),Object(j.jsx)(o.b,{to:"/",children:"Terms of use"}),Object(j.jsx)(o.b,{to:"/",children:"API Terms of Use"}),Object(j.jsx)(o.b,{to:"/",children:"Privacy Policy"})]})]})]})})}),f=c(8),g=c(6),_=c(4),N=c.n(_),y=c(105),w=c(104),k=c(41),C=c.n(k),L=c(42),S=c.n(L),T={link:"https://api.themoviedb.org/3",key:"4113f3ad734e747a5b463cde8c55de42"},E=C.a.create({baseURL:T.link,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return S.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:T.key}))}});E.interceptors.request.use(function(){var e=Object(f.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E.interceptors.response.use((function(e){return e&&e.data?e.data:e}));var A=E,I={movie:"movie",tv:"tv",person:"person"},M={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},V={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},P={popular:"popular",movie_credits:"movie_credits"},F={getMoviesList:function(e,t){var c="movie/"+M[e];return A.get(c,t)},getTvList:function(e,t){var c="tv/"+V[e];return A.get(c,t)},getPersonList:function(e,t){var c="person/"+P[e];return A.get(c,t)},getVideos:function(e,t){var c=I[e]+"/"+t+"/videos";return A.get(c,{params:{}})},search:function(e,t){var c="search/"+I[e];return A.get(c,t)},detail:function(e,t,c){var s=I[e]+"/"+t;return A.get(s,c)},credits:function(e,t){var c=I[e]+"/"+t+"/credits";return A.get(c,{params:{}})},similar:function(e,t){var c=I[e]+"/"+t+"/similar";return A.get(c,{params:{}})}},G={original:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},R=(c(92),function(e){var t=Object(s.useRef)(null);return Object(j.jsxs)("div",{ref:t,className:"modal_video",children:[e.children,Object(j.jsx)("div",{className:"modal_video_close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(j.jsx)("i",{className:"bx bx-x"})})]})}),q=function(e){var t=Object(s.useState)(!1),c=Object(g.a)(t,1)[0];return Object(j.jsx)("div",{id:e.id,className:"modal ".concat(c?"active":""),children:e.children})},B=(c(93),function(e){var t=Object(l.f)(),c=e.film,s=G.original(c.backdrop_path?c.backdrop_path:c.poster_path),r=function(){var e=Object(f.a)(N.a.mark((function e(){var t,s,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(c.id)),e.next=3,F.getVideos(I.movie,c.id);case 3:(s=e.sent).results.length>0&&(r="https://www.youtube.com/embed/"+s.results[0].key,t.querySelector(".modal_video > iframe").setAttribute("src",r)),t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"hero-slide_item ".concat(e.className),style:{backgroundImage:"url(".concat(s,")")},children:Object(j.jsxs)("div",{className:"hero-slide_item_video container",children:[Object(j.jsx)("i",{className:"bx bx-caret-left"}),Object(j.jsxs)("div",{className:"hero-slide_item_video_information",children:[Object(j.jsx)("h2",{className:"title",children:c.title}),Object(j.jsx)("div",{className:"overview",children:c.overview}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsxs)(d,{onClick:function(){return t.push("movie/"+c.id)},children:[Object(j.jsx)("i",{className:"bx bx-log-in-circle"}),"Go to the movie"]}),Object(j.jsxs)(d,{onClick:r,children:[Object(j.jsx)("i",{className:"bx bx-movie-play"}),"Watch a video"]})]})]}),Object(j.jsx)("div",{className:"hero-slide_item_video_poster",children:Object(j.jsx)("img",{src:G.original(c.poster_path),alt:"Se necesita alt para suprimir errores"})}),Object(j.jsx)("i",{className:"bx bx-caret-right"})]})})}),W=function(){var e=Object(s.useState)([""]),t=Object(g.a)(e,2),c=t[0],r=t[1];Object(s.useEffect)((function(){var e=function(){var e=Object(f.a)(N.a.mark((function e(){var t,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.next=3,F.getMoviesList(M.popular,{params:t});case 3:c=e.sent,r(c.results.slice(1,9));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var a=function(e){var t=e.film,c=Object(s.useRef)("");return Object(j.jsx)(q,{id:"modal_".concat(t.id),children:Object(j.jsx)(R,{onClose:function(){return c.current.setAttribute("src","")},children:Object(j.jsx)("iframe",{ref:c,width:"100%",height:"900px",title:"Name"})})})};return Object(j.jsxs)("div",{className:"hero-slide",children:[Object(j.jsx)(y.a,{grabCursor:!0,slidesPerView:1,children:c.map((function(e,t){return Object(j.jsx)(w.a,{children:function(t){var c=t.isActive;return Object(j.jsx)(B,{film:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(j.jsx)(a,{film:e},t)}))]})},D=(c(94),function(e){var t=e.item,c="/"+I[e.category]+"/"+t.id,s=G.w500(t.poster_path),r=G.w500(t.profile_path);return Object(j.jsxs)(o.b,{to:c,children:[Object(j.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(s,")")},children:Object(j.jsxs)("div",{className:"person-card",style:{backgroundImage:"url(".concat(r,")")},children:[Object(j.jsx)("h1",{className:"vote-average",children:t.vote_average}),Object(j.jsxs)(d,{children:[Object(j.jsx)("i",{className:"bx bx-search"}),Object(j.jsx)("p",{className:"movie-over",children:t.overview||t.name||t.title||t.tagline})]})]})}),Object(j.jsx)("h2",{className:"name-card",children:t.title||t.name})]})}),H=(c(95),function(e){var t=Object(s.useState)([]),c=Object(g.a)(t,2),r=c[0],a=c[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(f.a)(N.a.mark((function t(){var c,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,s={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===I.movie?6:10;break;case 6:return t.next=8,F.getMoviesList(e.type,{params:s});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,F.getTvList(e.type,{params:s});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,F.similar(e.category,e.id);case 17:c=t.sent;case 18:a(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"movie-list",children:Object(j.jsx)(y.a,{grabCursor:!0,spaceBetween:9,slidesPerView:"auto",children:r.map((function(t,c){return Object(j.jsx)(w.a,{children:Object(j.jsx)(D,{item:t,category:e.category})},c)}))})})})}),J=(c(96),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(W,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)("div",{className:"section__header mb-3",children:[Object(j.jsx)("h2",{className:"first_category",children:"Trending Movies"}),Object(j.jsx)(H,{category:I.movie,type:M.popular}),Object(j.jsx)(o.b,{to:"/movie",children:Object(j.jsx)(d,{className:"small-home-trending-movie",children:"View All Movies"})})]})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)("div",{className:"section__header mb-3",children:[Object(j.jsx)("h2",{className:"second_category",children:"Top Rated Movies"}),Object(j.jsx)(H,{category:I.movie,type:M.top_rated}),Object(j.jsx)(o.b,{to:"/movie",children:Object(j.jsx)(d,{className:"small-home-rated-movies",children:"View All Movies"})})]})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)("div",{className:"section__header mb-3",children:[Object(j.jsx)("h2",{className:"third_category",children:"Trending TV"}),Object(j.jsx)(H,{category:I.tv,type:V.popular}),Object(j.jsx)(o.b,{to:"/tv",children:Object(j.jsx)(d,{className:"small-home-trending-tv",children:"View All TV-Show"})})]})}),Object(j.jsx)("div",{className:"mb-3",children:Object(j.jsxs)("div",{className:"section__header mb-3",children:[Object(j.jsx)("h2",{className:"fourth_category",children:"Top Rated TV"}),Object(j.jsx)(H,{category:I.tv,type:V.top_rated}),Object(j.jsx)(o.b,{to:"/tv",children:Object(j.jsx)(d,{className:"small-home-rated-tv",children:"View All TV-Show"})})]})})]})]})}),U=(c(97),function(){return Object(j.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(p,")")}})}),z=c(26),Y=(c(98),c(99),function(e){return Object(j.jsx)("input",{placeholder:e.placeholder,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),K=function(e){var t=Object(l.f)(),c=Object(s.useState)(e.keyword?e.keyword:""),r=Object(g.a)(c,2),a=r[0],n=r[1],i=Object(s.useCallback)((function(){a.trim().length>0&&t.push("/".concat(I[e.category],"/search/").concat(a))}),[a,e.category,t]);return Object(s.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[a,i]),Object(j.jsxs)("div",{className:"movie-search",children:[Object(j.jsx)(Y,{type:"text",placeholder:"Write here to search",value:a,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)(d,{className:"small",onClick:i,children:Object(j.jsx)("i",{className:"bx bx-search"})})]})},Q=function(e){var t=Object(s.useState)([]),c=Object(g.a)(t,2),r=c[0],a=c[1],n=Object(s.useState)(1),i=Object(g.a)(n,2),o=i[0],b=i[1],u=Object(s.useState)(0),m=Object(g.a)(u,2),h=m[0],x=m[1],O=Object(l.g)().keyword;Object(s.useEffect)((function(){var t=function(){var t=Object(f.a)(N.a.mark((function t(){var c,s,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c="",void 0!==O){t.next=19;break}s={},t.t0=e.category,t.next=t.t0===I.movie?6:t.t0===I.tv?10:(t.t0,14);break;case 6:return t.next=8,F.getMoviesList(M.upcoming,{params:s});case 8:return c=t.sent,t.abrupt("break",17);case 10:return t.next=12,F.getTvList(V.popular,{params:s});case 12:return c=t.sent,t.abrupt("break",17);case 14:return t.next=16,F.getPersonList(P.popular,{params:s});case 16:c=t.sent;case 17:t.next=23;break;case 19:return r={query:O},t.next=22,F.search(e.category,{params:r});case 22:c=t.sent;case 23:a(c.results),x(c.total_pages);case 25:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,O]);var p=function(){var t=Object(f.a)(N.a.mark((function t(){var c,s,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c="",void 0!==O){t.next=19;break}s={page:o+1},t.t0=e.category,t.next=t.t0===I.movie?6:t.t0===I.tv?10:(t.t0,14);break;case 6:return t.next=8,F.getMoviesList(M.upcoming,{params:s});case 8:return c=t.sent,t.abrupt("break",17);case 10:return t.next=12,F.getTvList(V.popular,{params:s});case 12:return c=t.sent,t.abrupt("break",17);case 14:return t.next=16,F.getPersonList(P.popular,{params:s});case 16:c=t.sent;case 17:t.next=23;break;case 19:return n={page:o+1,query:O},t.next=22,F.search(e.category,{params:n});case 22:c=t.sent;case 23:a([].concat(Object(z.a)(r),Object(z.a)(c.results))),b(o+1);case 25:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section mb-2",children:Object(j.jsx)(K,{category:e.category,keyword:O})}),Object(j.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(j.jsx)(D,{category:e.category,item:t},c)}))}),o<h?Object(j.jsx)("div",{className:"movie-grid_more",children:Object(j.jsx)(d,{className:"small",onClick:p,children:"Load more"})}):""]})},X=function(){var e=Object(l.g)().category;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(U,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(Q,{category:e})})})]})},Z=function(e){var t=Object(l.g)().category,c=Object(s.useState)([]),r=Object(g.a)(c,2),a=r[0],n=r[1];return Object(s.useEffect)((function(){var c=function(){var c=Object(f.a)(N.a.mark((function c(){var s;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,F.credits(t,e.id);case 2:s=c.sent,n(s.cast.slice(0,7));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(j.jsx)("div",{className:"participants",children:a.map((function(e,t){return Object(j.jsxs)("div",{className:"participants__item",children:[Object(j.jsx)("div",{className:"participants__item__img",style:{backgroundImage:"url(".concat(G.w500(e.profile_path||e.poster_path||e.backdrop_path),")")}}),Object(j.jsx)("p",{className:"participants__item__name",children:e.title||e.name})]},t)}))})},$=(c(100),function(e){var t=e.video;return Object(j.jsxs)("div",{className:"video",children:[Object(j.jsx)("div",{className:"video__title",children:Object(j.jsx)("h2",{className:"name-trailer",children:t.title||t.name})}),Object(j.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),title:"name",width:"100%",height:"660px"})]})}),ee=function(e){var t=Object(l.g)().category,c=Object(s.useState)([]),r=Object(g.a)(c,2),a=r[0],n=r[1];return Object(s.useEffect)((function(){var c=function(){var c=Object(f.a)(N.a.mark((function c(){var s;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,F.getVideos(t,e.id);case 2:s=c.sent,n(s.results.slice(0,4));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(j.jsx)(j.Fragment,{children:a.map((function(e,t){return Object(j.jsx)($,{video:e},t)}))})},te=(c(101),function(e){var t=Object(s.useState)([]),c=Object(g.a)(t,2),r=c[0],a=c[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(f.a)(N.a.mark((function t(){var c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c="","similar"!==e.type){t.next=5;break}return t.next=4,F.similar(e.category,e.id);case 4:c=t.sent;case 5:a(c.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"movie-list",children:[Object(j.jsx)("i",{className:"bx bx-caret-left"}),Object(j.jsx)("i",{className:"bx bx-caret-right"}),Object(j.jsx)(y.a,{grabCursor:!0,spaceBetween:9,slidesPerView:"auto",children:r.map((function(t,c){return Object(j.jsx)(w.a,{children:Object(j.jsx)(D,{item:t,category:e.category})},c)}))})]}),Object(j.jsxs)("div",{className:"section_footer",children:[Object(j.jsx)("div",{className:"section_footer_movie",children:Object(j.jsx)(o.b,{to:"/movie",children:Object(j.jsx)(d,{className:"small",children:"Go to Movies"})})}),Object(j.jsx)("div",{className:"section_footer_tv",children:Object(j.jsx)(o.b,{to:"/tv",children:Object(j.jsx)(d,{className:"small",children:"Go to Tv"})})})]})]})}),ce=(c(102),function(){var e=Object(l.g)(),t=e.category,c=e.id,r=Object(s.useState)(null),a=Object(g.a)(r,2),n=a[0],i=a[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(f.a)(N.a.mark((function e(){var s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.detail(t,c,{params:{}});case 2:s=e.sent,i(s),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),Object(j.jsx)(j.Fragment,{children:n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(G.original(n.backdrop_path||n.poster_path||n.profile_path),")")}}),Object(j.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(j.jsx)("div",{className:"movie-content__poster",children:Object(j.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(G.original(n.poster_path||n.backdrop_path||n.profile_path),")")}})}),Object(j.jsxs)("div",{className:"movie-content__info",children:[Object(j.jsx)("h1",{className:"title",children:n.title||n.name}),Object(j.jsx)("div",{className:"homepage",children:n.homepage}),Object(j.jsx)("div",{className:"genres",children:n.genres&&n.genres.slice(0,6).map((function(e,t){return Object(j.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(j.jsx)("div",{className:"tag_line",children:Object(j.jsx)("h3",{className:"tag_line_detail",children:n.tagline})}),Object(j.jsx)("div",{className:"overview",children:Object(j.jsxs)("p",{className:"overview_detail",children:[" ",Object(j.jsx)("h2",{children:"General view"})," ",n.overview||n.biography]})}),Object(j.jsxs)("div",{className:"cast",children:[Object(j.jsx)("div",{className:"section__header",children:Object(j.jsx)("h2",{className:"participation",children:"Participation"})}),Object(j.jsx)(Z,{id:n.id})]})]})]}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"section mb-3",children:Object(j.jsx)(ee,{id:n.id})}),Object(j.jsxs)("div",{className:"section mb-3",children:[Object(j.jsx)("div",{className:"section__header mb-2"}),Object(j.jsx)(te,{category:t,type:"similar",id:n.id})]})]})]})})}),se=function(){return Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/:category/search/:keyword",children:Object(j.jsx)(X,{})}),Object(j.jsx)(l.a,{path:"/:category/:id",children:Object(j.jsx)(ce,{})}),Object(j.jsx)(l.a,{path:"/:category",children:Object(j.jsx)(X,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(J,{})})]})};var re=function(){return Object(j.jsx)(o.a,{children:Object(j.jsx)(l.a,{render:function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,Object(i.a)({},e)),Object(j.jsx)(se,{}),Object(j.jsx)(v,{})]})}})})};n.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root"))},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},52:function(e,t,c){},58:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.e680492f.chunk.js.map