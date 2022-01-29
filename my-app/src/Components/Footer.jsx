import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-2 pb-2 ">
        <div className="container">
          <div className="row justify-content-center align-items-center text-white">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h5 className="text-center">
                
                Company
              </h5>
              <hr />
              <ul className="text-center">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h5 className="text-center">
                
                Services
              </h5>
              <hr />
              <ul className="text-center">
                <li>Web Design</li>
                <li>Logo Design</li>
                <li>Banner Desing</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h5 className="text-center">Courses</h5>
              <hr />
              <ul className="text-center">
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>React js</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <h5 className="text-center">Accounts</h5>
              <hr />
              <ul className="text-center">
                <li>Profile</li>
                <li>My Account Us</li>
                <li>Prefrences</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
