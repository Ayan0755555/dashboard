"use client";
import { useState } from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import UserList from "../users/userList";
import UserDetails from "./userDetails";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Analytics() {
  const [addUser, setAddUser] = useState(false);
  return (
    <>
      <Layout>
        {addUser ? (
          <div>
            <h2 class="sm:text-4xl text-2xl font-extrabold text-center mb-16">
              Add User
            </h2>
            <ArrowBackIcon onClick={() => setAddUser(false)} />
            <UserDetails />
          </div>
        ) : (
          <div>
            <h2 class="sm:text-4xl text-2xl font-extrabold text-center mb-16">
              Users
            </h2>
            <button
              type="button"
              class="px-6 py-2 mt-4 mb-4 rounded text-black text-sm tracking-wider font-medium outline-none border-2 border-[#333] hover:bg-[#222] hover:text-white transition-all duration-300"
              onClick={() => setAddUser(true)}
            >
              Add User
            </button>
            <UserList />
          </div>
        )}
      </Layout>
    </>
  );
}
