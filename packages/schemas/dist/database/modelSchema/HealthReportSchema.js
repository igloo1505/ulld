import { z } from 'zod';
import { DietWithRelationsSchema } from './DietSchema.js';
import { DietPartialWithRelationsSchema } from './DietSchema.js';
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
});
/////////////////////////////////////////
// HEALTH REPORT PARTIAL SCHEMA
/////////////////////////////////////////
export const HealthReportPartialSchema = HealthReportSchema.partial();
export const HealthReportWithRelationsSchema = HealthReportSchema.merge(z.object({
    currentDiet: z.lazy(() => DietWithRelationsSchema).nullable(),
}));
export const HealthReportPartialWithRelationsSchema = HealthReportPartialSchema.merge(z.object({
    currentDiet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
})).partial();
export const HealthReportWithPartialRelationsSchema = HealthReportSchema.merge(z.object({
    currentDiet: z.lazy(() => DietPartialWithRelationsSchema).nullable(),
}).partial());
export default HealthReportSchema;
