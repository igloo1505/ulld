import { z } from "zod";
import { componentConfigSchema } from "../componentSchema";


/**
 * ComponentConfigSchema
 * @interface
 */
export type ComponentConfigSchema = z.input<typeof componentConfigSchema>
