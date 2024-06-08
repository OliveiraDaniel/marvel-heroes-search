import styled from "styled-components"

export const Input = styled.input`
    padding: 5px;
    width: 100%;
    max-width: 867px;
    min-width: 300px;
    margin: auto;
    border-radius: 30px;
    border: none;
    height: 67px;
    display: block;
    background: url('/assets/ic_busca.svg') #f8cfcf no-repeat 15px 25px;
    text-indent: 55px;
    font-size: 16px;
    color: #ff0000;

    &::placeholder {
        color: #ff0000;
    }
`