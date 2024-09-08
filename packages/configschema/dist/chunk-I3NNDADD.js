// src/zod/transforms/general.ts
import { setSlashes } from "@ulld/utilities/utils/fsUtils";
var slashesTransform = (leadingSlash, trailingSlash = false) => {
  return (val) => setSlashes({
    value: val,
    leading: leadingSlash,
    trailing: trailingSlash
  });
};

export {
  slashesTransform
};
//# sourceMappingURL=chunk-I3NNDADD.js.map