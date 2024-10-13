import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/ReadingListWhereInputSchema.js
export const ReadingListDeleteManyArgsSchema: z.ZodType<Prisma.ReadingListDeleteManyArgs> = z.object({
  where: ReadingListWhereInputSchema.optional(),
}).strict() ;
export default ReadingListDeleteManyArgsSchema;