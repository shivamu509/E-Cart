import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Modal = (props) => {
  const {showModal,setShowModal,setCart} = props
  const [redirect, setRedirect] = useState(false)
  const placeOrder = ()=>{
    toast.success("Order Placed successfully", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(()=>{
      setCart([])
      setRedirect(true)  
    },2000)
  }
  return (
    <div className="main-modal">
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
      {redirect && (
          <Navigate to="/" replace={true} />
        )}
    <div className="modal-fade" style={{display:showModal?"block":"none"}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">  
            <h1 className="modal-title fs-5">Order Confirmation</h1>
            <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setShowModal(false)}}></button>
            <hr />
          </div>
          <div className="modal-body my-5">
          <p>Do you want to place your order? Once placed cannot be cancelled</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary mx-5" data-bs-dismiss="modal" onClick={()=>{setShowModal(false)}}>Close</button>
            <button type="button" className="btn btn-primary mx-3" onClick={placeOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;
