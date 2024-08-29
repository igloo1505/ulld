'use strict';

var r = require('fs');
var n = require('path');
var detectPackageManager = require('detect-package-manager');
var u = require('shelljs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var n__default = /*#__PURE__*/_interopDefault(n);
var u__default = /*#__PURE__*/_interopDefault(u);

var t=JSON.parse(r__default.default.readFileSync(n__default.default.join(undefined,"buildDataOutput.json"),{encoding:"utf-8"}));t.buildOutputPath==="not-applied"&&(console.error("Cannot run ulld. It does not appear to have been built successfully."),process.exit(1));var p={npm:"npm run ulldStart",pnpm:"pnpm ulldStart",yarn:"yarn run ulldStart"};(async()=>{let a=await detectPackageManager.detect({cwd:t.buildOutputPath});a==="bun"&&(console.error("Ulld does not support bun yet. We can't run this app."),process.exit(1));let e=p[a];u__default.default.exec(e,{cwd:t.buildOutputPath});})();
