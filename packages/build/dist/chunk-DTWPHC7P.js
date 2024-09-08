import {
  TemplateContent
} from "./chunk-BMBKPA62.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/subslot.ts
init_esm_shims();
import slotMapData from "@ulld/utilities/slotMap.json";
var SubSlot = class {
  constructor(pluginName, parentSlot, subSlot, paths, exportedPropsName) {
    this.pluginName = pluginName;
    this.parentSlot = parentSlot;
    this.subSlot = subSlot;
    this.paths = paths;
    this.exportedPropsName = exportedPropsName;
    let item = slotMapData[parentSlot][subSlot];
    if (!item) {
      throw new Error(
        `Can not find the target file for the ${parentSlot} -> ${subSlot} slot.`
      );
    }
    this.itemData = item;
  }
  shouldUse = true;
  itemData;
  cancel() {
    this.shouldUse = false;
  }
  writeToFile(formattedExport, componentImport) {
    if (/pdf/gim.test(formattedExport)) {
      console.log(`This is pdf related...`);
    }
    let target = new TemplateContent(this.itemData.path, this.paths);
    target.generate(
      componentImport,
      formattedExport,
      this.itemData,
      this.exportedPropsName
    );
  }
};

export {
  SubSlot
};
//# sourceMappingURL=chunk-DTWPHC7P.js.map