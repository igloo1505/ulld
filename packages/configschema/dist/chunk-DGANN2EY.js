import { setSlashes } from '@ulld/utilities/utils/fsUtils';

// src/zod/transforms/general.ts
var slashesTransform = (leadingSlash, trailingSlash = false) => {
  return (val) => setSlashes({
    value: val,
    leading: leadingSlash,
    trailing: trailingSlash
  });
};

export { slashesTransform };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-DGANN2EY.js.map