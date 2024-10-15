import { z } from 'zod';
export const topicZodObject = z.object({
    value: z.string(),
});
export const subjectZodObject = z.object({
    value: z.string(),
});
const _tagZodObject = z.object({
    value: z.string(),
    kanbanId: z.union([z.number().int(), z.null(), z.undefined()]).optional(),
});
export const tagZodObject = z.union([
    _tagZodObject,
    z.string().transform((a) => _tagZodObject.parse({ value: a })),
]);
