import React,{useState} from "react";

function Card({props,card,setCard}) {
  let [toggle,settoggle]=useState(true)
  let data1 =props
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={data1.image}
            alt="..."
          />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{data1.tille}</h5>
              <h5 className="fw-bolder">{data1.discription}</h5>
              $40.00 - $80.00
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
            {
            toggle? <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCard(card+1)
                  settoggle(false)
                }}
              >
                add card
              </button>:
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  setCard(card-1)
                  settoggle(true)
                }}
              >
                Remove card
              </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
