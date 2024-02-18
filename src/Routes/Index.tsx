import React from "react";
import { allRoute } from "./allRoute";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/common/Layout";

const Index = () => {
  return (
    <>
      {allRoute.map((route) => (
        <Routes key={route.id}>
          <Route
            path={route.path}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        </Routes>
      ))}
    </>
  );
};

export default Index;
