import { a as a$1 } from '../chunk-JF4SBP6G.mjs';
import '../chunk-46TSI776.mjs';
import '../chunk-YSDEXSCS.mjs';
import { a } from '../chunk-RTY2WVUP.mjs';
import '../chunk-T7KECS5U.mjs';
import { supportedFileTypes } from '@ulld/types/enums';
import 'server-only';

var i=class{constructor(t){this.props=t;}formatFileTypeArrayGlobPattern(t){return `{${t.join(",")}}`}getGlobPattern(t){let e=this.props.fileTypes?a.beArray(this.props.fileTypes):supportedFileTypes;return `${this.props.path}.${this.formatFileTypeArrayGlobPattern(e)}`}getFetchOpts(t){return {type:"files",glob:this.getGlobPattern(),...t}}sortResults(t){return t}async getFileMatches(t,e){let r=await a$1(this.getFetchOpts(e),t);return r?this.sortResults(r):[]}};

export { i as FsRootGlob };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=fsRootGlob.mjs.map