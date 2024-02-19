import React, { useState } from "react";
import { Form, Input, InputNumber, Select } from "antd";
import { useTranslation } from "react-i18next";
import '../i18n';
import { cityBanten, cityJakarta, state } from "../utils";

const AddressForm: React.FC = () => {
  type FieldType = {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
  };

  const { t: translate } = useTranslation();
  const [selectedState, setSelectedState] = useState<string | undefined>(undefined);

  const handleStateChange = (value: string) => {
    setSelectedState(value);
  };

  const cityOptions = selectedState === "Banten" ? cityBanten : cityJakarta;

  return (
    <>
      <Form.Item<FieldType>
        label={translate("Street")}
        name="street"
        rules={[
          {
            required: true,
            message: `${translate("Please input your address street!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={translate("State")}
        name="state"
        rules={[
          {
            required: true,
            message: `${translate("Please input your address state!")}`,
          },
        ]}
      >
        <Select options={state} onChange={handleStateChange} />
      </Form.Item>

      <Form.Item<FieldType>
        label={translate("City")}
        name="city"
        rules={[
          {
            required: true,
            message: `${translate("Please input your address city!")}`,
          },
        ]}
      >
        <Select options={cityOptions} disabled={!selectedState} />
      </Form.Item>

      <Form.Item<FieldType>
        label={translate("Zip Code")}
        name="zipcode"
        rules={[
          {
            required: true,
            message: `${translate("Please input your address zip code!")}`,
          },
        ]}
      >
        <InputNumber min={10000} max={99999} />
      </Form.Item>
    </>
  );
};

export default AddressForm;
