import styled from "styled-components";

export const HeroDetailContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 10px 50px;
`

export const ContainerName = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-transform: uppercase;  
`

export const ContainerDescription = styled.div`
    color: #848484;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 35px;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 120px;
        margin: 10px 0;
     }

    strong {
        margin-bottom: 15px;
    }

    .container-image-qty {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        margin-right: 15px;
        align-items: center;
        font-weight: 700;
        color: #464646;
        font-size: 15px;
    }

    img {
        margin: inherit;
    }
`

export const ContainerRatings = styled.div`
    flex-direction: collumn;
    justify-content: space-between;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 35px;

    ul {
        display: flex;
        margin: 0;
        padding-left: 5px;

        li {
            margin-left: 5px;
        }
    }
`

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    img {
        max-width: 550px;
    }
`
export const ContainerLastHq = styled.div`
    span {
        margin-left: 10px;
        color: #464646;
        font-size: 15px;
        font-weight: 500;
      }
`

export const ContainerLastComics = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 35px;

    h3 {
        text-align: left;
        font-weight: bold;
        color: #646464;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        padding: 0;
        justify-content: center;

        li {
            width: 190px;
            font-size: 13px;
            width: 155px;
            font-size: 13px;
            margin-right: 50px;
        }
    }
`