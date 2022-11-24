import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div>
            {/* <!--====== ERROR PART START ======--> */}
<section class="error-area error-one">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-xxl-7 col-xl-8 col-lg-8">
            <div class="error-content text-center">
               <span class="fs-1">404</span>
               <h5 class="sub-title">Page Not Found</h5>
               <p class="text">
                 
               </p>
               <div class="">
                
                     <div class="error-btn rounded-buttons">
                       <Link to='/home' > <button class="btn btn-primary rounded-full">back to home </button></Link>
                     </div>
               
               </div>
            </div>
            {/* <!-- error content --> */}
         </div>
      </div>
      {/* <!-- row --> */}
   </div>
   {/* <!-- container --> */}
</section>
{/* <!--====== ERROR PART ENDS ======--> */}
        </div>
    );
};

export default ErrorPage;