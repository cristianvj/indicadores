import "./App.css"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import Indicadores from "./components/Indicadores";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/indicadores/:urlIndicador' children={<Indicadores/>} />
        <Route exact path='*' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
