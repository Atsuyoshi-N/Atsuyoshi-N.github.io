(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"30+C":function(e,a,t){"use strict";var r=t("wx14"),n=t("Ff2n"),o=t("q1tI"),l=t("iuhU"),c=t("kKAo"),s=t("H2TA"),i=o.forwardRef((function(e,a){var t=e.classes,s=e.className,i=e.raised,m=void 0!==i&&i,u=Object(n.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(l.a)(t.root,s),elevation:m?8:1,ref:a},u))}));a.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(i)},m0YG:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return i}));var r=t("q1tI"),n=t.n(r),o=t("uNJ5"),l=t("Zttt"),c=t("ofer"),s=t("Wbzz");a.default=function(e){var a=e.pageContext,t=e.data,r=a.category,i=t.allMarkdownRemark,m=i.edges,u=i.totalCount,d=u+" post"+(1===u?"":"s")+' categorized with "'+r+'"';return n.a.createElement(l.a,null,n.a.createElement("div",null,n.a.createElement(c.a,{variant:"h5",align:"center",color:"textSecondary"},d),m.map((function(e){var a=e.node,t=a.fields.slug;return n.a.createElement(o.a,{key:t,post:a})})),n.a.createElement(s.Link,{to:"/categories"},n.a.createElement(c.a,{variant:"h4",align:"center",color:"primary",style:{color:"cornflowerblue","&:hover":{cursor:"pointer"}}},"View All Categories"))))};var i="3034743358"},"oa/T":function(e,a,t){"use strict";var r=t("wx14"),n=t("Ff2n"),o=t("q1tI"),l=t("iuhU"),c=t("H2TA"),s=o.forwardRef((function(e,a){var t=e.classes,c=e.className,s=e.component,i=void 0===s?"div":s,m=Object(n.a)(e,["classes","className","component"]);return o.createElement(i,Object(r.a)({className:Object(l.a)(t.root,c),ref:a},m))}));a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},uNJ5:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),o=t("Wbzz"),l=t("b9pq"),c=t("R/WZ"),s=t("30+C"),i=t("oa/T"),m=t("ofer"),u=(t("vg9a"),Object(c.a)({root:{margin:"0 10% 30px"},date:{marginTop:"10px"},cardContent:{margin:"0 7px"},postTitleLink:{textDecoration:"none","&:hover":{color:"cornflowerblue",borderBottom:"1px solid cornflowerblue"}},readMore:{marginTop:"15px"}}));a.a=function(e){var a=e.post,t=u();return n.a.createElement("div",{className:t.root},n.a.createElement(s.a,null,n.a.createElement(i.a,{className:t.cardContent},n.a.createElement("span",{className:t.date},a.frontmatter.date),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(o.Link,{to:a.fields.slug},n.a.createElement(m.a,{variant:"h4",display:"inline",color:"textSecondary",className:t.postTitleLink},a.frontmatter.title)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(l.a,{frontmatter:a.frontmatter}),n.a.createElement(m.a,null,n.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a.excerpt}})),n.a.createElement(m.a,{align:"right",variant:"subtitle2",className:t.readMore},n.a.createElement(o.Link,{to:""+a.fields.slug},"続きを読む...")))))}}}]);
//# sourceMappingURL=component---src-templates-categories-js-f199fcd4556b489e2bca.js.map