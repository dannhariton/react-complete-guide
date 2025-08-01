import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if the req succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "p1",
          title: "First Post",
        },
      ],
    });

    // Arrange
    render(<Async />);

    // Act
    // ... nothing

    // Assess
    const list = await screen.findAllByRole("listitem");
    expect(list).not.toHaveLength(0);
  });
});
