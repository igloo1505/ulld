'use strict';

var zod = require('zod');

// src/schemas/autoWrapMathSchema.ts

// src/utils/latexUtils.ts
var autoWrapMath = (math, display = true) => {
  const s = display ? "$$" : "$";
  let _idx = math.indexOf(s);
  if (_idx === -1 || _idx === math.lastIndexOf(s)) {
    return `${s}
${math}
${s}`;
  }
  return math;
};

// src/schemas/autoWrapMathSchema.ts
var autoWrapMathInlineField = zod.z.string().transform((data) => autoWrapMath(data, false));
var autoWrapMathDisplayField = zod.z.string().transform((data) => autoWrapMath(data, true));
var autoWrapMathInlineNullishField = zod.z.string().transform((data) => data ? autoWrapMath(data, false) : data);
var autoWrapMathDisplayNullishField = zod.z.string().transform((data) => data ? autoWrapMath(data, true) : data);

exports.autoWrapMathDisplayField = autoWrapMathDisplayField;
exports.autoWrapMathDisplayNullishField = autoWrapMathDisplayNullishField;
exports.autoWrapMathInlineField = autoWrapMathInlineField;
exports.autoWrapMathInlineNullishField = autoWrapMathInlineNullishField;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=autoWrapMathSchema.cjs.map