import NavBar from "../components/navBar"
import {Route, Switch} from "react-router-dom"
import Dashboard from "../components/dashboard"
import Home from "../components/home"
import Login from "../components/login"
import Pasts from "../components/pasts"
import Stats from "../components/stats"

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path="/dashboard/stats" component = {Stats} />
        <Route path="/dashboard" 
          render = { (props) => {
            return false && <Dashboard isAdmin={false} {...props} />
          }} 
        />
        <Route path="/login" component = {Login} />
        <Route path="/pasts" component = {Pasts} />
        <Route path="/" component = {Home} />

      </Switch>
    </div>  
  )
}

export default App;
