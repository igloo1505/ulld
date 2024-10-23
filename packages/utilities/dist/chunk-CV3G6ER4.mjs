import n from 'fs';
import t from 'path';

var s=o=>{let e=t.join(o,"appConfig.ulld.json");if(!n.existsSync(e))if(process.env.ULLD_ADDITIONAL_SOURCES){let p=t.join(process.env.ULLD_ADDITIONAL_SOURCES,"appConfig.ulld.json");if(n.existsSync(p))e=p;else return}else return;return JSON.parse(n.readFileSync(e,{encoding:"utf-8"}))};

export { s as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-CV3G6ER4.mjs.map