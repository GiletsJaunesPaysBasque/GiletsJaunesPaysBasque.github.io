(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return g});var a=t(0),r=t.n(a),l=t(4),i=t.n(l),o=t(145),c=t.n(o);t.d(n,"Link",function(){return c.a}),t.d(n,"withPrefix",function(){return o.withPrefix}),t.d(n,"navigate",function(){return o.navigate}),t.d(n,"push",function(){return o.push}),t.d(n,"replace",function(){return o.replace}),t.d(n,"navigateTo",function(){return o.navigateTo});var u=t(151),s=t.n(u);t.d(n,"PageRenderer",function(){return s.a});var m=t(48);t.d(n,"parsePath",function(){return m.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,n,t){"use strict";var a=t(7),r=t.n(a),l=t(51),i=t.n(l),o=t(0),c=t.n(o),u=(t(153),t(4)),s=t.n(u),m=t(146),d=function(e){return c.a.createElement("header",{id:"header",className:"alt"},c.a.createElement(m.Link,{to:"/",className:"logo"},c.a.createElement("strong",null,"Gilets Jaune")," ",c.a.createElement("span",null,"en pays basque")))};d.propTypes={onToggleMenu:s.a.func};var g=d,p=function(e){return c.a.createElement("nav",{id:"menu"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"links"},c.a.createElement("li",null,c.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/landing"},"Landing")),c.a.createElement("li",null,c.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/generic"},"Generic")),c.a.createElement("li",null,c.a.createElement(m.Link,{onClick:e.onToggleMenu,to:"/elements"},"Elements"))),c.a.createElement("ul",{className:"actions vertical"},c.a.createElement("li",null,c.a.createElement("a",{href:"#top",className:"button special fit"},"Get Started")),c.a.createElement("li",null,c.a.createElement("a",{href:"#top",className:"button fit"},"Log In")))),c.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"#top"},"Close"))};p.propTypes={onToggleMenu:s.a.func};var f=p,h=function(e){return c.a.createElement("footer",{id:"footer"},c.a.createElement("div",{className:"inner"},c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.facebook.com/groups/526136141221635/",target:"_blank",rel:"noopener noreferrer",className:"icon alt fa-facebook"},c.a.createElement("span",{className:"label"},"Facebook"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/GiletsJaunesPaysBasque",target:"_blank",rel:"noopener noreferrer",className:"icon alt fa-github"},c.a.createElement("span",{className:"label"},"GitHub")))),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© GiletJaunesPaysBasque"),c.a.createElement("li",null,"Nous contacter: contact@giletsjaunes-paysbasque.org"))))},E=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(i()(i()(t))),t}r()(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},c.a.createElement("div",{id:"wrapper"},c.a.createElement(g,{onToggleMenu:this.handleToggleMenu}),e,c.a.createElement(h,null)),c.a.createElement(f,{onToggleMenu:this.handleToggleMenu}))},n}(c.a.Component);n.a=E},151:function(e,n,t){var a;e.exports=(a=t(154))&&a.default||a},153:function(e,n,t){},154:function(e,n,t){"use strict";t.r(n);t(32);var a=t(0),r=t.n(a),l=t(4),i=t.n(l),o=t(68),c=t(2),u=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(o.a,Object.assign({location:n,pageResources:t},t.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=u}}]);
//# sourceMappingURL=0-2f9ec0b335d03a71de09.js.map