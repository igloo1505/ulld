import { z } from 'zod'
import { tableUIConfigSchema } from './tableConfig'
import { textConfigSchema } from './textConfig'
import { mediaConfigSchema } from './mediaConfig'
import { colorsConfigSchema } from './colorsConfig'


export const mainUIConfigSchema = z.object({
    table: tableUIConfigSchema,
    text: textConfigSchema,
    media: mediaConfigSchema,
    colors: colorsConfigSchema.optional()
}).default({})
