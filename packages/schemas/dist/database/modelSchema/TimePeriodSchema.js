import { z } from 'zod';
import { DietWithRelationsSchema } from './DietSchema.js';
import { DietPartialWithRelationsSchema } from './DietSchema.js';
/////////////////////////////////////////
// TIME PERIOD SCHEMA
/////////////////////////////////////////
export const TimePeriodSchema = z.object({
    id: z.number().int(),
    start: z.coerce.date(),
    end: z.coerce.date().nullable(),
    dietId: z.string().nullable(),
});
/////////////////////////////////////////
// TIME PERIOD PARTIAL SCHEMA
/////////////////////////////////////////
export const TimePeriodPartialSchema = TimePeriodSchema.partial();
export const TimePeriodWithRelationsSchema = TimePeriodSchema.merge(z.object({
    Diet: z.lazy(() => DietWithRelationsSchema).nullable(),
}));
export const TimePeriodPartialWithRelationsSchema = TimePeriodPartialSchema.merge(z.object({
    Diet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
})).partial();
export const TimePeriodWithPartialRelationsSchema = TimePeriodSchema.merge(z.object({
    Diet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
}).partial());
export default TimePeriodSchema;
