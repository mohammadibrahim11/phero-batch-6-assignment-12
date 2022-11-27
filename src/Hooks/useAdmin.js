import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/allusers/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
          console.log(data);
        });
    }
  }, [email]);
  return [isAdmin, 
    isAdminLoading
];
};

export default useAdmin;
