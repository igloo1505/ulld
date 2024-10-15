import { z } from 'zod';
import { KanBanListArgsSchema } from "../outputTypeSchemas/KanBanListArgsSchema";
export const KanBanCardIncludeSchema = z.object({
    KanBanList: z.union([z.boolean(), z.lazy(() => KanBanListArgsSchema)]).optional(),
}).strict();
export default KanBanCardIncludeSchema;
