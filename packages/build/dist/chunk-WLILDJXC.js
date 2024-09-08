import {
  UlldBuildProcess
} from "./chunk-UQ2S7D5Z.js";
import {
  TargetPaths
} from "./chunk-OHKIUAFP.js";
import {
  UlldPlugin
} from "./chunk-NNNZ3I2V.js";
import {
  PluginSlot
} from "./chunk-ZP3X4LXS.js";
import {
  PluginPage
} from "./chunk-6UPPAFU2.js";
import {
  PluginComponent
} from "./chunk-2OIHOMQE.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/__test__/data/getTestData.ts
init_esm_shims();
import { ulldSlots } from "@ulld/configschema/slotsSchema";
import { randomFromArr, forN } from "@ulld/utilities/listUtils";
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var withOverlap = (n) => Math.ceil(n / 3);
var getRandomId = (n = 10) => forN(n, () => randomFromArr(letters)).join("");
var getRandomSubSlots = (n) => forN(withOverlap(n), () => getRandomId());
var getRandomSlot = () => randomFromArr(ulldSlots);
var getRandomComponents = (n = 15, slot, _subSlots) => {
  const overlap = withOverlap(n);
  const pluginNames = forN(overlap, () => getRandomId(5));
  const parentSlot = slot || getRandomId();
  const slots = ulldSlots.slice(overlap);
  const subSlots = _subSlots || getRandomSubSlots(n);
  const testComponents = forN(
    n,
    () => new PluginComponent(
      {
        slot,
        export: getRandomId()
      },
      {
        pluginName: randomFromArr(slots),
        parentSlot: slot
      }
    )
  );
  return testComponents;
};
var getRandomPages = (n = 5, pageOptions, paths) => {
  let pageOpts = pageOptions || getRandomSubSlots(10);
  const targetUrl = randomFromArr(pageOpts);
  return forN(n, (i) => new PluginPage({
    targetUrl,
    export: getRandomId()
  }, "test", i, paths));
};
var getRandomPackages = (n = 20, testDir = "/Users/bigsexy/Desktop/current/ulldApp", nComponents = 10, nPages = 5) => {
  const _randomSubSlots = getRandomSubSlots(nComponents);
  const _randomPages = getRandomSubSlots(n);
  const paths = new TargetPaths(testDir);
  return forN(n, () => {
    let p = new UlldPlugin(paths, getRandomId());
    p.slot = new PluginSlot(p.name, getRandomSlot());
    p.pages = getRandomPages(nPages, _randomPages, paths);
    p.components = getRandomComponents(nComponents, p.slot.slot, _randomSubSlots);
    return p;
  });
};
var getTestBuild = (testDir = "/Users/bigsexy/Desktop/current/ulldApp", packages = 15) => {
  const build = new UlldBuildProcess(testDir);
  build.plugins = getRandomPackages();
  return build;
};

export {
  getRandomComponents,
  getTestBuild
};
//# sourceMappingURL=chunk-WLILDJXC.js.map