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
    background: var(--neongreen);
    cursor:pointer;
    color: var(--darkgray);
    border:none;
    font-style:normal;
    font-size:20px;
    font-weight: 700;
    text-decoration:none;
    border-radius: 40px;
    margin-right: 50px;

    &:hover {
        color: #000;
        transform: translate(0, -5px)
    }
}
`;
export default GlobalStyle;
