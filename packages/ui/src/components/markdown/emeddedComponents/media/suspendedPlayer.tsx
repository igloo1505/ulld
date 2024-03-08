"use client"
import React, { Suspense, forwardRef, useRef } from 'react'
import ReactPlayer from 'react-player'


interface SuspendedReactPlayerProps {

}

const SuspendedReactPlayer = forwardRef(({ _url, ...playerState }: any) => {

    const ref = useRef<ReactPlayer>(null!)
    const handlePlay = (props?: any) => {
        console.log(props)
    }
    const handleEnablePIP = (props?: any) => {
        console.log(props)
    }
    const handleDisablePIP = (props?: any) => {
        console.log(props)
    }
    const handlePause = (props?: any) => {
        console.log(props)
    }

    const handleOnPlaybackRateChange = (props?: any) => {
        console.log(props)
    }
    const handleEnded = (props?: any) => {
        console.log(props)
    }

    const handleProgress = (props?: any) => {
        console.log(props)
    }

    const handleDuration = (props?: any) => {
        console.log(props)
    }

    const handleSeek = (seconds: any) => {
        console.log("seconds: ", seconds)
        /* ref?.seekTo(seconds, "seconds") */
    }

    /* const onReady = () => { */
    /*     setIsReady(true) */
    /* } */

    const onStart = () => {

    }

    const onBuffer = () => {

    }

    const handleError = (error: any) => {
        console.log("error: ", error)
    }
    return (
        <Suspense>
            <ReactPlayer
                ref={ref}
                url={_url}
                onSeek={handleSeek}
                onStart={onStart}
                onPlay={handlePlay}
                onEnablePIP={handleEnablePIP}
                onDisablePIP={handleDisablePIP}
                onPause={handlePause}
                onBuffer={onBuffer}
                onPlaybackRateChange={handleOnPlaybackRateChange}
                onEnded={handleEnded}
                onError={handleError}
                onProgress={handleProgress}
                onDuration={handleDuration}
                {...playerState}
            />
        </Suspense>
    )
})


SuspendedReactPlayer.displayName = "SuspendedReactPlayer"


export default SuspendedReactPlayer;
