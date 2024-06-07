
/**
 * The ModelView component supports embedding gltf files directly in your note, with support for AR on some devices.
 * @example
 * ```tsx
 * <ModelView url="/assets/models/Ring.glb" width={300} />
 * ```
 * ### Output
 * <ModelView url="/assets/models/Ring.glb" width={300} />
 * @alpha
 * @interface
 */
export interface ModelViewProps {
    /** The [root-relative](/docs/user/syntax#rootrelativepaths) file path to a gltf or glb file.  */
    file?: string;
    /** A remote url returning a valid gltf or glb model. */
    url?: string
    /** An optional width of the model as an [**assumed dimension**](/docs/terminology?id=assumedDimension). */
    width?: number
    /** An optional width of the model as an [**assumed dimension**](/docs/terminology?id=assumedDimension). */
    height?: number
    /** Should model slowly rotate without user interaction. */
    rotate?: boolean
}
