(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{m0YG:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var r=a("q1tI"),n=a.n(r),l=a("uNJ5"),o=a("Zttt"),c=a("ofer"),i=a("Wbzz");t.default=function(e){var t=e.pageContext,a=e.data,r=t.category,s=a.allMarkdownRemark,m=s.edges,u=s.totalCount,d=u+" post"+(1===u?"":"s")+' categorized with "'+r+'"';return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(c.a,{variant:"h5",align:"center",color:"textSecondary"},d),m.map((function(e){var t=e.node,a=t.fields.slug;return n.a.createElement(l.a,{key:a,post:t})})),n.a.createElement(i.Link,{to:"/categories"},n.a.createElement(c.a,{variant:"h4",align:"center",color:"primary",style:{color:"cornflowerblue","&:hover":{cursor:"pointer"}}},"View All Categories"))))};var s="3034743358"},uNJ5:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("b9pq"),c=a("R/WZ"),i=a("30+C"),s=a("oa/T"),m=a("ofer"),u=(a("vg9a"),Object(c.a)({root:{margin:"0 10% 30px"},date:{marginTop:"10px"},cardContent:{margin:"0 7px"},postTitleLink:{textDecoration:"none","&:hover":{color:"cornflowerblue",borderBottom:"1px solid cornflowerblue"}},readMore:{marginTop:"15px"}}));t.a=function(e){var t=e.post,a=u();return n.a.createElement("div",{className:a.root},n.a.createElement(i.a,null,n.a.createElement(s.a,{className:a.cardContent},n.a.createElement("span",{className:a.date},t.frontmatter.date),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(l.Link,{to:t.fields.slug},n.a.createElement(m.a,{variant:"h4",display:"inline",color:"textSecondary",className:a.postTitleLink},t.frontmatter.title)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(o.a,{frontmatter:t.frontmatter}),n.a.createElement(m.a,null,n.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.excerpt}})),n.a.createElement(m.a,{align:"right",variant:"subtitle2",className:a.readMore},n.a.createElement(l.Link,{to:""+t.fields.slug},"続きを読む...")))))}}}]);
//# sourceMappingURL=component---src-templates-categories-js-ca972e632683ee69ed24.js.map