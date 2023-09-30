import React, { useState } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const InputMultiple = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };
  const handleUpload = () => {
    console.log(selectedFiles);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} m={1}>
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-input"
        />
        <label htmlFor="file-input">
          <Button variant="outlined" component="span">
            Choose Files
          </Button>
        </label>
        {/* <Button
          variant="contained"
          onClick={handleUpload}
          disabled={selectedFiles.length === 0}
        >
          Upload
        </Button> */}
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ width: "80%", margin: 2 }}>
          <List>
            <Typography variant="h6">Selected Files:</Typography>
            {selectedFiles.map((file, index) => (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveFile(file)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InputMultiple;
