import { z } from 'zod';
export const sequentialListPropsSchema = z.object({
    sequentialKey: z.string(),
    MdxNote: z.any().array().default([]),
    Ipynb: z.any().array().default([]),
});
