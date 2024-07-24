import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import React from "react";
import { ClientSideXIcon } from "@ulld/icons/clientX";
import { LogoAsText } from "../../logoAsText";
import FundingButtonGroup from "../fundingButtons";

interface CallToFundAfterConfigDownloadProps {
    isModal?: boolean;
}

const CallToFundAfterConfigDownload = ({
    isModal,
}: CallToFundAfterConfigDownloadProps) => {
    return (
        <Card
            className={"w-[450px] max-w-[calc(100vw-4rem)]"}
        >
            <CardHeader className={"relative"}>
                <CardTitle>
                    <span>
                    Awesome!
                    </span>
                    {isModal && <ClientSideXIcon
                        backOnClick
                        className={"cursor-pointer absolute top-4 right-4 w-4 h-4"}
                    />}
                </CardTitle>
                <CardDescription>If this is your first time using <LogoAsText fontSize={13}/>, I hope it suits your needs, and if you're returning, thank you for sticking around while <LogoAsText fontSize={13}/> continues to progress.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className={"text-lg w-full text-center"}>If you can, please consider supporting <LogoAsText fontSize={18} />.</div>
                <FundingButtonGroup 
                    className={"w-full flex flex-row justify-center items-center gap-8 my-8"}
                    classes={{
                        allIcons: "w-10 h-10"
                    }}
                />
                <div className={"text-sm text-muted-foreground w-full text-center"}>
                I'm literally sleeping in a car with no gas.
                </div>
            </CardContent>
        </Card>
    );
};

CallToFundAfterConfigDownload.displayName = "CallToFundAfterConfigDownload";

export default CallToFundAfterConfigDownload;
