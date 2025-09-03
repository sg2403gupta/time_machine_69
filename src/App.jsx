import styled from "styled-components";
import Heading from "./Heading";
import Input from "./Input";

const StyleDiv = styled.div`
  height: auto;
  width: 80%;
  padding: 5rem;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  background-color: #f3d6bd;

  /* 📱 Responsive */
  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.5rem;
    min-height: 100vh; /* ✅ Take full screen height */
    display: flex;
    flex-direction: column;
    justify-content: center; /* ✅ Vertically center */
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.4rem;

  /* 📱 Responsive */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

function App() {
  return (
    <StyleDiv>
      <StyledBox>
        <Heading />
      </StyledBox>
      <Input />
    </StyleDiv>
  );
}

export default App;
