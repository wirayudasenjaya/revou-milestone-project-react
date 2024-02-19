import React, { useEffect, useState } from "react";
import { Button, Form, Layout, Select } from "antd";
import { useRecoilState } from "recoil";
import { useTranslation } from "react-i18next";
import bcrypt from "bcryptjs";

import '../i18n';

import Step from "../components/Step";
import PersonalForm from "../components/PersonalForm";
import AddressForm from "../components/AddressForm";
import AccountForm from "../components/AccountForm";
import ResultPage from "../components/Result";
import { userState } from "../atom";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const [current, setCurrent] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [user, setUser] = useRecoilState<any>(userState);
  const users = JSON.parse(localStorage.getItem("usersList") ?? "[]");
  const {t: translate, i18n} = useTranslation();
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "id", label: "Indonesia" },
  ]
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const pageTitle = ['Personal Information', 'Address Information', 'Account Information'];
  const formPage = [<PersonalForm />, <AddressForm />, <AccountForm />];

  useEffect(() => {}, [selectedLang])

  useEffect(() => {
    if(showResult === true) {
      users.push(user);
      localStorage.setItem("usersList", JSON.stringify(users));
    }
  }, [showResult])

  const onFinish = (values: any) => {
    if (current === 2) {
      const hashed = bcrypt.hashSync(values.password, 10);
      const checkUsername = users.find((item: any) => item["username"] === values.username);
      if (checkUsername) {
        alert("Username already exists");
        return;
      }
      setUser((prev: any) => ({ ...prev, username: values.username, password:  hashed}));
      setShowResult(true);
    } else {
      setCurrent(current + 1);
      setUser((prev: any) => ({ ...prev, ...values }));
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
      {showResult === true ? (
        <div className="result">
          <ResultPage />
        </div>
      ) : (
        <>
          <img src="/image/image.webp" alt="background" className="background" />
          <section className="form-box">
            <Select
              defaultValue="en"
              className="select-option"
              onChange={handleChange}
              options={languageOptions}
            />
            <br />
            <Step index={current} />
            <br />
            <h1>
              {pageTitle[current]}
            </h1>
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
              {formPage[current]}

              <Form.Item className="text-right">
                <Button
                  style={{ margin: "0 8px" }}
                  disabled={current === 0 ? true : false}
                  onClick={() => setCurrent(current - 1)}
                >
                  {translate("Previous")}
                </Button>
                {current < 2 && (
                  <Button type="primary" htmlType="submit">
                    {translate("Next")}
                  </Button>
                )}
                {current === 2 && (
                  <Button type="primary" htmlType="submit">
                    {translate("Submit")}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </section>
        </>
      )}
    </Layout>
  );
};

export default RegisterPage;
