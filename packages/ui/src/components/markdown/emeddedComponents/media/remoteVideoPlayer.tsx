"use client"
import React, { useRef, useState } from 'react'
import RealPlayerForReal from "react-player"
import LoadingIndicator from '#/components/ui/loadingIndicator'
import clsx from 'clsx'

/* const Video = ({ file, url }: VideoProps) => { */
/*     let _url = typeof url === "undefined" ? getParams(file) : url */
/*     const [isReady, setIsReady] = useState(false) */
/*     const [playerState, setPlayerState] = useState({ */
/*         /* width: '100%', */
/*         /* height: '100%', */
/*         pip: true, */
/*         playing: false, */
/*         controls: true, */
/*         light: true, */
/*         loop: false, */
/*         playbackRate: 1, */
/*         volume: 100, */
/*         muted: false, */
/*     }) */

/*     const player = useRef<RealPlayerForReal>(null!) */


/*     const handlePlay = (props?: any) => { */
/*         console.log(props) */
/*     } */
/*     const handleEnablePIP = (props?: any) => { */
/*         console.log(props) */
/*     } */
/*     const handleDisablePIP = (props?: any) => { */
/*         console.log(props) */
/*     } */
/*     const handlePause = (props?: any) => { */
/*         console.log(props) */
/*     } */

/*     const handleOnPlaybackRateChange = (props?: any) => { */
/*         console.log(props) */
/*     } */
/*     const handleEnded = (props?: any) => { */
/*         console.log(props) */
/*     } */

/*     const handleProgress = (props?: any) => { */
/*         console.log(props) */
/*     } */

/*     const handleDuration = (props?: any) => { */
/*         console.log(props) */
/*     } */

/*     const handleSeek = (seconds: any) => { */
/*         console.log("seconds: ", seconds) */
/*         player.current.seekTo(seconds, "seconds") */
/*     } */

/*     const onReady = () => { */
/*         setIsReady(true) */
/*     } */

/*     const onStart = () => { */

/*     } */

/*     const onBuffer = () => { */

/*     } */

/*     const handleError = (error: any) => { */
/*         console.log("error: ", error) */
/*     } */

/*     return ( */
/*         <div className={"w-full h-fit flex flex-col justify-center items-center"}> */
/*             <div className={"w-fit h-fit relative"}> */
/*                 <RealPlayerForReal */
/*                     ref={player} */
/*                     url={_url} */
/*                     onSeek={handleSeek} */
/*                     onReady={onReady} */
/*                     onStart={onStart} */
/*                     onPlay={handlePlay} */
/*                     onEnablePIP={handleEnablePIP} */
/*                     onDisablePIP={handleDisablePIP} */
/*                     onPause={handlePause} */
/*                     onBuffer={onBuffer} */
/*                     onPlaybackRateChange={handleOnPlaybackRateChange} */
/*                     onEnded={handleEnded} */
/*                     onError={handleError} */
/*                     onProgress={handleProgress} */
/*                     onDuration={handleDuration} */
/*                     {...playerState} */
/*                 /> */
/*             </div> */
/*         </div> */
/*     ) */
/* } */
