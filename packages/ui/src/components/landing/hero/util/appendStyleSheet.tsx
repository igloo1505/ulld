"use client"
import { useEffect, useId } from 'react'
import {appendStyleSheet} from "@ulld/state/actions/clientOnly/appendStyleSheet"


interface AppendStyleSheetProps {
    content: string | undefined | null
    stylesId?: string
}

const AppendStyleSheet = ({ content, stylesId }: AppendStyleSheetProps) => {
    const id = useId()

    useEffect(() => {
        if (!content) return
        appendStyleSheet(content, stylesId || id)
    }, [content, stylesId, id])

    return null
}


AppendStyleSheet.displayName = "AppendStyleSheet"


export default AppendStyleSheet;
