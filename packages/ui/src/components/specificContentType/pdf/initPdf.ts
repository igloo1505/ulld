"use client"
import { pdfjs } from 'react-pdf';


export const options = {
    standardFontDataUrl: '/standard_fonts/',
};


// pdfjs.GlobalWorkerOptions.workerSrc = '/utils/pdfWorker.js'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

