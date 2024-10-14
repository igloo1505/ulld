import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from '../inputTypeSchemas/TERTIARY_TOGGLESchema'
import { DIETARY_GOALSchema } from '../inputTypeSchemas/DIETARY_GOALSchema'
import type { DietaryItemWithRelations } from './DietaryItemSchema'
import type { DietaryItemPartialWithRelations } from './DietaryItemSchema'
import type { TimePeriodWithRelations } from './TimePeriodSchema'
import type { TimePeriodPartialWithRelations } from './TimePeriodSchema'
import type { HealthReportWithRelations } from './HealthReportSchema'
import type { HealthReportPartialWithRelations } from './HealthReportSchema'
import { DietaryItemWithRelationsSchema } from './DietaryItemSchema'
import { DietaryItemPartialWithRelationsSchema } from './DietaryItemSchema'
import { TimePeriodWithRelationsSchema } from './TimePeriodSchema'
import { TimePeriodPartialWithRelationsSchema } from './TimePeriodSchema'
import { HealthReportWithRelationsSchema } from './HealthReportSchema'
import { HealthReportPartialWithRelationsSchema } from './HealthReportSchema'

/////////////////////////////////////////
// DIET SCHEMA
/////////////////////////////////////////

export const DietSchema = z.object({
  gf: TERTIARY_TOGGLESchema,
  fasting: TERTIARY_TOGGLESchema,
  cardioTraining: TERTIARY_TOGGLESchema,
  weightTraining: TERTIARY_TOGGLESchema,
  goals: DIETARY_GOALSchema.array(),
  name: z.string(),
  summary: z.string().nullable(),
  activelyFollowing: z.boolean(),
  vegan: z.boolean(),
  pescatarian: z.boolean(),
  vegetarian: z.boolean(),
  carb: z.number().nullable(),
  pro: z.number().nullable(),
  fat: z.number().nullable(),
  created: z.coerce.date(),
  lastUpdate: z.coerce.date(),
})

export type Diet = z.infer<typeof DietSchema>

/////////////////////////////////////////
// DIET PARTIAL SCHEMA
/////////////////////////////////////////

export const DietPartialSchema = DietSchema.partial()

export type DietPartial = z.infer<typeof DietPartialSchema>

/////////////////////////////////////////
// DIET RELATION SCHEMA
/////////////////////////////////////////

export type DietRelations = {
  items: DietaryItemWithRelations[];
  periodsFollowed: TimePeriodWithRelations[];
  HealthReport: HealthReportWithRelations[];
};

export type DietWithRelations = z.infer<typeof DietSchema> & DietRelations

export const DietWithRelationsSchema: z.ZodType<DietWithRelations> = DietSchema.merge(z.object({
  items: z.lazy(() => DietaryItemWithRelationsSchema).array(),
  periodsFollowed: z.lazy(() => TimePeriodWithRelationsSchema).array(),
  HealthReport: z.lazy(() => HealthReportWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// DIET PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type DietPartialRelations = {
  items?: DietaryItemPartialWithRelations[];
  periodsFollowed?: TimePeriodPartialWithRelations[];
  HealthReport?: HealthReportPartialWithRelations[];
};

export type DietPartialWithRelations = z.infer<typeof DietPartialSchema> & DietPartialRelations

export const DietPartialWithRelationsSchema: z.ZodType<DietPartialWithRelations> = DietPartialSchema.merge(z.object({
  items: z.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
  periodsFollowed: z.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
  HealthReport: z.lazy(() => HealthReportPartialWithRelationsSchema).array(),
})).partial()

export type DietWithPartialRelations = z.infer<typeof DietSchema> & DietPartialRelations

export const DietWithPartialRelationsSchema: z.ZodType<DietWithPartialRelations> = DietSchema.merge(z.object({
  items: z.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
  periodsFollowed: z.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
  HealthReport: z.lazy(() => HealthReportPartialWithRelationsSchema).array(),
}).partial())

export default DietSchema;
