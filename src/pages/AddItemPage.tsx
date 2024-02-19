import React from "react";
import { Button, Form } from "antd";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import ItemForm from "../components/ItemForm";

interface AddItemPageProps {}

const AddItemPage: React.FC<AddItemPageProps> = () => {
  const { t: translate } = useTranslation();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    const items = localStorage.getItem("items");
    const parsedItems = JSON.parse(items || "[]");
    localStorage.setItem("items", JSON.stringify([...parsedItems, values]));
    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };
  return (
    <div className="dashboard">
      <h1>Add Item</h1>
      <Form
        name="basic"
        layout="vertical"
        className="add-form"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <ItemForm />

        <Form.Item className="text-right">
          <Link to="/">
            <Button type="default" style={{ marginRight: "0.5rem" }}>
              {translate("Cancel")}
            </Button>
          </Link>

          <Button type="primary" htmlType="submit">
            {translate("Submit")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddItemPage;
