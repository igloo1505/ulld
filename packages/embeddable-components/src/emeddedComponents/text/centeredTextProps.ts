
/**
 * A simple utility component to center components and text.
 * @example
 * ```tsx
 * <Center width={250}>This is some centered content. By setting a width, I can force the centered content to not extend beyond that width. By using the `muted` property, I can make the text take on a muted appearance, and by setting the `noMargin` property to be true, I can remove the default margin.</Center>
 * ```
 * <Center width={250}>This is some centered content. By setting a width, I can force the centered content to not extend beyond that width. By using the `muted` property, I can make the text take on a muted appearance, and by setting the `noMargin` property to be true, I can remove the default margin.</Center>
 * @alpha
 * @interface
 */
export interface CenteredTextProps  {
    width?: number | string
    children?: React.ReactNode
    muted?: boolean
    noMargin?: boolean
}
