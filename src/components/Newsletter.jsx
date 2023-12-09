//Newsletter Component containing the CSS and HTML for the Newsletter section

import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

//Main Container style
const Container = styled.div`
    height: 45vh;
    width: 100vw;
    background-color: #efeaff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  
`;

//Title style
const Title = styled.div`
    font-size: 55px;
    font-weight: bold;
    margin-bottom: 20px;
`;

//Description style
const Desc = styled.h1`
  font-size: 22;
  font-weight: 200;
  margin-bottom: 24px;
  ${mobile({textAlign: "center"})}
`;

//InputContainer style
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`;

//Input style
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

//Button style
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #000000;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #c3c3ff;
    }
`;

const Newsletter = () => {

  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get updates on new pieces in our gallery.</Desc>
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button><Send/></Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter