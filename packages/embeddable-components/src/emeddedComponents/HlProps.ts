import { ReactNode } from "react";


/**
 * Add a simple background highlight to some text with the Highlight component.
 * <Hint alias>Hl</Hint>
 * @example
 * ```mdx
 * This isn't as important as <Hl>this</Hl> is!
 * ```
 * This isn't as important as <Hl>this</Hl> is!
 * <ExtendsMap extends={["colorProps", "tooltipProps"]} />
 * @alpha
 * @interface
 */
export interface HighlightProps {
    /** The text to be highlighted. */
    children: ReactNode;
    /** Make the highlight semi-tranparent. */
    light?: boolean;
    /** An alias for light. */
    faint?: boolean;
    /** Make the text take on a muted appearance. */
    muted?: boolean;
}
