import React from "react";
import { useNavigate } from "react-router-dom";
import '../resourses/auth.css'

function Bus({ bus }) {
  const navigate = useNavigate();
  return (
    <div className="card1 p-3">
      <h1 className="text-lg primary-text">{bus.name}</h1>
      <hr />
      <div className="d-flex justify-content-between">
        <div>
          <p className="text-sm">From</p>
          <p className="text-sm">{bus.from}</p>
        </div>

        <div>
          <p className="text-sm">To</p>
          <p className="text-sm">{bus.to}</p>
        </div>

        <div>
          <p className="text-sm">Fare</p>
          <p className="text-sm">$ {bus.fare} /-</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <p className="text-sm">Joureny Date</p>
          <p className="text-sm">{bus.journeyDate}</p>
        </div>

         <button  className="primary-btn" onClick={()=>{
            navigate(`/book-now/${bus._id}`) 
        }}>Book Now</button> 
      </div>
    </div>
  );
}

export default Bus;