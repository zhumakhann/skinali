import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Admin/Header/Header'
import Products from '../components/Admin/Products/Products';
import Categories from '../components/Admin/Categories/Categories'
import NotFound from '../components/NotFound/NotFound'
export default function Admin() {
    return (
        <Router>
            <Header />
            <Switch>
                <PrivateRoute path="/admin/products" component={Products} />
                <PrivateRoute path="/admin/categories" component={Categories} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
