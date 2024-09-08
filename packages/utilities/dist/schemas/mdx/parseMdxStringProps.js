import '../../chunk-F3FYYIAV.js';
import { z } from 'zod';

var parseMdxProps = z.object({
  content: z.string(),
  display: z.union([z.literal("display"), z.literal("inline")]).default("display")
});

export { parseMdxProps };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringProps.js.map