//Product Component controlling the section where the products show on the homepage

import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({cat,filters,sort}) => {
  
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : `http://localhost:5000/api/products` );
        setProducts(res.data);
      }catch(err) {}
    };
    getProducts()
  }, [cat])

  useEffect(() =>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key,value]) =>
      item[key].includes(value)
      ))
    );
  }, [products,cat,filters])
//Sort Filter
   useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    //Return Code to show the number of products showing on homepage
    <Container>
         {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 4)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products