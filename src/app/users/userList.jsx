"use client";
import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

//nested data is ok, see accessorKeys in ColumnDef below
// const data = [
//   {
//     name: {
//       firstName: "John",
//       lastName: "Doe",
//     },
//     address: "261 Erdman Ford",
//     city: "East Daphne",
//     state: "Kentucky",
//   },
//   {
//     name: {
//       firstName: "Jane",
//       lastName: "Doe",
//     },
//     address: "769 Dominic Grove",
//     city: "Columbus",
//     state: "Ohio",
//   },
//   {
//     name: {
//       firstName: "Joe",
//       lastName: "Doe",
//     },
//     address: "566 Brakus Inlet",
//     city: "South Linda",
//     state: "West Virginia",
//   },
//   {
//     name: {
//       firstName: "Kevin",
//       lastName: "Vandy",
//     },
//     address: "722 Emie Stream",
//     city: "Lincoln",
//     state: "Nebraska",
//   },
//   {
//     name: {
//       firstName: "Joshua",
//       lastName: "Rolluffs",
//     },
//     address: "32188 Larkin Turnpike",
//     city: "Charleston",
//     state: "South Carolina",
//   },
// ];

const UsersList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("/api/users")
      .then((response) => {
        console.log("Data", response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error, "this is error!!");
      });
  };
  //should be memoized or stable
  const columns = useMemo(
    () => [
        {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 50,
      },
      {
        accessorKey: "Email",
        header: "Email",
        size: 250,
      },
      {
        accessorKey: "Password",
        header: "Password",
        size: 150,
      },
      
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default UsersList;
