import { PropColor } from "@ulld/utilities/shadColorMap";
import { HTMLProps } from "react";
import { PropColorInput } from "../../../../componentConfigs/src/subConfigs/colors";


/**
 * Several components extend the WithTooltipWrapper interface to support adding a tooltip around specific content.
 */
export interface WithTooltipWrapper {
    toolTip?: string;
    tooltip?: string;
    tt?: string;
    toolTipAsLink?: boolean;
    ttAslink?: boolean;
}


/**
 * The Underline component is available either as **Underline** or **UL**. Along with several other components, the underline component takes a color as a boolean property. You can both define new colors and override default colors in your configuration file.
 */
export type UnderlineProps = {
    /** Make underline thinner */
    thin?: boolean;
    /** Make underline thicker */
    thick?: boolean;
} & PropColorInput &
    WithTooltipWrapper &
    HTMLProps<HTMLSpanElement>;
