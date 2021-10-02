import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components2/Header/Header';
import Inventory from './components2/Inventory/Inventory';
import OrderReview from './components2/OrderReview/OrderReview';
import PageNotFound from './components2/PageNotFound/PageNotFound';
import Shop from './components2/Shop/Shop';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>

          <Route exact path='/shop'>
            <Shop></Shop>
          </Route>

          <Route exact path='/order'>
            <OrderReview></OrderReview>
          </Route>

          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>

          <Route exact path='*'>
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
