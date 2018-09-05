import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';
import {scroller} from "react-scroll";
import {links} from "globals/constants";


export default class Navbar extends Component {
  state = {
    collapse: true,
    navClasses: ['Navbar'],
    offsetTop: 0
  };

  updateCollapse = () => {
    if (window.innerWidth > 600 && !this.state.collapse) {
      this.setState({collapse: true})
    }
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
    window.addEventListener("resize", this.updateCollapse);
    window.addEventListener("scroll", this.handleScroll);
    this.setState({offsetTop: ReactDOM.findDOMNode(this).offsetTop});
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateCollapse);
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
    let height = '52px';
    if (!this.state.collapse) {
      height = `${this.props.links.length * 52}px`;
    }

    return (
      <nav className={navClasses.join(' ')} style={{height: height}}>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a onClick={() => {
                  this.setState({collapse: true});
                  this.handleGoToSection(link);
                }}>{link}</a>
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