import './normalize.css';
import './App.scss';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Products from './components/Admin/Products/Products'
import Categories from './components/Admin/Categories/Categories'
import Client from './pages/Client'
import Auth from './components/Admin/Auth/Auth'
import Admin from './pages/Admin'
import NotFound from './components/NotFound/NotFound'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/" component={Client}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
