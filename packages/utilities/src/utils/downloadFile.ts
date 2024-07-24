export const downloadFile = (
        data: string,
        fileName: string = "appConfig.ulld.json",
    ) => {
        let file = new File([data], fileName, { type: "application/json" });
        let exportUrl = URL.createObjectURL(file);
        const a = document.createElement("a")
        a.href = exportUrl
        a.download = file.name
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(exportUrl);
};
