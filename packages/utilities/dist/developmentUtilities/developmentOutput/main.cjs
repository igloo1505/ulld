'use strict';

require('../../chunk-7ARU3YXQ.cjs');

var r=class{constructor(t=""){this.initialContent=t;}arrayToEnum(t){let n=`export enum ${t.enumName} {
`;for(let e of t.arr){let o=typeof e=="string"?e:t.getKey(e);n+=`    "${o}" = "${o}",
`;}return n+="}",n}genFileContent(t){for(let n of t){let e=this[n.fnc](...n.props);this.initialContent+=`

${e}`;}return this.initialContent}};

exports.DevelopmentOutput = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map