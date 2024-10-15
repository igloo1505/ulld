import { z } from 'zod';
export const TERTIARY_TOGGLESchema = z.enum(['on', 'off', 'partial']);
export default TERTIARY_TOGGLESchema;
