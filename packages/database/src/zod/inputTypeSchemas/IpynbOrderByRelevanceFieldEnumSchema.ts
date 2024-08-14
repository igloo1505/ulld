import { z } from 'zod';

export const IpynbOrderByRelevanceFieldEnumSchema = z.enum(['rootRelativePath','title','latexTitle','citationsListOrder','href','outgoingQuickLinks','sequentialKey']);

export default IpynbOrderByRelevanceFieldEnumSchema;
