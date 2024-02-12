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
    const parsedUser = JSON.parse(user || "{}");
    console.log(values.username === parsedUser.username);
    if (
      values.username === parsedUser.username &&
      bcrypt.compareSync(values.password, parsedUser.password)
    ) {
      parsedUser.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(parsedUser));
      navigate("/dashboard", { replace: true });
      window.location.reload();
    } else {
      console.log("wrong", parsedUser);
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

          <Form.Item style={{ textAlign: "right" }}>
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
