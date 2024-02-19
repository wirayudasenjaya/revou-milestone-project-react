import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

import '../i18n';

const LoginForm: React.FC = () => {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const { t: translate } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={translate("Username")}
        name="username"
        rules={[
          {
            required: true,
            message: `${translate("Please input your username!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={translate("Password")}
        name="password"
        rules={[
          {
            required: true,
            message: `${translate("Please input your password!")}`,
          }
        ]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );
};

export default LoginForm;
