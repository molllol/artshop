//Shopping Category Page
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

//Title style
const Title = styled.h1`
    margin: 20px;
    font-weight: bold;
    font-size: 35px;
`;

//FilterContainer style
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: "0px 20px", dispaly:"flex", flexDirection:"column"})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    ${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
    margin: 10px;
    padding: 10px;
`;

const Option = styled.option``;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");
    
    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

  return (
    <Container>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="type" onChange={handleFilters}>
                    <Option disabled >Type</Option>
                    <Option>Modern</Option>
                    <Option>Minimal</Option>
                    <Option>Splash</Option>
                    <Option>Texture</Option>             
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>             
                </Select>        
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>           
                </Select>     
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList