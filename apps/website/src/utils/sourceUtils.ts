import {z} from 'zod'

export const sourceSearchParamSchema = z.object({
  id: z.string(),
});


export type WithSourceSearchParams = z.input<typeof sourceSearchParamSchema>;
