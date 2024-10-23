'use strict';

var chunkT5AYEUMB_cjs = require('./chunk-T5AYEUMB.cjs');
var o = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var l=class extends chunkT5AYEUMB_cjs.a{constructor(t={}){super();this.initialContent="";t.initialContent&&(this.initialContent=t.initialContent);}getVariableDeclarationString(t){return `${t.exportVar?"export ":""}const ${t.varName}${t.typescriptType?`: ${t.typescriptType}`:""} = `}getTypeDeclarationString(t){return `${t.exportVar?"export ":""}type ${t.varName} = `}getInitialBody(t,e){return e.prefixFirstLine?`${e.prefixFirstLine}
${t}`:t}getRelativeImportString(t){let e="import ";return t.typeImport&&(e+="type "),t.defaultExport?e+=`${t.importName} `:e+=`{ ${t.importName} } `,e+=`from "${o__default.default.relative(o__default.default.dirname(t.outputFile),t.importSourceFile)}"`,e}removeDuplicateKeys(t){if(!t.getKey)return t.arr.map(r=>({value:t.getValue(r),key:void 0}));let e=[],a=[];for(let r of t.arr){let i=t.getKey(r);a.includes(i)||(e.push({value:t.getValue(r),key:i}),a.push(i));}return e}conditionallyExportDefault(t,e){return t.defaultExportVar?`${e}

export default ${t.varName};`:e}};

exports.a = l;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-AYRH4GFY.cjs.map