import React from 'react'
import { usePathname } from 'next/navigation';
import slotMap from "@ulld/utilities/slotMap.json"
import { buttonVariants } from '@ulld/tailwind/button';
import cn from '@ulld/utilities/cn';
import { Link } from 'lucide-react';
import { MenuTreeAccordion } from "@ulld/ui/menuTreeAccordion


interface SlotDocumentationSidebarProps {

}

/* {sidebarNavItems.map((item) => ( */
/*     <Link */
/*         key={item.href} */
/*         href={item.href} */
/*         className={cn( */
/*             buttonVariants({ variant: "ghost" }), */
/*             pathname === item.href */
/*                 ? "bg-muted hover:bg-muted" */
/*                 : "hover:bg-transparent hover:underline", */
/*             "justify-start", */
/*         )} */
/*     > */
/*         {item.title} */
/*     </Link> */

const SlotDocumentationSidebar = (props: SlotDocumentationSidebarProps) => {
    const pathname = usePathname()
    return (
        <nav
            className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
            )}
            {...props}
        >
            <MenuTreeAccordion items={slotMap} />
        </nav>
    )
}


SlotDocumentationSidebar.displayName = "SlotDocumentationSidebar"


export default SlotDocumentationSidebar;
