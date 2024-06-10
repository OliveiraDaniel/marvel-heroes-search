import styled from "styled-components"

export const LoadingGif = styled.div`
    margin: 100px auto;
    background: url('/assets/loading.gif');
    background-size: contain;
    width: 150px;
    height: 150px;
`

export const FavoriteStyle = styled.button`
    border: none;
    background-color: #fff;
    background: url('/assets/favorito_02.svg') no-repeat 0 0;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    background-position: center;
    cursor: pointer;
`

export const StrongText = styled.strong`
    font-weight: bold;
    color: #464646;
`