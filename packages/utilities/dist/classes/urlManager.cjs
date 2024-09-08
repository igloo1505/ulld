'use strict';

require('../chunk-7ARU3YXQ.cjs');

var o=class{constructor(){}static getTaskListPath(t,r=!1){let e=new URLSearchParams,s=Array.isArray(t)?t:[t];for(let a of s)e.append("listIds",`${a}`);return r&&e.set("showCompleted","true"),`/todo?${e.toString()}`}};

exports.Paths = o;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=urlManager.cjs.map