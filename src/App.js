import {useState,useEffect} from "react";
import { ThemeProvider } from "styled-components";
import Global from "./components/styles/Global";
import {GridLay} from "./components/styles/GridLay";
import Navbar from "./components/Navbar";
import ContentContainer from "./components/ContentContainer";
function App() {
  const [toggle,setToggle] = useState(false); 
  const theme = {
    color:{
      bg:"#252525",
    }
  };

  return (
    <>
     <ThemeProvider theme={theme}>
      <Global/>
      <GridLay>
      <Navbar navToggle={toggle}/>
      <ContentContainer navToggle={() => setToggle(!toggle)}/>
      </GridLay>
      </ThemeProvider>
    </>
  );
}

export default App;
