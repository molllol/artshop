//Navbar Component
import { Badge } from '@material-ui/core';
import { PersonOutline, Search, ShoppingCartOutlined} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//Navbar
const Container = styled.div`
    height: 50px;
    width: 100%;
    background-color: #000000; 
    color: #ffffff;
    ${mobile({height: "50px", backgroundColor:"black"})}
`;
 //Wrapper
 const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
 `;
 
 /*Navbar positions: This code is showing where all the icons and text in the navbar 
 has been placed and what icon is falling under which position. 
 Code of each element is in its own area*/

 //Left of Navbar
 const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
 `;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`;

const Logo = styled.h1`
   font-weight: bold;
   font-size: 20px;
   margin-left: 20px;
   ${mobile({fontSize: "24px"})}
 `;

 //Center of Navbar
 const Center = styled.div`
    flex: 1;
    text-align: center; 
 `;

 const MenuItem = styled.div`
   display: inline-block;
   align-items: center;
   font-size: 15px;
   cursor: pointer;
   margin-left: 20px;
   ${mobile({ display: "none", fontSize: "12px", marginLeft:"10px"})}
 `;

 
 //Right side of Navbar
 const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({justifyContent: "center", flex:"2"})}
 `;

const MenuItem2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-left: 10px;
${mobile({marginLeft:"10px"})}
`;

 const SearchContainer = styled.div`
   border: none;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 2px;
   cursor: pointer;
   ${mobile({margin: "0px 5px",})}
`;

/* Input for search bar style
const Input = styled.input`
   border: none;
   width: 100px;
   ${mobile({width: "50px"})}
`;  */

const MenuItem3 = styled.div`
   display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
margin-left: 10px;
${mobile({marginLeft:"10px"})}
`;

 
const Navbar = () => { 

   const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            <Left> 
                <Language>EN</Language>
                <Logo> ARTSHOP </Logo>   
            </Left>
            
            <Center>
               
              <Link to="/"><MenuItem>HOME</MenuItem></Link>
               <MenuItem>ABOUT US</MenuItem>
               <MenuItem>SHOP</MenuItem>
               <MenuItem>SIGN UP</MenuItem>
               <MenuItem>LOGIN</MenuItem>              
            </Center>
            
            <Right>
               <SearchContainer>
                  {/* Can remove comment tags to show the input bar
                  <Input placeholder='Search'/> */}
                  <Search/>
                </SearchContainer>              

               <Link to="/cart">
               <MenuItem2>
                  <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined/>
                  </Badge>
               </MenuItem2>
               </Link>
               <MenuItem3><PersonOutline/></MenuItem3>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar