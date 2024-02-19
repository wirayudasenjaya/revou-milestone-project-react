import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../i18n';

const ResultPage: React.FC = () => {
  const { t: translate } = useTranslation();

  return (
    <Result
      status="success"
      title={translate("Successfully Registered!")}
      subTitle={translate("Enjoy your day")}
      extra={[
        <Link to="login">
          <Button type="primary" key="console">
            {translate("Go to login page")}
          </Button>
        </Link>,
      ]}
    />
  );
};

export default ResultPage;
