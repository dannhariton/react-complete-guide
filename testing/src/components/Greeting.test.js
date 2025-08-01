import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assess
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders unchanged text if button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assess
    const element = screen.getByText("It's good to see you", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("renders unchanged text if button WAS clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assess
    const element = screen.getByText("Changed!");
    expect(element).toBeInTheDocument();
  });

  test("does not render if the button was clicked the second time", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assess
    const element = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(element).toBeNull();
  });
});
