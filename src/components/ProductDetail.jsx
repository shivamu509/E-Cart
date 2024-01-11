import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({ cart, setCart }) => {
  // console.log(useParams());
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    const filterProduct = items.filter((prod) => prod.id == id);
    //  console.log(filterProduct)
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter((ele) => ele.category === product.category);

    // console.log("RelatedProduct = ",relatedProducts)
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

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
      autoClose: 1500,
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
      <div className="container con mt-5 mb-5">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className="">
          <h1 className="card-title text-center">{product.title}</h1>
          {/* <p className="card-text">{product.description}</p> */}
          <hr />
          <h5>About this item</h5>
          <ul className="w-75 mb-5">
          {
            product.description?.length && product.description.map((val,ind)=><li className="card-text" key={ind}>{val}</li>)
          }
          </ul>
          <button className="btn btn-primary mx-3" disabled>₹{product.price} </button>
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
      <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
