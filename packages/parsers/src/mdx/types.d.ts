import {z} from 'zod'
import { serializeMdxConfigSchema } from './schemas'


export type SerializeMdxConfig = z.input<typeof serializeMdxConfigSchema>

