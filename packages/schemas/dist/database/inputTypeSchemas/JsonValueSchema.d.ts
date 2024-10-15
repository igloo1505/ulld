import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export declare const JsonValueSchema: z.ZodType<Prisma.JsonValue>;
export type JsonValueType = z.infer<typeof JsonValueSchema>;
export default JsonValueSchema;
//# sourceMappingURL=JsonValueSchema.d.ts.map