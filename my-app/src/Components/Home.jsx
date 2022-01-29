import React,{useEffect} from "react";
import Hoc from "../Hocs/Hoc";
import Data from "../Data/Sdata";
import LadiesAboutPic from "../Images/Ladies/LadiesAbout.jpg";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'

const Home = () => {
  const [state] = React.useState({
    Para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendi at dignissimos perferendis? Saepe nemo eaque molestiae enim quosrepellendus, iure ea aut magni vero ut atque quod repudiandae et ullam eveniet provident culpa consequatur quia maiores! Sunt facerquis id Quisquam omnis aspernatur iure quibusdam perspiciatis    temporibus doloremque assumenda totam?",
  });
  useEffect(() => {
    Aos.init()
   },)
  return (
    <div>
      <section>
        <div className="container">
          <h4 className="text-center pt-5 pb-2 ">Ladies Item</h4>
          <hr className="hr" />
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 col-sm-12">
              <img className="LadiesAboutPic" src={LadiesAboutPic} alt="" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <p className="LadiesAboutContent">{state.Para}</p>
              <button className="btn btn-danger smartbtn">Read More Now</button>
            </div>
          </div>
          <div className="row">
            {Data.CardData.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}  data-aos='fade-down'>
                  <div className="Card">
                    <img className="Sdata pb-3" src={item.img} alt="" data-aos='fade-up' />
                    <h6><s>{item.Discount}</s></h6>
                    <h5>{item.Price}</h5>
                    <Link className="p-1 text-danger" to={`/Details/${index+1}`}>
                      BuY NoW
                    </Link>
                    <Link className="p-1 text-danger" to={`/Details/${index+1}`}>
                      DeTaiLs
                    </Link>
                    <br />
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hoc(Home);
