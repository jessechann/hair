import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Customers from "./components/Customers/Index";
import NewCustomer from "./components/Customers/NewCustomer";
import Tasks from "./components/Tasks";
import Orders from "./components/Orders";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="flex-col w-full md:flex md:flex-row md:min-h-screen text-gray-700">
        <Sidebar />
        <div className="p-7 w-full lg:w-8/12">
          <Switch>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/customers" exact>
              <Customers />
            </Route>
            <Route path="/customers/new">
              <NewCustomer />
            </Route>
            <Route path="/appointments">
              <Appointments />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
