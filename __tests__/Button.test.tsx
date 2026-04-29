import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("renders login button", () => {
    render(<button>Увійти</button>);

    const button = screen.getByRole("button", { name: /увійти/i });

    expect(button).toBeInTheDocument();
  });
});