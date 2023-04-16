export const handlePdfFile = (pdfFile, onSuccess) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    onSuccess(event.target.result, pdfFile.name);
  };
  reader.readAsDataURL(pdfFile);
};
