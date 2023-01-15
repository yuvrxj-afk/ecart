import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const productList = [
    {
      name: "MacBook",
      price: 999,
      imgSrc: img1,
      id: "a",
    },
    {
      name: "Shoes",
      price: 30,
      imgSrc: img2,
      id: "bdwdwdwdwd",
    },
    {
      name: "Watch",
      price: 130,
      imgSrc: img3,
      id: "bwdw",
    },
    {
      name: "Headphones",
      price: 70,
      imgSrc: img4,
      id: "bs",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart!");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          name={i.name}
          price={i.price}
          imgSrc={i.imgSrc}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
