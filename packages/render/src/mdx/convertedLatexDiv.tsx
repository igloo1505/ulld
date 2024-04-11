"use client"
import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'



interface LatexStringProps {
    string?: string | null
    className?: string
    inline?: boolean
}


/* TODO: Improve this significantly. Not sure if this even works anymore. */
const LatexString = ({ string, inline, className }: LatexStringProps) => {
    const [content, setContent] = useState(string && Boolean(string?.indexOf("$") === string?.lastIndexOf("$")) ? string : "")
    const handleParse = async () => {
        let res = await axios.post("/app/api/render/stringWithMathToHtml", { value: string, options: { inline: Boolean(inline !== false) } })
        setContent(res.data.html)
    }
    useEffect(() => {
        if (!string || string.indexOf("<svg") >= 0 || string.indexOf("$") === string.lastIndexOf("$")) return;
        handleParse()
    }, [string])

    if (!string) return null
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} className={clsx("flex flex-row flex-wrap gap-2", className && className)} />
    )
}


LatexString.displayName = "LatexString"


export default LatexString;
