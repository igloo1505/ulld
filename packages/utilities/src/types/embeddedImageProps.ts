import { ReactNode } from "react"



/**
 * The Image component extends the html img element with a bunch of style utilities and the ability to more easily utilize images on your local file system without needing to copy or move them.
 * @example
 * ```tsx
 * <Image
 * url="/assets/images/demos/definitelyMe.jpg"
 * lg
 * center
 * desc="Me in the selfie I took for my dating profile."
 * />
 * ```
 * <Image
 * url="/assets/images/demos/definitelyMe.jpg"
 * lg
 * center
 * desc="Me in the selfie I took for my dating profile."
 * />
 * @alpha
 * @interface
 */
export interface EmbeddedImageProps  {
    /** A [root relative path](/docs/terminology?id=rootRelativePath) to an image file. */
    file?: string
    /** A url to a remote image. */
    url?: string
    /** An alias for url */
    src?: string
    /** The name of a file described in your config. This adds support for easily accessing sets of images, but is currently in beta. */
    image?: string
    /** Float image to the left, and wrap other content around it. */
    left?: boolean
    /** Center align the image, and do not wrap content around it. */
    center?: boolean
    /** Float image to the right, and wrap other content around it. */
    right?: boolean
    /** Setting for inline, small images. */
    inline?: boolean
    /** CSS compliant width or "full" as an alias for `full` and `fullWidth` */
    width?: number | "full" | string
    /** CSS compliant height */
    height?: number | string
    /** Display image block style, making the entire width of the note reserved for the image, regardless of the image's width. */
    block?: boolean
    /** Make image full width of note, within certain automatic viewport related size constraints. */
    full?: boolean
    /** Alias for full. */
    fullWidth?: boolean
    /** Size convenience property */
    md?: boolean
    /** Size convenience property */
    sm?: boolean
    /** Size convenience property */
    lg?: boolean
    /** Size convenience property */
    xl?: boolean
    /** Size convenience property */
    small?: boolean
    /** Size convenience property */
    medium?: boolean
    /** Size convenience property */
    large?: boolean
    /** Add a minimalist border around image */
    border?: boolean
    /** Alias for border */
    bordered?: boolean
    /** Round image into a circle without distorting it's content. */
    circle?: boolean
    /** An optional description displayed below the image */
    desc?: ReactNode
    /** Align description to the left */
    descLeft?: boolean
    /** Align description to the right */
    descRight?: boolean
    /** Do not include image in figure referencing indices. */
    notFigure?: boolean
    /** Unique id of image. Optional, but required for figure referencing using the **FigRef** component. */
    id?: string
    /** Apply a default description showing the index of the figure to add a visual reference for pairing with the **FigRef** component. */
    label?: boolean
}
