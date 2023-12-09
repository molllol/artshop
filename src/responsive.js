import { css } from "styled-components";

//Mobile
export const mobile = (props) =>{
    return css`
        @media only screen and (max-width:480px){
            ${props}
        }
     `;  
};


