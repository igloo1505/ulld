import { getGlobServerSide } from '../chunk-ZWT5CRHM.js';
import '../chunk-EXFWPJVA.js';
import '../chunk-JKM3T6TO.js';
import { ArrayUtilities } from '../chunk-JEBMZLDZ.js';
import '../chunk-F3FYYIAV.js';
import { supportedFileTypes } from '@ulld/types/enums';
import 'server-only';

var FsRootGlob = class {
  constructor(props) {
    this.props = props;
  }
  formatFileTypeArrayGlobPattern(fts) {
    return `{${fts.join(",")}}`;
  }
  getGlobPattern(defaultOpts) {
    let fts = this.props.fileTypes ? ArrayUtilities.beArray(this.props.fileTypes) : supportedFileTypes;
    return `${this.props.path}.${this.formatFileTypeArrayGlobPattern(fts)}`;
  }
  getFetchOpts(defaultOpts) {
    return {
      type: "files",
      glob: this.getGlobPattern(),
      ...defaultOpts
    };
  }
  // TODO: Add method here to sort these results by the file types preffered order in the appConfig.
  sortResults(vals) {
    return vals;
  }
  async getFileMatches(appConfig, opts) {
    let res = await getGlobServerSide(this.getFetchOpts(opts), appConfig);
    return res ? this.sortResults(res) : [];
  }
};

export { FsRootGlob };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=fsRootGlob.js.map