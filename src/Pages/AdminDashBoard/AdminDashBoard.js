import { useQuery } from "@tanstack/react-query";
import React from "react";

const AdminDashBoard = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">role</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id}>
              <th scope="row">{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* <td> {user.} </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashBoard;
