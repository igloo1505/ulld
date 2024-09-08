'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var o = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var i=(n,a)=>{let e=o__default.default.createReadStream(n,a);return new ReadableStream({start(r){e.on("data",t=>r.enqueue(new Uint8Array(t))),e.on("end",()=>r.close()),e.on("error",t=>r.error(t));},cancel(){e.destroy();},type:"bytes"})};

exports.streamFile = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=streamFile.cjs.map