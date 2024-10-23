import { z } from "zod";
import { postgresConfigSchema, postgresConfigSchemaOutput } from "./postgres.js";
import { ZodOutputSchema } from "../../../types.js";

export const ulldSupportedDatabases = [
    "postgres",
    "sqlite",
] as const

export const databaseBuildSchema = z
    .object({
        type: z
            .enum(ulldSupportedDatabases)
            .default("postgres"),
        postgres: postgresConfigSchema,
        prioritize: z
            .union([z.literal("speed"), z.literal("size")])
            .default("speed"),
    })
    .default({})
    .refine(
        (data) =>
            !Boolean(data.type === "postgres" && !data.postgres),
        {
            message:
                "If you set the database type to 'Postgres', you must also provide a postgres configuration with either a port number and a database name, or a connection URI.",
        },
    );


export const databaseBuildSchemaOutput: ZodOutputSchema<typeof databaseBuildSchema> = z
    .object({
        type: z
            .enum(ulldSupportedDatabases),
        postgres: postgresConfigSchemaOutput,
        prioritize: z
            .union([z.literal("speed"), z.literal("size")])
    })
