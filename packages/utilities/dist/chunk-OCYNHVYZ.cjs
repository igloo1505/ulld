'use strict';

var n=class{constructor(){}itemMatchesSyntax(e,t){return !(t.syntax&&!e.embeddableSyntax.some(r=>new RegExp(t.syntax,"gmi").test(r)))}itemMatchesTag(e,t){let r=t.tag?Array.isArray(t.tag)?t.tag:[t.tag]:!1;if(r){if(!e.tags.length)return !1}else return !0;let a=r.map(s=>s.toLowerCase());return e.tags.some(s=>a.includes(s.toLowerCase()))}itemMatchesPluginId(e,t){return t.pluginId?e.pluginName===t.pluginId:!0}itemMatchesQuery(e,t){if(!t.query)return !0;let r=new RegExp(t.query);return !!(r.test(e.pluginName)||e.embeddableSyntax.length&&e.embeddableSyntax.some(a=>r.test(a))||r.test(e.componentName)||e.tags.length&&e.tags.some(a=>r.test(a)))}queryItem(e,t){return [this.itemMatchesPluginId,this.itemMatchesTag,this.itemMatchesQuery,this.itemMatchesSyntax].some(r=>r(e,t))}queryAll(e,t){return e.filter(r=>this.queryItem(r,t))}};

exports.a = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-OCYNHVYZ.cjs.map