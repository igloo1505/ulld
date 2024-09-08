'use strict';

var zod = require('zod');

// src/types/todos.ts
zod.z.object({
  label: zod.z.string(),
  id: zod.z.number(),
  active: zod.z.boolean().default(false)
});

// src/types/slotDataType.ts
var slotTypes = [
  "page",
  "component",
  "modalPage",
  "embeddable",
  "generatedPage"
];

exports.slotTypes = slotTypes;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map