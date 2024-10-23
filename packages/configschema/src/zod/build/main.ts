import { z } from "zod";
import { databaseBuildSchema, databaseBuildSchemaOutput } from "./database/database.js";
import { additionalUserContent, additionalUserContentOutput } from "./additional/additionalUserContent.js";
import { ZodOutputSchema } from "../../types.js";

export const buildOnlySchema = z
    .object({
        database: databaseBuildSchema.default({}),
        additionalUserContent: additionalUserContent,
    })
    .default({});



export const buildOnlySchemaOutput: ZodOutputSchema<typeof buildOnlySchema> = z
    .object({
        database: databaseBuildSchemaOutput,
        additionalUserContent: additionalUserContentOutput,
    })
