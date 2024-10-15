import { z } from 'zod';
import { MdxNoteWhereInputSchema } from '../inputTypeSchemas/MdxNoteWhereInputSchema.js';
import { MdxNoteOrderByWithRelationInputSchema } from '../inputTypeSchemas/MdxNoteOrderByWithRelationInputSchema.js';
import { MdxNoteWhereUniqueInputSchema } from '../inputTypeSchemas/MdxNoteWhereUniqueInputSchema.js';
export const MdxNoteAggregateArgsSchema = z.object({
    where: MdxNoteWhereInputSchema.optional(),
    orderBy: z.union([MdxNoteOrderByWithRelationInputSchema.array(), MdxNoteOrderByWithRelationInputSchema]).optional(),
    cursor: MdxNoteWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default MdxNoteAggregateArgsSchema;
