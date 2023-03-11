import React, { useState } from "react";
//este tiene la funcion de subir y pegar imagenes en el mismo input
const InputFile = () => {
  const [image, setImage] = useState("");

  const handleImageUpload = (event) => {
    event.preventDefault();
    const imageFile =
      event.clipboardData && event.clipboardData.items
        ? event.clipboardData.items[0].getAsFile()
        : event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target.result);
    };
    reader.readAsDataURL(imageFile);
  };
  return (
    <div>
      <input
        type="text"
        onPaste={handleImageUpload}
        onChange={handleImageUpload}
        value={image}
        placeholder="Pega una imagen o selecciona una"
      />
    </div>
  );
};

export default InputFile;
