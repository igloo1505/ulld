// import "server-only"
import { z } from "zod"
import fs from 'fs'
import latex from "node-latex"

export const latexStringToPdfPropSchema = z.object({
    body: z.string().optional(),
    fromPath: z.string().optional(),
    outputPath: z.string().optional(),
    saveFilePath: z.string().optional().describe("If omitted, the temporary directory will be used and the pdf will be erased afer it is returned.")
})


export const latexStringToPdf = async ({ body, fromPath, outputPath }: z.input<typeof latexStringToPdfPropSchema>) => {
    const input = body ? body : fromPath ? fs.createReadStream(fromPath) : null
    if (!input) return
    const outputData = outputPath ? fs.createWriteStream(outputPath) : undefined
    const pdf = latex(input)
    outputData && pdf.pipe(outputData)
    pdf.on('error', err => console.error(err))
    pdf.on('finish', () => console.log('PDF generated!'))
    return outputData
}
