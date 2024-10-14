import { z } from 'zod';
import type { DietWithRelations } from './DietSchema'
import type { DietPartialWithRelations } from './DietSchema'
import { DietWithRelationsSchema } from './DietSchema'
import { DietPartialWithRelationsSchema } from './DietSchema'

/////////////////////////////////////////
// HEALTH REPORT SCHEMA
/////////////////////////////////////////

export const HealthReportSchema = z.object({
  id: z.number().int(),
  title: z.string().nullable(),
  summary: z.string().nullable(),
  overall: z.number(),
  skin: z.number(),
  bloat: z.number(),
  weight_feeling: z.number(),
  fullness: z.number(),
  weight: z.number().nullable(),
  cardiacCapacity: z.number(),
  jawLine: z.number(),
  joints: z.number(),
  flexibility: z.number(),
  anxiety: z.number(),
  anxiety_desc: z.string().nullable(),
  mood_desc: z.string().nullable(),
  mood: z.number(),
  sexDrive: z.number(),
  intruisiveThoughts: z.number(),
  caffeineIntake: z.number(),
  glutenIntake: z.number(),
  sugarIntake: z.number(),
  artificialSweetenerIntake: z.number(),
  artificalDyes: z.number(),
  sleepQuality: z.number(),
  hydration: z.number(),
  twitching: z.number(),
  sleepHours: z.number().nullable(),
  calorie_est: z.number().int().nullable(),
  times_meals_more_than_gap_apart: z.number().int().nullable(),
  estHoursInExcessFast: z.number().nullable(),
  dietId: z.string().nullable(),
  created: z.coerce.date(),
})

export type HealthReport = z.infer<typeof HealthReportSchema>

/////////////////////////////////////////
// HEALTH REPORT PARTIAL SCHEMA
/////////////////////////////////////////

export const HealthReportPartialSchema = HealthReportSchema.partial()

export type HealthReportPartial = z.infer<typeof HealthReportPartialSchema>

/////////////////////////////////////////
// HEALTH REPORT RELATION SCHEMA
/////////////////////////////////////////

export type HealthReportRelations = {
  currentDiet?: DietWithRelations | null;
};

export type HealthReportWithRelations = z.infer<typeof HealthReportSchema> & HealthReportRelations

export const HealthReportWithRelationsSchema: z.ZodType<HealthReportWithRelations> = HealthReportSchema.merge(z.object({
  currentDiet: z.lazy(() => DietWithRelationsSchema).nullable(),
}))

/////////////////////////////////////////
// HEALTH REPORT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type HealthReportPartialRelations = {
  currentDiet?: DietPartialWithRelations | null;
};

export type HealthReportPartialWithRelations = z.infer<typeof HealthReportPartialSchema> & HealthReportPartialRelations

export const HealthReportPartialWithRelationsSchema: z.ZodType<HealthReportPartialWithRelations> = HealthReportPartialSchema.merge(z.object({
  currentDiet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
})).partial()

export type HealthReportWithPartialRelations = z.infer<typeof HealthReportSchema> & HealthReportPartialRelations

export const HealthReportWithPartialRelationsSchema: z.ZodType<HealthReportWithPartialRelations> = HealthReportSchema.merge(z.object({
  currentDiet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
}).partial())

export default HealthReportSchema;
