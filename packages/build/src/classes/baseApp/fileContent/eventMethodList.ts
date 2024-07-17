import { EventMethodKey } from "../../../types";
import { UlldPlugin } from "../../plugin";

export const getEventMethodListContent = (plugins: UlldPlugin[], eventType: EventMethodKey) => {
    let importString = plugins.map((f) => f.events?.getEventImport(eventType)).join("\n")
    return `import { EventMethod } from "@ulld/configschema/types";
${importString}

const methodList: EventMethod<any, "${eventType}">[] = [
${plugins.map((f) => f.events?.getMethodAsString(eventType)).join(",\n")}
]

export default methodList`
}
