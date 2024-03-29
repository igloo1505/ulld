import { z } from "zod";


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

