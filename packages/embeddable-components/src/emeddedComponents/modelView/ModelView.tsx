"use client";
import React, {
    CSSProperties,
    HTMLProps,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState,
} from "react";
/// deep import from model-view package causing a *ton* of typescript errors without any noticeable issues.
import "@google/model-viewer/dist/model-viewer.js";
import { ModelViewerElement } from "@google/model-viewer";
import clsx from "clsx";
import { Progress } from "@ulld/tailwind/progress";
import { Button } from "@ulld/tailwind/button";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
import { ModelViewProps } from "./props";
import { getAssumedDimensions } from "@ulld/utilities/getAssumedDimensions";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Admittedly a lazy way to handle this. I'll come back and clean this up along with the 32 other typescript errors.
            ["model-viewer"]: any;
        }
    }
}

type MP = ModelViewProps & HTMLProps<HTMLDivElement>;

export const ModelView = ({
    file,
    className,
    url,
    width = 600,
    height = 450,
    rotate,
    minHeight,
    ...props
}: MP) => {
    if ("class" in props && props.class) {
        // To avoid breaking previous notes. For some inexplicable reason I had the className prop set to class.
        className = props.class as string;
    }
    const viewer = useRef<HTMLElement>(null!);
    /* const progressBar = useRef<HTMLDivElement>(null!); */
    /* const id = useId(); */
    /* const [progress, setProgress] = useState(0); */

    let params = useMemo(() => {
        if (!file) return;
        const config = getInternalConfig();
        let p = new URLSearchParams();
        p.set("file", file);
        p.set("fsRoot", config.fsRoot);
        return p;
    }, [file]);

    /* const onProgress = (event: CustomEvent<ModelViewerElement> & { */
    /*     detail: { */
    /*         totalProgress: number */
    /*     } */
    /* }) => { */
    /*     setProgress(event.detail.totalProgress * 100); */
    /*     if (event.detail.totalProgress === 1) { */
    /*         progressBar.current.remove(); */
    /*         /* event.target?.removeEventListener("progress", onProgress as any); */
    /*     } */
    /* }; */

    const dimensions = useMemo(
        () =>
            getAssumedDimensions({
                /* width, */
                height,
                maxViewportWidth: 30,
                maxViewportHeight: 30,
                maxSource: "window",
            }),
        [width, height],
    );

    const domProps = {
        ...(rotate && { "auto-rotate": "" }),
    };

    return (
        <div className={"w-full flex flex-col justify-center items-center"}>
            <div
                className={"w-full flex flex-col justify-center items-center gap-4"}
                style={dimensions}
            >
                <model-viewer
                    ref={viewer}
                    style={dimensions}
                    {...domProps}
                    className={clsx(
                        "w-[600px] h-[300px] max-w-full max-h-full relative",
                        className && className,
                    )}
                    src={
                        url
                            ? url
                            : `/api/media/models?${(params as URLSearchParams).toString()}`
                    }
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    camera-controls
                    shadow-intensity="1"
                >
                    <Button
                        slot="ar-button"
                        id="ar-button"
                        className={"absolute left-[50%] translate-x-[-50%] bottom-4"}
                    >
                        View in your space
                    </Button>
                </model-viewer>
            </div>
        </div>
    );
};

ModelView.displayName = "ModelView";
