// Cart page
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { mobile } from '../responsive'; 
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const KEY = process.env.REACT_APP_STRIPE;

// Main Container 
const Container = styled.div`
    margin: 10px 20px;
`;

// Wrapper style
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`;


const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;



const Bottom = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
    flex: 3;
  
`;

// Product style
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 300px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 45px 0px;
    ${mobile({margin: " 60px 0px", })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 30px;
    margin: 5px;
    ${mobile({margin: "10px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 40px;
    font-weight: 200;
    ${mobile({margin: "0px 5px 15px"})}
`;

//Hr style
const Hr = styled.hr`
    background-color: #f2deff;
    justify-content: space-around;
    border: none;
    height: 2px;
`;

// Summary style
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid #f2deff;
    border-radius: 10px;
    padding: 30px;
    height: 65vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 35px;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "700"};
    font-size: ${props=>props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

 `;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
&:hover{
        background-color: #c3c3ff;
    }
`;

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart, cart.total, history]);
    
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            

            <Title>YOUR BAG</Title>
            
            <Bottom>
                <Info>
                    {cart.products.map((product) => (
                    <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        
                        <ProductAmount>{product.quantity} * {product.price}</ProductAmount>
                        
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                    ))}
                </Info>
                <Hr/>
                <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="ARTSHOP"
              image="https://images.unsplash.com/photo-1535392432937-a27c36ec07b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFsbSUyMHRyZWVzfGVufDB8fDB8fHww"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart