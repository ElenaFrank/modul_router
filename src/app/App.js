import NavBar from "../components/navBar"
import {Route} from "react-router-dom"
import Dashboard from "../components/dashboard"

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Route path="/dashboard" component = {Dashboard} />
    </div>  
  )
}

export default App;
