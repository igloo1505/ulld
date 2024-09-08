import { FileData } from '../../chunk-HPC74VLS.js';
import '../../chunk-F3FYYIAV.js';
import grayMatter from 'gray-matter';

var MdxFile = class extends FileData {
  constructor(path) {
    super(path);
    this.path = path;
  }
  parseFrontMatter() {
    let content = this.getContent();
    let gm = grayMatter(content);
    this.content = gm.content;
    this.frontMatter = gm.data;
    return gm;
  }
};

export { MdxFile };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=mdxFile.js.map