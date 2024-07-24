import { UnifiedMdxParser } from "../../../types"

const formatVideoTimestampLink = (m: RegExpExecArray) => {
        const videoId = m.groups?.videoId
        const time = m.groups?.time
        if (!m || !videoId || !time) {
            return ""
        }
        const params = new URLSearchParams()
        params.set("vid", videoId)
        params.set("t", time)
        return `<VideoTimestampLink className="timestamp-link" role="button" videoId="${videoId}" timeStamp="${time}" >${m.groups?.label || m.groups?.time || ""}</VideoTimestampLink>`
    }

export const parseVideoTimeStampLinks: UnifiedMdxParser = async (data) => {
        let regex = /\[(?<label>[^\]]*)\]\(videoLink\/(?<videoId>[^\/]*)\/(?<time>[\d|:]*)\)/gm
        let c = data.content
        let m;
        do {
            m = regex.exec(c)
            if (m && m.groups?.label && m.groups?.videoId && m.groups?.time) {
                c = `${c.slice(0, m.index)}${formatVideoTimestampLink(m)}${c.slice(m.index + m[0].length, c.length)}`
            }
        } while (m);
        return {
            content: c,
        }
}
