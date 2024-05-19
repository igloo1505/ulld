import React from 'react'
import { LogoAsText } from '../general/logoAsText';
import staticContent from "staticContent"



interface ComingSoonProps {

}

const ComingSoon = (props: ComingSoonProps) => {
return (
    <div className={"min-h-screen w-full flex flex-col justify-center items-center space-y-6"}>
            <h1 className={"text-4xl md:textl:6xl lg:text-8xl"}>Coming Soon</h1>
            <p>To speed up this process, help the developer of <LogoAsText /> afford a place to live so he can wrap this project up by clicking <a className={"text-link"} href={staticContent.links.fund.paypalDonate}>here</a>.</p>
        </div>
)
}


ComingSoon.displayName = "ComingSoon"


export default ComingSoon;
