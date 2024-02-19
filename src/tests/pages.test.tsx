import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import "../matchMedia.mock";
import "../setupTests";

import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AddItemPage from "../pages/AddItemPage";
import DashboardPage from "../pages/DashboardPage";

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <BrowserRouter>{children}</BrowserRouter>
    </RecoilRoot>
  );
};

describe("utility", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function dashboardUtils() {
    const userData = {
      fullname: "Wirayuda",
      email: "wira@mail.com",
      dateOfBirth: "1999-01-01",
      street: "Jl. Jalan",
      city: "Jakarta",
      state: "DKI Jakarta",
      username: "wirayuda",
      isLoggedIn: true,
    };
    window.localStorage.setItem("user", JSON.stringify(userData));
    const utils = render(<DashboardPage />, { wrapper: Wrappers });
    return {
      userData,
      ...utils,
    };
  }

  test("render register page", () => {
    render(<RegisterPage />, { wrapper: Wrappers });
    const linkElement = screen.getByText(/Personal Information/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render login page", () => {
    const testFunc = jest.fn();
    render(<LoginPage />, { wrapper: Wrappers });
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render dashboard page", async () => {
    const { userData } = dashboardUtils();
    await waitFor(() => {
      const linkElement = screen.getByText(/Hello/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test("render add item page", () => {
    render(<AddItemPage />, { wrapper: Wrappers });
    const linkElement = screen.getByText(/Add Item/i);
    expect(linkElement).toBeInTheDocument();
  });
});
