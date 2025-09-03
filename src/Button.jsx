import styled from "styled-components";

const StyleButton = styled.button`
  width: 20%;
  color: white;
  background-color: #0091ff;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #0055ff;
  }
`;
function Button({ onClick }) {
  return <StyleButton onClick={onClick}>Click Me</StyleButton>;
}

export default Button;
