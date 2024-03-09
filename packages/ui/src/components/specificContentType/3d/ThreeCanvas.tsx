import { CameraControls, Center, OrbitControls, PerspectiveCamera, Preload, Resize, View } from '@react-three/drei';
import { Canvas, CanvasProps, useThree } from '@react-three/fiber';
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import CommonThreejs from './commonElements';
import clsx from 'clsx';


interface ThreeJsCanvasProps extends CanvasProps {
    children: React.ReactNode
    orbitControls?: boolean
    cameraControls?: boolean
    color?: string
    className?: string
}

export const ThreeJsCanvas = forwardRef<HTMLElement, ThreeJsCanvasProps>(({ children, className, orbitControls, cameraControls, color, ...props }: ThreeJsCanvasProps, ref) => {
    const internal = useRef(null!)
    useImperativeHandle(ref, () => internal.current)

    return (
        <div className={clsx("w-full flex flex-col justify-center items-center my-2 h-[600px]", className && className)} ref={internal}>
            <Canvas resize={{
                debounce: 300
            }} {...props}>
                <CommonThreejs color={color} />
                <Resize>
                    <View track={internal}>
                        {children}
                        {orbitControls && <OrbitControls />}
                        {cameraControls && <CameraControls />}
                    </View>
                </Resize>
                <PerspectiveCamera makeDefault />
                <Preload all />
            </Canvas>
        </div>
    )
})


ThreeJsCanvas.displayName = "ThreeJsCanvas"

