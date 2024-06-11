import styled from "styled-components"

export const Input = styled.input`
    padding: 5px;
    width: 100%;
    max-width: 867px;
    min-width: 300px;
    border-radius: 40px;
    border: none;
    height: 67px;
    display: block;
    background: url('/assets/ic_busca.svg') #ffeeee no-repeat 15px 25px;
    text-indent: 70px;
    font-size: 18px;
    color: #fa7c7c;

    &::placeholder {
        color: #fa7c7c;
    }
`

export const StyledSearchContainer = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 35px 0;

  @media (max-width: 500px) {
    width: 95%;
  }
`