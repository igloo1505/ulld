import { LogoAsText } from "#/components/general/logoAsText";
import { AdditionalComponentType, AdditionalComponents } from "@ulld/component-map/types";
import { AnimatedUlldLogo } from "@ulld/icons/ulld-animated";


export const webComponentMap: AdditionalComponents<any> = [
    {regex: new RegExp("<LogoAsText"), component: LogoAsText, label: "LogoAsText"},
    {regex: new RegExp("<AnimatedLogo"), component: AnimatedUlldLogo, label: "AnimatedLogo"},
]
