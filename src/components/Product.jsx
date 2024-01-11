import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Product = ({ items, cart, setCart}) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    var filteredCartArray = cart.filter((prod)=>prod.id===id)
    if(filteredCartArray.length>0)
    {
      setCart([...cart.filter((prod)=>prod.id!==id),{...filteredCartArray[0],count:filteredCartArray[0].count+1}]);
    }else{
      const obj = {id,price,title,description,imgSrc,count:1};
      setCart([...cart,obj]);
    }

    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    
  };

  return (
    <>
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
      <div className="container my-5">
        <div className="row ms-5" >
          {items.map((product, ind) => {
            return (
              <div key={ind} className="col-lg-4 col-md-6 my-3 text-center">
                <div className="card" style={{ width: "18rem" }}>
                  <Link
                    to={`/product/${product.id}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                  <div style={{height:"35vh"}}>
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title" style={{height:"8vh"}}>{product.title}</h5>
                    {/* <p className="card-text">{product.description}</p> */}
                    <button className="btn btn-primary mx-3" disabled>
                      ₹{product.price} 
                    </button>
                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.imgSrc
                        )
                      }
                      className="btn btn-warning"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
