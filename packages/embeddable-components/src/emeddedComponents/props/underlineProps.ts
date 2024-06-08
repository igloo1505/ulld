
/**
 * The Underline component is available either as **Underline** or **UL**. Along with several other components, the underline component takes a color as a boolean property. You can both define new colors and override default colors in your configuration file.
 * @example
 * ```tsx
 * This is some <Ul>underlined</Ul> <Ul red>red</Ul>, <Ul blue>blue</Ul>, and <Ul green>green</Ul> text.
 * ```
 * This is some <Ul>underlined</Ul> <Ul red>red</Ul>, <Ul blue>blue</Ul>, and <Ul green>green</Ul> text.
 * @alpha
 * @interface
 */
export type UnderlineProps = {
    /** Make underline thinner */
    thin?: boolean;
    /** Make underline thicker */
    thick?: boolean;
} 
