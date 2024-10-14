import { z } from 'zod';

export const QAPairOrderByRelevanceFieldEnumSchema = z.enum(['id','question','answer','description','secondaryLabel']);

export default QAPairOrderByRelevanceFieldEnumSchema;
