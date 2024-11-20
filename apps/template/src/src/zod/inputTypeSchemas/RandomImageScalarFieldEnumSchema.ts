import { z } from 'zod';

export const RandomImageScalarFieldEnumSchema = z.enum(['path','createdAt']);

export default RandomImageScalarFieldEnumSchema;
