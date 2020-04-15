import React from 'react';
import './styles/menu.css';
import logo from './package/assets/icons/logo.png';

class Menu extends React.Component {
  isActive(a) {
    if (this.props.active === a) {
      return 'nav-item active';
    }
    return 'nav-item';
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-warning">
        <a className="navbar-brand" href="/">
          <img src={logo} width="30" height="30" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">&nbsp;</span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={this.isActive('home')}>
              <a className="nav-link" href="/">{'Liste CV'}</a>
            </li>
            <li className={this.isActive('import')}>
              <a className="nav-link" href="/import">{'Importer mon CV'}</a>
            </li>
            <li className={this.isActive('create')}>
              <a className="nav-link" href="/create">{'Creer mon CV'}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
