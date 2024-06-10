import styled from "styled-components";

export const StyledFilters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 15px auto;

    .total-heroes {
      font-weight: 600;
      color: #8c8c8c;
      width: 50%;
    }

    .order-heroes {
      font-weight: 600;
      color: #8c8c8c;
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      color: #fa7c7c;

      img {
        margin: auto 15px;
        cursor: pointer;
      }
    }

    .favorite-only {
      font-weight: 600;
      color: #8c8c8c;
      flex-direction: row;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #fa7c7c;

      img, span {
        margin-left: 10px;
      }
    }
`