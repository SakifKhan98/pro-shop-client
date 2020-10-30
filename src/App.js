import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route exact path="/">
          <main className="py-3">
            <Container>
              <HomeScreen></HomeScreen>
            </Container>
          </main>
        </Route>
        <Route path="/product/:id">
          <ProductScreen></ProductScreen>
        </Route>
        <Route path="/cart/:id?">
          <main className="py-3">
            <Container>
              <CartScreen></CartScreen>
            </Container>
          </main>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default App;
