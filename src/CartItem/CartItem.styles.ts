import styled from "styled-components";

export const CartItemWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); */
  margin: 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    h3 {
      margin: 0;
      padding: 0;
    }
    img {
      height: 50px;
      padding: 10px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: 12px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* align-items: center; */
    .amount {
      font-size: 24px;
      margin: 0;
      font-weight: 600;
    }
    .content-sec {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      button {
        /* width: 30px; */
        font-size: 2rem;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border: 0;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
`;
