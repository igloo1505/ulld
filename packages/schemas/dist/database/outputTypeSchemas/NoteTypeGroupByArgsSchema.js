import { z } from 'zod';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema.js';
import { NoteTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/NoteTypeOrderByWithAggregationInputSchema.js';
import { NoteTypeScalarFieldEnumSchema } from '../inputTypeSchemas/NoteTypeScalarFieldEnumSchema.js';
import { NoteTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/NoteTypeScalarWhereWithAggregatesInputSchema.js';
export const NoteTypeGroupByArgsSchema = z.object({
    where: NoteTypeWhereInputSchema.optional(),
    orderBy: z.union([NoteTypeOrderByWithAggregationInputSchema.array(), NoteTypeOrderByWithAggregationInputSchema]).optional(),
    by: NoteTypeScalarFieldEnumSchema.array(),
    having: NoteTypeScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default NoteTypeGroupByArgsSchema;
