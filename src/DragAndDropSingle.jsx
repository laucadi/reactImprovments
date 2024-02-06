import React, { useState, useEffect } from 'react';

const DragAndDropSingle = ({ onFilesSelected, width, height }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length === 1) {
      const file = selectedFiles[0];
      if (file.size <= 20 * 1024 * 1024) { // 20 MB in bytes
        setFiles([file]);
        setError(null);
      } else {
        setFiles([]);
        setError('File size exceeds 20 MB limit.');
      }
    } else {
      setFiles([]);
      setError('Please select only one file.');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length === 1) {
      const file = droppedFiles[0];
      if (file.size <= 2 * 1024 * 1024) {
        setFiles([file]);
        setError(null);
      } else {
        setFiles([]);
        setError('File size exceeds 20 MB limit.');
      }
    } else {
      setFiles([]);
      setError('Please drop only one file.');
    }
  };

  const handleRemoveFile = () => {
    setFiles([]);
    setError(null);
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  return (
    <section className="drag-drop" style={{ width, height }}>
      <div
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <div className="upload-info">
          <p>Drag and drop your file here</p>
          <p>Limit 20 MB per file. Supported files: .PDF, .DOCX, .PPTX, .TXT, .XLSX</p>
        </div>
        <input
          type="file"
          hidden
          id="browse"
          onChange={handleFileChange}
          accept=".pdf"
        />
        <label htmlFor="browse" className="browse-btn">
          Browse file
        </label>
        {error && (
          <div className="error-message">
            {error}
            <button onClick={handleRemoveFile}>OK</button>
          </div>
        )}
        {files.length > 0 && (
          <div className="file-list">
            <div className="file-list__container">
              <div className="file-item">
                <div className="file-info">
                  <p>{files[0].name}</p>
                </div>
                <div className="file-actions">
                  <button onClick={handleRemoveFile} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DragAndDropSingle;
