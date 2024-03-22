import type {appRouter} from "./main"

export type AppRouterType = typeof appRouter

export interface AutoSettingWithRegex {
    id?: number
    glob: RegExp
    globString: string
    type: autoSetting,
    value: string
}
