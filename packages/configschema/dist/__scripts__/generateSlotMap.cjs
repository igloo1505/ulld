"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

var _chunkBR2NCAJJcjs = require('../chunk-BR2NCAJJ.cjs');


var _chunkMQGK2T2Vcjs = require('../chunk-MQGK2T2V.cjs');


var _chunkPXTEWFFBcjs = require('../chunk-PXTEWFFB.cjs');
require('../chunk-YTHHMSDP.cjs');
require('../chunk-YKNOVF5K.cjs');


var _chunkRO4SJLZ2cjs = require('../chunk-RO4SJLZ2.cjs');
require('../chunk-F2EQTDOE.cjs');
require('../chunk-7FRG3H7V.cjs');
require('../chunk-I7I3Z7IL.cjs');
require('../chunk-KI4J7RTU.cjs');
require('../chunk-IB2BTZA2.cjs');
require('../chunk-5DEJBS5Y.cjs');
require('../chunk-ZLIBX2HS.cjs');

// src/__scripts__/generateSlotMap.ts
var _glob = require('glob');
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _stringUtils = require('@ulld/utilities/stringUtils');
var _types = require('@ulld/utilities/types');
var testRoot = process.env.ULLD_TEST_ROOT;
var buildDataPath = _path2.default.join(__dirname, "../../../utilities/src/utils/buildStaticData.json");
var _propsExtendsMap = JSON.parse(_fs2.default.readFileSync(buildDataPath, { encoding: "utf-8" }));
if (!testRoot) {
  throw new Error(
    "ULLD_TEST_ROOT environment variable ws not present at run time in the generateSlotMap script."
  );
}
var targetDir = _path2.default.join(testRoot, "/src");
var mdxPath = _path2.default.join(
  __dirname,
  "../../../../apps/website/content/embeddedDocs/developer/slotMap.txt"
);
var typePath = _path2.default.join(__dirname, "../developer/slotMapType.ts");
var typeRootPath = _path2.default.join(__dirname, "../developer/slotMapRootType.ts");
var zodSlotKeyPath = _path2.default.join(__dirname, "../developer/slotKeySchema.ts");
var staticBuildDataPath = _path2.default.join(
  __dirname,
  "../../../utilities/src/utils/buildStaticData.json"
);
var files = _glob.globSync.call(void 0, `**/*.{tsx,ts}`, {
  ignore: "**/node_modules/**",
  cwd: targetDir
});
if (!_fs2.default.existsSync(staticBuildDataPath)) {
  throw new Error(`staticBuildDataPath ${staticBuildDataPath} does not exist.`);
}
var items = [];
var staticBuildData = _chunkMQGK2T2Vcjs.gatherProtectedPaths.call(void 0, files.map((f) => _path2.default.join(targetDir, f)), _propsExtendsMap);
for (const k of files) {
  let content = _fs2.default.readFileSync(_path2.default.join(targetDir, k), { encoding: "utf-8" });
  let lineOne = content.split("\n")[0].trim();
  if (lineOne.startsWith("// Slot:")) {
    let words = lineOne.replace("// Slot: ", "").split(" ");
    let slots = words.find((w) => w.includes("/")).split("/").map((s) => s.trim());
    let type = _optionalChain([words, 'access', _ => _.find, 'call', _2 => _2((w) => w.startsWith("type:")), 'optionalAccess', _3 => _3.replace, 'call', _4 => _4("type:", ""), 'access', _5 => _5.trim, 'call', _6 => _6()]) || "component";
    let propsExtends = _optionalChain([words, 'access', _7 => _7.find, 'call', _8 => _8((w) => w.startsWith("propsExtends:")), 'optionalAccess', _9 => _9.replace, 'call', _10 => _10("propsExtends:", ""), 'access', _11 => _11.trim, 'call', _12 => _12()]);
    if (slots.length !== 2) {
      throw new Error(`Misformed slot string at ${k}`);
    }
    if (!_types.slotTypes.includes(type)) {
      throw new Error(`No slotData type found for ${type}.`);
    }
    if (Boolean(
      // propsExtends && !(propsExtends in ((staticBuildData as any)?.propsExtendsMap as any)?.propsExtendsMap),
      propsExtends && !(propsExtends in _optionalChain([staticBuildData, 'optionalAccess', _13 => _13.propsExtendsMap]))
    )) {
      staticBuildData.propsExtendsMap[propsExtends] = "FIX ME";
      console.warn(
        `Slot prop can not extend ${propsExtends}. It was is not included in the propsExtendsMap object. Added a temporary place holder.`
      );
    }
    const newItem = {
      path: k,
      parentSlot: slots[0],
      subSlot: slots[1],
      clientOnly: content.includes("clientOnly"),
      inReduxProvider: content.includes("inReduxProvider"),
      relativePath: `src/${k}`,
      type,
      propsExtends
    };
    let hasItem = items.find(
      (f) => Boolean(
        f.parentSlot === newItem.parentSlot && f.subSlot === newItem.subSlot
      )
    );
    if (hasItem) {
      throw new Error(`Found duplicate slots at:
parentSlot: ${hasItem.parentSlot}
subSlot: ${hasItem.subSlot}
path: ${hasItem.path}
----
parentSlot: ${newItem.parentSlot}
subSlot: ${newItem.subSlot}
path: ${newItem.path}
`);
    }
    items.push(newItem);
  }
}
var slotMap = {};
for (const k of items) {
  if (!slotMap[k.parentSlot]) {
    slotMap[k.parentSlot] = {};
  }
  slotMap[k.parentSlot][k.subSlot] = {
    path: `src/${k.path}`,
    clientOnly: k.clientOnly,
    inReduxProvider: k.inReduxProvider,
    type: k.type,
    propsExtends: k.propsExtends
  };
}
var targetPath = _path2.default.join(
  __dirname,
  "../../../utilities/src/utils/slotMap.json"
);
var mdxSlotMap = `interface SlotMap {
`;
for (const k in slotMap) {
  mdxSlotMap += `    "${k}": {
`;
  for (const l in slotMap[k]) {
    mdxSlotMap += `        ${l}: string,
`;
  }
  mdxSlotMap += "    }, \n";
}
mdxSlotMap += "}";
var slotKeyContent = `
export const slotKeySchema = z.union([
`;
var slotSubKeys = {};
var subSlotsByKeys = {};
var subslotSchemas = [];
var addedParentSlots = [];
var makeValidSymbol = (val) => {
  return val.replaceAll("-", "_").replaceAll(" ", "_");
};
for (const k of items) {
  if (!addedParentSlots.includes(k.parentSlot)) {
    slotKeyContent += `    z.literal("${k.parentSlot}"),
`;
    addedParentSlots.push(k.parentSlot);
  }
  if (!(k.parentSlot in slotSubKeys)) {
    subSlotsByKeys[k.parentSlot] = [];
    let name = `${k.parentSlot}SubkeySchema`;
    subslotSchemas.push(name);
    slotSubKeys[k.parentSlot] = `
export const ${makeValidSymbol(name)} = z.union([
`;
  }
  if (k.subSlot) {
    subSlotsByKeys[k.parentSlot].push(k.subSlot);
    slotSubKeys[k.parentSlot] += `    z.literal("${k.subSlot}"),
`;
  }
}
slotKeyContent += "])";
for (const k in slotSubKeys) {
  if (subSlotsByKeys[k].length < 2) {
    let re = /z\.union\(\[[.|\n|\r|\w|\W]*z\.literal\("(?<content>[\w|\S|\s]*)"\)\,?/gm;
    let foundContent = re.exec(slotSubKeys[k]);
    if (!foundContent) {
      throw new Error(`No content was found for a slot with a single component, that can't be applied to a union of slot keys. Tried replacing ${k}.`);
    }
    slotSubKeys[k] = `${slotSubKeys[k].slice(0, slotSubKeys[k].indexOf("=") + 1)} z.literal("${foundContent[1]}")`;
  } else {
    slotSubKeys[k] += "])";
  }
}
var formatTypeSymbol = (k) => {
  return `${makeValidSymbol(_stringUtils.capitalize.call(void 0, k))}SubSlots`;
};
var slotKeyFileContent = `
import { z } from 'zod';

${slotKeyContent}

${Object.values(slotSubKeys).join("\n\n")}

`;
_fs2.default.writeFileSync(mdxPath, mdxSlotMap, { encoding: "utf-8" });
_fs2.default.writeFileSync(
  typeRootPath,
  `export ${mdxSlotMap}
`,
  { encoding: "utf-8" }
);
_fs2.default.writeFileSync(
  typePath,
  `import { SlotMap as SM } from "./slotMapRootType";

export type PluginSlotKey = keyof SM

${Object.keys(slotSubKeys).map(
    (k) => `export type ${formatTypeSymbol(k)} = keyof SM["${k}"]`
  ).join("\n\n")}

export type AnySubSlotKey = ${Object.keys(slotSubKeys).map((t) => formatTypeSymbol(t)).join(" | ")};
`,
  { encoding: "utf-8" }
);
_fs2.default.writeFileSync(targetPath, JSON.stringify(slotMap, null, 4), {
  encoding: "utf-8"
});
_fs2.default.writeFileSync(zodSlotKeyPath, slotKeyFileContent, {
  encoding: "utf-8"
});
var reservedPublicDirs = _chunkBR2NCAJJcjs.gatherReservedPublicPaths.call(void 0, );
staticBuildData.reservedPublicDirs = reservedPublicDirs;
staticBuildData.internalDocumentTypes = _chunkRO4SJLZ2cjs.getInternalDocumentTypes.call(void 0, );
_fs2.default.writeFileSync(
  staticBuildDataPath,
  JSON.stringify(staticBuildData, null, 4),
  { encoding: "utf-8" }
);
_chunkPXTEWFFBcjs.writeTestStaticBuildData.call(void 0, );
console.log(`Wrote slotMap to @ulld/utilities/slotMap.json`);
//# sourceMappingURL=generateSlotMap.cjs.map