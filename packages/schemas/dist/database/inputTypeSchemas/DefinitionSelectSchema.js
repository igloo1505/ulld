import { z } from 'zod';
import { MdxNoteArgsSchema } from "../outputTypeSchemas/MdxNoteArgsSchema";
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
export default DefinitionSelectSchema;
