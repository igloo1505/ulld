import { z } from 'zod';
import { MdxNoteArgsSchema } from "../outputTypeSchemas/MdxNoteArgsSchema";
export const DefinitionIncludeSchema = z.object({
    mdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteArgsSchema)]).optional(),
}).strict();
export default DefinitionIncludeSchema;
