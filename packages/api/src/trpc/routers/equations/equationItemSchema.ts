import {z} from 'zod'
import {autoWrapMathDisplayField} from "@ulld/utilities/autoWrapMathSchemas"
import {
    subjectZodObject,
    tagZodObject,
    topicZodObject,
} from "@ulld/configschema/configUtilityTypes/docTypes";
import { dateNullableZodProperty } from '@ulld/utilities/dates';
import { parseMdxString } from '@ulld/parsers';


const mdxTransform = async (s: string | undefined | null) => {
    if(!s) return s
    return await parseMdxString({
        content: s
    })
}



export const equationItemSchema = z.object({
id: z.number().int(),
    equationId: z.string().nullish(),
    title: z.string().transform(mdxTransform),
    desc: z.string().nullish().transform(mdxTransform),
    content: autoWrapMathDisplayField.transform(mdxTransform),
    asPython: z.string().nullish(),
    variables: z.string().array().default([]),
    tags: tagZodObject.array(),
    subjects: subjectZodObject.array(),
    topics: topicZodObject.array(),
    createdAt: dateNullableZodProperty
})
