import '../../chunk-GQSCBKA6.js';
import o from 'path';

var e={style:[{subPath:"index.scss",rootGlob:"styles/**/*.scss",dirPath:"styles",validate:t=>t.includes("styles/index.scss"),includeDirContents:!0,getOutputPath:t=>`src/styles/userProvided/${t.startsWith(`styles${o.sep}`)?t.slice(`styles${o.sep}`.length):t}`}],public:[{subPath:"**",rootGlob:"public/**",dirPath:"public",getOutputPath:t=>t,allowMultiple:!0}],root:[{subPath:"tailwind.config.ts",rootGlob:"tailwind.config.ts",getOutputPath:()=>"tailwind.config.ts"},{subPath:"anyFilename.bib",globPath:"*.bib",rootGlob:"*.bib",getOutputPath:t=>t},{subPath:"appConfig.ulld.json",globPath:"appConfig.ulld.json",rootGlob:"appConfig.ulld.json",getOutputPath:()=>"appConfig.ulld.json"},{subPath:".env",globPath:".env",rootGlob:".env",getOutputPath:()=>".env.local"},{subPath:"favicon.{ico,png,jpg}",rootGlob:"favicon.{ico,png,jpg}",getOutputPath:t=>`public/${t}`}]},s={subPath:"/",items:[...e.root,{subPath:"styles",items:e.style},{subPath:"public",items:[{subPath:"unreserved-public-dir",globPath:"<NOT_EXISTING_PUBLIC_DIR>",items:e.public}]}]},a=()=>{let t=[];for(let i in e)t=t.concat(e[i]);return t};

export { s as additionalFilePaths, e as fileItems, a as getFlattenedFileItems };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=additionalSourceFileStructure.js.map