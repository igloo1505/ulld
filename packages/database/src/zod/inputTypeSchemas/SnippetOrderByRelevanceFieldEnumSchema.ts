import { z } from 'zod';

export const SnippetOrderByRelevanceFieldEnumSchema = z.enum(['content','description','keywords','language']);

export default SnippetOrderByRelevanceFieldEnumSchema;
