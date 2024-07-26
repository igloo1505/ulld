import path from 'path'
import { getTypesExportString } from '../../utils'


const outputFile = path.join(__dirname, "../../../packages/api/src/types.ts")

let typeDirRoot = path.join(__dirname, "../../../packages/api/src/trpcTypes")

getTypesExportString(typeDirRoot, outputFile, "**", true)

