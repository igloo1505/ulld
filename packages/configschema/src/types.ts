import {z} from 'zod'
import { DocumentTypeConfig, secondaryConfigParse } from './zod'

export interface WithFs extends Omit<DocumentTypeConfig, "fs"> {
    fs: string
}

export type ParsedAppConfig = z.output<typeof secondaryConfigParse>
