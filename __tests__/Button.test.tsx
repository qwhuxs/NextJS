import { render, screen } from "@testing-library/react";

test("button renders", () => {
  render(<button>Увійти</button>);

  expect(screen.getByText("Увійти")).toBeInTheDocument();
});