import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allusers');
            const data = await res.json();
            return data;
            console.log(data);
        }
    })

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
      </tr>)
   }
   
  </tbody>
</table>
</div>
        </div>
    );
};

export default AllUsers;