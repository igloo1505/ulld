'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var glob = require('glob');
var c = require('fs');
var n = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var c__default = /*#__PURE__*/_interopDefault(c);
var n__default = /*#__PURE__*/_interopDefault(n);

var g=(o,i="src/**/*.json",r)=>{r||(r=glob.globSync(i,{cwd:o,nodir:!0}));for(let t of r)c__default.default.cpSync(n__default.default.join(o,t),n__default.default.join(o,t.replace("src/","dist/")));};

exports.copyJsonFilesToDist = g;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.cjs.map