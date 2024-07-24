import { EventMethods } from "@ulld/configschema/types";
import { JsonSerializedBackupData } from "../dataType";


const onBackup: EventMethods<JsonSerializedBackupData>["onBackup"] = async (appConfig, buildData, prisma) => {
    let equations = await prisma.equation.findMany({
        include: {
            relatedValues: true,
            tags: true
        }
    })
    return {
        data: equations.map((eq) => ({
            id: eq.id,
            title: eq.title,
            desc: eq.desc,
            content: eq.content,
            asPython: eq.asPython,
            relatedValues: eq.relatedValues.map((r) => ({
                id: r.id,
                input: r.input,
                output: r.output,
            })),
            variableLegend: eq.variableLegend,
            variables: eq.variables,
            keywords: eq.keywords,
            tags: eq.tags.map((t) => t.value)
        }))
    }
}


export default onBackup
