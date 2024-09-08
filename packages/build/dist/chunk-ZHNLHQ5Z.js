import {
  flattenSlotMap,
  forceFullSlotMap,
  walkSlotMap
} from "./chunk-UKBHOD7Z.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/slotMapIsFull.ts
init_esm_shims();
var slotMapIsFull = (data) => {
  let mapData = forceFullSlotMap(data, false);
  let walkedData = walkSlotMap(mapData, (x) => Boolean(x));
  let flattenedMap = flattenSlotMap(walkedData);
  let missingKeys = [];
  for (const k of flattenedMap) {
    if (!k.data) {
      missingKeys.push({
        slot: k.slot,
        subSlot: k.subSlot
      });
    }
  }
  return {
    passed: missingKeys.length === 0,
    missingItems: missingKeys
  };
};

export {
  slotMapIsFull
};
//# sourceMappingURL=chunk-ZHNLHQ5Z.js.map