import { LogoAsText } from "#/components/general/logoAsText"
import { FooterBannerProps } from "#/components/layouts/footer/footerBanner"
import { LinkGroupItems } from "#/components/layouts/footer/linkGroup"
import staticContent from "staticContent"

const links = staticContent.links

export type FooterLinkKeys = "docs" | "demos" | "funding"


export const footerLinks: Record<FooterLinkKeys, LinkGroupItems> & {banners?: FooterBannerProps[]}= {
    banners: [
       {
            content: <p>In the pursuit of this theory and my time away from work I became <span className={"italic text-foreground"}>literally</span> homeless. If you can, please consider supporting <LogoAsText fontSize={13}/> <a href={links.fund.paypalDonate} className={"text-link"}>here</a>, or learn more about my journey <a href={links.blog.whyILeftWork} className={"text-link"}>here</a>.</p>
        }
    ],
   docs: [
        {
            href: links.docs.internal.users,
            label: "Users"
        },
        {
            href: links.docs.internal.developerHome,
            label: "Developers"
        },
        {
            href: links.docs.internal.teachers,
            label: "Teachers"
        },
    ],
    demos: [
        {
            href: links.demos.myNotes,
            label: "My Notes"
        },
        {
            href: links.demos.layouts,
            label: "Layouts"
        },
        {
            href: links.demos.plots,
            label: "Plots"
        },
    ],
    funding: [
        {
            href: links.demos.main,
            label: "Paypal"
        },
        {
            href: links.contactMe,
            label: "Contact Me"
        },
    ]

}
