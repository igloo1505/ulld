import { z } from 'zod';

export const DefinitionScalarFieldEnumSchema = z.enum(['id','label','content','alphabeticalLabel','mdxNoteId','createdAt','lastAccess']);

export default DefinitionScalarFieldEnumSchema;
