

/**
 * Several components extend the WithTooltipWrapper interface to support adding a tooltip around specific content.
 * @example
 * ```tsx
 * See? <Ul yellow tooltip="The underline component">underline</Ul>, <Color orange tooltip="color component,">color</Color> and <Hl green tt="and highlight component all support WithTooltipWrapper properties.">highlight</Hl>
 * ```
 * See? <Ul yellow tooltip="The underline component">underline</Ul>, <Color orange tooltip="color component,">color</Color> and <Hl green tt="and highlight component all support WithTooltipWrapper properties.">highlight</Hl>
 * @alpha
 * @interface
 */
export interface WithTooltipWrapper {
    toolTip?: string;
    tooltip?: string;
    tt?: string;
    toolTipAsLink?: boolean;
    ttAslink?: boolean;
}
