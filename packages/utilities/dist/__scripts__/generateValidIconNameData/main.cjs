'use strict';

var chunkZNQHQW7V_cjs = require('../../chunk-ZNQHQW7V.cjs');
require('../../chunk-RSLZZNWQ.cjs');
require('../../chunk-BOTPD3V7.cjs');
require('../../chunk-F7SVI2AN.cjs');
var chunkRSAPZHI2_cjs = require('../../chunk-RSAPZHI2.cjs');
require('../../chunk-OPQVKD2X.cjs');
require('../../chunk-6KZ6ITTF.cjs');
require('../../chunk-AYRH4GFY.cjs');
require('../../chunk-T5AYEUMB.cjs');
require('../../chunk-MLPV4KJR.cjs');
require('../../chunk-3C6RACUK.cjs');
require('../../chunk-7ARU3YXQ.cjs');

var a=new chunkRSAPZHI2_cjs.a,s=chunkZNQHQW7V_cjs.a(),n={fnc:"sourceLocationComment",props:{sourceFile:"packages/utilities/src/__scripts__/generateValidIconNameData/getValidIconNames.ts"}},t=s.map(e=>e.name);a.genFileContent([{fnc:"arrayToTypeUnion",props:{arr:t,getValue:e=>`"${e}"`,varName:"ValidIconName",exportVar:!0}},n],{filePath:"packages/types/src/internallyGenerated/validIconNameUnion.ts",useUlldDevRootEnvVar:!0});a.clear();a.genFileContent([{fnc:"arrayToTypescriptArray",props:{arr:t,getValue:e=>`    "${e}"`,varName:"validIconNameList",exportVar:!0,readOnly:!0}},{fnc:"rawSuffixContent",props:{content:"export type ValidIconNameDynamicallyGenerated = typeof validIconNameList[number]"}},n],{filePath:"packages/types/src/enums/icons/validIconName.ts",useUlldDevRootEnvVar:!0});a.clear();a.genFileContent([{fnc:"arrayToEnum",props:{arr:t,getValue:e=>e,getKey:e=>e,exportVar:!0,varName:"ValidIconNameEnumDynamicallyGenerated",prefixFirstLine:"/* eslint-disable @typescript-eslint/naming-convention -- Enum needs to match names in Lucide */"}},n],{filePath:"packages/types/src/enums/icons/validIconNameEnum.ts",useUlldDevRootEnvVar:!0});a.clear();a.genFileContent([{fnc:"rawPrefixContent",props:{content:'import type { ValidIconName } from "../../internallyGenerated/validIconNameUnion";'}},{fnc:"arrayToTypescriptArray",props:{arr:s.filter(e=>e.type==="logo").map(e=>e.name),getValue:e=>`"${e}"`,varName:"logoIconNames",exportVar:!0,castToType:"const satisfies ValidIconName[];"}},{fnc:"rawSuffixContent",props:{content:"export type LogoIconNames = (typeof logoIconNames)[number];"}}],{filePath:"packages/types/src/enums/icons/iconTypes.ts",useUlldDevRootEnvVar:!0});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map