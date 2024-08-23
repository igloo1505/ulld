import { useEffect, useMemo, useState } from "react";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { PdfManager } from "@ulld/state/classes/pdfManager";

export const usePdfFileBlob = (
    _filePath: string,
    canvasRef: React.RefObject<HTMLCanvasElement>,
    appConfig: AppConfigSchemaOutput,
) => {
    const [filePath, _setFilePath] = useState(_filePath);
    const [fileBlob, setFileBlob] = useState<any | null>(null);

    const setFile = async () => {
        const manager = new PdfManager(filePath, canvasRef, appConfig);
        let response = await manager.getFile();
        setFileBlob(response.data);
    };

    let data = useMemo(() => fileBlob, [fileBlob]);

    const setFilePath = (fp: string) => {
        if (fp !== filePath) {
            _setFilePath(fp);
            setFile();
        }
    };

    useEffect(() => {
        if (!fileBlob) {
            setFile();
        }
    }, [filePath]);

    return [data, setFilePath] as [typeof data, typeof setFilePath];
};
