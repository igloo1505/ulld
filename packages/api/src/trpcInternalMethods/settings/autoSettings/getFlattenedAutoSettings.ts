import { ParsedAppConfig } from "@ulld/configschema/types"
import { AutoSettingWithRegex } from "../../../trpc/types";
import { readAppConfigSync } from "@ulld/developer/readAppConfig";


export const getFlatAutoSettings = (autoSettings: AutoSettingWithRegex[], _config?: ParsedAppConfig) => {
    const internalConfig = _config || readAppConfigSync()
    let d: {
        autoTags: { glob: string, value: string }[]
        autoTopics: { glob: string, value: string }[]
        autoSubjects: { glob: string, value: string }[]
    } = {
        autoTags: internalConfig.autoTag?.map((t) => ({
            glob: t.path,
            value: t.tag
        })) || [],
        autoTopics: internalConfig.autoTopic?.map((t) => ({
            glob: t.path,
            value: t.topic
        })) || [],
        autoSubjects: internalConfig.autoSubject?.map((t) => ({
            glob: t.path,
            value: t.subject
        })) || [],
    }
    for (const k of autoSettings) {
        if (k.type === "subject") {
            d.autoSubjects.push({
                glob: k.globString,
                value: k.value
            })
        } else if (k.type === "topic") {
            d.autoTopics.push({
                glob: k.globString,
                value: k.value
            })
        } else if (k.type === "tag") {
            d.autoTags.push({
                glob: k.globString,
                value: k.value
            })
        }
    }
    return d
}
