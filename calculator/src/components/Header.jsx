import { styled } from "styled-components";
import logo from "../assets/investment-calculator-logo.png";

const HeaderComponent = styled.header`
  text-align: center;
  margin: 3rem auto;

  & img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    background-color: transparent;
  }

  & h1 {
    font-size: 1.5rem;
  }
`;

export default function Header({ title }) {
  return (
    <HeaderComponent>
      <img src={logo} alt="app logo" />
      <h1>{title}</h1>
    </HeaderComponent>
  );
}
