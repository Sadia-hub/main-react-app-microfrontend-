import './App.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="header">
      <NavLink exact 
      to="/" 
      className="link">
        Home-Page
      </NavLink>

      <NavLink
        exact
        to="/micro-react1"
        className="link"     
      >
        Sub-react1
      </NavLink>

      <NavLink
        exact
        to="/micro-react2"
        className="link"    
      >
        Sub-react2
      </NavLink>
    </div>
    

    
    <div id="subapp-viewport1"></div>
    <div id="subapp-viewport2"></div>
    
  </Router>

    
    
  );
}

export default App;
