//Single product page

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";


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
    border: 2px solid #c8cbf7;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #e6e6ff;
    }
`;

const Product = () => {
    
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>            
            </ImgContainer>
            <InfoContainer>
                <Title>Dancing</Title>
                <Desc>Dancing is a vivid symphony of hues, an abstract masterpiece that breathes life into the canvas. 
                    Swirls of vibrant colors intertwine, creating a visual ballet that captivates the soul. 
                    Each brushstroke tells a story, as if the canvas itself is alive with the rhythm of a dance. 
                    From the passionate reds that evoke the warmth of a tango to the tranquil blues reminiscent of a gentle waltz.
                    Dancing is a celebration of color and movement that invites the viewer to join in the enchanting choreography of the artist's imagination.
                </Desc>
                <Size>Size: M</Size>
                <Price>$100</Price>           
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product