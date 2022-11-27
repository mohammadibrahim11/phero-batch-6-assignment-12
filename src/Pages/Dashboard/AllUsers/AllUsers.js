import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allusers');
            const data = await res.json();
            return data;
            console.log(data);
        }
    });
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/allusers/admin/${id}`, {
          method: "PUT",
          headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              toast.success("make admin successfully");
              refetch();
            }
            console.log(data);
          });
      };

    return (
        <div className='mt-5 pt-5'>
<div className='mt-5, pt-5 container'>
<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">role</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map( (user,i) =>  <tr>
        <th scope="row">{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-primary"
                  >
                    make admin
                  </button>
                )}
              </td>
      </tr>)
   }
   
  </tbody>
</table>
</div>
        </div>
    );
};

export default AllUsers;