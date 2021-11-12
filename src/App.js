import Home from "./components/shared/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/shared/Authentication/Register";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/shared/Authentication/Login";
import Order from "./components/private/Order";
import Dashboard from "./components/dashboard/home/Dashboard";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/order/:id" component={Order} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
