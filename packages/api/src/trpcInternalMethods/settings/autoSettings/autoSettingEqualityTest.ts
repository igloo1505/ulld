import { AutoSettingType } from "#/trpc/routers/sync"

const autoSettingIsSame = (a: AutoSettingType, b: AutoSettingType) => {
    return a.type === b.type && a.glob === b.glob && a.value === b.value
}
