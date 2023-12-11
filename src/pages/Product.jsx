//Single product page

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container = styled.div``;

//Wrapper
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column", padding:"10px"})}
`;


const ImgContainer = styled.div`
    flex: 1;
`;
//Image
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:"50vh"})}
`;

//Information
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Size = styled.p`
    font-weight: 100;
    font-size: 30px;
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;


// Add to cart section after price
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between ;
    margin: 20px 0px;
    width: 50%;
    ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #c8cbf7;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #121213;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #e6e6ff;
    }
`;

const Product = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products/find/" + id);
          setProduct(res.data);
        } catch {}
      };
      getProduct();
    }, [id]);
  
    const handleQuantity = (type) => {
      if (type === "dec") {
        quantity > 0 && setQuantity(quantity - 1);
      } else {
        setQuantity(quantity + 1);
      }
    };
  
    const handleClick = () => {
      dispatch(
        addProduct({ ...product, quantity, })
      );
    };

    
  return (
    <Container>
        <Navbar/>
        <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <Size>Size: {product.size}</Size>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product