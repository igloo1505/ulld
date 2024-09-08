'use strict';

var chunkMNKUZT5W_cjs = require('../../chunk-MNKUZT5W.cjs');
require('../../chunk-7ARU3YXQ.cjs');
var glob = require('glob');
var r = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);

var i=class{constructor(o){this.fsRoot=o;}glob(o,t=["**node_modules**"],p=!0){return glob.globSync(o,{cwd:this.fsRoot,ignore:t,nodir:!p}).map(s=>r__default.default.join(this.fsRoot,s))}filePathsOfType(o){return this.glob(`**/*.${o}`).map(t=>r__default.default.join(this.fsRoot,t))}filesOfType(o){return this.filePathsOfType(o).map(t=>new chunkMNKUZT5W_cjs.a(t))}};

exports.UlldGlob = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map