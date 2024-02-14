import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../components/Table";
import dayjs from "dayjs";

const DashboardPage: React.FC = () => {
  const user = localStorage.getItem("user");
  const usersList = localStorage.getItem("usersList");
  const parsedUser = JSON.parse(user || "{}");
  const parsedUsersList = JSON.parse(usersList || "[]");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "id", label: "Indonesia" },
  ];
  const [selectedLang, setSelectedLang] = useState<string>("en");

  useEffect(() => {}, [selectedLang]);

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    setSelectedLang(value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem("user");
    localStorage.removeItem("items");
    navigate("/", { replace: true });
    window.location.reload();
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const currentUserIndex = parsedUsersList.findIndex((item: any) => item["username"] === parsedUser.username);
    parsedUsersList[currentUserIndex].isLoggedIn = false;
    localStorage.setItem("usersList", JSON.stringify(parsedUsersList));
    localStorage.removeItem("user");
    localStorage.removeItem("items");
    navigate("/login", { replace: true });
    window.location.reload();
  };

  return (
    <>
      <div className="dashboard">
        <Select
          defaultValue="en"
          className="select-option"
          onChange={handleChange}
          options={languageOptions}
        />
        <br />
        <section className="dashboard-grid">
          <div>
            <div className="profile">
              <img
                src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${parsedUser.fullname}&backgroundColor=a82a22&shapeColor=f1f4dc`}
                alt="avatar"
                className="avatar"
              />
              <div>
                <h1>
                  {t("Hello")}, {parsedUser.fullname}
                </h1>
                <p>{parsedUser.email}</p>
              </div>
            </div>
            <p>
              {t("Username")}: {parsedUser.username}
            </p>
            <p>
              {t("Date Of Birth")}:{" "}
              {dayjs(parsedUser.dateOfBirth).format("DD/MM/YYYY")}
            </p>
            <p>
              {t("Street")}: {parsedUser.street}
            </p>
            <p>
              {t("City")}: {parsedUser.city}
            </p>
            <p>
              {t("State")}: {parsedUser.state}
            </p>
            <p>
              {t("Zip Code")}: {parsedUser.zipcode}
            </p>
            <Button type="primary" key="button1" onClick={handleClick}>
              {t("Back to register")}
            </Button>
            <Button
              type="primary"
              key="button2"
              style={{ marginLeft: "0.75rem" }}
              onClick={handleLogout}
            >
              {t("Logout")}
            </Button>
          </div>
          <div>
            <div className="cart-layout">
              <h2>{t("Your Cart")}</h2>
              <Link to="/dashboard/add">
                <Button type="primary" key="console">
                  {t("Add item")}
                </Button>
              </Link>
            </div>
            <DataTable />
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardPage;
