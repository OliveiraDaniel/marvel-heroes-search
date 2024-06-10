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
    color: #404040;
  }
`

export const LoadingGif = styled.div`
    margin: 100px auto;
`

export const PaginationButton = styled.button`
  width: 0;
  height: 0;
  margin: auto 50px;
  background: #fff;
  cursor: pointer;

  &:hover {
    opacity:0.8;
  }

  &:disabled {
    opacity:0.5;
  }

  &.right {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 20px solid red;
    border-right: none;
  }

  &.left {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 20px solid red;
    border-left: none;
  }
`