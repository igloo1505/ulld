import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from '../inputTypeSchemas/TERTIARY_TOGGLESchema.js';
import { DIETARY_GOALSchema } from '../inputTypeSchemas/DIETARY_GOALSchema.js';
import { DietaryItemWithRelationsSchema } from './DietaryItemSchema.js';
import { DietaryItemPartialWithRelationsSchema } from './DietaryItemSchema.js';
import { TimePeriodWithRelationsSchema } from './TimePeriodSchema.js';
import { TimePeriodPartialWithRelationsSchema } from './TimePeriodSchema.js';
import { HealthReportWithRelationsSchema } from './HealthReportSchema.js';
import { HealthReportPartialWithRelationsSchema } from './HealthReportSchema.js';
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
});
/////////////////////////////////////////
// DIET PARTIAL SCHEMA
/////////////////////////////////////////
export const DietPartialSchema = DietSchema.partial();
export const DietWithRelationsSchema = DietSchema.merge(z.object({
    items: z.lazy(() => DietaryItemWithRelationsSchema).array(),
    periodsFollowed: z.lazy(() => TimePeriodWithRelationsSchema).array(),
    HealthReport: z.lazy(() => HealthReportWithRelationsSchema).array(),
}));
export const DietPartialWithRelationsSchema = DietPartialSchema.merge(z.object({
    items: z.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
    periodsFollowed: z.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
    HealthReport: z.lazy(() => HealthReportPartialWithRelationsSchema).array(),
})).partial();
export const DietWithPartialRelationsSchema = DietSchema.merge(z.object({
    items: z.lazy(() => DietaryItemPartialWithRelationsSchema).array(),
    periodsFollowed: z.lazy(() => TimePeriodPartialWithRelationsSchema).array(),
    HealthReport: z.lazy(() => HealthReportPartialWithRelationsSchema).array(),
}).partial());
export default DietSchema;
