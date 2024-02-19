import React from "react";
import { DatePicker, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import "../i18n";
import dayjs from "dayjs";

const PersonalForm: React.FC = () => {
  type FieldType = {
    fullname?: string;
    email?: string;
    dateOfBirth?: string;
  };

  const { t } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={t("Full Name")}
        name="fullname"
        rules={[
          {
            required: true,
            message: `${t("Please input your full name!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("Email")}
        name="email"
        rules={[
          { type: "email", message: `${t("Please input a valid email!")}` },
          {
            required: true,
            message: `${t("Please input your email!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        name="dateOfBirth"
        label={t("Date Of Birth")}
        rules={[
          {
            required: true,
            message: `${t("Please input your date of birth!")}`,
          },
        ]}
      >
        <DatePicker maxDate={dayjs().subtract(20, 'years')} />
      </Form.Item>
    </>
  );
};

export default PersonalForm;
