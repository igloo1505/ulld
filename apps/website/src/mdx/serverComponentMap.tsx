import { webComponentMap } from "./componentMap";
import {TypeTable} from "#/components/docs/typeTable"

export const serverComponentMap = [
... webComponentMap,
    {
        regex: new RegExp("<TypeDoc"),
        component: TypeTable,
        label: "TypeDoc",
    },
]
