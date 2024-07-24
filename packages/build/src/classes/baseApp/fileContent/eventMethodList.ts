import { EventMethodKey } from "../../../types";
import { UlldPlugin } from "../../plugin";

export const getEventMethodListContent = (plugins: UlldPlugin[], eventType: EventMethodKey): string => {
    let importString = plugins.map((f) => f.events?.getEventImport(eventType)).join("\n")
    let methodsString = plugins.map((f) => f.events?.getOutputMethod(eventType)).join(",\n")
    return `import { OutputMethods } from "@ulld/configschema/types";
${importString}

const ${eventType}MethodList: OutputMethods<any, "${eventType}">["${eventType}"][] = [
${methodsString}
]

export default ${eventType}MethodList
`
}
