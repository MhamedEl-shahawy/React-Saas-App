import { createGlobalStyle } from 'styled-components';

 const Global =createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

 *{
 	 margin: 0;
    padding: 0;
    box-sizing:border-box;
    transition:0.3s all ease-in-out;
 }
 /* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}



  body,html {
  	width:100%;
 height:100%;
      overflow-x: hidden; 
  background-color:#F7F8F9;
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