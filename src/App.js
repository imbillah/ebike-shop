import Home from "./components/shared/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/shared/Authentication/Register";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/shared/Authentication/Login";
import Order from "./components/private/Order";
import Dashboard from "./components/dashboard/home/Dashboard";
import PrivateRoute from "./components/private/PrivateRoute";
import ExploreProducts from "./components/shared/pages/ExploreProducts";
import AboutUs from "./components/shared/pages/AboutUs";
import ContactUs from "./components/shared/pages/ContactUs";
import NotFound from "./components/shared/HomePage/NotFound";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/explore" component={ExploreProducts} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/error" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
