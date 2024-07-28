import { TERTIARY_TOGGLE } from "@ulld/database"
import { z } from "zod"

export const zodTertiaryToggleSchema = z.nativeEnum(TERTIARY_TOGGLE)

export const zodRatingField = z.number().min(0).max(10)
