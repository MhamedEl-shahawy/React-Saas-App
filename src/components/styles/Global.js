import { createGlobalStyle } from 'styled-components';

 const Global =createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

 *{
 	 margin: 0;
    padding: 0;
    box-sizing:border-box;
    transition:0.6s all ease-in-out;
 }
  body,html {
  	width:100%;
  	height:100%;
    background-color:#f1f1f1;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  ul{
  	 list-style:none;
  }
  a{
  	text-decoration:none;
  	color:#989898;
    cursor:pointer;
  }
`;

export default Global;