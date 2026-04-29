import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "@/app/login/LoginForm";
import { signIn } from "next-auth/react";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("LoginForm", () => {

  test("renders login form", () => {
    render(<LoginForm />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/пароль/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /увійти/i })).toBeInTheDocument();
  });

  test("click login button calls signIn", () => {
    render(<LoginForm />);

    fireEvent.click(screen.getByRole("button", { name: /увійти/i }));

    expect(signIn).toHaveBeenCalled();
  });

  test("click google login", () => {
    render(<LoginForm />);

    fireEvent.click(screen.getByText(/google/i));

    expect(signIn).toHaveBeenCalledWith("google", {
      callbackUrl: "/profile",
    });
  });

});