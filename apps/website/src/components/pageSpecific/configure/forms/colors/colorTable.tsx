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
import React, { MouseEvent } from "react";
import { useColorFormState } from "./useColorFormState";
import { ConfigColorValueTypeWithId } from "@ulld/configschema/zod/ui/colorsConfig";
import InlineCode from "#/components/general/inlineCode";
import { Button } from "@ulld/tailwind/button";
import { PlusIcon } from "lucide-react";


const TableCellColor = ({
    item,
    target,
}: {
    item: ConfigColorValueTypeWithId;
    target: "light" | "dark";
}) => {
    if (typeof item[target] === "undefined") {
        throw new Error(
            `The target ${target} does not exist in the TableCellColor.item, ${item}.`,
        );
    }
    return (
        <TableCell className={""}>
            <div
                className={"w-4 h-4 inline-block rounded border mr-4"}
                style={{
                    backgroundColor: item[target],
                }}
            />
            <span>{item[target]}</span>
        </TableCell>
    );
};

const ColorTable = () => {
    const { colorItems = [], openAddColorModal } = useColorFormState();
    const handleAddColor = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        openAddColorModal()
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
                    <TableHead>Name</TableHead>
                    <TableHead>Light</TableHead>
                    <TableHead>Dark</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {colorItems.map((item) => (
                    <TableRow key={item.colorId}>
                        <TableCell className="font-medium">{item.colorId}</TableCell>
                        <TableCellColor item={item} target="light" />
                        <TableCellColor item={item} target="dark" />
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={2}>Add Color</TableCell>
                    <TableCell className="text-right">
                        <Button size={"icon"} onClick={handleAddColor}>
                            <PlusIcon className={"w-4 h-4"} />
                        </Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

ColorTable.displayName = "ColorTable";

export default ColorTable;
