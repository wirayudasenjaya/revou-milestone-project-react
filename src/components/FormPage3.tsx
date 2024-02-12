import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import '../i18n';

const FormPage3: React.FC = () => {
  type FieldType = {
    username?: string;
    password?: string;
    confirm?: string;
  };

  const { t } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={t("Username")}
        name="username"
        rules={[
          {
            required: true,
            message: `${t("Please input your username!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("Password")}
        name="password"
        rules={[
          {
            required: true,
            message: `${t("Please input your password!")}`,
          },
          {
            pattern: /^.{8,}$/,
            message: `${t("8 characters")}`,
          },
          {
            pattern: /^(?=.*[A-Z]).*$/,
            message: `${t("One uppercase letter")}`,
          },
          {
            pattern: /^(?=.*[a-z]).*$/,
            message: `${t("One lowercase letter")}`,
          },
          {
            pattern: /^(?=.*\d).*$/,
            message: `${t("One number")}`,
          },
          {
            pattern: /^(?=.*[!@#$%^&*_=+-]).*$/,
            message: `${t("One special character")}`,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="confirm"
        label={t("Confirm Password")}
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: `${t("Please confirm your password!")}`,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(`${t("The new password that you entered do not match!")}`)
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );
};

export default FormPage3;
