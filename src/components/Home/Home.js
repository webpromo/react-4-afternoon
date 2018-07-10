// import Link from react-router-dom at the top of the file. 
import { Link } from 'react-router-dom';

// The Home component renders three buttons for the classes, 
// let's update those buttons to be wrapped in a Link component. 
// For Math, we'll want to route /classlist/MATH1010. 
// For English, we'll want to route to /classlist/ENG2010. 
// And for Biology, we'll want to route to /classlist/BIO2020

import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to='/classlist/MATH1010'><button className='btn'>Math 1010</button></Link>
        <Link to='/classlist/ENG2010'><button className='btn'>English 2010</button></Link>
        <Link to='/classlist/BIO2020'><button className='btn'>Biology 2020</button></Link>
   
      </div>
    );
  }
}
