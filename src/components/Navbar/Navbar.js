import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import {scroller} from "react-scroll";
import {links} from "globals/constants";
import profile from 'assets/profile_clean.png';


export default class Navbar extends Component {
  state = {
    navClasses: ['Navbar'],
    offsetTop: 0
  };

  handleScroll = () => {
    const index = this.state.navClasses.indexOf("sticky");
    if (window.pageYOffset >= this.state.offsetTop && index === -1) {
      this.setState({navClasses: [...this.state.navClasses, "sticky"]});
    } else if (window.pageYOffset < this.state.offsetTop && index >= 0) {
      const classes = [...this.state.navClasses];
      classes.splice(index, 1);
      this.setState({navClasses: classes});
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({offsetTop: ReactDOM.findDOMNode(this).offsetTop});
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };


  handleGoToSection = (section_name) => {
    scroller.scrollTo(section_name, {
      duration: () => {return 500;},
      delay: 100,
      smooth: true,
      offset: -100
    })
  };

  render() {
    let navClasses = [...this.state.navClasses];

    return (
      <nav className={navClasses.join(' ')}>
        <ul>
          <li className={'home-brand'} onClick={() => this.handleGoToSection('home')}>
            <img src={profile} alt=""/>
          </li>
          {links.map((link, i) => {
            return (
              <li className={'link'} key={i} onClick={() => this.handleGoToSection(link)}>
                {link}
              </li>
            )
          })}
        </ul>
        <a href="https://github.com/nelsondude/portfolio" target="_blank" className="source-button">source code</a>
      </nav>
    )
  }
}