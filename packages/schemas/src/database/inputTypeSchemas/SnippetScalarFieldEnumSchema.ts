import { z } from 'zod';

export const SnippetScalarFieldEnumSchema = z.enum(['id','content','description','keywords','language','createdAt']);

export default SnippetScalarFieldEnumSchema;
