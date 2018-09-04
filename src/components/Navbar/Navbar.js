import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css';


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
    } else if ( window.pageYOffset < this.state.offsetTop && index >= 0) {
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

  render() {
    let navClasses = [...this.state.navClasses];
    if (!this.state.collapse) {
      navClasses.push('navcollapse')
    }
    return (
      <nav className={navClasses.join(' ')}>
        <ul>
          {this.props.links.map((link, i) => {
            return (
              <li key={i}>
                <a onClick={() => this.props.goToSection(link)}>{link}</a>
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