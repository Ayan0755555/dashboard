"use client";
import React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import UserList from "../users/userList";

export default function Analytics() {
  return (
    <>
      <Layout>
        <h2 class="sm:text-4xl text-2xl font-extrabold text-center mb-16">
          Users List
        </h2>
        <UserList />
      </Layout>
    </>
  );
}
