"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/zod/transforms/general.ts
var _fsUtils = require('@ulld/utilities/utils/fsUtils');
var slashesTransform = (leadingSlash, trailingSlash = false) => {
  return (val) => _fsUtils.setSlashes.call(void 0, {
    value: val,
    leading: leadingSlash,
    trailing: trailingSlash
  });
};



exports.slashesTransform = slashesTransform;
//# sourceMappingURL=chunk-J367RNK6.cjs.map