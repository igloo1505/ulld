import { embeddableConfigSchema } from './chunk-3H2DQBXI.js';
import { slotKeySchema } from './chunk-IWQ6HJEI.js';
import { z } from 'zod';

var baseAppSlot = z.object({
  parentSlot: slotKeySchema,
  subSlot: z.string(),
  path: z.string(),
  clientOnly: z.boolean().default(false),
  type: z.union([
    z.literal("page"),
    z.literal("component"),
    z.literal("embeddable")
  ]),
  propsExtends: z.string().optional(),
  embeddables: z.union([embeddableConfigSchema, embeddableConfigSchema.array()]).transform((a) => Array.isArray(a) ? a : [a])
});

export { baseAppSlot };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-JF6UGOEW.js.map