import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {
    const { data: buyers = []} = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/allbuyers');
            const data = await res.json();
            return data;
            console.log(data);
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
    buyers.map( (buyer,i) =>  <tr>
        <th scope="row">{i+1}</th>
        <td>{buyer.name}</td>
        <td>{buyer.email}</td>
        <td>{buyer.role}</td>
      </tr>)
   }
   
  </tbody>
</table>
</div>
        </div>
        </div>
    );
};

export default AllBuyers;