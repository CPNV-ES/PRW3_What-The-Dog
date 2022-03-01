import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const text = screen.getByText(/homepage/i);

    expect(text).toBeInTheDocument();
  });
});
