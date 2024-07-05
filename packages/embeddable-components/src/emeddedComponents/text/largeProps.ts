

/**
 * A utility component to create a piece of large text.
 * ```tsx
 * <Large center>This large, centered text.</Large>
 * ```
 * <Large center>This large, centered text.</Large>
 * @alpha
 * @interface
 */
export interface LargeProps {
    /** The text to make small. */
    children: string
    /** Make the text centered.
     * @default false */
    center?: boolean
    /** Make the text take on a muted appearance.
     * @default false */
    muted?: boolean
    /** Remove the default margin around the content.
     * @default false */
    noMargin?: boolean
}
