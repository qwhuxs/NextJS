import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "@/app/login/LoginForm";
import { signIn } from "next-auth/react";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

test("render login form", () => {
  render(<LoginForm />);

  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Пароль")).toBeInTheDocument();
  expect(screen.getByText("Увійти")).toBeInTheDocument();
});

test("click login button calls signIn", () => {
  render(<LoginForm />);

  const button = screen.getByText("Увійти");

  fireEvent.click(button);

  expect(signIn).toHaveBeenCalled();
});

test("click google login", () => {
  render(<LoginForm />);

  fireEvent.click(screen.getByText("Google"));

  expect(signIn).toHaveBeenCalledWith("google", { callbackUrl: "/profile" });
});