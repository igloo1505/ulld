import { a as a$1 } from '../../chunk-V4QUX5YV.mjs';
import '../../chunk-ZTGAGE6J.mjs';
import '../../chunk-RSVLPYAN.mjs';
import { a } from '../../chunk-UMKPUPIZ.mjs';
import '../../chunk-DZ3Q6B5I.mjs';
import '../../chunk-T7KECS5U.mjs';
import a$2 from 'path';
import n from 'fs';

var i=()=>{let e=process.env.ULLD_DEV_ROOT,o={};if(!e)throw new Error("No dev root env variable found. Can not continue writing theme colors.");a.forEach(r=>{let m=a$1.fromThemeName(r);o[r]=m.data;}),n.writeFileSync(a$2.join(e,"packages/utilities/src/styleUtilities/generatedThemeColorSchemes.json"),JSON.stringify(o,null,2),{encoding:"utf-8"});};i();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.mjs.map