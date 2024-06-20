import { z } from "zod";


// PRIORITY: Double check these file types. Can definitely add some to the imageExtensions, and might have to remove some from the faviconExtensions.
const validImageExtends = ["jpg", "jpeg", "svg", "png", "webp"];
const validFaviconExtensions = ["ico", "png", "jpg", "svg"];

export const additionalUserContent = z
    .object({
        css: z.string().optional(),
        favicon: z
            .string()
            .refine(
                (s) => {
                    let _s = s.split(".").at(-1);
                    if (!_s) return false;
                    return validFaviconExtensions.includes(_s);
                },
                {
                    message: `Your favicon must be of a valid favicon type. Currently supported extensions are:
${validFaviconExtensions.join("\n")}`,
                },
            )
            .optional(),
        logo: z
            .string()
            .refine(
                (s) => {
                    let _s = s.split(".").at(-1);
                    if (!_s) return false;
                    return validImageExtends.includes(_s);
                },
                {
                    message: `Your logo must be of a valid image type. Currently supported image extensions are:
${validImageExtends.join("\n")}`,
                },
            )
            .optional(),
    })
    .default({});
