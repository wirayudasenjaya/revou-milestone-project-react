import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import '../i18n';

const LoginForm: React.FC = () => {
  type FieldType = {
    username?: string;
    password?: string;
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
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );
};

export default LoginForm;
