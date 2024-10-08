// src/__scripts__/gatherProtectedPaths.ts
import fs from "fs";
import path from "path";
var targetPath = path.join(
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
    const data = fs.readFileSync(k, { encoding: "utf-8" });
    let re = /ULLD\:\s*protected-path/gm;
    const pageForRe = /pageFor:(?<slot>[\w]*)\/(?<subSlot>[\w]*)/gm;
    if (re.test(data)) {
      const shortenedPath = k.replace(testRoot, "");
      let pageFor = pageForRe.exec(data);
      let d = {
        filePath: shortenedPath,
        route: getCalculatedRoute(shortenedPath)
      };
      if (pageFor?.groups?.slot && pageFor?.groups?.subSlot) {
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

export {
  gatherProtectedPaths
};
//# sourceMappingURL=chunk-7WVAVGKR.js.map