import React from 'react';
import './Banner.css'

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/y80hdvk/Apple-Mac-Book-Air-core-i5-2014-4-256-GB.jpg" alt="Apple-Mac-Book-Air-core-i5-2014-4-256-GB" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/qkR66BW/Apple-Mac-Book-Air-Intel-Core-i7-2017.webp" alt="Apple-Mac-Book-Air-Intel-Core-i7-2017" border="0"></a>
<a href="https://ibb.co/bRrhXdq"><img src="https://i.ibb.co/tPbfDCk/Dell-Latitude-5420.jpg" alt="Dell-Latitude-5420" border="0"></a>
<a href="https://ibb.co/xG8fr4G"><img src="https://i.ibb.co/bLR2GfL/Dell-Latitude-7280.jpg" alt="Dell-Latitude-7280" border="0"></a>
<a href="https://ibb.co/xGJKGnx"><img src="https://i.ibb.co/wCMZCn5/Dell-Inspiron-3501-i5-11th-Gen-MX330-Black-Laptop.jpg" alt="Dell-Inspiron-3501-i5-11th-Gen-MX330-Black-Laptop" border="0"></a>
<a href="https://ibb.co/9qRcykX"><img src="https://i.ibb.co/SKq5V4T/HP-All-in-One-24-df1224-PC.jpg" alt="HP-All-in-One-24-df1224-PC" border="0"></a>
<a href="https://ibb.co/brKYm9s"><img src="https://i.ibb.co/55RC4Hr/Hp-Laptop-14-dq0003dx.jpg" alt="Hp-Laptop-14-dq0003dx" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/pzckm2z/HP-Envy-13-M-BD1033-DX-i7-2.jpg" alt="HP-Envy-13-M-BD1033-DX-i7-2" border="0"></a>
<a href="https://ibb.co/FbY52Sy"><img src="https://i.ibb.co/mCy9kL2/Mac-Book-Pro.jpg" alt="Mac-Book-Pro" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload picture for url</a><br /> */}

const Banner = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/y80hdvk/Apple-Mac-Book-Air-core-i5-2014-4-256-GB.jpg" className="d-block w-50 h-50 position" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="https://i.ibb.co/bLR2GfL/Dell-Latitude-7280.jpg" alt="" className="d-block w-50 h-50 position"/>
    </div>
    <div className="carousel-item h-50">
      <img src="https://i.ibb.co/SKq5V4T/HP-All-in-One-24-df1224-PC.jpg" className="d-block w-50 h-50 position" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;