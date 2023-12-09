/*Slider component file. Has CSS and HTML of all the elements 
found on the slider section on the hompage*/

import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@material-ui/icons";
import {useState} from "react";
import styled from "styled-components";
import {sliderItems} from "../data";
import { mobile } from "../responsive"

const  Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 1px;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`;
//Arrows on slide 
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e0e0e0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

//Wrapper of the slide
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 3s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;
    
//Slide Container
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

//Img Container
const ImgContainer = styled.div`
    height: 90%;   
    flex: 1;
`;

const Image = styled.img`
    height: 100%;  
`;

//Info Container
const InfoContainer = styled.div`
    padding: 100px;
    flex: 1;
`;

const Title = styled.h1`
font-size: 60px;
`;

const Desc = styled.p`
margin: 50px 0px;
margin-top: 50px;
font-size: 20px;
font-weight: 500px;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3);
        } 
        else {
            setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0);
        }                 
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}> 
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item=>( 
            <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    < Image src={item.img}/>
                </ImgContainer>
            
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}> 
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container>
  )
        
}
export default Slider