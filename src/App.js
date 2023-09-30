import "./App.css";
import ImagesExample from "./ImagesExample";
import InputFile from "./InputFile";
import InputFile2 from "./InputFile2";
import Draft from "./Draft";
import { useState } from "react";
import { Box } from "@mui/system";
import InputPdf from "./InputPdf";
import InputMultiple from "./InputMultiple";

function App() {
  const [rich, setRich] = useState("");

  const handle = (content) => {
    const data = content === "<p></p>" ? " " : content;
    //setRich(data);
    console.log(content);
  };
  return (
    <Box>
      <InputMultiple />
      {/* <InputPdf /> */}
      {/* <InputFile2 /> */}
      {/* <InputFile /> */}
      {/*  <ImagesExample /> */}
      <Box>{/* <Draft /> */}</Box>
    </Box>
  );
}

export default App;
