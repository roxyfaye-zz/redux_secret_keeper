import React, {Component} from 'react';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="base">
        <nav className="navbar">
        </nav>

        {this.props.children}

        <footer>
        </footer>
      </div>
    );
  }
}
