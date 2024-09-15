import { webComponentMap } from "./componentMap";
import { TypeTableEm } from "#/components/docs/typeTable";

export const serverComponentMap = [
    ...webComponentMap,
    {
        regex: new RegExp("<TypeDoc"),
        component: TypeTableEm,
        label: "TypeDoc",
    },
];
