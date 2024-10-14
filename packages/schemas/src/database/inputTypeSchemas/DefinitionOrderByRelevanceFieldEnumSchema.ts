import { z } from 'zod';

export const DefinitionOrderByRelevanceFieldEnumSchema = z.enum(['id','label','content','alphabeticalLabel']);

export default DefinitionOrderByRelevanceFieldEnumSchema;
