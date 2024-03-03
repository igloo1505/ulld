import { prisma } from "#/db"
import fs from 'fs'
import path from 'path'


export const backupEquations = async () => {
    let equations = await prisma.equation.findMany({
        include: {
            relatedValues: true,
            tags: true
        }
    })
    let _json = {
        data: equations.map((eq) => ({
            title: eq.title,
            desc: eq.desc,
            content: eq.content,
            asPython: eq.asPython,
            relatedValues: eq.relatedValues.map((r) => ({
                input: r.input,
                output: r.output,
            })),
            variableLegend: eq.variableLegend,
            variables: eq.variables,
            keywords: eq.keywords,
            tags: eq.tags.map((t) => t.value)
        }))
    }
    await fs.promises.writeFile(path.join(process.cwd(), "backup/equations.json"), JSON.stringify(_json), { encoding: "utf-8" })
}
