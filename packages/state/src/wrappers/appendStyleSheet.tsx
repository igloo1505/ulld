"use client"
import { appendStyleSheet } from '@ulld/state/actions/clientOnly/appendStyleSheet'
import { useEffect, useId } from 'react'


interface AppendStyleSheetProps {
    content: string | undefined | null
    stylesId?: string
}

export const AppendStyleSheet = ({ content, stylesId }: AppendStyleSheetProps) => {
    const id = useId()

    useEffect(() => {
        if (!content) return
        appendStyleSheet(content, stylesId || id)
    }, [content, stylesId, id])

    return null
}


AppendStyleSheet.displayName = "AppendStyleSheet"
