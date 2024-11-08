'use strict';

var chunkJ57BSQHL_cjs = require('./chunk-J57BSQHL.cjs');
var i = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);

var o=class extends chunkJ57BSQHL_cjs.a{constructor(e){super(e,!1);this.path=e;}getJsonContent(){return this.throwIfNotExists(),JSON.parse(this.getContent())}writeContent(e,r=2){let t=e||this.content;if(!t)throw new Error("Cannot write content. No content was found.");typeof t=="object"&&(t=JSON.stringify(t,null,r)),i__default.default.writeFileSync(this.path,t,{encoding:"utf-8"});}};

exports.a = o;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-LHSTJADE.cjs.map