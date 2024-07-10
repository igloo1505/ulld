import { z } from "zod";
import { buildStaticDataSchema } from "./main";

export type BuildStaticDataOutput = z.output<typeof buildStaticDataSchema>

export type NavigationLink = BuildStaticDataOutput["navigationLinks"][number]
