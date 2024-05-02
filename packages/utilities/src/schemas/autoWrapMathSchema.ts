import {z} from 'zod'
import { autoWrapMath } from '../utils/latexUtils'


export const autoWrapMathInlineField = z.string().transform((data: string) => autoWrapMath(data, false))

export const autoWrapMathDisplayField = z.string().transform((data: string) => autoWrapMath(data, true))

export const autoWrapMathInlineNullishField = z.string().transform((data: string | null | undefined) => data ? autoWrapMath(data, false) : data)

export const autoWrapMathDisplayNullishField = z.string().transform((data: string | null | undefined) => data ? autoWrapMath(data, true) : data)
