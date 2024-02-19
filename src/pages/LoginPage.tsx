import React, { useEffect, useState } from "react";
import { Button, Form, Layout, Select } from "antd";
import background from "../assets/image.webp";
import { useTranslation } from "react-i18next";
import "../i18n";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const user = localStorage.getItem("user");
  const usersList = localStorage.getItem("usersList");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "id", label: "Indonesia" },
  ];
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {}, [selectedLang]);

  const onFinish = (values: any) => {
    const parsedUsersList = JSON.parse(usersList || "[]");
    const selectedUser = parsedUsersList.find((item: any) => item["username"] === values.username);
    const userIndex = parsedUsersList.findIndex((item: any) => item["username"] === values.username);

    if (
      values.username === selectedUser.username &&
      bcrypt.compareSync(values.password, selectedUser.password)
    ) {
      parsedUsersList[userIndex].isLoggedIn = true;
      selectedUser.isLoggedIn = true;
      localStorage.setItem("usersList", JSON.stringify(parsedUsersList));
      localStorage.setItem("user", JSON.stringify(selectedUser));
      navigate("/dashboard", { replace: true });
      window.location.reload();
    } else {
      setError(true);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    setSelectedLang(value);
  };

  return (
    <Layout className="layout">
      <img src={background} alt="background" className="background" />
      <section className="form-box">
        <Select
          defaultValue="en"
          className="select-option"
          onChange={handleChange}
          options={languageOptions}
        />
        <br />
        <h1>{t("Login")}</h1>
        {error && (
          <div className="error-box">
            <p>{t("Invalid Login")}</p>
          </div>
        )}
        <Form
          name="basic"
          layout="vertical"
          className="form"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <LoginForm />

          <Form.Item className="text-right">
            <Button type="primary" htmlType="submit">
              {t("Submit")}
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Layout>
  );
};

export default LoginPage;
