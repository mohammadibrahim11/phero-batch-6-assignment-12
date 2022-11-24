import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            {/* <!--====== BLOG PART START ======--> */}
<section class="blog-area pb-5">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="" alt="Blog"
                     /></a> */}
                  <a href="javascript:void(0)" class="category">Technology</a>
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     <a href="javascript:void(0)">
                     What are the different ways to manage a state in a React application?
                     </a>
                  </h5>
                  {/* <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p class="text text-start">
                  Beau Carnes. React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.
                  </p>
                  <a class="more" href="javascript:void(0)">READ MORE</a>
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="" alt="Blog"
                     /></a> */}
                  <a href="javascript:void(0)" class="category">Lifestyle</a>
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     <a href="javascript:void(0)">
                     How does prototypical inheritance work?
                     </a>
                  </h5>
                  {/* <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p class="text text-start">
                  When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
                  </p>
                  <a class="more" href="javascript:void(0)">READ MORE</a>
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="" alt="Blog"
                     /></a> */}
                  <a href="javascript:void(0)" class="category">Science</a>
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     <a href="javascript:void(0)">
                     What is a unit test? Why should we write unit tests?
                     </a>
                  </h5>
                  {/* <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p class="text text-start">
                  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                  </p>
                  <a class="more" href="javascript:void(0)">READ MORE</a>
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="" alt="Blog"
                     /></a> */}
                  <a href="javascript:void(0)" class="category">Science</a>
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     <a href="javascript:void(0)">
                     React vs. Angular vs. Vue?
                     </a>
                  </h5>
                  {/* <span><i class="lni lni-calendar"></i> Mar 23, 2022</span> */}
                  {/* <span><i class="lni lni-comments-alt"></i> 24 Comment</span> */}
                  <p class="text text-start">
                  Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.
                  </p>
                  <a class="more" href="javascript:void(0)">READ MORE</a>
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