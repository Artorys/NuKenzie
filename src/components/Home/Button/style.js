import styled from "styled-components"
import { css } from "styled-components"


 export const ButtonStyled = styled.button`

    font-size: var(--Title-3-S);
    display: flex;

.button_content
{
    padding: 15px;
    border-radius: 8px;
    color: ${({colors})=>
    {
        if(colors)
        {
            return `var(${colors})`
        }
        return `var(--Gray-3)`
    }};
    background-color: ${({backColors})=>
    {
        if(backColors)
        {
            return `var(${backColors})`
        }
        return `var(--Gray-2)`
    }};
}
.button_content:hover
{
    cursor: pointer;
    color: var(--Gray-2);
    background-color: var(--Gray-3);
}
`