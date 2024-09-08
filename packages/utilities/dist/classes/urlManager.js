import '../chunk-5WT32FJO.js';

var o=class{constructor(){}static getTaskListPath(t,r=!1){let e=new URLSearchParams,s=Array.isArray(t)?t:[t];for(let a of s)e.append("listIds",`${a}`);return r&&e.set("showCompleted","true"),`/todo?${e.toString()}`}};

export { o as Paths };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=urlManager.js.map