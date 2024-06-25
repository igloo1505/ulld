import { z } from "zod";
import { developerConfigSchema } from "./main";


/**
 * DeveloperConfigInput
 * @interface
 */
export type DeveloperConfigInput = z.input<typeof developerConfigSchema>;
