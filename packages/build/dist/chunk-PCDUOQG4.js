import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/utils/removeLeadingDotSlash.ts
init_esm_shims();
var removeLeadingDotSlash = (p) => {
  let re = /^(?<remove>\.?\/?)/gm;
  let m = re.exec(p);
  if (m?.groups?.remove) {
    return p.slice(m.groups.remove.length);
  }
  return p;
};

export {
  removeLeadingDotSlash
};
//# sourceMappingURL=chunk-PCDUOQG4.js.map