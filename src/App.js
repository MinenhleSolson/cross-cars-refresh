import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import SignIn from './components/SignIn';
import Register from './components/Register';



function App() {
  return (
    <div className="App">

    

   <Router>
    <div className='p-3'>
    <Switch>
        <Route exact path="/">
          <Header />
         
          <Home />
        </Route>
        <Route path="/signin">
        <Header />
         <SignIn />
        </Route>

        <Route path="/register">
        <Header />
          <Register />
        </Route>
      </Switch>
   
    </div>
       
    </Router>

    </div>
  );
}
 
export default App;
