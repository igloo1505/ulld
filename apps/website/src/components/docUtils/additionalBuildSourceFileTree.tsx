"use client"
import { File, Folder, Files } from "fumadocs-ui/components/files";
import React, { useState } from "react";
import { additionalFilePaths } from "@ulld/utilities/additionalSources";


type AdditionalBuildSourceFileTreeProps = {
    item: typeof additionalFilePaths;
};


const FileGroup = ({
    item,
    defaultOpen = true,
}: AdditionalBuildSourceFileTreeProps & { defaultOpen?: boolean }) => {
    const [open, setOpen] = useState(defaultOpen)
    return (
        <Folder
            name={item.subPath === "unreserved-public-dir" ? "<Any Unreserved Directory>" : item.subPath}
            defaultOpen={defaultOpen}
            /* @ts-ignore */
            open={open}
            onOpenChange={(newOpen: boolean) => {
                if(item.items?.length){
                    setOpen(newOpen)
                }
            }}
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                if(item.items?.length){
                    setOpen(!open)
                }
            }
            }
        >
            {item.items &&
                item.items.map((d) => {
                    if ((d.items && d.items.length) || d.forceDirDisplay) {
                        return <FileGroup item={d} defaultOpen={false} />;
                    } else {
                        return <File
                            name={d.subPath === "unreserved-public-dir" ? "<Any Unreserved Directory>" : d.subPath}
                            onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                            }}
                        />;
                    }
                })}
        </Folder>
    );
};

const AdditionalBuildSourceFileTree = ({
    item = additionalFilePaths,
}: AdditionalBuildSourceFileTreeProps) => {
    return (
        <Files>
            <FileGroup item={item} />
        </Files>
    );
};

AdditionalBuildSourceFileTree.displayName = "AdditionalBuildSourceFileTree";

export default AdditionalBuildSourceFileTree;
