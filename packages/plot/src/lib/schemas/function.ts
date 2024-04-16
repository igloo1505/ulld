import { AnyZodObject, ZodObject, z } from "zod";

export const f2d = z
    .function()
    .args(z.number().describe("x"))
    .returns(z.number().describe("y"));

export const functionObjectSchema = z.object({
    label: z.string().optional(),
    color: z.string().optional(),
    visible: z.boolean().default(true),
});

export const functionField3d = z
    .function()
    .args(z.number().describe("x"), z.number().describe("y"))
    .returns(z.number().describe("z"));

export const functionFieldTransform = <T extends unknown, J extends unknown>(
    a: T,
    parser: AnyZodObject,
) => {
    if (typeof a === "object") {
        return parser.parse(a) as J;
    }
    return parser.parse({
        f: a,
    }) as J;
};


const functionObject2dSchema = functionObjectSchema.extend({
    f: f2d,
});

export const functionField2d = z
    .union([f2d, functionObject2dSchema])
    .transform((data) => {
        return functionFieldTransform<
            typeof data,
            z.output<typeof functionObject2dSchema>
        >(data, functionObject2dSchema);
    });

