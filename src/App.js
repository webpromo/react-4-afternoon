import React, { Component } from 'react';
// Import routes from ./routes.js.
import routes from './Routes';

// Import Link from react-router-dom.
import {Link} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>

{/* // Underneath the nav element render the routes JSX. */}
          <div>WestSide University</div> 
          <div className='link-wrap'>

{/* // Replace the div elements to be Link components. */}
              <Link to="/" className='links'>Home</Link>
              <Link to="/about" className='links'>About</Link> 
          </div>
        </nav>
      { routes }
      </div>
    )
  }
}
