import { a as a$2 } from '../../chunk-TS2PYGH6.mjs';
import '../../chunk-4TL3JACA.mjs';
import '../../chunk-FVUTJJXZ.mjs';
import '../../chunk-5MDVGWEH.mjs';
import { a as a$1 } from '../../chunk-NU7Q6YIP.mjs';
import '../../chunk-IPKN6IIB.mjs';
import '../../chunk-D3DDP6NH.mjs';
import '../../chunk-LDM2XLX2.mjs';
import '../../chunk-YFTMHKTY.mjs';
import '../../chunk-CV3G6ER4.mjs';
import '../../chunk-W7NTBV6M.mjs';
import '../../chunk-T7KECS5U.mjs';

var a=new a$1,s=a$2(),n={fnc:"sourceLocationComment",props:{sourceFile:"packages/utilities/src/__scripts__/generateValidIconNameData/getValidIconNames.ts"}},t=s.map(e=>e.name);a.genFileContent([{fnc:"arrayToTypeUnion",props:{arr:t,getValue:e=>`"${e}"`,varName:"ValidIconName",exportVar:!0}},n],{filePath:"packages/types/src/internallyGenerated/validIconNameUnion.ts",useUlldDevRootEnvVar:!0});a.clear();a.genFileContent([{fnc:"arrayToTypescriptArray",props:{arr:t,getValue:e=>`    "${e}"`,varName:"validIconNameList",exportVar:!0,readOnly:!0}},{fnc:"rawSuffixContent",props:{content:"export type ValidIconNameDynamicallyGenerated = typeof validIconNameList[number]"}},n],{filePath:"packages/types/src/enums/icons/validIconName.ts",useUlldDevRootEnvVar:!0});a.clear();a.genFileContent([{fnc:"arrayToEnum",props:{arr:t,getValue:e=>e,getKey:e=>e,exportVar:!0,varName:"ValidIconNameEnumDynamicallyGenerated",prefixFirstLine:"/* eslint-disable @typescript-eslint/naming-convention -- Enum needs to match names in Lucide */"}},n],{filePath:"packages/types/src/enums/icons/validIconNameEnum.ts",useUlldDevRootEnvVar:!0});a.clear();a.genFileContent([{fnc:"rawPrefixContent",props:{content:'import type { ValidIconName } from "../../internallyGenerated/validIconNameUnion";'}},{fnc:"arrayToTypescriptArray",props:{arr:s.filter(e=>e.type==="logo").map(e=>e.name),getValue:e=>`"${e}"`,varName:"logoIconNames",exportVar:!0,castToType:"const satisfies ValidIconName[];"}},{fnc:"rawSuffixContent",props:{content:"export type LogoIconNames = (typeof logoIconNames)[number];"}}],{filePath:"packages/types/src/enums/icons/iconTypes.ts",useUlldDevRootEnvVar:!0});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.mjs.map