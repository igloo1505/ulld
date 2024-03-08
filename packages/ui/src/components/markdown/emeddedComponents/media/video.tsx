import { withRootUrl } from '#/utils/navigation/getRootUrl'
import React from 'react'


type VideoProps = ({
    file: string
    url?: undefined
    id?: string
}) | ({
    url: string
    file?: undefined
    id?: string
})

const getVideoUrl = (filePath: string) => {
    const params = new URLSearchParams()
    params.set("file", filePath)
    return withRootUrl(`/api/media/video/get?${params.toString()}`)
}


/* TODO: Implement a remote component for sources like youtube using the react-player package. A standard video element is likely the best approach for file-system videos */
/* TODO: Implement that react-player or use the video.js package to allow for pip, especially for note taking. */
const Video = ({ file, url, id }: VideoProps) => {
    if (!file || url) return null
    let videoUrl = getVideoUrl(file)
    const props: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> = {
        muted: false,
        controls: true,
        ...(id && { id: `video-${id}` })
    }

    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center my-3"}>
            <video width="650"  {...props}>
                <source src={videoUrl} type="video/mp4" />
            </video>
        </div>
    )
}

Video.displayName = "Video"


export default Video;
