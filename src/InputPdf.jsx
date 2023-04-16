import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ClearIcon from "@mui/icons-material/Clear";
import { AlertMessage } from "./alerts/AlertMessage";
import { handlePdfFile } from "./utils/handlePdfFile";

const InputPdf = () => {
  const [pdf, setPdf] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handlePaste = (event) => {
    const {
      target: { tagName },
    } = event;
    if (tagName.toLowerCase() === "input") {
      const {
        clipboardData: { items },
      } = event;
      if (items.length > 0 && items[0].type === "application/pdf") {
        event.preventDefault();
        const pdfFile = items[0].getAsFile();
        handlePdfFile(pdfFile, setPdfAndName);
      } else {
        setAlertMessage(
          <AlertMessage
            severity="warning"
            message="You must to copy the PDF file first — check it out!"
          />
        );
      }
    }
  };

  const handleFileUpload = (event) => {
    const pdfFile = event.target.files[0];
    handlePdfFile(pdfFile, setPdfAndName);
  };

  const setPdfAndName = (pdf, name) => {
    setPdf(pdf);
    setPdfName(name);
  };

  const handleClearClick = () => {
    setPdf("");
    setPdfName("");
  };

  return (
    <Box>
      {alertMessage}
      <Box
        component="span"
        sx={{
          width: 300,
          display: "flex",
          border: "1px solid rgba(0, 0, 0, 0.23);",
          borderRadius: "10px",
        }}
      >
        <TextField
          variant="outlined"
          onPaste={handlePaste}
          value={pdfName}
          placeholder="Pega un archivo PDF aquí"
          //size="small"
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{ visibility: pdfName ? "visible" : "hidden" }}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
          sx={{
            width: 260,
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .Mui-focused .MuiIconButton-root": { color: "primary.main" },
          }}
        />
        <IconButton
          color="primary"
          component="label"
          aria-label="upload picture"
        >
          <input
            type="file"
            hidden
            id="file-input"
            accept="application/pdf"
            onChange={handleFileUpload}
          />
          <FileOpenIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputPdf;
