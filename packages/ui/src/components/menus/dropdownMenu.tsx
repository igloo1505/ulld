import React from 'react';
import * as RadixDropDownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';


/* TODO: Obviously not yet configured. */
const DropdownMenu = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <RadixDropDownMenu.Root>
            <RadixDropDownMenu.Trigger asChild>
                <button
                    className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                    aria-label="Customise options"
                >
                    <HamburgerMenuIcon />
                </button>
            </RadixDropDownMenu.Trigger>

            <RadixDropDownMenu.Portal>
                <RadixDropDownMenu.Content
                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <RadixDropDownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        New Tab{' '}
                        <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+T
                        </div>
                    </RadixDropDownMenu.Item>
                    <RadixDropDownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                        New Window{' '}
                        <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+N
                        </div>
                    </RadixDropDownMenu.Item>
                    <RadixDropDownMenu.Item
                        className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                        disabled
                    >
                        New Private Window{' '}
                        <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⇧+⌘+N
                        </div>
                    </RadixDropDownMenu.Item>
                    <RadixDropDownMenu.Sub>
                        <RadixDropDownMenu.SubTrigger className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:bg-violet9 data-[highlighted]:data-[state=open]:text-violet1">
                            More Tools
                            <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                <ChevronRightIcon />
                            </div>
                        </RadixDropDownMenu.SubTrigger>
                        <RadixDropDownMenu.Portal>
                            <RadixDropDownMenu.SubContent
                                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <RadixDropDownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Save Page As…{' '}
                                    <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                                        ⌘+S
                                    </div>
                                </RadixDropDownMenu.Item>
                                <RadixDropDownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Create Shortcut…
                                </RadixDropDownMenu.Item>
                                <RadixDropDownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Name Window…
                                </RadixDropDownMenu.Item>
                                <RadixDropDownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                                <RadixDropDownMenu.Item className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                                    Developer Tools
                                </RadixDropDownMenu.Item>
                            </RadixDropDownMenu.SubContent>
                        </RadixDropDownMenu.Portal>
                    </RadixDropDownMenu.Sub>

                    <RadixDropDownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

                    <RadixDropDownMenu.CheckboxItem
                        className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                        checked={bookmarksChecked}
                        onCheckedChange={setBookmarksChecked}
                    >
                        <RadixDropDownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                            <CheckIcon />
                        </RadixDropDownMenu.ItemIndicator>
                        Show Bookmarks{' '}
                        <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                            ⌘+B
                        </div>
                    </RadixDropDownMenu.CheckboxItem>
                    <RadixDropDownMenu.CheckboxItem
                        className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                        checked={urlsChecked}
                        onCheckedChange={setUrlsChecked}
                    >
                        <RadixDropDownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                            <CheckIcon />
                        </RadixDropDownMenu.ItemIndicator>
                        Show Full URLs
                    </RadixDropDownMenu.CheckboxItem>

                    <RadixDropDownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

                    <RadixDropDownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
                        People
                    </RadixDropDownMenu.Label>
                    <RadixDropDownMenu.RadioGroup value={person} onValueChange={setPerson}>
                        <RadixDropDownMenu.RadioItem
                            className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            value="pedro"
                        >
                            <RadixDropDownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <DotFilledIcon />
                            </RadixDropDownMenu.ItemIndicator>
                            Pedro Duarte
                        </RadixDropDownMenu.RadioItem>
                        <RadixDropDownMenu.RadioItem
                            className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                            value="colm"
                        >
                            <RadixDropDownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                                <DotFilledIcon />
                            </RadixDropDownMenu.ItemIndicator>
                            Colm Tuite
                        </RadixDropDownMenu.RadioItem>
                    </RadixDropDownMenu.RadioGroup>

                    <RadixDropDownMenu.Arrow className="fill-white" />
                </RadixDropDownMenu.Content>
            </RadixDropDownMenu.Portal>
        </RadixDropDownMenu.Root>
    );
};

export default DropdownMenu;
