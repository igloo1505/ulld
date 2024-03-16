"use client"
import React, { useId, useMemo, useRef } from 'react'
/// deep import from model-view package causing a *ton* of typescript errors without any noticeable issues.
import '@google/model-viewer/dist/model-viewer.js'
import { ModelViewerElement } from '@google/model-viewer';
import clsx from 'clsx';
import { Progress, Button } from '@ulld/tailwind/base';
import { getInternalConfig } from '@ulld/configschema';


declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Admittedly a lazy way to handle this. I'll come back and clean this up along with the 32 other typescript errors.
            ['model-viewer']: any
        }
    }
}


interface ModelViewProps extends JSX.IntrinsicAttributes {
    file: string
    class?: string
}



export const ModelView = ({ file, class: className, ...props }: ModelViewProps) => {
    const value = useRef<number>(0)
    const id = useId()
    let params = useMemo(() => {
        const config = getInternalConfig()
        let p = new URLSearchParams()
        p.set("file", file)
        p.set("fsRoot", config.fsRoot)
        return p
    }, [file])


    const onProgress = (event: CustomEvent<ModelViewerElement> & {
        detail: {
            totalProgress: number
        }
    }) => {
        value.current = event.detail.totalProgress * 100
        let em = document.getElementById(`model-progress-${id}`)
        if (!em) return
        if (event.detail.totalProgress === 1) {
            em.style.display = "none"
            event.target?.removeEventListener('progress', onProgress as any);
        } else {
            em.classList.remove('hide')
        }
    }


    return (
        <div className={"w-full h-fit  flex flex-col justify-center items-center gap-4"}>
            {params && <model-viewer onprogress={onProgress as any} className={clsx("w-[600px] h-[300px] max-w-full max-h-full relative", className && className)} src={`/api/media/models?${params.toString()}`} ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1">
                <Progress id={`model-progress-${id}`} className={"progress-bar absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full"} value={value.current} />
                <Button slot="ar-button" id="ar-button" className={"absolute left-[50%] translate-x-[-50%] bottom-4"}>
                    View in your space
                </Button>
            </model-viewer>}
        </div>
    )
}


ModelView.displayName = "ModelView"
