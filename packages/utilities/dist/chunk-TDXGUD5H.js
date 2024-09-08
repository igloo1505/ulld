import { z } from 'zod';

// src/types/todos.ts
z.object({
  label: z.string(),
  id: z.number(),
  active: z.boolean().default(false)
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-TDXGUD5H.js.map