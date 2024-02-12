import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <Layout>
      <nav className="navbar">
        <h1>Dashboard</h1>
      </nav>
      <Outlet />
    </Layout>
  );
};

export default PageLayout;
