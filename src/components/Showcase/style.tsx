import styled from "styled-components"

export const CardItem = styled.div`
    width: 187px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover {
        box-shadow: inset 0 0 0 1px #848484;
    }
`

export const TextParagraph = styled.p`
    width: 187px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 

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

export const LoadingGif = styled.div`
    margin: 100px auto;
`