import { HealthReport } from '@ulld/database'
import { z } from 'zod'
import { serverClient } from '../../../trpc'

export interface DateInput {
    month: number
    day: number
    year: number
}

export const healthDashboardSchema = z.object({
    start: z.string().optional(),
    end: z.string().optional(),
})

export const DateInputSchema = z.object({
    month: z.number().int().min(1).max(12),
    year: z.number().int(),
    day: z.number().int().min(1).max(31)
})

export const healthDashboardFormSchema = z.object({
    start: DateInputSchema,
    end: DateInputSchema,
})


export type HealthDashboardSearchForm = z.infer<typeof healthDashboardFormSchema>
export type HealthDashboardSearchParams = z.infer<typeof healthDashboardSchema>


export type HealthDashboardReportData = Awaited<ReturnType<typeof serverClient.health.reports.getDashboardData>>


export const healthReportFieldNameDisplayMap: { [k in keyof HealthReport]: string } = {
    id: "id",
    title: "Title",
    summary: "Summary",
    overall: "Overall",
    skin: "Skin",
    bloat: "Bloat",
    weight_feeling: "Weight (feeling)",
    fullness: "Fullness",
    weight: "Weight",
    cardiacCapacity: "Cardiac Capacity",
    jawLine: "Jaw Line",
    joints: "Joints",
    flexibility: "Flexibility",
    anxiety: "Anxiety",
    anxiety_desc: "Anxiety (notes)",
    mood: "Mood",
    mood_desc: "Mood (notes)",
    sexDrive: "Libido",
    intruisiveThoughts: "Intruisive Thoughts",
    caffeineIntake: "Caffeine Intake",
    glutenIntake: "Gluten Intake",
    sugarIntake: "Sugar Intake",
    artificialSweetenerIntake: "Artificial Sweetener Intake",
    artificalDyes: "Artificial Dye Intake",
    sleepQuality: "Sleep Quality",
    hydration: "Hydration",
    sleepHours: "Hours of Sleep",
    calorie_est: "Estimated Calories",
    times_meals_more_than_gap_apart: "Times meals exceeded target gap",
    estHoursInExcessFast: "Hours in excess fast",
    twitching: "Muscle Twitching",
    dietId: "dietId",
    created: "Created on",
}

export const healthReportRatingFieldKeys: (keyof HealthReport)[] = [
    "overall",
    "skin",
    "bloat",
    "weight_feeling",
    "fullness",
    "cardiacCapacity",
    "jawLine",
    "joints",
    "flexibility",
    "anxiety",
    "mood",
    "sexDrive",
    "intruisiveThoughts",
    "caffeineIntake",
    "glutenIntake",
    "sugarIntake",
    "artificialSweetenerIntake",
    "artificalDyes",
    "sleepQuality",
    "hydration",
    "twitching"
]

export const getHealthReportFieldHintMap = () => {
    let data: { [k: string]: keyof HealthReport } = {}
    healthReportRatingFieldKeys.forEach((k) => {
        data[healthReportFieldNameDisplayMap[k as keyof typeof healthReportFieldNameDisplayMap]] = k
    })
    return data
}


export const healthReportRatingFieldHints: Partial<{ [k in keyof HealthReport]: string }> = {
    overall: "Overall sense of wellbeing.",
    skin: "Overall skin health.",
    bloat: "Bloating, water retention and overall weight gain.",
    weight_feeling: "Without looking at a scale, does your weight feel appropriate?",
    fullness: "Sense of 'fullness' as if you've just carbed up.",
    cardiacCapacity: "Ability to breath properly given your current athletic condition.",
    jawLine: "Has that feeling returned with regards to that tight, muscle tone change you've been chasing?",
    joints: "Joint aches, pains, and stiffness.",
    flexibility: "Tightness in muscles, like the lead up to a back spasm.",
    anxiety: "Racing thoughts, inability to sit still.",
    mood: "Overall mood?",
    sexDrive: "Current sex drive.",
    intruisiveThoughts: "Thoughts that are inappropriate for the situation being bothersome.",
    twitching: "Muscle twitching, involuntary movements and tourette's like symptoms.",
    caffeineIntake: "How has your caffeine intake been?",
    glutenIntake: "How has your gluten intake been?",
    sugarIntake: "How has your sugar intake been?",
    artificialSweetenerIntake: "How has your artificial sweetener intake been?",
    artificalDyes: "How has your artificial dye intake been?",
    hydration: "How hydrated are you today?",
    sleepQuality: "How has the quality of your sleep been?",
}
