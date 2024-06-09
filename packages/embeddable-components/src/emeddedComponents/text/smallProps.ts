
/**
 * A utility component to create a piece of small, subdued text.
 * ```tsx
 * <Small center muted>This some small, centered and muted text.</Small>
 * ```
 * <Small center muted>This some small, centered and muted text.</Small>
 * @alpha
 * @interface
 */
export interface SmallProps {
    /** The text to make small. */
    children: string
    /** Make the text centered. */
    center?: boolean
    /** Make the text take on a muted appearance. */
    muted?: boolean
    /** Remove the default margin around the content. */
    noMargin?: boolean
}
