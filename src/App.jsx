import {
    BrowserRouter as Router,
    Switch,
   Route, Redirect
  } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";



const App = () => {
    const User = true
    return (
       <Router>
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route path = "/products/:category">
                <ProductList/>
            </Route>
            <Route path = "/product/:id">
                <Product/>
            </Route>
            <Route path = "/cart">
                <Cart/>
            </Route>
            <Route path = "/login">
                {User ? <Redirect to="/"/> : <Login/>}
                <Login/>
            </Route>
            <Route path = "/register">
            {User ? <Redirect to="/"/> : <Register/>}
                <Register/>
            </Route>
        </Switch>       
       </Router>

    );
};

export default App;