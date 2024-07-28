import { FileData } from '@ulld/utilities/fileClass'
import path from 'path'


const outputPath = path.join(__dirname, "./runWhenBackOnline.zsh")

console.log(`Clearing 'runWhenBackOnline' file at ${outputPath}`)

let f = new FileData(outputPath, false)

f.writeContent("")

process.exit()
