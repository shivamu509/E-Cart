import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Billing = (props) => {
  const [showModal,setShowModal]=useState(false);
  const [firsName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

  const validate = ()=>{
    if(!firsName && !lastName && !address && !email && phone.length===0){
      toast.error("Please fill all the required fields!! ")
    }else if(!email.includes('@')){
      toast.error("Email should be valid")
    }else if(phone.length!==10){
      toast.error("Phone number is not valid")
    }
    else
    setShowModal(!showModal)
    }

  return (
    <>
      {!props.total && (
          <Navigate to="/cart" replace={true} />
        )}
        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Modal showModal={showModal} setShowModal={setShowModal} setCart={props.setCart}/>
      <Backdrop showModal={showModal} />
      <div className="row m-0 px-3 py-3">
        <div className="col-md-8 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Biling details</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-4">
                  <div className="col">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="inp1" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}/>
                    <label for="inp1">First Name *</label>
                  </div>

                  </div>
                  <div className="col">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="inp2" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}/>
                    <label for="inp2">Last Name *</label>
                  </div>
                  </div>
                </div>
                  <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="inp3" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                    <label for="inp3">Address *</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input type="email" class="form-control" id="inp4" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <label for="inp4">Email *</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input type="number" class="form-control" id="inp5" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} min={10} max={10}/>
                    <label for="inp5">Phone (10 digit only)  *</label>
                  </div>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Additional information" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Additional Information</label>
                  </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>₹{props.total}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>(Free delivery)</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>₹{props.total}</strong>
                  </span>
                </li>
              </ul>
              <button
                className="btn btn-primary btn-lg btn-block"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => validate()}
              >
                Make purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
