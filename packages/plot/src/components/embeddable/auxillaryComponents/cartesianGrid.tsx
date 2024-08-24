import React from "react";
import { GridProps } from "../XYPlot/utils/schemas";
import { CartesianGrid as CG } from "recharts";

interface CartesianGridProps {
    data: GridProps;
}

const CartesianGrid = (props: CartesianGridProps) => {
    return <CG {...props.data} />;
};

CartesianGrid.displayName = "CartesianGrid";

export default CartesianGrid;
