
import React from 'react';

const Dashboard = () => {
  return (
    <div>
       this is dashboard
    </div>
  );
};

export default Dashboard;





// import { useQuery } from "@tanstack/react-query";
// import React, { useContext } from "react";
// import AuthContext from '../../Context/AuthProvider'

// const Dashboard = () => {
//   // const [bookings, setBookings] = useState([]);
// const {user} = useContext(AuthContext);

//     const { data : bookings = [] } = useQuery({
//       queryKey: ["bookings"],
//       queryFn: async () => {
//         const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`);
//         const data = await res.json();
//         return data;
//       },

//     });

//   // useEffect(() => {
//   //   fetch(`http://localhost:5000/bookings?email=${user.email}`, {
//   //     headers: {
//   //       authorization: `bearer ${localStorage.getItem("accessToken")}`,
//   //     },
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setBookings(data);
//   //       console.log(data);
//   //     });
//   // }, []);
//   return (
//     <div>
//       <div>
//         <h1>booked products</h1>
//         <div>
//           <table class="table">
//             <thead>
//               <tr>
//                 <th scope="col"></th>
//                 <th scope="col">name</th>
//                 <th scope="col">email</th>
//                 <th scope="col">product</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookings.map((booking, i) => (
//                 <tr>
//                   <th scope="row">{i + 1}</th>
//                   <td>{booking.name}</td>
//                   <td>{booking.email}</td>
//                   <td>{booking.itemName}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
