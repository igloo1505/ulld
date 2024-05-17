import React, { ReactNode } from "react";
import clsx from "clsx";

export interface FooterBannerProps {
    content: ReactNode;
    className?: string;
}

interface Props {
    banners: FooterBannerProps[];
    inView: boolean
}

const Banner = ({ item }: { item: FooterBannerProps, idx: number }) => {
    return <div className={clsx("text-sm text-center", item.className)}>{item.content}</div>;
};

const FooterBanners = ({ banners, inView }: Props) => {
    return (
        <div
            className={
                "w-full flex flex-col justify-center items-center gap-4 text-sm max-w-[600px] text-gray-400"
            }
        >
            {banners.map((item, i) => (
                <Banner item={item} key={i} idx={i} />
            ))}
        </div>
    );
};

FooterBanners.displayName = "FooterBanners";

export default FooterBanners;
