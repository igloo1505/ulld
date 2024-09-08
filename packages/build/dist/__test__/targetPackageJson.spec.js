import {
  TargetPackageJson
} from "../chunk-HWOJFZWI.js";
import "../chunk-IAY5YVGA.js";
import "../chunk-NL3L2LIO.js";
import "../chunk-UICSY6NG.js";
import "../chunk-2NXHCBFZ.js";
import {
  buildTestData
} from "../chunk-Q4HAMFKE.js";
import {
  init_esm_shims
} from "../chunk-ZRREZ4KQ.js";
import "../chunk-7UBRHILH.js";

// src/__test__/targetPackageJson.spec.ts
init_esm_shims();
import assert from "assert/strict";
describe("TargetPackageJson", function() {
  it("properly sets isLocalDev", function() {
    let beTrue = new TargetPackageJson(buildTestData.targetDirectory, true);
    let beFalse = new TargetPackageJson(buildTestData.targetDirectory, false);
    assert(beTrue.isLocalDev === true, "Sets isLocalDev to be true correctly.");
    assert(beFalse.isLocalDev === false, "Sets isLocalDev to be false correctly.");
  });
});
//# sourceMappingURL=targetPackageJson.spec.js.map