import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 1240px; */
  height: 80px;
  border-bottom: #176b87 2px solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 90%;
  /* padding: 10px 2%; */
  margin: auto;
  /* align-items: center; */
  padding: 6px 50px;
  font-family: "Poppins", sans-serif;
  color: #176b87;
  h3 {
    font-size: 2.25rem;
    font-family: "Montserrat", sans-serif;
  }
  .cart {
    position: relative;
    cursor: pointer;

    .number {
      background-color: red;
      border-radius: 50px;
      font-size: 18px;
      width: 30px;
      height: 30px;
      color: white;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
    }
  }
`;
