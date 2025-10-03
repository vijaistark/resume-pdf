import React from 'react';

export default function DownloadButton() {
  const handleDownload = () => {
    window.print();
  };
  return (
    <button className="btn" onClick={handleDownload}>
      Download PDF
    </button>
  );
}
