import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  quantity: number;
}

const DataTable: React.FC = () => {
  const items = localStorage.getItem("items");
  const parsedItems = JSON.parse(items || "[]");
  const [dataSource, setDataSource] = useState(parsedItems);

  const handleDelete = (index: number) => {
    parsedItems.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(parsedItems));
    setDataSource([...parsedItems]);
  };

  useEffect(() => {}, [dataSource]);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Button type="primary" onClick={() => handleDelete(index)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      className="w-full"
    />
  );
};

export default DataTable;
