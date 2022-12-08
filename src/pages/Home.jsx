import React from "react";
import Header from "../features/header/Header";
import Layout from "../features/layout/Layout";
import Form from "../features/form/Form";
import List from "../features/list/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
