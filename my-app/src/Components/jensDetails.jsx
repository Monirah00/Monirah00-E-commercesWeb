import React from 'react';
import Hoc from '../Hocs/Hoc';
import { useParams,Link } from 'react-router-dom';
import Jensdata from '../JensData/Jensdata';

const JensDetails = () => {
  const {id} = useParams();
  return <div>
      <div className="container pt-5 pb-5">
        <h3 className='text-center pb-2'>Products JensDetails</h3>
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="Card">
              <img className='DetailsPic' src={Jensdata.CardData[id-1].img} alt="" />
              <div className="card-body">
                <h5 className='card-title'>{Jensdata.CardData[id-1].Price}</h5>              
                <span>Sizeeee:38/39/40/42/44 </span>
                <br />
                <button className='btn btn-success'>Add To Cart</button>
                
                <p className='card-text'>{Jensdata.CardData[id-1].Desc}</p>
                <span class="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
              </div>
            </div>
          </div>
          <Link to='/'>Back To Home</Link>
         
        </div>
      </div>
  </div>;
};

export default Hoc(JensDetails);