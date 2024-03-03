import { zodTertiaryToggleSchema } from "@ulld/utilities"
import { z, ZodRawShape } from "zod"

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


