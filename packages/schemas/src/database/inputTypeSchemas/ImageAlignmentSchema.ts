import { z } from 'zod';

export const ImageAlignmentSchema = z.enum(['bottom','center','top','left','right']);

export type ImageAlignmentType = `${z.infer<typeof ImageAlignmentSchema>}`

export default ImageAlignmentSchema;
