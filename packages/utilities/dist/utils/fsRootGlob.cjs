'use strict';

var chunkXCCDITUO_cjs = require('../chunk-XCCDITUO.cjs');
require('../chunk-TNPBOZR7.cjs');
require('../chunk-FICKYDMP.cjs');
var chunkEEBY2HC2_cjs = require('../chunk-EEBY2HC2.cjs');
require('../chunk-7ARU3YXQ.cjs');
var enums = require('@ulld/types/enums');
require('server-only');

var i=class{constructor(t){this.props=t;}formatFileTypeArrayGlobPattern(t){return `{${t.join(",")}}`}getGlobPattern(t){let e=this.props.fileTypes?chunkEEBY2HC2_cjs.a.beArray(this.props.fileTypes):enums.supportedFileTypes;return `${this.props.path}.${this.formatFileTypeArrayGlobPattern(e)}`}getFetchOpts(t){return {type:"files",glob:this.getGlobPattern(),...t}}sortResults(t){return t}async getFileMatches(t,e){let r=await chunkXCCDITUO_cjs.a(this.getFetchOpts(e),t);return r?this.sortResults(r):[]}};

exports.FsRootGlob = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=fsRootGlob.cjs.map