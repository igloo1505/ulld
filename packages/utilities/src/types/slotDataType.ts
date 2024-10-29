import propsExtends from "../utils/buildStaticData.json"

export const slotTypes = [
    "page",
    "component",
    "modalPage",
    "embeddable",
    "generatedPage",
] as const;

export interface SlotDataType {
    path: string;
    clientOnly?: boolean;
    inReduxProvider?: boolean;
    type?: (typeof slotTypes)[number];
    propsExtends?: keyof (typeof propsExtends)["propsExtendsMap"];
}
