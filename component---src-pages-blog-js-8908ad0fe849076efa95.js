(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{uNJ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("b9pq"),c=a("R/WZ"),i=a("30+C"),m=a("oa/T"),s=a("ofer"),u=(a("vg9a"),Object(c.a)({root:{margin:"0 10% 30px"},date:{marginTop:"10px"},cardContent:{margin:"0 7px"},postTitleLink:{textDecoration:"none","&:hover":{color:"cornflowerblue",borderBottom:"1px solid cornflowerblue"}},readMore:{marginTop:"15px"}}));t.a=function(e){var t=e.post,a=u();return console.log(t.fields.slug),r.a.createElement("div",{className:a.root},r.a.createElement(i.a,null,r.a.createElement(m.a,{className:a.cardContent},r.a.createElement("span",{className:a.date},t.frontmatter.date),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(l.Link,{to:t.fields.slug},r.a.createElement(s.a,{variant:"h4",display:"inline",color:"textSecondary",className:a.postTitleLink},t.frontmatter.title)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(o.a,{frontmatter:t.frontmatter}),r.a.createElement(s.a,null,r.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.excerpt}})),r.a.createElement(s.a,{align:"right",variant:"subtitle2",className:a.readMore},r.a.createElement(l.Link,{to:""+t.fields.slug},"続きを読む...")))))}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("Zttt"),o=a("uNJ5");a("vg9a");t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return r.a.createElement(o.a,{key:e.node.id,post:e.node})}));return r.a.createElement(l.a,null,r.a.createElement("div",null,t))};var c="3938758502"}}]);
//# sourceMappingURL=component---src-pages-blog-js-8908ad0fe849076efa95.js.map