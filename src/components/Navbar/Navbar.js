import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


export default class Navbar extends Component {
  state = {
    collapse: true
  };

  updateCollapse = () => {
    if (window.innerWidth > 600 && !this.state.collapse) {
      this.setState({collapse: true})
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateCollapse);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateCollapse);
  };

  render() {
    const links = ['home', 'about'];
    let navClasses = ['Navbar'];
    if (!this.state.collapse) {
      navClasses.push('navcollapse')
    }
    return (
      <nav className={navClasses.join(' ')}>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <Link to={link}>{link}</Link>
              </li>
            )
          })}
          <li id={'toggle'}>
            <a className={'icon'} onClick={() => this.setState({collapse: !this.state.collapse})}>
              <i className={"fa fa-bars"}/>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}