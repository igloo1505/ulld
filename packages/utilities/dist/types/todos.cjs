'use strict';

var zod = require('zod');

// src/types/todos.ts
zod.z.object({
  label: zod.z.string(),
  id: zod.z.number(),
  active: zod.z.boolean().default(false)
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=todos.cjs.map