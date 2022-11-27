import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/allusers/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false);
          console.log(data);
        });
    }
  }, [email]);
  return [isBuyer, 
    isBuyerLoading
];
};

export default useBuyer;
