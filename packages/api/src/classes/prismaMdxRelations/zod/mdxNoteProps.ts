import { z } from "zod";
import { zodDocTypeInput } from "@ulld/configschema/zod/documentConfigSchema";


const taggableZod = z.union([z.string(), z.object({ value: z.string() })]);

const taggableTranform = (input: z.input<typeof taggableZod>[]) => {
    return input.map((l) => {
        if (typeof l === "string") {
            return {
                value: l,
            };
        } else {
            return l
        }
    });
};


export const definitionClassPropsSchema = z.object({

})

