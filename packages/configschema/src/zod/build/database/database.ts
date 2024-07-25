import { z } from "zod";
import { postgresConfigSchema } from "./postgres";

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
