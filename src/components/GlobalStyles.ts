import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
    }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;

        
        @media screen and (max-width: 1600px){
            font-size: 2.5rem;
        }

        
        @media screen and (max-width: 1000px){
            font-size: 2rem;
        }

        @media screen and (max-width: 600px){
            font-size: 1.5rem;
        }
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;

        @media screen and (max-width: 600px){
            padding: 1rem 0;
            font-size: 1rem;
        }
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;

        @media screen and (max-width: 1000px){
            line-height: 150%;
        }

        @media screen and (max-width: 650px){
            line-height: 120%;
            font-size: 1.1rem;
        }
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;