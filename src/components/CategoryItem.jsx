/*CategoryItems component file. Has CSS for all 
the elements that make up the Categories section*/

import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

// Container that controls the overall style of all the category items
const Container = styled.div`
    flex: 1;
    margin: 10px;
    height: 70vh;
    position: relative;
`;

//Image Style
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}
`;

//Info Container Style
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

//Title Style
const Title = styled.h1`
    color: #fffdfd;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 450;

`;

//Button Style
const Button= styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
`;

const  CategoryItem = ({item})  => {
  return (
    <Container> 
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem;