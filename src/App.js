import './normalize.css';
import './App.scss';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/Admin/PrivateRoute";
import Admin from './pages/Admin'
import Client from './pages/Client'
import Auth from './components/Admin/Auth'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/" component={Client} exact/>
      </Switch>
    </Router>
  );
}

export default App;
