import React from 'react'



interface MdxLivePreviewPanelProps {
    content: string
    debounceTimeout?: number // 300ms by default
}

export const MdxLivePreviewPanel = ({content, debounceTimeout}: MdxLivePreviewPanelProps) => {
return (
    <div>{content}</div>
)
}


MdxLivePreviewPanel.displayName = "MdxLivePreviewPanel"
