import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    outline:0;
}
:root{
    --black:#000;
    --darkviolet:#150050;
    --violet:#3F0071;
    --lightviolet:#610094;
    --neongreen:#06FF00;
    --darkgray:#686D76;
    --gray:#EEE;
}
body{
    background:var(--darkviolet);
    color:var(--gray)
}
h1, h2, h3, h4, p, span, button, input, div, header{
    font-family:"Zen Kaku Gothic Antique"
}
h1, h2, h3, h4{
    font-weight:bold;
}
button{
    cursor:pointer;
    border:none;
    font-style:normal;
    font-size:16px;
    text-decoration:none;
}
`;
export default GlobalStyle;
