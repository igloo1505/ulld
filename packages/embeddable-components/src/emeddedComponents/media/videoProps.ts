

/**
 * A simple video player with support full-screen mode, picture-in-picture and [timestamp links](/docs/user/syntax#timestamplinks) directly in your note.
 * @example
 * ```tsx
 * <Video file="resources/videos/SusskindGeneralRelativity12.mp4" />
 * ```
 * <RemoteExampleLimitation />
 * @alpha
 * @interface
 */
export type VideoProps = ({
    /** The path to the video file. This can either be absolute, or relative to the root of your note directory. */
    file: string
    url?: undefined
    /** A valid DOM id used for time stamp links */
    id?: string
}) | ({
    /** A valid remote video url. */
    url: string
    file?: undefined
    /** A valid DOM id used for time stamp links */
    id?: string
})
