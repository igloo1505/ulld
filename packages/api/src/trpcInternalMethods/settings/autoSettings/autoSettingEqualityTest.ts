import { AutoSettingType } from "../../../trpc"

export const autoSettingEquality = (a: AutoSettingType, b: AutoSettingType) => {
    return a.type === b.type && a.glob === b.glob && a.value === b.value
}
