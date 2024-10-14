import { z } from 'zod';
import type { DietWithRelations } from './DietSchema'
import type { DietPartialWithRelations } from './DietSchema'
import { DietWithRelationsSchema } from './DietSchema'
import { DietPartialWithRelationsSchema } from './DietSchema'

/////////////////////////////////////////
// TIME PERIOD SCHEMA
/////////////////////////////////////////

export const TimePeriodSchema = z.object({
  id: z.number().int(),
  start: z.coerce.date(),
  end: z.coerce.date().nullable(),
  dietId: z.string().nullable(),
})

export type TimePeriod = z.infer<typeof TimePeriodSchema>

/////////////////////////////////////////
// TIME PERIOD PARTIAL SCHEMA
/////////////////////////////////////////

export const TimePeriodPartialSchema = TimePeriodSchema.partial()

export type TimePeriodPartial = z.infer<typeof TimePeriodPartialSchema>

/////////////////////////////////////////
// TIME PERIOD RELATION SCHEMA
/////////////////////////////////////////

export type TimePeriodRelations = {
  Diet?: DietWithRelations | null;
};

export type TimePeriodWithRelations = z.infer<typeof TimePeriodSchema> & TimePeriodRelations

export const TimePeriodWithRelationsSchema: z.ZodType<TimePeriodWithRelations> = TimePeriodSchema.merge(z.object({
  Diet: z.lazy(() => DietWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// TIME PERIOD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TimePeriodPartialRelations = {
  Diet?: DietPartialWithRelations | null;
};

export type TimePeriodPartialWithRelations = z.infer<typeof TimePeriodPartialSchema> & TimePeriodPartialRelations

export const TimePeriodPartialWithRelationsSchema: z.ZodType<TimePeriodPartialWithRelations> = TimePeriodPartialSchema.merge(z.object({
  Diet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
})).partial()

export type TimePeriodWithPartialRelations = z.infer<typeof TimePeriodSchema> & TimePeriodPartialRelations

export const TimePeriodWithPartialRelationsSchema: z.ZodType<TimePeriodWithPartialRelations> = TimePeriodSchema.merge(z.object({
  Diet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
}).partial())

export default TimePeriodSchema;
