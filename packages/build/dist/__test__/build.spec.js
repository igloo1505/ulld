import {
  getTestBuild
} from "../chunk-WLILDJXC.js";
import "../chunk-UQ2S7D5Z.js";
import "../chunk-XLL2B65U.js";
import "../chunk-ZHNLHQ5Z.js";
import "../chunk-HKLU6OCR.js";
import "../chunk-KBDYZAWE.js";
import "../chunk-RZQAGGNF.js";
import "../chunk-DX56BAVJ.js";
import "../chunk-OHKIUAFP.js";
import "../chunk-PCDUOQG4.js";
import "../chunk-2KBTFCVH.js";
import "../chunk-NNNZ3I2V.js";
import "../chunk-FXTP44KN.js";
import "../chunk-PSZT7DIC.js";
import "../chunk-HMDJ3XWV.js";
import "../chunk-ZP3X4LXS.js";
import "../chunk-6UPPAFU2.js";
import "../chunk-TDC6F2KC.js";
import "../chunk-S65FHSZB.js";
import "../chunk-2OIHOMQE.js";
import "../chunk-K6K5LTLM.js";
import "../chunk-DTWPHC7P.js";
import "../chunk-BMBKPA62.js";
import "../chunk-IKRHSGEA.js";
import "../chunk-CSBUTTIG.js";
import "../chunk-YLEMUZ6G.js";
import "../chunk-UKBHOD7Z.js";
import "../chunk-AUQC7LSU.js";
import "../chunk-H3LLUEAM.js";
import "../chunk-IQGNQK5Q.js";
import "../chunk-BJVLOFCB.js";
import "../chunk-J55ZYSGO.js";
import "../chunk-ZUXBWQVK.js";
import "../chunk-HWOJFZWI.js";
import "../chunk-IAY5YVGA.js";
import "../chunk-NL3L2LIO.js";
import "../chunk-UICSY6NG.js";
import "../chunk-2NXHCBFZ.js";
import {
  init_esm_shims
} from "../chunk-ZRREZ4KQ.js";
import "../chunk-7UBRHILH.js";

// src/__test__/build.spec.ts
init_esm_shims();
import assert from "assert/strict";
describe("UlldBuildProcess", function() {
  it("Properly gathers slot conflicts", function() {
    const b = getTestBuild(void 0, 300);
    b.gatherSlotConflicts();
    assert(b.slotConflicts.length > 0, "Found slot conflicts");
  });
});
//# sourceMappingURL=build.spec.js.map