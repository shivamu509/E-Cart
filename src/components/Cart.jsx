import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cart, setCart, total, setTotal} = props;
  useEffect(()=>{
    let t = 0
    cart.forEach(ele => {
      t = t + (ele.price*ele.count)
    });
    setTotal(t)
    // eslint-disable-next-line
  },[cart])

  const removeItem = (id)=>{
    setCart([...cart.filter((prod)=>prod.id!==id)])
  }
  const incrementCartValue = (id)=>{
    setCart(cart.map((prod)=>{
      return prod.id===id? {...prod,count:prod.count+1}: prod
    }));
  }
  const decrementCartValue = (id)=>{
    var filteredCartArray = cart.filter((prod)=>prod.id===id)
    if(filteredCartArray[0].count===1)
      removeItem(id);
    else
    setCart(cart.map((prod)=>{
      return prod.id===id? {...prod,count:prod.count-1}: prod
    }));
  }
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>
        {cart.length === 0 ? (
          <>
            <div className="text-center">
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className="btn btn-warning">Continue Shopping...</Link>
            </div>
          </>
        ) : (
          cart.map((product,id) => {
            return (
                <div key={id} className="card mb-3 my-5" style={{ width: "100%" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <div className="col-md-4 m-5 mx-auto">
                          <div className="input-group" >
                            <div className="input-group-prepend">
                              {
                                product.count>1 ?
                              <button className="btn btn-outline-primary" type="button" onClick={()=>decrementCartValue(product.id)}>-</button>
                              :
                              <button className="btn btn-outline-danger" type="button" onClick={()=>removeItem(product.id)}>🗑</button>
                              }
                            </div>
                            <input type="button" className="form-control text-center" value={product.count} disabled/>
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-primary" type="button" onClick={()=>incrementCartValue(product.id)}>+</button>
                            </div>
                          </div>
                      </div>

                        <button className="btn btn-danger" onClick={()=>removeItem(product.id)}>Remove</button>
                        <button className="btn btn-primary mx-3" disabled>
                        ₹{product.price} 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            );
          })
        )}
      </div>

      {cart.length !== 0 && (
        <div className="container text-center my-5"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width:"54%"
          }}
        >
        <div style={{width:"50%"}}>
          <h4 className="" style={{float:"left"}}>Total Amount: ₹{total}</h4></div>
      
          <div style={{display: "flex",justifyContent: "flex-end",width: "50%"}}>
            <Link to="/billing"><button className="btn btn-warning mx-5">CheckOut</button></Link>
          <button onClick={() => setCart([])} className="btn btn-danger">Clear Cart</button>
          </div>
          
        </div>
      )}
    </>
  );
};
export default Cart;
