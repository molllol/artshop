//Product component file, CSS layout for each product and elements
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";



//style for the info 
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

//Main Container with all the other elements
const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

//Style for circle
const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
 
//Style for the images
const Image = styled.img`
    height: 85%;
    z-index: 2;
`;


//Style for the icons
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #ccc4c4;
        transform: scale(1.1);
    }
`;


const Product = ({item}) => {

  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
            <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
            </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product