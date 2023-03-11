import React, { useState } from "react";
import { Alert, AlertTitle, Box, IconButton, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ClearIcon from "@mui/icons-material/Clear";

//me deja en un input pegar la imagen y en el otro subirla
//ya esta casi ready, toca es mirar lo del nombre, porque cuando cambio de uplod a paste no se setea el nombre
const InputFile2 = () => {
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  //console.log(image);
  //console.log(imageName);

  // Cree una función llamada handlePaste que se activa al pegar algo en el TextField
  const handlePaste = (event) => {
    // Si el elemento donde se está pegando el contenido es un input
    if (event.target.tagName.toLowerCase() === "input") {
      const items = event.clipboardData.items;
      if (items.length > 0 && items[0].type.indexOf("image") !== -1) {
        event.preventDefault();
        // Obtengo el archivo que se ha pegado
        const imageFile = items[0].getAsFile();
        // Creo un objeto FileReader para leer el archivo
        const reader = new FileReader();
        // Cuando el archivo se haya cargado, actualizo los estados image e imageName
        reader.onload = (event) => {
          setImage(event.target.result);
          setImageName(imageFile.name);
        };
        // Leemos el archivo como una URL
        reader.readAsDataURL(imageFile);
      } else {
        setAlertMessage(
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            You must to copy the image first — <strong>check it out!</strong>
          </Alert>
        );
      }
    }
  };
  const handleClearClick = () => {
    setImageName("");
  };
  // Cree una función llamada handleFileUpload que se activa al subir un archivo
  const handleFileUpload = (event) => {
    // Obtengo el archivo que se ha subido
    const imageFile = event.target.files[0];
    // Creo un objeto FileReader para leer el archivo
    const reader = new FileReader();
    // Cuando el archivo se haya cargado, actualizamos los estados image e imageName
    reader.onload = (event) => {
      setImage(event.target.result);
      setImageName(imageFile.name);
    };
    // Leemos el archivo como una URL
    reader.readAsDataURL(imageFile);
    // Actualizamos el estado imageName con el nombre del archivo
    setImageName(imageFile.name);
  };

  return (
    <Box>
      {alertMessage}
      <Box
        component="span"
        sx={{
          display: "flex",
          border: "1px solid rgba(0, 0, 0, 0.23);",
          borderRadius: "10px",
        }}
      >
        <TextField
          variant="outlined"
          onPaste={handlePaste}
          value={imageName}
          placeholder="Pega una imagen aquí"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{ visibility: imageName ? "visible" : "hidden" }}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
          sx={{
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
            accept="image/*"
            onChange={handleFileUpload}
          />
          <PhotoCamera />
        </IconButton>
        {/* <label
        htmlFor="file-input"
        style={{
          background: "blue",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
          border: "none",
        }}
      >
        upload
      </label>
      <input
        type="file"
        id="file-input"
        hidden
        defaultValue={imageName}
        onChange={handleFileUpload}
      /> */}
        {/*  <button onClick={() => console.log(image)}>Guardar</button> */}
        {/* <img src={image}></img> */}
      </Box>
    </Box>
  );
};

export default InputFile2;
