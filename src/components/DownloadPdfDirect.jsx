import React from 'react';

// Requires: npm i html2pdf.js
export default function DownloadPdfDirect() {
  const handleDownload = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.querySelector('.resume-root');
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'Vijaya-Raja-K-M-Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <button className="btn" onClick={handleDownload}>
      Download PDF
    </button>
  );
}
