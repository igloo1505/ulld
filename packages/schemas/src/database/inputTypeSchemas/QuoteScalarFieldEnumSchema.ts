import { z } from 'zod';

export const QuoteScalarFieldEnumSchema = z.enum(['body','author','source','pinned','createdAt']);

export default QuoteScalarFieldEnumSchema;
