import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.411),
                                rgba(255, 255, 255, 0.5)
    ), url("https://images.unsplash.com/photo-1581262177000-8139a463e531?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center;

    display: flex;
    align-items: center;
    justify-content: center;
   
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 15px 0px;
    padding: 7px;
`;

const Button = styled.button`
    width: 40%;
    padding: 10px 15px;
    border: none;
    color: white;
    background-color: #000000;
    cursor: pointer;
    margin-bottom: 20px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    
`;

const Login = () => {
    
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username:"/>
            <Input placeholder="password:"/>
            <Button>LOGIN</Button>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE NEW ACCOUNT</Link>
        </Form>
    </Wrapper>    
    </Container>
  )
}

export default Login