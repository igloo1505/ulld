import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/slotMapUtils.ts
init_esm_shims();
import fullSlotMap from "@ulld/utilities/slotMap.json";
var walkSlotMap = (slotMap, getData) => {
  let s = {};
  for (const k in slotMap) {
    for (const l in slotMap[k]) {
      if (!s[k]) {
        s[k] = {};
      }
      s[k][l] = getData(slotMap[k][l], k, l);
    }
  }
  return s;
};
var flattenSlotMap = (slotMap) => {
  let d = [];
  for (const k in slotMap) {
    for (const l in slotMap[k]) {
      d.push({
        slot: k,
        subSlot: l,
        /* @ts-ignore */
        data: slotMap[k][l]
      });
    }
  }
  return d;
};
var forceFullSlotMap = (slotMap, defaultValue = false) => {
  return walkSlotMap(fullSlotMap, (val, slot, subSlot) => slotMap[slot]?.[subSlot] ? slotMap[slot][subSlot] : defaultValue);
};
var generateSlotMapOfType = (cb) => {
  let d = {};
  for (const slot in fullSlotMap) {
    for (const subSlot in fullSlotMap[slot]) {
      if (!d[slot]) {
        d[slot] = {};
      }
      d[slot][subSlot] = cb(slot, subSlot);
    }
  }
  return d;
};
var getSlotMapData = (parentSlot, subSlot) => {
  return fullSlotMap[parentSlot][subSlot];
};

export {
  walkSlotMap,
  flattenSlotMap,
  forceFullSlotMap,
  generateSlotMapOfType,
  getSlotMapData
};
//# sourceMappingURL=chunk-UKBHOD7Z.js.map