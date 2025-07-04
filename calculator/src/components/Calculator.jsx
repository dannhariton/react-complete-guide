import { styled } from "styled-components";
import Input from "./Input";

const S = {
  Container: styled.section`
    padding: 1rem;
    max-width: 30rem;
    margin: 2rem auto;
    border-radius: 4px;
    background: linear-gradient(180deg, #307e6c, #2b996d);
  `,
  InputGroup: styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1.5rem;
  `,
};

export default function Calculator({
  onChangeInput,
  userInput,
  inputHandlers,
}) {
  return (
    <S.Container>
      <S.InputGroup>
        <p>
          <Input
            title="Initial Investment"
            type="number"
            required
            value={userInput.initInvestment}
            onChange={(e) => onChangeInput("initInvestment", e.target.value)}
          />
        </p>
        <p>
          <Input
            title="Annual Invesment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </S.InputGroup>
      <S.InputGroup>
        <p>
          <Input
            title="Expected Return"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <Input
            title="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </S.InputGroup>
    </S.Container>
  );
}
