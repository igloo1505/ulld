import '../../chunk-F3FYYIAV.js';
import { z } from 'zod';

var parseMdxStringSchema = z.object({
  content: z.string(),
  display: z.union([z.literal("display"), z.literal("inline")])
});

export { parseMdxStringSchema };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringSchema.js.map