import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.4rem;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 35px;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  border: none;
`;

const StyleResult = styled.div`
  margin-top: 20px;
  text-align: center;
`;

// 🎬 Animation for last message
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const AnimatedMessage = styled.h2`
  animation: ${fadeIn} 1s ease-in-out;
  color: #d10505;
`;

function Input() {
  const [searchInput, setSearchInput] = useState("");
  const [currentSentence, setCurrentSentence] = useState("");
  const [isLast, setIsLast] = useState(false);

  const sentences = [
    "Building Wormholes...🕳️",
    "Calling Aliens..👽",
    "Missed call received from Elon Musk...📞📲",
    "Travelling through dimensions...🏃‍♂️🏃‍♂️",
    " 2026 me to duniya khatam h...💀💥",
  ];

  function handleSearch() {
    if (!searchInput.trim()) {
      alert("Please type something before searching!");
      return;
    }

    let index = 0;
    setIsLast(false);
    setCurrentSentence(sentences[index]);

    const interval = setInterval(() => {
      index++;
      if (index < sentences.length) {
        setCurrentSentence(sentences[index]);
        setIsLast(index === sentences.length - 1);
      } else {
        clearInterval(interval);
      }
    }, 2000);

    setSearchInput("");
  }

  return (
    <>
      <StyledContainer>
        <StyledInput
          placeholder="Type year to travel....⏲️"
          type="number"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </StyledContainer>

      <StyledContainer>
        <StyleResult>
          {currentSentence &&
            (isLast ? (
              <AnimatedMessage>{currentSentence}</AnimatedMessage>
            ) : (
              <h2>{currentSentence}</h2>
            ))}
        </StyleResult>
      </StyledContainer>
    </>
  );
}

export default Input;
