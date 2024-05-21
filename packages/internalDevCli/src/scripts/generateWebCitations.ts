import { WebUtils } from "../webUtils/main.js";

const generateWebCitations = async () => {
    const webManager = new WebUtils();
    await webManager.generateWebCitations();
};

generateWebCitations();
