import '../../chunk-5WT32FJO.js';
import { z } from 'zod';

var o=z.object({content:z.string(),display:z.union([z.literal("display"),z.literal("inline")]).default("display")});

export { o as parseMdxProps };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=parseMdxStringProps.js.map