import React from "react";
import path from "path";
import fs from "fs";

interface PlotlyHtmlProps {
    file: string;
}

const PlotlyHtml = async ({ file }: PlotlyHtmlProps) => {
    let filePathItems = [process.cwd(), "generatedContent", "plots", file];
    const filePath = path.join(...filePathItems);
    const fileContent = await fs.promises.readFile(filePath, {
        encoding: "utf-8",
    });

    return (
        <div>
            <div className={""} dangerouslySetInnerHTML={{ __html: fileContent }} />
        </div>
    );
};

PlotlyHtml.displayName = "PlotlyHtml";

export default PlotlyHtml;
