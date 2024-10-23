import type { validIconNameList } from "../../types/enums/validIconName";
import type { InternalAppLocationIds } from "../../utils/generatedUtils";



export interface InternalAppLocation {
    id: InternalAppLocationIds
    label: string;
    url: string;
    desc?: string;
    keywords?: string[];
    /** ValidIconName enum. Need to generate that enum in the utilities package to make it available without causing a circular dependency issue. **/
    defaultIcon: typeof validIconNameList[number]
    isModalRoute?: boolean
}
