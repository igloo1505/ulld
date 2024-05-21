import React, { ReactNode } from "react";
import { LogoAsText } from "../general/logoAsText";
import staticContent from "staticContent";
import clsx from 'clsx'
import PayPalLinkQr from "../brand/sponsor/paypalLinkSvg";

interface ComingSoonProps { }

const Paragraph = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <p className={clsx("max-w-[min(640px,calc(100vw-96px))] text-center", className)}>
            {children}
        </p>
    );
};

const ComingSoon = (props: ComingSoonProps) => {
    return (
        <div
            className={
                "min-h-screen-noNav w-full flex flex-col justify-center items-center space-y-4 pt-[76px]"
            }
        >
            <h1 className={"text-[9vw] md:text-8xl"}>Coming Soon</h1>
            <Paragraph>
                You can contribute to this process by helping the developer of{" "}
                <LogoAsText /> afford a place to live so he can wrap this project up by
                clicking{" "}
                <a className={"text-link"} href={staticContent.links.fund.paypalDonate}>
                    here
                </a> or scanning the QR code below.
            </Paragraph>
            <Paragraph className={"text-muted-foreground text-sm"}>The guy's <span className={"italic"}>literally</span> homeless.</Paragraph>
            <PayPalLinkQr
                size={80}
                fill="hsl(var(--foreground))"
            />
        </div>
    );
};

ComingSoon.displayName = "ComingSoon";

export default ComingSoon;
