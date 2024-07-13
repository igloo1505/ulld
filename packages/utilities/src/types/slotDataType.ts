import propsExtends from "../utils/buildStaticData.json"

export const slotTypes = [
    "page",
    "component",
    "modalPage",
    "embeddable"
] as const


export interface SlotDataType {
    path: string
    clientOnly?: boolean
    inReduxProvider?: boolean
    type?: typeof slotTypes[number]
    propsExtends?: keyof typeof propsExtends["propsExtendsMap"]
}
