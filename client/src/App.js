import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SubmitApp from "./pages/SubmitApp";
import Login from "./pages/Login";
import AddStat from "./pages/AddStat";
import Applicant from "./pages/Applicant";

function App() {
  return(
    <div className="App">
      <Router>
        <div className = "navbar">
          <Link to = "/">Home</Link>
          <Link to="/submitapp">Submit an application</Link>
          <Link to="/addstat">Create status</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Create User</Link>
        </div>
        <Routes>
          <Route exact  path ="/" element = {<Home/>}/>
          <Route exact  path ="/addstat" element = {<AddStat/>}/>
          <Route exact  path ="/submitapp" element = {<SubmitApp/>}/>
          <Route exact  path ="/applicant/:id" element = {<Applicant/>}/>
          <Route exact  path ="/login" element = {<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}
  

export default App;