import React from "react";
import { Steps } from "antd";

interface StepProps {
  index: number;
}

const Step: React.FC<StepProps> = ({ index }) => {
  const steps = [
    {
      title: "",
      content: "personal",
    },
    {
      title: "",
      content: "address",
    },
    {
      title: "",
      content: "account",
    },
  ];

  const items = steps.map((item, index) => ({ key: index, title: item.title }));
  return <Steps current={index ? index : 0} items={items} labelPlacement="vertical" responsive={false} />;
};

export default Step;
