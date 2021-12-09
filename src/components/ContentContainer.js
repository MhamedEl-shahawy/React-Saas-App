import {useState,useEffect} from "react";
import {Routes, Route } from 'react-router-dom';
import HeadPlayer from "./HeadPlayer";
import {Container} from "./styles/ContentContainer";
import HomeContent from "./HomeContent";
const ContentContainer = ({navToggle}) =>{
 const [toggleWrapper,setToggleWrapper] = useState(false);
 const [track,setTrack] = useState("");

  useEffect(()=>{
   navToggle(toggleWrapper)
  },[toggleWrapper])
return (
  <>
  <Container widthWrapper={toggleWrapper}>
   <HeadPlayer toggle={()=> setToggleWrapper(!toggleWrapper)}/>
   <Routes>
   <Route path="/" exact element={<HomeContent />} />
   </Routes>
   </Container>
  </>
);	
}

export default ContentContainer;