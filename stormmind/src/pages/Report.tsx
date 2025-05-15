import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export function Report() {
    const [numPages, setNumPages] = useState<number | null>(null);

    return (
        <div>
            <Document file="/main.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                {Array.from(new Array(numPages), (_, index) => (
                    <div
                        key={`wrapper_${index}`}
                        style={{
                            marginBottom: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={window.innerWidth * 0.8} // 80% der Bildschirmbreite
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    </div>
                ))}
            </Document>
        </div>
    );
}