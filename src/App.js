import './normalize.css';
import './App.scss';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Products from './components/Admin/Products/Products'
import Categories from './components/Admin/Categories/Categories'
import Client from './pages/Client'
import Auth from './components/Admin/Auth/Auth'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/admin/products" component={Products} />
        <PrivateRoute path="/admin/categories" component={Categories} />
        <Route path="/" component={Client} exact/>
      </Switch>
    </Router>
  );
}

export default App;
