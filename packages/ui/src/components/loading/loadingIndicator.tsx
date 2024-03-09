"use client"
import clsx from 'clsx';
import React from 'react'
import { RingLoader } from 'react-spinners'


interface LoadingIndicatorProps {
    loading: boolean
    text?: string
}

export const LoadingIndicatorScreen = (props: LoadingIndicatorProps) => {
    return (
        <div className={clsx('w-screen h-screen top-0 left-0 fixed flex flex-col gap-4 justify-center items-center z-[99999] overflow-hidden transition-all duration-300', props.loading ? "scale-1" : "scale-0")}>
            {props.text && <div className={'text-4xl'}>{props.text}</div>}
            <LoadingIndicator />
        </div>
    )
}


export const LoadingIndicator = ({ loading = true }: { loading?: boolean }) => {
    return (
        <RingLoader
            color="hsl(var(--primary))"
            loading={loading}
        />
    )
}


LoadingIndicator.displayName = "LoadingIndicator"


export default LoadingIndicator;

