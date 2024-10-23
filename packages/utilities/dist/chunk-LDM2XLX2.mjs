import { a } from './chunk-YFTMHKTY.mjs';
import o from 'path';

var l=class extends a{constructor(t={}){super();this.initialContent="";t.initialContent&&(this.initialContent=t.initialContent);}getVariableDeclarationString(t){return `${t.exportVar?"export ":""}const ${t.varName}${t.typescriptType?`: ${t.typescriptType}`:""} = `}getTypeDeclarationString(t){return `${t.exportVar?"export ":""}type ${t.varName} = `}getInitialBody(t,e){return e.prefixFirstLine?`${e.prefixFirstLine}
${t}`:t}getRelativeImportString(t){let e="import ";return t.typeImport&&(e+="type "),t.defaultExport?e+=`${t.importName} `:e+=`{ ${t.importName} } `,e+=`from "${o.relative(o.dirname(t.outputFile),t.importSourceFile)}"`,e}removeDuplicateKeys(t){if(!t.getKey)return t.arr.map(r=>({value:t.getValue(r),key:void 0}));let e=[],a=[];for(let r of t.arr){let i=t.getKey(r);a.includes(i)||(e.push({value:t.getValue(r),key:i}),a.push(i));}return e}conditionallyExportDefault(t,e){return t.defaultExportVar?`${e}

export default ${t.varName};`:e}};

export { l as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-LDM2XLX2.mjs.map