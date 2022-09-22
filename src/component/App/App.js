import './style.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Discover from '../Discover';
import Favorite from '../Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const NAV_BAR_DISCOVER = 'discover';
const NAV_BAR_FAVORITE = 'favorites';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'active': window.location.pathname.includes(NAV_BAR_FAVORITE)
        ? NAV_BAR_FAVORITE
        : NAV_BAR_DISCOVER,
      'hash': Date.now()
    }
  }

  onItemClick = (itemName) => {
    this.setState({ active: itemName });
  }

  isActive = (itemName) => {
    return this.state.active === itemName;
  }

  refreshHash = () => {
    this.setState({ hash: Date.now() });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='NavBar' data-testid='nav-bar'>
            <a className='NavBar-link'>Favorite Dogs</a>
            <NavLink
              data-testid='nav-bar-discover'
              to="/"
              className={`NavBar-link ${this.isActive(NAV_BAR_DISCOVER) ? 'NavBar-link--active' : ''}`}
              onClick={() => this.onItemClick(NAV_BAR_DISCOVER)}
            >
              <FontAwesomeIcon icon="magnifying-glass" />
            </NavLink>
            <NavLink
              to="/favorites"
              data-testid='nav-bar-favorites'
              className={`NavBar-link ${this.isActive(NAV_BAR_FAVORITE) ? 'NavBar-link--active' : ''}`}
              onClick={() => this.onItemClick(NAV_BAR_FAVORITE)}
            >
              <FontAwesomeIcon icon="heart" />
            </NavLink>
            {
              this.state.active === NAV_BAR_DISCOVER &&
              (<a
                data-testid='nav-bar-refresh'
                className='NavBar-link NavBar-refresh'
                onClick={this.refreshHash}
                href='#'
              >
                <FontAwesomeIcon icon="rotate-right" />
              </a>)
            }
          </div>
          <div className='App-content'>
            <Routes>
              <Route path='/' element={<Discover count={6} key={this.state.hash} />} />
              <Route path='/favorites' element={<Favorite />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
