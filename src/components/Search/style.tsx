import styled from "styled-components"

export const Input = styled.input`
    padding: 5px;
    width: 100%;
    max-width: 867px;
    min-width: 300px;
    margin: auto;
    border-radius: 40px;
    border: none;
    height: 67px;
    display: block;
    background: url('/assets/ic_busca.svg') #ffeeee no-repeat 15px 25px;
    text-indent: 70px;
    font-size: 18px;
    color: #ff0000;

    &::placeholder {
        color: #ff0000;
        font-family: Roboto, sans-serif;
    }
`