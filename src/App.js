import "./App.css";
import ImagesExample from "./ImagesExample";
import InputFile from "./InputFile";
import InputFile2 from "./InputFile2";
import Draft from "./Draft";
import { useState } from "react";
import { Box } from "@mui/system";
import InputPdf from "./InputPdf";
import InputMultiple from "./InputMultiple";
import { DragAndDropMultiple } from "./DragAndDropMultiple";
import DragAndDropSingle from "./DragAndDropSingle";

function App() {
  const [rich, setRich] = useState("");
  const [files,setFiles] =useState([]);
console.log(files)
  const handle = (content) => {
    const data = content === "<p></p>" ? " " : content;
    //setRich(data);
    console.log(content);
  };console.log(files)
  return (
    <Box>
      {/* <InputMultiple /> */}
      {/* <InputPdf /> */}
      {/* <DragAndDropMultiple onFilesSelected={setFiles} width="300px" height='400px'/> */}
      <DragAndDropSingle onFilesSelected={setFiles} width="300px" height='400px'/>
      {/* <InputFile2 /> */}
      {/* <InputFile /> */}
      {/*  <ImagesExample /> */}
      <Box>{/* <Draft /> */}</Box>
    </Box>
  );
}

export default App;
