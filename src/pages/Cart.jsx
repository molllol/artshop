// Cart page
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive'; 

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

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
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
    font-size: 20px;
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
    height: 60vh;
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
`;

const Cart = () => {
    
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type = "filled">CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src = "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                            <Details>
                                <ProductName><b>Product:</b> DANCING</ProductName>
                                <ProductId><b>ID:</b>2345678</ProductId>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 100</ProductPrice>
                        </PriceDetail>
                    </Product>

                    <Hr/>

                    <Product>
                        <ProductDetail>
                            <Image src = "https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlYWxpc3RpYyUyMGFydCUyMHBhaW50aW5nfGVufDB8MXwwfHx8MA%3D%3D"/>
                            <Details>
                                <ProductName><b>Product:</b> LIT</ProductName>
                                <ProductId><b>ID:</b>3456782</ProductId>
                                <ProductSize><b>Size:</b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>1</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 200</ProductPrice>
                        </PriceDetail>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 300</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping </SummaryItemText>
                        <SummaryItemPrice>$ 10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 305</SummaryItemPrice>
                    </SummaryItem>
                    
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart