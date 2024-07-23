import React from 'react'
import PropTypes from 'prop-types'
import TextForm from './TextForm';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
      
          </ul>

<div className="greenMode" onClick={props.greentoggleMode}>
<button type="button" id="button"  class="btn btn-success button m-2"></button>
</div>

<div className="redMode" onClick={props.redtoggleMode}>
<button type="button" id="button1"  class="btn btn-danger button m-2"></button>
</div>

<div className="iMode" onClick={props.itoggleMode}>
<button type="button" id="button2"  class="btn btn-light button m-2"></button>
</div>



          <div className={`custom-control custom-switch`}  style={{
              color: '#7db89a'
            }}>
  <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label" htmlFor="customSwitch1">{`${props.mode==='light'? 'Enter Dark Mode':'Enter Light Mode'}`}</label>
</div>


        </div>
      </nav>
    );
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Set title here",
    aboutText:"About"
}