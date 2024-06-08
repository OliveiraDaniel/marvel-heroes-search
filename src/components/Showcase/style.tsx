import styled from "styled-components"

export const CardItem = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`

export const TextCardButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 185px; 
  border-bottom: 3px solid #fe0000;

  p {
    font-weight: bold;
    color: #464646;
  }

  button {
    border: none;
    background-color: #fff;
    background: url('/assets/favorito_02.svg') no-repeat 0 0;
    width: 35px;
    display: flex;
    justify-content: space-between;
    background-position: center;
  }
`