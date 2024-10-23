'use strict';

var n = require('fs');
var t = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var t__default = /*#__PURE__*/_interopDefault(t);

var s=o=>{let e=t__default.default.join(o,"appConfig.ulld.json");if(!n__default.default.existsSync(e))if(process.env.ULLD_ADDITIONAL_SOURCES){let p=t__default.default.join(process.env.ULLD_ADDITIONAL_SOURCES,"appConfig.ulld.json");if(n__default.default.existsSync(p))e=p;else return}else return;return JSON.parse(n__default.default.readFileSync(e,{encoding:"utf-8"}))};

exports.a = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-MLPV4KJR.cjs.map