import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@ulld/tailwind/table";
import React, { MouseEvent, useEffect, useMemo, useState } from "react";
import { useColorFormState } from "./useColorFormState";
import { ConfigColorValueTypeWithId } from "@ulld/configschema/zod/ui/colorsConfig";
import InlineCode from "#/components/general/inlineCode";
import { Button } from "@ulld/tailwind/button";
import { PlusIcon, XIcon } from "lucide-react";
import { AvailableColorStringFormats } from "./colorFormContext";
import tinycolor from "tinycolor2";
import { ColorFormat, colorFormats } from "./staticData";
import { ColorFormatDropdown } from "./colorFormatDropdown";
import { defaultUlldColorMap } from "@ulld/configschema/defaultColorMap";
import clsx from "clsx";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@ulld/tailwind/tooltip";

const defaultKeys = Object.keys(defaultUlldColorMap);

const formatColor = (color: string, format: AvailableColorStringFormats) => {
    let fnc: ColorFormat | undefined = colorFormats.find(
        (c) => c.value === format,
    );
    return fnc ? fnc.func(tinycolor(color)) : color;
};

const TableCellColor = ({
    item,
    target,
    colorFormat,
}: {
    item: ConfigColorValueTypeWithId;
    target: "light" | "dark";
    colorFormat: AvailableColorStringFormats;
}) => {
    if (typeof item[target] === "undefined") {
        throw new Error(
            `The target ${target} does not exist in the TableCellColor.item, ${item}.`,
        );
    }
    const [label, setLabel] = useState<string | undefined>(
        formatColor(item[target] as string, colorFormat),
    );
    useEffect(() => {
        setLabel(formatColor(item[target] as string, colorFormat));
    }, [colorFormat]);

    return (
        <TableCell className={""}>
            <span
                className={"w-4 h-4 inline-block rounded border mr-4"}
                /* w-8 h-8 inline-flex flex-col justify-center items-center */
                style={{
                    backgroundColor: item[target],
                }}
            />
            <span>{label}</span>
        </TableCell>
    );
};

const RemoveCellContent = ({
    item,
    removeColor,
    isDefault,
}: {
    item: ConfigColorValueTypeWithId;
    removeColor: (colorId: string) => void;
    isDefault: boolean;
}) => {
    return (
        <span
            className={clsx("w-8 h-8 inline-flex flex-col justify-center items-center", isDefault && "!cursor-not-allowed")}
        >
            <XIcon
                role="button"
                aria-disabled={!isDefault}
                className={clsx(
                    "w-4 h-4 inline-block",
                    isDefault && "text-muted-foreground !cursor-not-allowed",
                )}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (isDefault) return;
                    removeColor(item.colorId);
                }}
            />
        </span>
    );
};

const RemoveColorCell = ({
    item,
    removeColor,
}: {
    item: ConfigColorValueTypeWithId;
    removeColor: (colorId: string) => void;
}) => {
    const isDefault = useMemo(() => defaultKeys.includes(item.colorId), [item]);
    if (isDefault) {
        return (
            <TableCell className={"pr-0"}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <RemoveCellContent
                                item={item}
                                removeColor={removeColor}
                                isDefault={isDefault}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            Default colors are required, but you can modify their value by
                            clicking on them.
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </TableCell>
        );
    }
    return (
        <TableCell className={"pr-0"}>
            <RemoveCellContent
                item={item}
                removeColor={removeColor}
                isDefault={isDefault}
            />
        </TableCell>
    );
};

const TableIdCell = ({ item }: { item: ConfigColorValueTypeWithId }) => {
    return (
        <TableCell className="font-medium">
            <span>{item.colorId}</span>
        </TableCell>
    );
};

const ColorTable = () => {
    const {
        colorItems = [],
        colorFormat,
        openAddColorModal,
        openEditColorModal,
        removeColor,
    } = useColorFormState();

    const handleAddColor = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openAddColorModal();
    };

    return (
        <Table>
            <TableCaption>
                Click on a color to modify it's value, or add another color above. All
                colors will be available in any component with properties extending the
                ColorProps type. Values that use a css variable with{" "}
                <InlineCode>--someVariable</InlineCode> syntax will change based on the
                current theme.
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className={"w-16"}></TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Light</TableHead>
                    <TableHead>Dark</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {colorItems.map((item) => (
                    <TableRow
                        role="button"
                        key={item.colorId}
                        onClick={() => openEditColorModal(item.colorId)}
                    >
                        <RemoveColorCell item={item} removeColor={removeColor} />
                        <TableIdCell item={item} />
                        <TableCellColor
                            item={item}
                            target="light"
                            colorFormat={colorFormat}
                        />
                        <TableCellColor
                            item={item}
                            target="dark"
                            colorFormat={colorFormat}
                        />
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter className={"!bg-transparent"}>
                <TableRow className={"!bg-muted/10"}>
                    <TableCell colSpan={4} className="text-right">
                        <div className={"flex flex-row justify-end items-center gap-6"}>
                            <ColorFormatDropdown>
                                <Button variant="outline">Format</Button>
                            </ColorFormatDropdown>
                            <Button size={"icon"} onClick={handleAddColor}>
                                <PlusIcon className={"w-4 h-4"} />
                            </Button>
                        </div>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

ColorTable.displayName = "ColorTable";

export default ColorTable;
