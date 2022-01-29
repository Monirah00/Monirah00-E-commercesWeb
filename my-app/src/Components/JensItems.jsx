import React,{useEffect} from "react";
import Hoc from "../Hocs/Hoc";
import JensData from "../JensData/Jensdata";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'C:/Users/USER/Desktop/E-Commerces/my-app/node_modules/aos/dist/aos.css'
const JensItems = () => {
  useEffect(() => {
    Aos.init()
   },)
  return (
    <section>
      <div className="container">
        <h3 className="pt-5 pb-2 text-center">Jens Item</h3>
        <hr />
        <div className="row">
          {JensData.CardData.map((item, index) => {
            return (
              <div className="col-lg-4 col-sm-6" key={index}  data-aos='fade-down'>
                <div className="Card">
                  <img className="Sdata" src={item.img} alt=""  data-aos='fade-up' />
                  <h5>{item.Price}</h5>
                  <Link
                    className="p-1 text-danger"
                    to={`/JensDetails/${index+1}`}
                  >
                    BuY NoW
                  </Link>
                  <Link
                    className="p-1 text-danger"
                    to={`/JensDetails/${index+1}`}
                  >
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
  );
};

export default Hoc(JensItems);
