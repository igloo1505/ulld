import { z } from 'zod';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js';
import { SequentialNoteListOrderByWithRelationInputSchema } from '../inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema.js';
import { SequentialNoteListWhereUniqueInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema.js';
export const SequentialNoteListAggregateArgsSchema = z.object({
    where: SequentialNoteListWhereInputSchema.optional(),
    orderBy: z.union([SequentialNoteListOrderByWithRelationInputSchema.array(), SequentialNoteListOrderByWithRelationInputSchema]).optional(),
    cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default SequentialNoteListAggregateArgsSchema;
