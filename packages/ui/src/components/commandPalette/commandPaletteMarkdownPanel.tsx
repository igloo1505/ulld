import React, { useRef } from 'react'
import CommandPalettePanelListeners from './commandPaletteMarkdownPanelListeners'
import { MDXSerializeReturnType } from '@ulld/parsers'
import MdxContentCLIENT from '../mdxContent/mdxContentCLIENT'



interface CommandPaletteMarkdownPanelProps {
    content: MDXSerializeReturnType
}


const CommandPaletteMarkdownPanel = ({ content }: CommandPaletteMarkdownPanelProps) => {
    const scrollParent = useRef<HTMLDivElement>(null!)
    const scrollChild = useRef<HTMLDivElement>(null!)

    return (
        <>
            <div
                className={"h-full w-full overflow-y-auto"}
                ref={scrollParent}
            >
                <div
                    className={"w-full max-w-full h-fit pr-2"}
                    ref={scrollChild}
                >
                    <MdxContentCLIENT
                        content={content}
                    />
                </div>
            </div>
            <CommandPalettePanelListeners
                scrollParent={scrollParent}
                scrollChild={scrollChild}
            />
        </>
    )
}


CommandPaletteMarkdownPanel.displayName = "CommandPaletteMarkdownPanel"


export default CommandPaletteMarkdownPanel;
