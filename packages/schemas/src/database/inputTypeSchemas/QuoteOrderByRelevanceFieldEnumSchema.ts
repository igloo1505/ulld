import { z } from 'zod';

export const QuoteOrderByRelevanceFieldEnumSchema = z.enum(['body','author','source']);

export default QuoteOrderByRelevanceFieldEnumSchema;
