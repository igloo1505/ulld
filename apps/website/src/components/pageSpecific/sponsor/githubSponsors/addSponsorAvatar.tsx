import { PatreonIcon } from "@ulld/icons/patreon";
import { PaypalIcon } from "@ulld/icons/paypal";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@ulld/tailwind/dropdown-menu";
import { GithubIcon, PlusIcon } from "lucide-react";
import React from "react";
import staticData from "staticContent";

interface AddSponsorAvatarProps { }

const itemClasses =
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent hover:text-accent-foreground";

const AddSponsorAvatar = (props: AddSponsorAvatarProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div
                    className={
                        "rounded-full border bg-secondary text-secondary-foreground w-16 h-16 flex justify-center items-center cursor-pointer"
                    }
                >
                    <PlusIcon />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <a className={itemClasses} href={staticData.links.fund.github}>
                    <GithubIcon className="mr-2 h-4 w-4" />
                    <span>Github</span>
                </a>
                <a href={staticData.links.fund.patreon} className={itemClasses}>
                    <PatreonIcon className="mr-2 h-4 w-4 fill-secondary-foreground" />
                    <span>Patreon</span>
                </a>
                <a href={staticData.links.fund.paypalDonate} className={itemClasses}>
                    <PaypalIcon className="mr-2 h-4 w-4 fill-secondary-foreground" />
                    <span>Paypal</span>
                </a>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

AddSponsorAvatar.displayName = "AddSponsorAvatar";

export default AddSponsorAvatar;
