import React, { useState } from "react";
//me deja en un input pegar la imagen y en el otro subirla
//ya esta casi ready, toca es mirar lo del nombre, porque cuando cambio de uplod a paste no se setea el nombre
const InputFile2 = () => {
  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  console.log(image);
  console.log(imageName);

  const handlePaste = (event) => {
    if (event.target.tagName.toLowerCase() === "input") {
      event.preventDefault();
      const imageFile = event.clipboardData.items[0].getAsFile();
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        setImageName(imageFile.name);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleFileUpload = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
      setImageName(imageFile.name);
    };
    reader.readAsDataURL(imageFile);
    setImageName(imageFile.name);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <input
          type="text"
          onPaste={handlePaste}
          defaultValue={imageName}
          placeholder="Pega una imagen aquí"
        />
      </div>
      <div>
        <div>
          <label
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
          />
        </div>
      </div>
      {/*  <button onClick={() => console.log(image)}>Guardar</button> */}
      {/* <img src={image}></img> */}
    </div>
  );
};

export default InputFile2;
