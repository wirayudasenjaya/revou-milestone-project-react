import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import { useTranslation } from "react-i18next";
import '../i18n';
import { city, state } from "../utils";

const FormPage2: React.FC = () => {
  type FieldType = {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };

  const { t } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={t("Street")}
        name="street"
        rules={[
          {
            required: true,
            message: `${t("Please input your address street!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("City")}
        name="city"
        rules={[
          {
            required: true,
            message: `${t("Please input your address city!")}`,
          },
        ]}
      >
        <Select options={city} />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("State")}
        name="state"
        rules={[
          {
            required: true,
            message: `${t("Please input your address state!")}`,
          },
        ]}
      >
        <Select options={state} />
      </Form.Item>

      <Form.Item<FieldType>
        label={t("Zip Code")}
        name="zipcode"
        rules={[
          {
            required: true,
            message: `${t("Please input your address zip code!")}`,
          },
        ]}
      >
        <InputNumber min={10000} max={99999} />
      </Form.Item>
    </>
  );
};

export default FormPage2;
