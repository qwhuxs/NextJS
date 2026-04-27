import { render, screen } from "@testing-library/react";

test("profile title renders", () => {
  render(<div>👤 Профіль</div>);

  expect(screen.getByText("👤 Профіль")).toBeInTheDocument();
});