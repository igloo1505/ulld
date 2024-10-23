import r from 'path';
import o from 'fs';

var i=class{getOutputToFilePath(t){if(t.isAbsolutePath)return t.filePath;if(!process.env.ULLD_DEV_ROOT)throw new Error("Cannot find ULLD_DEV_ROOT variable. Cannot continue in the DevelopmentOutput class.");return r.join(process.env.ULLD_DEV_ROOT,t.filePath)}outputToFile(t,e){e&&o.writeFileSync(this.getOutputToFilePath(e),t,{encoding:"utf-8"});}};

export { i as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-YFTMHKTY.mjs.map