import { HealthReport } from "@prisma/client"
import type { serverClient } from "@ulld/api"
import { zodTertiaryToggleSchema } from "@ulld/utilities"
import { ZodDate, ZodOptional, ZodRawShape, ZodString, ZodUnion, z } from "zod"


export const dietFormFieldValues = {
    name: z.string(),
    summary: z.string().optional(),
    activelyFollowing: z.boolean().default(false),
    gf: zodTertiaryToggleSchema,
    fasting: zodTertiaryToggleSchema,
    cardioTraining: zodTertiaryToggleSchema,
    weightTraining: zodTertiaryToggleSchema,
    vegan: z.boolean().default(false),
    pescatarian: z.boolean().default(false),
    vegetarian: z.boolean().default(false),
    carb: z.number().optional(),
    pro: z.number().optional(),
    fat: z.number().optional(),
} satisfies ZodRawShape

const dietSchemaAdditionalState = {
    macrosMatter: z.boolean().default(true)
}


export const dietOnlySchema = z.object(dietFormFieldValues)
export const dietAdditionalSchema = z.object(dietSchemaAdditionalState)


export const dietFormSchema = dietOnlySchema.merge(dietAdditionalSchema)

export type DietFormSchema = z.infer<typeof dietFormSchema>


export const dietFormDefaultValues: DietFormSchema = {
    name: "",
    summary: "",
    activelyFollowing: false,
    vegan: false,
    pescatarian: false,
    vegetarian: false,
    gf: "partial",
    fasting: "partial",
    cardioTraining: "partial",
    weightTraining: "partial",
    carb: 40,
    pro: 40,
    fat: 20,
    macrosMatter: true
}


const ratingField = z.number().min(0).max(10)


// SECTION: Add Health Report

type StringToNum = Pick<HealthReport, "sleepHours" | "weight" | "calorie_est" | "times_meals_more_than_gap_apart" | "estHoursInExcessFast">

type StringNumRecord = Record<keyof StringToNum, ZodOptional<ZodString>> & { created: z.ZodOptional<ZodUnion<[ZodDate, ZodString]>> }

export const healthReportFormFieldValues: Omit<{ [k in keyof HealthReport]: z.ZodType<HealthReport[k]> | z.ZodOptional<z.ZodType<HealthReport[k]>> }, "created" | "dietId" | keyof StringToNum> & StringNumRecord = {
    id: z.number().int().optional(),
    title: z.string().optional(),
    summary: z.string().optional(),
    sleepHours: z.string().optional(), // Need to convert back
    weight: z.string().optional(), // Need to convert back
    overall: ratingField,
    skin: ratingField,
    bloat: ratingField,
    weight_feeling: ratingField,
    fullness: ratingField,
    cardiacCapacity: ratingField,
    jawLine: ratingField,
    joints: ratingField,
    flexibility: ratingField,
    anxiety: ratingField,
    anxiety_desc: z.string().optional(),
    mood: ratingField,
    mood_desc: z.string().optional(),
    sexDrive: ratingField,
    intruisiveThoughts: ratingField,
    caffeineIntake: ratingField,
    glutenIntake: ratingField,
    hydration: ratingField,
    sugarIntake: ratingField,
    artificialSweetenerIntake: ratingField,
    artificalDyes: ratingField,
    sleepQuality: ratingField,
    twitching: ratingField,
    calorie_est: z.string().optional(),
    times_meals_more_than_gap_apart: z.string().optional(),// Times the gap between meals exceeded the diet specific fasting avoidance allowance.
    estHoursInExcessFast: z.string().optional(),
    created: z.union([z.date(), z.string()]).optional()
}

type x = z.ZodType<string>


export const healthReportFormFieldBackend: Omit<{ [k in keyof typeof healthReportFormFieldValues]: z.ZodType<HealthReport[k]> | z.ZodOptional<z.ZodType<HealthReport[k]>> }, "created"> = {
    ...healthReportFormFieldValues,
    id: z.number().optional(),
    title: z.string().optional(),
    summary: z.string().optional(),
    sleepHours: z.number().optional(),
    weight: z.number().optional(),
    overall: ratingField,
    skin: ratingField,
    bloat: ratingField,
    weight_feeling: ratingField,
    fullness: ratingField,
    cardiacCapacity: ratingField,
    jawLine: ratingField,
    joints: ratingField,
    flexibility: ratingField,
    anxiety: ratingField,
    anxiety_desc: z.string().optional(),
    mood: ratingField,
    mood_desc: z.string().optional(),
    sexDrive: ratingField,
    intruisiveThoughts: ratingField,
    caffeineIntake: ratingField,
    glutenIntake: ratingField,
    sugarIntake: ratingField,
    artificialSweetenerIntake: ratingField,
    artificalDyes: ratingField,
    sleepQuality: ratingField,
    hydration: ratingField,
    calorie_est: z.number().optional(),
    times_meals_more_than_gap_apart: z.number().optional(),// Times the gap between meals exceeded the diet specific fasting avoidance allowance.
    estHoursInExcessFast: z.number().optional()
}



const healthReportSchemaAdditionalState = {
}

// export const healthReportAdditionalSchema = z.object(healthReportSchemaAdditionalState)

export const healthReportOnlySchema = z.object(healthReportFormFieldValues)



// export const healthReportFormSchema = healthReportOnlySchema

export type HealthReportFormSchema = z.infer<typeof healthReportOnlySchema>

type RequiredExcept<T, K extends keyof T> = Required<Omit<T, K>> & { [l in K]: T[K] }
type TempHalfAssedType = Omit<HealthReportFormSchema, "created" | "dietId"> & {
    created?: Date | string
    dietId?: number | null
}


export const healthReportFormDefaultValues: TempHalfAssedType = {
    title: undefined,
    summary: undefined,
    overall: 5,
    skin: 5,
    bloat: 5,
    weight_feeling: 5,
    fullness: 5,
    weight: undefined,
    cardiacCapacity: 5,
    jawLine: 5,
    joints: 5,
    flexibility: 5,
    anxiety: 5,
    anxiety_desc: undefined,
    mood: 5,
    mood_desc: undefined,
    sexDrive: 5,
    intruisiveThoughts: 5,
    caffeineIntake: 5,
    glutenIntake: 5,
    sugarIntake: 5,
    artificialSweetenerIntake: 5,
    artificalDyes: 5,
    sleepQuality: 5,
    sleepHours: undefined,
    // hydration: 5,
    calorie_est: undefined,
    times_meals_more_than_gap_apart: undefined,// Times the gap between meals exceeded the diet specific fasting avoidance allowance.
    estHoursInExcessFast: undefined,
    created: undefined
}


export type HealthReportEditing = Awaited<ReturnType<typeof serverClient.health.reports.getReportForEditing>>


export type DietEditing = Awaited<ReturnType<typeof serverClient.health.diet.getDietForEditing>>
