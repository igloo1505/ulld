'use strict';

var fsUtils = require('@ulld/utilities/utils/fsUtils');

// src/zod/transforms/general.ts
var slashesTransform = (leadingSlash, trailingSlash = false) => {
  return (val) => fsUtils.setSlashes({
    value: val,
    leading: leadingSlash,
    trailing: trailingSlash
  });
};

exports.slashesTransform = slashesTransform;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=general.cjs.map