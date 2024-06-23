import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import React from "react";

interface DemoFeatureWontFunctionProps {
    desc?: string;
}

const DemoFeatureWontFunction = ({ desc }: DemoFeatureWontFunctionProps) => {
    return (
        <Card className={"not-prose"}>
            <CardHeader>
                <CardTitle>This is just a demo</CardTitle>
                {desc && <CardDescription>{desc}</CardDescription>}
            </CardHeader>
            <CardContent>
                <p>
                    Because this app is just a demo, many features won't work. This is
                    done to release a beta as soon as possible, by allowing the focus to
                    remain on documentation and the online configuration help.
                </p>
            </CardContent>
        </Card>
    );
};

DemoFeatureWontFunction.displayName = "DemoFeatureWontFunction";

export default DemoFeatureWontFunction;
