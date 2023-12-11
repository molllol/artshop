//Footer Component

import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    width: 100vw;
    background-color: #000000;
    color: white;
    ${mobile({flexDirection: "column"})}
`;


/*Elements on the left side of the footer. The Logo, 
description and social media icons*/

//Left side of footer
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-right: 50px;
    
`;

const Logo = styled.h1`
    font-size: 30px;
    font-weight: 300;
`;

const Desc = styled.p`
    margin: 20px 0px ;
    font-size: 15px;
    text-align: justify;
`;

const SocialContainer = styled.div`
    display: flex;
    margin-left: none;
`;

const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: none;
`;



/*Center of footer. Elements on the center of the footer. 
Useful links*/

const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 50px;
    ${mobile({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 18px;
`;


/*Elements on the right side of the footer. The contact 
details and payment methods image*/

//Right side of footer
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 18px;
`;


const Payment = styled.img`
    width: 60%;
    height: 40;
    border: 0px;
`;


const Footer = () => {
    
    return (
    <Container>
        <Left>
            <Logo>ARTSHOP</Logo>
            <Desc>Quirky haven for art enthusiasts; a charming space filled with handmade treasures, fostering creativity and celebrating the beauty of simplicity.</Desc>
            <SocialContainer>
                <SocialIcon ><Facebook/></SocialIcon>
                <SocialIcon ><Instagram/></SocialIcon>
                <SocialIcon ><Twitter/></SocialIcon>
                <SocialIcon ><Pinterest/></SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <Link to="/" style={{color:"#ffffff"}}><ListItem>Home</ListItem></Link>
                <Link to="/cart" style={{color:"#ffffff"}}><ListItem>Cart</ListItem></Link>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>123 Bristle Lane, Paletteville 54321</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+2 345 67 89</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>contact@artshop.paint</ContactItem>
            <Payment src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-5.png"/>
        </Right>
    </Container>
  )
}

export default Footer