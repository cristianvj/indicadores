import "./App.css"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./components/Home";
import Indicadores from "./components/Indicadores";
import Navbar from "./components/Navbar";
import Reportes from "./components/Reportes";
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/reportes' component={Reportes} />
          <Route exact path='/indicadores/:urlCoordinacion' children={<Indicadores/>} />
          <Route exact path='*' component={Home} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
