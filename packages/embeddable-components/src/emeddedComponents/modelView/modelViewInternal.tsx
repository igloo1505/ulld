"use client";
import React, {
    HTMLProps,
    useMemo,
    useRef,
} from "react";
/// deep import from model-view package causing a *ton* of typescript errors without any noticeable issues.
import "@google/model-viewer/dist/model-viewer.js";
/* import { ModelViewerElement } from "@google/model-viewer"; */
import clsx from "clsx";
import { Button } from "@ulld/tailwind/button";
import { ModelViewProps } from "./props";
import { getAssumedDimensions } from "@ulld/utilities/getAssumedDimensions";
import { useAppConfig } from "@ulld/hooks/useAppConfig";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Admittedly a lazy way to handle this. I'll come back and clean this up along with the 32 other typescript errors.
            ["model-viewer"]: any;
        }
    }
}

export type MP = ModelViewProps & HTMLProps<HTMLDivElement>;

export const ModelViewInternal = ({
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
    const [appConfig] = useAppConfig()

    let params = useMemo(() => {
        if (!file || !appConfig) return;
        let p = new URLSearchParams();
        p.set("file", file);
        p.set("fsRoot", appConfig.fsRoot);
        return p;
    }, [file, appConfig]);

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
    
    let paramString = params ? params.toString() : ""

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
                            : `/api/media/models?${paramString}`
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

ModelViewInternal.displayName = "ModelView";
