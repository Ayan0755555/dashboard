import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Email, Password } from "@mui/icons-material";

const schema = yup
  .object({
    name: yup.string().required("Please Enter Name"),
    Email: yup.string().email().required("Please Enter Email"),
    Password: yup.string().required("Please Enter Password"),
  })
  .required();

function UserDetails() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post(`/api/users`) // Assuming 'data' contains the data you want to send
      .then((response) => {
        console.log("Data", response);
        setData(response.data); // Assuming you want to update state with the response data
      })
      .catch((error) => {
        console.log(error, "this is error!!");
      });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <div>
              <TextField
                fullWidth
                label="Name"
                size="small"
                variant="outlined"
                {...register("name")}
                className="mt-6 ml-[425px]"
              />
              <p className="text-orange-600">{errors.name?.message}</p>
            </div>
            <div>
              <TextField
                fullWidth
                label="Email"
                size="small"
                variant="outlined"
                {...register("Email")}
                className="mt-6 ml-[425px]"
              />
              <p className="text-orange-600">{errors.Email?.message}</p>
            </div>
            <div>
              <TextField
                fullWidth
                label="Password"
                size="small"
                variant="outlined"
                {...register("Password")}
                className="mt-6 ml-[425px]"
              />
              <p className="text-orange-600">{errors.Password?.message}</p>
            </div>
            <div>
              <button
                type="submit"
                className="px-16 py-4 rounded text-black text-sm tracking-wider font-medium outline-none border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 mt-6 ml-[525px]"
                disabled={loading}
              >
                {loading ? "Adding..." : "Add"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default UserDetails;
