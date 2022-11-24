import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
           {/* <!--====== FOOTER ONE PART START ======--> */}
<footer className="footer-areLink footer-one">
   <div className="footer-widget">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
               <div className="f-about">
                  <div className="footer-logo">
                     <Link to="/">
                     <img src="https://cdn.ayroui.com/1.0/images/footer/logo.svg" alt="Logo" />
                     </Link >
                  </div>
                  <p className="text">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry.
                  </p>
               </div>
               <div className="footer-app-store">
                  <h5 className="download-title">Download Our App Now!</h5>
                  <ul>
                     <li>
                        <Link to="/">
                        <img
                           src="https://cdn.ayroui.com/1.0/images/footer/Link pp-store.svg"
                           alt="app"
                           />
                        </Link >
                     </li>
                     <li>
                        <Link to="/">
                        <img
                           src="https://cdn.ayroui.com/1.0/images/footer/play-store.svg"
                           alt="play"
                           />
                        </Link >
                     </li>
                  </ul>
               </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
               <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                     <li><Link to="/">About</Link ></li>
                     <li><Link to="/">Contact</Link ></li>
                     <li><Link to="/">Marketing</Link ></li>
                     <li><Link to="/">Awards</Link ></li>
                  </ul>
               </div>
               {/* <!-- footer link --> */}
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
               <div className="footer-link">
                  <h6 className="footer-title">Services</h6>
                  <ul>
                     <li><Link to="/">Products</Link ></li>
                     <li><Link to="/">Business</Link ></li>
                     <li><Link to="/">Developer</Link ></li>
                     <li><Link to="/">Insights</Link ></li>
                  </ul>
               </div>
               {/* <!-- footer link --> */}
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
               {/* <!-- Start Footer Contact --> */}
               <div className="footer-contact">
                  <h6 className="footer-title">Help & Suuport</h6>
                  <ul>
                     <li>
                        <i className="lni lni-map-marker"></i> Madison Street, NewYork,
                        USA
                     </li>
                     <li><i className="lni lni-phone-set"></i> +88 556 88545</li>
                     <li><i className="lni lni-envelope"></i> support@ayroui.com</li>
                  </ul>
               </div>
               {/* <!-- End Footer Contact --> */}
            </div>
         </div>
         {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
   </div>
   {/* <!-- footer widget --> */}
   <div className="footer-copyright">
      <div className="container">
         <div className="row">
            <div className="col-lg-12">
               <div
                  className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
                  >
                  <p className="text">Copyright © 2024 AyroUI. All Rights Reserved</p>
                  <ul className="social">
                     <li>
                        <Link to="/">
                        <i className="lni lni-facebook-filled"></i>
                        </Link >
                     </li>
                     <li>
                        <Link to="/">
                        <i className="lni lni-twitter-original"></i>
                        </Link >
                     </li>
                     <li>
                        <Link to="/">
                        <i className="lni lni-instagram-filled"></i>
                        </Link >
                     </li>
                     <li>
                        <Link to="/"
                           ><i className="lni lni-linkedin-original"></i
                           ></Link >
                     </li>
                  </ul>
               </div>
               {/* <!-- copyright --> */}
            </div>
         </div>
         {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
   </div>
   {/* <!-- footer copyright --> */}
</footer>
{/* <!--====== FOOTER ONE PART ENDS ======--> */}
        </div>
    );
};

export default Footer;