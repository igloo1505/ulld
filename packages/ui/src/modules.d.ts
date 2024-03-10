declare module 'tinykeys'
import { ModelViewerElement } from "@google/model-viewer/src/model-viewer";



declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Admittedly a lazy way to handle this. I'll come back and clean this up along with the 32 other typescript errors.
            ['model-viewer']: any
        }
    }
}


declare module "@google/model-viewer"
