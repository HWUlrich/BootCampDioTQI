import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 2px solid #ccc;
    border-radius: 10px;
    width: 100%;
    height: 45px;
    padding: 10px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 10px 16px;
    margin: 0 16px;
    border-radius: 10px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
