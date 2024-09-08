import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/randomization.ts
init_esm_shims();
var getRandomChar = () => {
  let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return s[Math.floor(Math.random() * s.length)];
};
var modifyNameRandomly = (initial, haveModified = false) => {
  return haveModified ? `${initial}${getRandomChar()}` : `${initial}_${getRandomChar()}`;
};

export {
  getRandomChar,
  modifyNameRandomly
};
//# sourceMappingURL=chunk-XLL2B65U.js.map