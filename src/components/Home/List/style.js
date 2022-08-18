import styled from "styled-components";

export const DivFinancas = styled.div`
   display : flex;
   flex-flow: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   .box_buttons
   {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
   }
   .lista__financas
   {
      width: 300px;
      max-width: 90%;
      height: max-content;
      justify-content: center;
      align-items: center;
      display:flex;
      flex-flow: column nowrap;
      gap: 10px;
   }
   .clicked
   {
      color: var(--Gray-1);
      background-color: var(--color-Primary);
   }
   
   @media screen and (min-width : 700px) 
   {
      .lista__financas
      {
         width: 100%;
         max-width: 85%;
      }
   }
   @media screen and (min-width : 800px) 
   {
      .box_buttons::before
      {
         font-weight: var(--Title-2-W);
         overflow-wrap: normal;
         width: 100%;
         content: "Resumo financeiro";
      }
      align-items: center;
      justify-content: end;
      .lista__financas
      {
         width: 100%;
         max-width: 100%;
      }
   }
`