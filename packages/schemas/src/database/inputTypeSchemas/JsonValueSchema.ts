import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const JsonValueSchema: z.ZodType<Prisma.JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.literal(null),
    z.record(z.lazy(() => JsonValueSchema.optional())),
    z.array(z.lazy(() => JsonValueSchema)),
  ])
);
export type JsonValueType = z.infer<typeof JsonValueSchema>;
export default JsonValueSchema