import { autoSetting } from "@ulld/database/internalDatabaseTypes"
import { autoSettingEquality } from "./autoSettingEqualityTest"
import { getDbAutoSettings } from "./getDbAutosetting"
import globToRegExp from "glob-to-regexp"
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { ParsedAppConfig } from "@ulld/configschema/types"
import { AutoSettingType } from "@ulld/utilities/types";
import { AutoSettingWithRegex } from "../../../trpc/types";
import { PrismaClient } from "@ulld/types"


export const getConfigAutoSettings = (_config?: ParsedAppConfig) => {
    const config = _config || getInternalConfig()
    let d: { glob: string, value: string, type: autoSetting, id?: number }[] = []
    if (!config) return d
    if (config.autoTag) {
        d = d.concat(config.autoTag.map((t) => ({
            glob: t.path,
            value: t.tag,
            type: autoSetting.tag,
            id: undefined
        })))
    }

    if (config.autoSubject) {
        d = d.concat(config.autoSubject.map((t) => ({
            glob: t.path,
            value: t.subject,
            type: autoSetting.subject,
            id: undefined
        })))
    }
    if (config.autoTopic) {
        d = d.concat(config.autoTopic.map((t) => ({
            glob: t.path,
            value: t.topic,
            type: autoSetting.topic,
            id: undefined
        })))
    }
    return d
}

export const getAutoSettingsWithRegex = async (prisma: PrismaClient, type?: autoSetting): Promise<AutoSettingWithRegex[]> => {
    let c = getConfigAutoSettings()
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
