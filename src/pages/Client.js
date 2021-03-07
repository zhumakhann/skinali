import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Client/Home/Home'
import Header from '../components/Client/Header/Header';
import Categories from '../components/Client/Categories/Categories'
import Products from '../components/Client/Products/Products'
import Footer from '../components/Client/Footer/Footer';
import NotFound from '../components/NotFound/NotFound';
export default function Client() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/products" component={Products}/>
                <Route path="/categories" component={Categories}/>
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Router>
    )
}
