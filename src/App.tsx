import React from "react";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./routes/index";
import PageLayout from "./pages/Layout";

const App: React.FC = () => {
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(user || "{}");

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a82a22",
        },
        components: {
          Layout: {
            bodyBg: "#fff",
          },
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          {parsedUser.isLoggedIn ? (
            <Route path="/" element={<PageLayout />}>
              {protectedRoutes.map((route: any, index: any) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}

                />
              ))}
            </Route>
          ) : (
            publicRoutes.map((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))
          )}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
