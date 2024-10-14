// src/database/inputTypeSchemas/HealthReportUncheckedCreateWithoutCurrentDietInputSchema.ts
import { z } from "zod";
var HealthReportUncheckedCreateWithoutCurrentDietInputSchema = z.object({
  id: z.number().int().optional(),
  title: z.string().optional().nullable(),
  summary: z.string().optional().nullable(),
  overall: z.number().optional(),
  skin: z.number().optional(),
  bloat: z.number().optional(),
  weight_feeling: z.number().optional(),
  fullness: z.number().optional(),
  weight: z.number().optional().nullable(),
  cardiacCapacity: z.number().optional(),
  jawLine: z.number().optional(),
  joints: z.number().optional(),
  flexibility: z.number().optional(),
  anxiety: z.number().optional(),
  anxiety_desc: z.string().optional().nullable(),
  mood_desc: z.string().optional().nullable(),
  mood: z.number().optional(),
  sexDrive: z.number().optional(),
  intruisiveThoughts: z.number().optional(),
  caffeineIntake: z.number().optional(),
  glutenIntake: z.number().optional(),
  sugarIntake: z.number().optional(),
  artificialSweetenerIntake: z.number().optional(),
  artificalDyes: z.number().optional(),
  sleepQuality: z.number().optional(),
  hydration: z.number().optional(),
  twitching: z.number().optional(),
  sleepHours: z.number().optional().nullable(),
  calorie_est: z.number().int().optional().nullable(),
  times_meals_more_than_gap_apart: z.number().int().optional().nullable(),
  estHoursInExcessFast: z.number().optional().nullable(),
  created: z.coerce.date().optional()
}).strict();
var HealthReportUncheckedCreateWithoutCurrentDietInputSchema_default = HealthReportUncheckedCreateWithoutCurrentDietInputSchema;

export {
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema,
  HealthReportUncheckedCreateWithoutCurrentDietInputSchema_default
};
//# sourceMappingURL=chunk-ALI3VRL3.js.map