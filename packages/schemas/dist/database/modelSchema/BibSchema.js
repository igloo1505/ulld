import { z } from 'zod';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
/////////////////////////////////////////
// BIB SCHEMA
/////////////////////////////////////////
export const BibSchema = z.object({
    id: z.number().int(),
    filename: z.string(),
    firstSync: z.coerce.date(),
    lastSync: z.coerce.date(),
});
/////////////////////////////////////////
// BIB PARTIAL SCHEMA
/////////////////////////////////////////
export const BibPartialSchema = BibSchema.partial();
export const BibWithRelationsSchema = BibSchema.merge(z.object({
    entries: z.lazy(() => BibEntryWithRelationsSchema).array(),
}));
export const BibPartialWithRelationsSchema = BibPartialSchema.merge(z.object({
    entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
})).partial();
export const BibWithPartialRelationsSchema = BibSchema.merge(z.object({
    entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
}).partial());
export default BibSchema;
