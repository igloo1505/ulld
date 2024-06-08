import React, {
    DetailedHTMLProps,
    ReactNode,
    TableHTMLAttributes,
    useId,
} from "react";
import { TableProps } from "./tableProps";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@ulld/tailwind/table";
import clsx from "clsx";
import "./tableStyles.scss";
import { getInternalConfig } from "@ulld/configschema/zod/getInternalConfig";
/* import { removeEmptyChildren } from "@ulld/utilities/removeEmptyChildren"; */

interface TheadProps {
    head: TableProps["children"]["0"];
    id: string;
}

const InternalTableHead = ({ head, id }: TheadProps) => {
    const data = head.props.children.props.children.filter((a) => typeof a !== "string").map((c) => ({
        align: c.props.align,
        text: c.props.children,
    }));
    return (
        <TableHeader>
            <TableRow>
                {data.map((d, i) => (
                    <TableHead
                        /* className={clsx("top-0 w-full text-white h-min px-2 py-1 bg-primary", i !== l - 1 && "border-r border-r-secondary")} */
                        style={{
                            textAlign: d.align,
                        }}
                        key={`td-${i}`}
                    >
                        {d.text}
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    );
};

interface BodyProps {
    body: TableProps["children"]["1"];
    id: string;
}

interface TableRowProps {
    row: TableProps["children"]["1"]["props"]["children"][0];
    isLast: boolean;
}

const InternalTableRow = ({ row, isLast }: TableRowProps) => {
    const tds = row.props.children.map((c) => ({
        text: c.props.children,
        align: c.props.align,
    }));
    return (
        <TableRow
            className={clsx(
                !isLast &&
                "border-b border-b-secondary hover:bg-gray-100 dark:hover:bg-gray-800",
            )}
        >
            {tds.map((d, i) => (
                <TableCell
                    /* className={clsx("px-2 w-fit", i !== l - 1 && "border-r border-r-secondary")} */
                    style={{
                        textAlign: d.align,
                    }}
                    key={`table-data-${i}`}
                >
                    {d.text}
                </TableCell>
            ))}
        </TableRow>
    );
};

const InternalTableBody = ({ body, id }: BodyProps) => {
    let trs = body.props.children;
    if (!Array.isArray(trs)) trs = [trs];
    const l = trs.length;
    return (
        <TableBody className={"max-h-[300px] overflow-scroll"} id={`${id}-body`}>
            {trs.map((d, i) => (
                <InternalTableRow row={d} key={`table-row-${i}`} isLast={i === l - 1} />
            ))}
        </TableBody>
    );
};

/* export type TableComponentType = FC<DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>> */

export type TableWrapperProps = DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
>;

/* TODO: Handle this more like the bibliography data table. If not entirely as a datatable, at least add pagination and search functionality. */
const InternalTable = (props: TableWrapperProps) => {
    const id = useId();
    const config = getInternalConfig();
    /* const children = removeEmptyChildren(props.children || []); */
    const children = props.children
    return (
        <div
            className={
                "!mb-8 internalTable no-scrollbar not-prose [&_code]:bg-secondary [&_code]:font-code [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-[3px]"
            }
            style={{
                ...(config.UI?.table?.maxHeight && {
                    maxHeight: config.UI.table.maxHeight,
                    overflowY: "auto",
                }),
            }}
        >
            <Table className={"w-fit max-w-full"}>
                <InternalTableHead
                    /// @ts-ignore
                    head={children[0] as TheadProps}
                    id={id}
                />
                <InternalTableBody
                    /// @ts-ignore
                    body={children[1]}
                    id={id}
                />
            </Table>
        </div>
    );
};

InternalTable.displayName = "Table";

export default InternalTable;
