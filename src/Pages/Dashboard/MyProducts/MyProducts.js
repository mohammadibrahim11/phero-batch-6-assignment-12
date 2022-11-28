import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MyProduct from "../MyProduct/MyProduct";

const MyProducts = () => {
  const [sellerProducts, setSellerProducts] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/myproduct")
      .then((res) => res.json())
      .then((data) => {
        setSellerProducts(data);
        console.log(data);
      });
  }, []);

  const handleSellerProductDelete = (id) => {
    const agree = window.confirm("are your sure you want to delete?");
    if (agree) {
      fetch(`http://localhost:5000/myproduct/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("deleted successfully");
            const remaining = sellerProducts.filter((sp) => sp._id !== id);
            setSellerProducts(remaining);
          }
          console.log(data);
        });
    }
  };

          

  const handleSellerProductStatus =(id)=> {
    fetch(`http://localhost:5000/myproduct/${id}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({status:true}),


    })

  }

  return (
    <div>
     
     {
        sellerProducts.length > 0 ? <>
        <p className="text-primary">you have <span className="text-danger" >{sellerProducts.length}</span></p>
        products
        </>
        : <p className="text-danger">no products found</p>
     }
     

      {sellerProducts.map((sellerProduct) => (
        <MyProduct
          sellerProduct={sellerProduct}
          key={sellerProduct._id}
          handleSellerProductDelete={handleSellerProductDelete}
          handleSellerProductStatus={handleSellerProductStatus}
        ></MyProduct>
      ))}
    </div>
  );
};

export default MyProducts;
