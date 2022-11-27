import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = []} = useQuery({
        queryKey: ['allSellers'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allSellers');
            const data = await res.json();
            return data;
            
        }
    })
    return (
        <div>
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
    sellers.map( (user,i) =>  <tr>
        <th scope="row">{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td  className='btn bg-danger btn-danger'>delete</td>
      </tr>)
   }
   
  </tbody>
</table>
</div>
        </div>
        </div>
    );
};

export default AllSellers;