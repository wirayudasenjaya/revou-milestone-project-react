import React from "react";
import { DatePicker, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import "../i18n";

const PersonalForm: React.FC = () => {
  type FieldType = {
    fullname?: string;
    email?: string;
    dateOfBirth?: string;
  };

  const { t: translate } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={translate("Full Name")}
        name="fullname"
        rules={[
          {
            required: true,
            message: `${translate("Please input your full name!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={translate("Email")}
        name="email"
        rules={[
          { type: "email", message: `${translate("Please input a valid email!")}` },
          {
            required: true,
            message: `${translate("Please input your email!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        name="dateOfBirth"
        label={translate("Date Of Birth")}
        rules={[
          {
            required: true,
            message: `${translate("Please input your date of birth!")}`,
          },
        ]}
      >
        <DatePicker maxDate={dayjs().subtract(20, 'years')} />
      </Form.Item>
    </>
  );
};

export default PersonalForm;
