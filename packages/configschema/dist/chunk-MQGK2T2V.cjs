"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/__scripts__/gatherProtectedPaths.ts
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var targetPath = _path2.default.join(
  __dirname,
  "../../../utilities/src/utils/buildStaticData.json"
);
var testRoot = process.env.ULLD_TEST_ROOT;
var getSplitValue = (w) => {
  if (w.startsWith("[") && w.endsWith("]")) {
    return w.includes("...") ? "**" : "*";
  }
  return w;
};
var getCalculatedRoute = (p) => {
  let split = p.split("/").filter((w) => !["", "page.tsx", "src"].includes(w));
  if (split[0] !== "app") {
    throw new Error(
      `protected route does not appear to be within the app directory. Check ${p}`
    );
  }
  split = split.slice(1).map((w) => getSplitValue(w));
  return split.join("/");
};
var gatherProtectedPaths = (files, propsExtendsMap) => {
  const protectedPaths = [];
  for (const k of files) {
    const data = _fs2.default.readFileSync(k, { encoding: "utf-8" });
    let re = /ULLD\:\s*protected-path/gm;
    const pageForRe = /pageFor:(?<slot>[\w]*)\/(?<subSlot>[\w]*)/gm;
    if (re.test(data)) {
      const shortenedPath = k.replace(testRoot, "");
      let pageFor = pageForRe.exec(data);
      let d = {
        filePath: shortenedPath,
        route: getCalculatedRoute(shortenedPath)
      };
      if (_optionalChain([pageFor, 'optionalAccess', _ => _.groups, 'optionalAccess', _2 => _2.slot]) && _optionalChain([pageFor, 'optionalAccess', _3 => _3.groups, 'optionalAccess', _4 => _4.subSlot])) {
        d.pageFor = {
          slot: pageFor.groups.slot,
          subSlot: pageFor.groups.subSlot
        };
      }
      protectedPaths.push(d);
    }
  }
  propsExtendsMap.protectedPaths = protectedPaths;
  return propsExtendsMap;
};



exports.gatherProtectedPaths = gatherProtectedPaths;
//# sourceMappingURL=chunk-MQGK2T2V.cjs.map