import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Link, NavLink, Route} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile'
import About from './About'


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
                }>Home</NavLink>
              </li>
              <li>
                <NavLink  to='/my-profile' className='link'   activeStyle={{
                  fontWeight:"bold",
                  color:"white"
                }
                }>My Profile</NavLink>
              </li>
              <li>
                <NavLink  to='/about-us' className='link'  activeStyle={{
                  fontWeight:"bold",
                  color:"white"
                }
                }>About Us</NavLink>
              </li>
            </ul>
          </div>
          <switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/my-profile' component={Profile}/>
            <Route exact path='/about-us' component={About}/>

          </switch>
        </Router>


      </div>
    );
  }
}

export default App;
