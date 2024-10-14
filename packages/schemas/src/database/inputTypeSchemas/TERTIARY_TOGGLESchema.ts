import { z } from 'zod';

export const TERTIARY_TOGGLESchema = z.enum(['on','off','partial']);

export type TERTIARY_TOGGLEType = `${z.infer<typeof TERTIARY_TOGGLESchema>}`

export default TERTIARY_TOGGLESchema;
