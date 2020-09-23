import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, NavLink, Route,Redirect,Switch} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile'
import About from './About'
import Products from "./Products";
import Product from  './Product';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className='list'>
            <ul>
              <li>
                <NavLink exact to='/'
                         className='link' activeStyle={{
                           fontWeight:"bold",
                  color:"white"
                }
                }
                         style={{color:'black'}}>Home</NavLink>
              </li>
              <li>
                <NavLink to='/products' className='link' activeStyle={{
                  fontWeight:"bold",
                  color:"white"
                }
                } style={{color:'black'}}>Products</NavLink>
              </li>
              <li>
                <NavLink  to='/my-profile' className='link'   activeStyle={{
                  fontWeight:"bold",
                  color:"white"
                }
                }  style={{color:'black'}}>My Profile</NavLink>
              </li>
              <li>
                <NavLink  to='/about-us' className='link'  activeStyle={{
                  fontWeight:"bold",
                  color:"white"
                }
                }  style={{color:'black'}}>About Us</NavLink>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products} />
            <Redirect from="/goods" to="/products"/>
            <Route exact path='/my-profile' component={Profile}/>
            <Route exact path='/about-us' component={About}/>
            <Route path='/products/:id' component={Product} />
            <Redirect from="/goods" to="/products"/>
            <Route component={Home}  />
          </Switch>
        </Router>


      </div>
    );
  }
}

export default App;
