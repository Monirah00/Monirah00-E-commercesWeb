import React from "react";
import ContactImg from "../Images/Contact-map.JPG";
import Hoc from "../Hocs/Hoc";
import { useState,useEffect } from "react";

const Contact = () => {


    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    },);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };
   
  return (
    <section className="contact">
      <div className="container">
        <h3 className="pb-2 pt-5 text-center">Contact With M€ ???</h3>
        <hr />
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <img className="Sdata" src={ContactImg} alt="" />
          </div>
          <div className="col-lg-5 col-sm-12">
            <p className="Contact_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quos ea provident sapiente aliquam laborum. Architecto quisquam
              quam nemo nostrum quas, commodi molestiae in culpa magnam corrupti
              nihil porro perspiciatis numquam at ea. Odit soluta exercitationem
              optio facere quisquam vel iste nemo expedita suscipit provident
              ipsam ducimus aut a recusandae sapiente quos tempore, ea aperiam,
              vero eum est quibusdam blanditiis voluptas! Iure molestiae natus
              consequatur eaque facere doloremque animi illum magni excepturi.
              Voluptatum animi iste vel, quasi quis doloremque ipsa laboriosam
              reprehenderit sint quisquam quo sequi, sit vitae consectetur,
              perferendis dolore aperiam facilis amet ad! Ipsum voluptatem
              similique corrupti aperiam?
            </p>
          </div>
        </div>

        <div className="contact">
          <div className="mb-5 mt-5 text-center">
            <h3>Contact Us</h3>
            <h4>Let's Start The Contact Us</h4>
          </div>
          <div className="row">
            <div className="col-lg-5 col-sm-12 mb-5 mt-5">
              <div className="AllcontactInfo">
                <div className="contact-info">
                  <h4>Contact Info</h4>
                  <span className="d-flex text-align-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat, debitis?
                  </span>
                  <span className="d-flex text-align-center">
                    <strong>Phone Num : 01756808137</strong>
                  </span>
                  <span className="d-flex text-align-center">
                    <strong>Email : nerob0000@gmail.com</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
       

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="btn btn-danger">Submit</button>
        </div>
      </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hoc(Contact);
