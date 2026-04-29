import { render, screen } from "@testing-library/react";

describe("Profile page", () => {
  test("profile title renders", () => {
    render(<h1>👤 Профіль</h1>);

    expect(screen.getByText(/профіль/i)).toBeInTheDocument();
  });
});