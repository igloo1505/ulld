import { autoSettingEquality } from "./autoSettingEqualityTest"
import { getDbAutoSettings } from "./getDbAutosetting"
import globToRegExp from "glob-to-regexp"
import { AppConfigSchemaOutput } from "@ulld/configschema/types"
import { AutoSettingType } from "@ulld/utilities/types";
import { AutoSettingWithRegex } from "../../../trpc/types";
import type { PrismaClient, autoSetting } from "@ulld/types"


export const getConfigAutoSettings = (config: AppConfigSchemaOutput) => {
    let d: { glob: string, value: string, type: autoSetting, id?: number }[] = []
    if (config.autoTag) {
        d = d.concat(config.autoTag.map((t) => ({
            glob: t.path,
            value: t.tag,
            type: "tag",
            id: undefined
        })))
    }

    if (config.autoSubject) {
        d = d.concat(config.autoSubject.map((t) => ({
            glob: t.path,
            value: t.subject,
            type: "subject",
            id: undefined
        })))
    }
    if (config.autoTopic) {
        d = d.concat(config.autoTopic.map((t) => ({
            glob: t.path,
            value: t.topic,
            type: "topic",
            id: undefined
        })))
    }
    return d
}

export const getAutoSettingsWithRegex = async (prisma: PrismaClient, appConfig: AppConfigSchemaOutput, type?: autoSetting): Promise<AutoSettingWithRegex[]> => {
    let c = getConfigAutoSettings(appConfig)
    const pushIfNotIncluded = (a: AutoSettingType) => {
        if (!c.some((l) => autoSettingEquality(l, a))) {
            c.push(a)
        }
    }

    let db = await getDbAutoSettings(prisma, type)

    db.forEach((k) => pushIfNotIncluded(k))

    let data = c.map((s) => ({
        ...s,
        globString: s.glob,
        glob: globToRegExp(s.glob, { extended: true, globstar: true })
    }))

    return type ? data.filter((s) => s.type === type) : data
}
