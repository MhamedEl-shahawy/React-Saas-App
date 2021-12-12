import {useState,useEffect} from "react";
import { ThemeProvider } from "styled-components";
import Global from "./components/styles/Global";
import {GridLay} from "./components/styles/GridLay";
import Navbar from "./components/Navbar";
import ContentContainer from "./components/ContentContainer";
import HeadNav from "./components/HeadNav";
function App() {
  const [toggle,setToggle] = useState(false); 
   const [toggleWrapper,setToggleWrapper] = useState(false);

  const theme = {
    color:{
      bg:"#252525",
    }
  };

  return (
    <>
     <ThemeProvider theme={theme}>
      <Global/>
      <HeadNav toggle={()=> setToggleWrapper(!toggleWrapper)} hideNav={(type)=> setToggleWrapper(type)}/>
      <Navbar navToggle={toggle}/>
      <GridLay>
      <div></div>
      <ContentContainer navToggle={() => setToggle(!toggle)}/>
      </GridLay>
      </ThemeProvider>
    </>
  );
}

export default App;
