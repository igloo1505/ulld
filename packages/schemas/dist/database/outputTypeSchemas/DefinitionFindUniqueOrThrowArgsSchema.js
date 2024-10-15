import { z } from 'zod';
import { DefinitionIncludeSchema } from '../inputTypeSchemas/DefinitionIncludeSchema.js';
import { DefinitionWhereUniqueInputSchema } from '../inputTypeSchemas/DefinitionWhereUniqueInputSchema.js';
import { MdxNoteArgsSchema } from "../outputTypeSchemas/MdxNoteArgsSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DefinitionSelectSchema = z.object({
    id: z.boolean().optional(),
    label: z.boolean().optional(),
    content: z.boolean().optional(),
    alphabeticalLabel: z.boolean().optional(),
    mdxNoteId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    lastAccess: z.boolean().optional(),
    mdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteArgsSchema)]).optional(),
}).strict();
export const DefinitionFindUniqueOrThrowArgsSchema = z.object({
    select: DefinitionSelectSchema.optional(),
    include: DefinitionIncludeSchema.optional(),
    where: DefinitionWhereUniqueInputSchema,
}).strict();
export default DefinitionFindUniqueOrThrowArgsSchema;
