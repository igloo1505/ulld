'use strict';

var chunkMKLOZCQ4_cjs = require('./chunk-MKLOZCQ4.cjs');
var chunkOPQVKD2X_cjs = require('./chunk-OPQVKD2X.cjs');

var r=class extends chunkOPQVKD2X_cjs.a{constructor(o){super(o);}clear(){this.initialContent="";}getSeperatedInputs(o){let e={prefix:[],body:[],suffix:[],locationComments:[]};for(let t of o)chunkMKLOZCQ4_cjs.a.prefix.includes(t.fnc)?e.prefix.push(t):chunkMKLOZCQ4_cjs.a.suffix.includes(t.fnc)?e.suffix.push(t):chunkMKLOZCQ4_cjs.a.locationComments.includes(t.fnc)?e.locationComments.push(t):e.body.push(t);return e}genFileContent(o,e){let t=this.getSeperatedInputs(o);for(let n of t.body){let i=this[n.fnc](n.props);this.initialContent+=`

${i}`;}for(let n of t.prefix){let i=this[n.fnc](n.props);this.initialContent=`${i}
${this.initialContent}`;}for(let n of t.suffix){let i=this[n.fnc](n.props);this.initialContent+=`

${i}`;}for(let n of t.locationComments){let i=this[n.fnc](n.props);this.initialContent=`${i}

${this.initialContent}`;}return this.outputToFile(this.initialContent,e),this.initialContent}};

exports.a = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-Z5UTU4AK.cjs.map