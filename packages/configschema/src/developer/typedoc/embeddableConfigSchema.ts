import { z } from "zod";
import { embeddableConfigSchema } from "../componentSchema";

/**
 * EmbeddableConfigSchema
 * @interface
 */
export type EmbeddableConfigSchema = z.infer<typeof embeddableConfigSchema>
