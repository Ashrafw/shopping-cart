import styled from "styled-components";

export const WrapperItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-direction: column;
  width: 260px;
  /* gap: 16px; */
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  font-family: Helvetica, sans-serif;
  img {
    /* width: 120px; */
    max-height: 120px;
    margin: 0;
    object-fit: cover;
  }
  .content {
    width: 100%;
    margin: 10px;
    padding: 10px;
    /* box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); */
    border-radius: 4px;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    height: 60px;
  }
  h3 {
    font-size: 22px;
    text-align: center;
    background-color: #176b87;
    color: white;
    width: 100%;
    padding: 10px;
  }
  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  button {
    font-size: 18px;
    width: 200px;
    padding: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    border: none;
    margin: 10px 10px 20px;
    background-color: #176b87;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
