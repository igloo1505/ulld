import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { JupyterCellProps } from "../types/main";

export class JupyterCellUtilities {
    private hasWrapped: boolean = false
    private _input: {
        parsed: string;
        raw: string;
    } = {
            parsed: "",
            raw: "",
        };

    constructor(
        public jupyterConfig: AppConfigSchemaOutput["jupyter"],
        public cellProps: Omit<JupyterCellProps, "children">,
    ) { 
        /* this.input =  */
    }

    set input(val: string) {
        this._input = {
            parsed: this.wrapCell(val),
            raw: val
        }
    }

    get input(){
        return this._input.raw
    }

    get wrappedInput(){
        return this._input.parsed
    }

    wrapCell(inputString: string) {
        const wrapperKey = this.cellProps.wrapper
        if (this.hasWrapped || !wrapperKey || !(wrapperKey in this.jupyterConfig.cellInputWrappers)) {
            return inputString;
        } else {
            let d = this.jupyterConfig.cellInputWrappers[wrapperKey];
            this.hasWrapped = true
            return `${d.prefix}${inputString}${d.suffix}`;
        }
    }
}
