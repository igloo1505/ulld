import { currentParsableExtensions, internalDocTypes } from '@ulld/config'
import { makeValidId } from '@ulld/utilities'
import { z } from 'zod'


export const zodFileExtensionInput = currentParsableExtensions

export type ParsableExtension = z.input<typeof zodFileExtensionInput>


// BUG: For now ULLD is not validating docTypes as anything more than strings, but will re-work this method later to validate that those strings are actually contained in the config.noteTypes array.
// export const zodDocTypeInput = z.custom<string>((val) => {
//     let v = makeValidId(val as string)
//     return Boolean(appConfig.noteTypes.find((f: { docType: string }) => makeValidId(f.docType) === v))
// }).transform(makeValidId).brand("DocTypeName")

export const zodDocTypeInput = z.string().transform(makeValidId).brand("DocTypeName")



export type DocTypes = z.output<typeof zodDocTypeInput> | z.output<typeof internalDocTypes>


export const topicZodObject = z.object({
    name: z.string()
})
export const subjectZodObject = z.object({
    value: z.string()
})
export const tagZodObject = z.object({
    value: z.string()
})

