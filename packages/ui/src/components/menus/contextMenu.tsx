import React from 'react'
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';


interface ContextMenuProps {
    children: React.ReactNode
}

/* TODO: This obviously isn't configured yet. use the .Trigger class to wrap whatever will be using this menu and pass the options in from a conditional array */




const ContextMenu = ({ children }: ContextMenuProps) => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <RadixContextMenu.Root>
            <RadixContextMenu.Trigger>
                {children}
            </RadixContextMenu.Trigger>
            <RadixContextMenu.Portal>
                <RadixContextMenu.Content
                    className="min-w-[220px] bg-white rounded-md overflow-hidden p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                    /// @ts-ignore
                    sideOffset={5}
                    align="end"
                >
                    <RadixContextMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        Back{' '}
                        <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+[
                        </div>
                    </RadixContextMenu.Item>
                    <RadixContextMenu.Item
                        className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                        disabled
                    >
                        Foward{' '}
                        <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+]
                        </div>
                    </RadixContextMenu.Item>
                    <RadixContextMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        Reload{' '}
                        <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+R
                        </div>
                    </RadixContextMenu.Item>
                    <RadixContextMenu.Sub>
                        <RadixContextMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
                            More Tools
                            <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <ChevronRightIcon />
                            </div>
                        </RadixContextMenu.SubTrigger>
                        <RadixContextMenu.Portal>
                            <RadixContextMenu.SubContent
                                className="min-w-[220px] bg-white rounded-md overflow-hidden p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <RadixContextMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Save Page As…{' '}
                                    <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                        ⌘+S
                                    </div>
                                </RadixContextMenu.Item>
                                <RadixContextMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Create Shortcut…
                                </RadixContextMenu.Item>
                                <RadixContextMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Name Window…
                                </RadixContextMenu.Item>
                                <RadixContextMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                                <RadixContextMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Developer Tools
                                </RadixContextMenu.Item>
                            </RadixContextMenu.SubContent>
                        </RadixContextMenu.Portal>
                    </RadixContextMenu.Sub>

                    <RadixContextMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

                    <RadixContextMenu.CheckboxItem
                        className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                    >
                        <RadixContextMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                            <CheckIcon />
                        </RadixContextMenu.ItemIndicator>
                        Show Bookmarks{' '}
                        <div className="ml-auto pl-5 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+B
                        </div>
                    </RadixContextMenu.CheckboxItem>
                    <RadixContextMenu.CheckboxItem
                        className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                        checked={urlsChecked}
                        onCheckedChange={setUrlsChecked}
                    >
                        <RadixContextMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                            <CheckIcon />
                        </RadixContextMenu.ItemIndicator>
                        Show Full URLs
                    </RadixContextMenu.CheckboxItem>

                    <RadixContextMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

                    <RadixContextMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
                        People
                    </RadixContextMenu.Label>
                    <RadixContextMenu.RadioGroup value={person} onValueChange={setPerson}>
                        <RadixContextMenu.RadioItem
                            className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            value="pedro"
                        >
                            <RadixContextMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <DotFilledIcon />
                            </RadixContextMenu.ItemIndicator>
                            Pedro Duarte
                        </RadixContextMenu.RadioItem>
                        <RadixContextMenu.RadioItem
                            className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            value="colm"
                        >
                            <RadixContextMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <DotFilledIcon />
                            </RadixContextMenu.ItemIndicator>
                            Colm Tuite
                        </RadixContextMenu.RadioItem>
                    </RadixContextMenu.RadioGroup>
                </RadixContextMenu.Content>
            </RadixContextMenu.Portal>
        </RadixContextMenu.Root>

    )
}


ContextMenu.displayName = "ContextMenu"


export default ContextMenu;
