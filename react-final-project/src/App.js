import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
        <Route path="/product/:id">
              <ItemDetailContainer /> 
            </Route>
            <Route path="/cart">
                <Cart /> 
            </Route>
            <Route exact path="/"> 
              <ItemListContainer/>
              {/* <ItemDetailContainer id="2"/> */}
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

export default App;
