import React from "react";
import { Form, Input, InputNumber } from "antd";
import { useTranslation } from "react-i18next";

import '../i18n';

const ItemForm: React.FC = () => {
  type FieldType = {
    item?: string;
    quantity?: number;
  };

  const { t: translate } = useTranslation();

  return (
    <>
      <Form.Item<FieldType>
        label={translate("Item Name")}
        name="item"
        rules={[
          {
            required: true,
            message: `${translate("Please input item name!")}`,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={translate("Quantity")}
        name="quantity"
        rules={[
          {
            required: true,
            message: `${translate("Please input item quantity!")}`,
          },
        ]}
      >
        <InputNumber className="w-full" />
      </Form.Item>
    </>
  );
};

export default ItemForm;
