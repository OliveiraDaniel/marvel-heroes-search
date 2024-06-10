import styled from "styled-components"

export const CardItem = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &:hover {
      p {
        text-decoration: underline;
      }
    }
`

export const TextParagraph = styled.p`
    width: 130px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; 
    text-align: left;

`

export const TextCardButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 185px;
  align-items: center;

  p {
    font-weight: bold;
    color: #464646;
  }
`

export const LoadingGif = styled.div`
    margin: 100px auto;
`