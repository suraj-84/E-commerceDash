import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/product");
    result = await result.json();
    setProducts(result);
  };
  // console.log("products", products);
  const deleteOne = async (id) => {
    // console.log(id)
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      //
      getProducts();
    }
  };
  const searchHandle =  async (event)=>{
    let key = event.target.value
    if(key){
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result=  await result.json();
      if(result){
        setProducts(result);
      }
    }else{
      getProducts()
    }
    


  }

  return (
    <div className="product-list">
      <h1>ProductList</h1>
      <input type="text" placeholder="Search Product" className="search-box"
        onChange={searchHandle}
      />
      <ul>
        <li>s.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {products.length>0 ? products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>${item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={() => deleteOne(item._id)}>Delete</button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>
      )):<h1>result not found</h1>}
    </div>
  );
};

export default ProductList;
