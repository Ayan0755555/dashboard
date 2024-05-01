import React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import UserList from "../users/userList";

export default function Analytics() {
  return (
    <>
      <Layout>
        <h2 className="font-bold text-center">Users</h2>
        <UserList />
      </Layout>
    </>
  );
}
