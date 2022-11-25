import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            {/* <!--====== BLOG PART START ======--> */}
<section className="blog-areLink pb-5">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-blog blog-style-one">
               <div className="blog-image">
                  {/* <Link to="/"
                     ><img src="" alt="Blog"
                     /></Link > */}
                  <Link to="/" className="category">Technology</Link >
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <Link to="/">
                     What are the different ways to manage Link state in Link React application?
                     </Link >
                  </h5>
                  {/* <span><i className="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i className="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p className="text text-start">
                  Beau Carnes. React state management is Link process for managing the datLink that React components need in order to render themselves. This datLink is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of Link React app.
                  </p>
                  <Link className="more" to="/">READ MORE</Link >
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-blog blog-style-one">
               <div className="blog-image">
                  {/* <Link to="/"
                     ><img src="" alt="Blog"
                     /></Link > */}
                  <Link to="/" className="category">Lifestyle</Link >
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <Link to="/">
                     How does prototypical inheritance work?
                     </Link >
                  </h5>
                  {/* <span><i className="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i className="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p className="text text-start">
                  When it comes to inheritance, JavaScript only has one construct: objects. Each object has Link private property which holds Link link to another object called its prototype. That prototype object has Link prototype of its own, and so on until an object is reached with null as its prototype.
                  </p>
                  <Link className="more" to="/">READ MORE</Link >
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-blog blog-style-one">
               <div className="blog-image">
                  {/* <Link to="/"
                     ><img src="" alt="Blog"
                     /></Link > */}
                  <Link to="/" className="category">Science</Link >
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <Link to="/">
                     What is Link unit test? Why should we write unit tests?
                     </Link >
                  </h5>
                  {/* <span><i className="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i className="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p className="text text-start">
                  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                  </p>
                  <Link className="more" to="/">READ MORE</Link >
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="single-blog blog-style-one">
               <div className="blog-image">
                  {/* <Link to="/"
                     ><img src="" alt="Blog"
                     /></Link > */}
                  <Link to="/" className="category">Science</Link >
               </div>
               <div className="blog-content">
                  <h5 className="blog-title">
                     <Link to="/">
                     React vs. Angular vs. Vue?
                     </Link >
                  </h5>
                  {/* <span><i className="lni lni-calendar"></i> Mar 23, 2022</span> */}
                  {/* <span><i className="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p className="text text-start">
                  Popularity. According to Link survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.
                  </p>
                  <Link className="more" to="/">READ MORE</Link >
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
      </div>
      {/* <!-- row --> */}
   </div>
   {/* <!-- container --> */}
</section>
{/* <!--====== BLOG PART ENDS ======--> */}
        </div>
    );
};

export default Blog;