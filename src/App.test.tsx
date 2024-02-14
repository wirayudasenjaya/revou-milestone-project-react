import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import "./matchMedia.mock";
import DashboardPage from "./pages/DashboardPage";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import "./setupTests";
import AddItemPage from "./pages/AddItemPage";

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilRoot>
      <BrowserRouter>{children}</BrowserRouter>
    </RecoilRoot>
  );
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

describe("utility", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  function main() {
    const utils = render(<App />, { wrapper: AppWrapper });
    const fullname = utils.getByLabelText(/Full Name/i);
    const email = utils.getByLabelText(/Email/i);
    const dateOfBirth = utils.getByLabelText(/Date Of Birth/i);
    const button = utils.getByText(/Next/i);
    return {
      fullname,
      email,
      dateOfBirth,
      button,
      ...utils,
    };
  }

  function loginUtils() {
    const mockId = "user";
    const mockJson = {
      username: "wirayuda",
      password: "Asdf123!",
      isLoggedIn: false,
    };
    const testFunc = jest.fn();
    window.localStorage.setItem(mockId, JSON.stringify(mockJson));
    const utils = render(<LoginPage mockFunction={testFunc} />, { wrapper: Wrappers });
    const username = utils.getByLabelText(/Username/i);
    const password = utils.getByLabelText(/Password/i);
    const button = utils.getByText(/Submit/i);
    return {
      username,
      password,
      button,
      testFunc,
      ...utils,
    };
  }

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
    }
  };

  function addItemUtils() {
    const testFunc = jest.fn();
    const utils = render(<AddItemPage mockFunction={testFunc} />, { wrapper: Wrappers });
    const item = utils.getByLabelText(/Item Name/i);
    const quantity = utils.getByLabelText(/Quantity/i);
    const button = screen.getByText(/Submit/i);
    return {
      ...utils,
      item,
      quantity,
      button,
      testFunc,
    };
  }

  test("render register page", () => {
    render(<RegisterPage />, { wrapper: Wrappers });
    const linkElement = screen.getByText(/Personal Information/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("render login page", () => {
    const testFunc = jest.fn();
    render(<LoginPage mockFunction={testFunc} />, { wrapper: Wrappers });
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
    const testFunc = jest.fn();
    render(<AddItemPage mockFunction={testFunc} />, { wrapper: Wrappers });
    const linkElement = screen.getByText(/Add Item/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("error if there is empty field", async () => {
    const { button } = main();
    fireEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText(/Please input your full name!/i)
      ).toBeInTheDocument();
    });
  });

  test("input form and press button", async () => {
    const { fullname, email, button } = main();
    fireEvent.change(fullname, { target: { value: "Wirayuda" } });
    fireEvent.change(email, {
      target: { value: "wirayuda.senjaya@dexagroup.com" },
    });
    const picker = document.getElementsByClassName("ant-picker-input")[0];
    fireEvent.click(picker);
    const date = document.getElementsByClassName("ant-picker-cell-inner")[15];
    fireEvent.click(date);
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText(/Address Information/i)).toBeInTheDocument();
    });
  });

  test("change language", async () => {
    render(<RegisterPage />, { wrapper: Wrappers });
    const dropdown = document.getElementsByClassName("ant-select-selector")[0];
    fireEvent.click(dropdown);
    setTimeout(async () => {
      const language = document.getElementsByClassName(
        "ant-select-item-option-content"
      )[1];
      fireEvent.click(language);
      await waitFor(() => {
        expect(screen.getByText(/Informasi Pribadi/i)).toBeInTheDocument();
      });
    }, 1000);
  });

  test("login", async () => {
    const { username, password, button, testFunc } = loginUtils();
    fireEvent.change(username, { target: { value: "wirayuda" } });
    fireEvent.change(password, {
      target: { value: "Asdf123!" },
    });
    fireEvent.click(button);
    await waitFor(() => {
      expect(testFunc).toHaveBeenCalled();
    }, {timeout: 2000});
  });

  test("add item to cart", async () => {
    const { item, quantity, button, testFunc } = addItemUtils();
    fireEvent.change(item, { target: { value: "Sofa" } });
    fireEvent.change(quantity, {
      target: { value: 1 },
    });
    fireEvent.click(button);
    await waitFor(() => {
      expect(testFunc).toHaveBeenCalled();
    });
  });
});
