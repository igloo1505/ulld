
/**
 * The Underline component is available either as **Underline** or **Ul**. Along with several other components, the underline component takes a color as a boolean property. You can both define new colors and override default colors in your configuration file.
 * @example
 * ```mdx
 * This is some <Ul>underlined</Ul> <Ul red>red</Ul>, <Ul blue>blue</Ul>, and <Ul green>green</Ul> text.
 * ```
 * This is some <Ul>underlined</Ul> <Ul red>red</Ul>, <Ul blue>blue</Ul>, and <Ul green>green</Ul> text.
 * <ExtendsMap extends={["colorProps", "tooltipProps"]} />
 * @alpha
 * @interface
 */
export type UnderlineProps = {
    /** Make underline thinner */
    thin?: boolean;
    /** Make underline thicker */
    thick?: boolean;
} 
