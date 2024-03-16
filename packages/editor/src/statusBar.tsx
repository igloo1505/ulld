import clsx from 'clsx'
import React from 'react'



interface MonacoVimStatusBarProps {
    id: string
}

interface StatusIndicatorProps {
    className?: string
    mode: string
}

const ModeIndicator = ({ className, mode }: StatusIndicatorProps) => {
    return <div className={clsx(
        "status-indicator w-full h-[4px] hidden group-[.vim-cmd-mode]/vim-status:!hidden",
        `indicator-${mode}`,
        className,
    )} />
}

const MonacoVimStatusBar = ({ id }: MonacoVimStatusBarProps) => {
    return (
        <div
            id={id}
            className={"group/vim-status flex flex-col justify-start items-start border-l border-r border-b border-transparent w-full h-[25px] bg-transparent [&.vim-cmd-mode]:bg-muted [&.vim-cmd-mode]:border-muted [&_.vim-status-sec-info]:inline-flex [&_.vim-status-sec-info]:w-full [&_.vim-status-sec-info>span]:w-full [&_input]:h-[24px] [&_input]:w-full [&_input]:max-w-full [&_input]:inline-flex [&_input]:px-2 [&_input]:bg-background [&_input]:text-[12px] [&_input:focus-visible]:!outline-none [&_input]:focus-visible:ring-0 [&_input]:text-muted-foreground box-content [&_.vim-status-notif]:text-[12px] [&_.vim-status-notif]:text-muted-foreground [&_.vim-status-notif]:px-2 [&_.vim-status-notif]:py-1"}
        >
            <ModeIndicator
                className={"bg-blue-500 dark:bg-blue-400 group-[.vim-mode-insert]/vim-status:block"}
                mode="insert"
            />
            <ModeIndicator
                className={"bg-primary group-[.vim-mode-normal]/vim-status:block"}
                mode="normal"
            />
            <ModeIndicator
                className={"bg-red-500 dark:bg-red-400 group-[.vim-mode-replace]/vim-status:block"}
                mode="replace"
            />
            <ModeIndicator
                className={"bg-lime-500 dark:bg-lime-400 group-[.vim-mode-visual]/vim-status:block"}
                mode="visual"
            />
        </div>
    )
}


MonacoVimStatusBar.displayName = "MonacoVimStatusBar"


export default MonacoVimStatusBar;
