import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

import '../i18n';

const AccountForm: React.FC = () => {
  type FieldType = {
    username?: string;
    password?: string;
    confirm?: string;
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
          },
          {
            pattern: /^.{8,}$/,
            message: `${translate("8 characters")}`,
          },
          {
            pattern: /^(?=.*[A-Z]).*$/,
            message: `${translate("One uppercase letter")}`,
          },
          {
            pattern: /^(?=.*[a-z]).*$/,
            message: `${translate("One lowercase letter")}`,
          },
          {
            pattern: /^(?=.*\d).*$/,
            message: `${translate("One number")}`,
          },
          {
            pattern: /^(?=.*[!@#$%^&*_=+-]).*$/,
            message: `${translate("One special character")}`,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="confirm"
        label={translate("Confirm Password")}
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: `${translate("Please confirm your password!")}`,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(`${translate("The new password that you entered do not match!")}`)
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

export default AccountForm;
