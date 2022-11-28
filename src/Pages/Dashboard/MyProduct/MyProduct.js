import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyProduct = ({sellerProduct,handleSellerProductDelete,handleSellerProductStatus}) => {
  //  const {setSellerAdvertise} = useContext(AuthContext);
    // console.log(sellerProduct);
    const {productName,price,condition,location,purchase,phone,category,description,photoURL,_id}=sellerProduct;

     
  



    return (
        <div className='mt-5 pt-5 container'>
           <div>
           <div>
      <div className="card mb-3" style={{ maxWidth: "740px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={photoURL}
              className="img-fluid rounded-start p-3"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title">{productName}</h5>
              <div className="d-flex ">
                <div className="fs-6 ">
                  <p>Price: ${price}</p>
                  <p>category: {category}</p>
                  <p>description: {description}</p>
                  <p>phone: {phone}</p>
                  
                </div>
                <div>
                  <p>condition: {condition}</p>
                  <p>purchase: {purchase}</p>
                  <p>location: {location}</p>
                </div>
              </div>
              {/* <!-- Button trigger modal --> */}

              <button
              onClick={()=>handleSellerProductDelete(_id)}
                type="button"
                class="btn btn-danger"
               
              >
                delete
              </button>
              <button
              onClick={()=>handleSellerProductStatus(_id)} 
                type="button"
                class="btn btn-danger"
               
              >
               advertise
              </button>
            </div>

            
    
          </div>
        </div>
      </div>

     
    </div>
           </div>
        </div>
    );
};

export default MyProduct;