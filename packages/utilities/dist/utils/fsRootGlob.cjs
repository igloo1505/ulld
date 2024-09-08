'use strict';

var chunk7IGSSDBI_cjs = require('../chunk-7IGSSDBI.cjs');
require('../chunk-F3SJ5IX7.cjs');
require('../chunk-RKGDRDFA.cjs');
var chunkO4MUVT72_cjs = require('../chunk-O4MUVT72.cjs');
require('../chunk-7ARU3YXQ.cjs');
var enums = require('@ulld/types/enums');
require('server-only');

var i=class{constructor(t){this.props=t;}formatFileTypeArrayGlobPattern(t){return `{${t.join(",")}}`}getGlobPattern(t){let e=this.props.fileTypes?chunkO4MUVT72_cjs.a.beArray(this.props.fileTypes):enums.supportedFileTypes;return `${this.props.path}.${this.formatFileTypeArrayGlobPattern(e)}`}getFetchOpts(t){return {type:"files",glob:this.getGlobPattern(),...t}}sortResults(t){return t}async getFileMatches(t,e){let r=await chunk7IGSSDBI_cjs.a(this.getFetchOpts(e),t);return r?this.sortResults(r):[]}};

exports.FsRootGlob = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=fsRootGlob.cjs.map