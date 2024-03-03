import { HealthReport } from "@prisma/client";
import { zodRatingField } from "@ulld/utilities";
import { ZodDate, ZodOptional, ZodString, ZodUnion, z } from "zod";

type StringToNum = Pick<HealthReport, "sleepHours" | "weight" | "calorie_est" | "times_meals_more_than_gap_apart" | "estHoursInExcessFast">

type StringNumRecord = Record<keyof StringToNum, ZodOptional<ZodString>> & { created: z.ZodOptional<ZodUnion<[ZodDate, ZodString]>> }


export const healthReportFormFieldValues: Omit<{ [k in keyof HealthReport]: z.ZodType<HealthReport[k]> | z.ZodOptional<z.ZodType<HealthReport[k]>> }, "created" | "dietId" | keyof StringToNum> & StringNumRecord = {
    id: z.number().int().optional(),
    title: z.string().optional(),
    summary: z.string().optional(),
    sleepHours: z.string().optional(), // Need to convert back
    weight: z.string().optional(), // Need to convert back
    overall: zodRatingField,
    skin: zodRatingField,
    bloat: zodRatingField,
    weight_feeling: zodRatingField,
    fullness: zodRatingField,
    cardiacCapacity: zodRatingField,
    jawLine: zodRatingField,
    joints: zodRatingField,
    flexibility: zodRatingField,
    anxiety: zodRatingField,
    anxiety_desc: z.string().optional(),
    mood: zodRatingField,
    mood_desc: z.string().optional(),
    sexDrive: zodRatingField,
    intruisiveThoughts: zodRatingField,
    caffeineIntake: zodRatingField,
    glutenIntake: zodRatingField,
    hydration: zodRatingField,
    sugarIntake: zodRatingField,
    artificialSweetenerIntake: zodRatingField,
    artificalDyes: zodRatingField,
    sleepQuality: zodRatingField,
    twitching: zodRatingField,
    calorie_est: z.string().optional(),
    times_meals_more_than_gap_apart: z.string().optional().describe("Times the gap between meals exceeded the diet specific fasting avoidance allowance."),
    estHoursInExcessFast: z.string().optional(),
    created: z.union([z.date(), z.string()]).optional()
}
